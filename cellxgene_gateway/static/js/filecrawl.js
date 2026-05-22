// Script to handle dataset filtering, with dual-range slider, and Disease/
// Tissue dropdown logic

// Format byte count as human-readable string (KB / MB / GB)
function formatBytes(bytes) {
  if (bytes <= 0) return ''
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
}

// Disease/Tissue multi-select state

const selectedDiseases = new Set()
const selectedTissues = new Set()

// Renders selected value tags below a dropdown, each with × (remove) button
function renderTags(container, selectedSet, field) {
  container.innerHTML = ''
  selectedSet.forEach((val) => {
    const tag = document.createElement('span')
    tag.className = 'selected-tag'
    tag.textContent = val
    const rm = document.createElement('button')
    rm.type = 'button'
    rm.className = 'tag-remove'
    rm.textContent = '×'
    rm.addEventListener('click', () => {
      selectedSet.delete(val)
      renderTags(container, selectedSet, field)
      // Update highlight in dropdown list
      const li = document.querySelector(
        `#${field}-list [data-value="${CSS.escape(val)}"]`
      )
      if (li) li.classList.remove('selected')
    })
    tag.appendChild(rm)
    container.appendChild(tag)
  })
}

// Initialise searchable multi-select dropdown: restore state from URL params,
// handle open/close toggling, live search filtering, and item selection
function initDropdown(field, selectedSet) {
  const btn = document.getElementById(`${field}-btn`)
  const panel = document.getElementById(`${field}-panel`)
  const searchInput = document.getElementById(`${field}-search`)
  const list = document.getElementById(`${field}-list`)
  const tagsContainer = document.getElementById(`${field}-tags`)

  if (!btn) return

  // Restore selections from URL params and reflect in list UI
  const urlParams = new URLSearchParams(window.location.search)
  urlParams.getAll(field).forEach((val) => {
    selectedSet.add(val)
    const li = list.querySelector(`[data-value="${CSS.escape(val)}"]`)
    if (li) li.classList.add('selected')
  })
  renderTags(tagsContainer, selectedSet, field)

  // Prevent clicks inside panel from bubbling to document close-handler
  panel.addEventListener('click', (e) => e.stopPropagation())

  // Toggle panel open/close, closing any other open panels first
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const isOpen = panel.classList.contains('open')
    // Close all panels
    document.querySelectorAll('.dropdown-filter-panel.open').forEach((p) =>
      p.classList.remove('open')
    )
    if (!isOpen) {
      panel.classList.add('open')
      searchInput.focus()
    }
  })

  // Live-filter list items as user types
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase()
    list.querySelectorAll('.dropdown-option').forEach((li) => {
      li.style.display = li.dataset.value.toLowerCase().includes(term) ? '' : 'none'
    })
  })

  // Toggle item selection and re-render tags on click
  list.addEventListener('click', (e) => {
    const li = e.target.closest('.dropdown-option')
    if (!li) return
    const val = li.dataset.value
    if (selectedSet.has(val)) {
      selectedSet.delete(val)
      li.classList.remove('selected')
    } else {
      selectedSet.add(val)
      li.classList.add('selected')
    }
    renderTags(tagsContainer, selectedSet, field)
  })
}

// Close any open dropdown when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-filter-panel.open').forEach((p) =>
    p.classList.remove('open')
  )
})


// Dual range sliders

// Initialise dual-handle range slider: restore values from URL params, prevent
// handles from crossing, update filled track and display label on every change
function initDualRange(minId, maxId, displayId, trackId) {
  const minEl = document.getElementById(minId)
  const maxEl = document.getElementById(maxId)
  const display = document.getElementById(displayId)
  const track = document.getElementById(trackId)

  if (!minEl || !maxEl) return

  const urlParams = new URLSearchParams(window.location.search)

  // Restore from URL if present
  if (urlParams.has(minEl.name)) minEl.value = urlParams.get(minEl.name)
  if (urlParams.has(maxEl.name)) maxEl.value = urlParams.get(maxEl.name)

  function update() {
    let lo = parseInt(minEl.value)
    let hi = parseInt(maxEl.value)
    // Clamp so handles don't cross
    if (lo > hi) {
      if (document.activeElement === minEl) {
        minEl.value = hi
        lo = hi
      } else {
        maxEl.value = lo
        hi = lo
      }
    }
    const min = parseInt(minEl.min)
    const max = parseInt(minEl.max)
    const pctLo = ((lo - min) / (max - min)) * 100
    const pctHi = ((hi - min) / (max - min)) * 100
    track.style.left = pctLo + '%'
    track.style.right = (100 - pctHi) + '%'
    display.textContent = lo + ' – ' + hi
  }

  minEl.addEventListener('input', update)
  maxEl.addEventListener('input', update)
  update()
}


// Form serialisation

// Collect all active filter values (checkboxes, dropdowns, search, sliders)
// into URL params and navigate to filtered results page
function submitFilters(e) {
  e.preventDefault()

  const formData = new FormData(document.getElementById('filter-form'))
  const params = new URLSearchParams()

  // Checkboxes
  ;['assay', 'sex'].forEach((field) => {
    formData.getAll(field).forEach((v) => params.append(field, v))
  })

  // Disease / Tissue from JS Sets
  selectedDiseases.forEach((v) => params.append('disease', v))
  selectedTissues.forEach((v) => params.append('tissue', v))

  // Search
  const search = formData.get('search')
  if (search) params.append('search', search)

  // Range sliders; only append slider values that have been moved away from
  // their default bound
  ;['year_min', 'year_max', 'cell_count_min', 'cell_count_max',
    'gene_count_min', 'gene_count_max'].forEach((name) => {
    const el = document.querySelector(`[name="${name}"]`)
    if (!el) return
    const isMin = name.endsWith('_min')
    const bound = isMin ? el.min : el.max
    if (el.value !== bound) params.append(name, el.value)
  })

  window.location.href = window.location.pathname + '?' + params.toString()
}


// Table sort

// Add click-to-sort to all th[data-sort] columns: cycles asc → desc → original
// order, sort numerically or lexicographically, and pushe NA/empty values to
// the bottom
function initTableSort() {
  const tbody = document.querySelector('.table tbody')
  const ths = document.querySelectorAll('th[data-sort]')
  if (!tbody || !ths.length) return

  // Record original row order so it can be restored on third click
  Array.from(tbody.querySelectorAll('tr')).forEach((tr, i) => {
    tr.dataset.origIndex = i
  })

  let currentCol = null
  let currentDir = null

  ths.forEach((th) => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort
      const type = th.dataset.sortType || 'text'
      const colIdx = th.cellIndex

      // Cycle direction: asc → desc → null (restore)
      if (currentCol === col) {
        currentDir = currentDir === 'asc' ? 'desc' : currentDir === 'desc' ? null : 'asc'
      } else {
        currentCol = col
        currentDir = 'asc'
      }

      ths.forEach((t) => { t.dataset.sortDir = '' })
      if (currentDir) th.dataset.sortDir = currentDir

      const rows = Array.from(tbody.querySelectorAll('tr'))

      if (!currentDir) {
        rows.sort((a, b) => a.dataset.origIndex - b.dataset.origIndex)
      } else {
        rows.sort((a, b) => {
          const aVal = a.cells[colIdx]?.textContent.trim() ?? ''
          const bVal = b.cells[colIdx]?.textContent.trim() ?? ''
          const aEmpty = !aVal || aVal === 'NA'
          const bEmpty = !bVal || bVal === 'NA'
          if (aEmpty && bEmpty) return 0
          if (aEmpty) return 1
          if (bEmpty) return -1
          if (type === 'number') {
            const diff = parseFloat(aVal.replace(/,/g, '')) - parseFloat(bVal.replace(/,/g, ''))
            return currentDir === 'asc' ? diff : -diff
          }
          const cmp = aVal.localeCompare(bVal)
          return currentDir === 'asc' ? cmp : -cmp
        })
      }

      rows.forEach((tr) => tbody.appendChild(tr))
    })
  })
}


// Inititialise all interactive elements on page load

$(document).ready(function () {
  $('#filter-form').on('submit', submitFilters)

  // Restore assay/sex checkbox state from URL params
  const urlParams = new URLSearchParams(window.location.search)
  ;['assay', 'sex'].forEach((field) => {
    urlParams.getAll(field).forEach((val) => {
      $(`input[name="${field}"][value="${val}"]`).prop('checked', true)
    })
  })

  // Disease / Tissue dropdowns
  initDropdown('disease', selectedDiseases)
  initDropdown('tissue', selectedTissues)

  // Dual range sliders
  initDualRange('year-min', 'year-max', 'year-display', 'year-track')
  initDualRange('cc-min', 'cc-max', 'cc-display', 'cc-track')
  initDualRange('gc-min', 'gc-max', 'gc-display', 'gc-track')

  // Table sort
  initTableSort()

  // Reset button: reset all filters by navigating to bare pathname
  $('#reset-filters-btn').click(function (e) {
    e.preventDefault()
    window.location.href = window.location.pathname
  })

  // Annotation creation
  // Prompt for annotation collection name, validate it, then navigate to editor
  $('.create-new-annotation').click(function (e) {
    e.preventDefault()
    const datasetFile = $(this).data('dataset-file')
    const annotationName = prompt(
      'Name your annotations collection\nnote: the suffix ".csv" will be appended'
    )
    if (annotationName !== null && annotationName.length > 0) {
      if (/^[0-9a-zA-Z_]+$/.test(annotationName)) {
        window.location.href =
          '/view/csv/' + datasetFile + '/' + annotationName + '.csv'
      } else {
        alert(
          'Error: name must match ^[0-9a-zA-Z_]+$\n' +
          'only numbers, letters and underscore are allowed'
        )
      }
    }
  })

  // Populate and show download modal
  $('.download-btn').click(function (e) {
    e.preventDefault()
    const datasetName = $(this).data('dataset-name')
    const datasetFile = $(this).data('dataset-file')
    const sizeBytes = parseInt($(this).data('dataset-size') || '0', 10)
    const url = window.location.origin + '/download/' + datasetFile

    $('#dataset-name').text(datasetName)
    $('#download-url').val(url)
    $('#dataset-size').text(sizeBytes > 0 ? formatBytes(sizeBytes) : '')

    $('#code-curl').text(`curl -L -o "${datasetFile}" "${url}"`)
    $('#code-wget').text(`wget -O "${datasetFile}" "${url}"`)
    $('#code-python').text(
      `import urllib.request\nimport anndata\n\n` +
      `urllib.request.urlretrieve("${url}", "${datasetFile}")\n` +
      `adata = anndata.read_h5ad("${datasetFile}")`
    )
    $('#code-r').text(
      `download.file("${url}", destfile = "${datasetFile}", mode = "wb")\n\n` +
      `library(zellkonverter)\nsce <- readH5AD("${datasetFile}")`
    )

    // Reset to Unix tab
    $('#dlTabs .nav-link').removeClass('active')
    $('#dlTabContent .tab-pane').removeClass('show active')
    $('#tab-unix').addClass('active')
    $('#pane-unix').addClass('show active')

    $('#downloadModal').modal('show')
  })

  // Copy download URL to clipboard
  $('#copy-url-btn').click(function () {
    const urlInput = document.getElementById('download-url')
    urlInput.select()
    urlInput.setSelectionRange(0, 99999)
    document.execCommand('copy')
    const btn = $(this)
    btn.text('Copied!').addClass('btn-success').removeClass('btn-outline-secondary')
    setTimeout(() => {
      btn.text('Copy').removeClass('btn-success').addClass('btn-outline-secondary')
    }, 2000)
  })

  // Open download URL in new tab and close modal
  $('#download-btn').click(function () {
    const url = $('#download-url').val()
    if (url) {
      window.open(url, '_blank')
      $('#downloadModal').modal('hide')
    }
  })

  // Copy-code button inside each code block
  $('#downloadModal').on('click', '.dl-copy-btn', function () {
    const btn = this
    const code = $(btn).siblings('pre').find('code').text()
    const done = () => {
      $(btn).addClass('dl-copy-btn--ok')
      setTimeout(() => $(btn).removeClass('dl-copy-btn--ok'), 1500)
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(done)
    } else {
      const ta = document.createElement('textarea')
      ta.value = code
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      done()
    }
  })
})
