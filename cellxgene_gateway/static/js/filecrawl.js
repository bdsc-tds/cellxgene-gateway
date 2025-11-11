// Script to handle dataset filtering and download

// Handle filter form submission
$('#filter-form').on('submit', function(e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const params = new URLSearchParams()

  // Add modality selections
  const modalities = formData.getAll('modality')
  modalities.forEach((mod) => params.append('modality', mod))

  // Add PI selection
  const pi = formData.get('pi')
  if (pi) params.append('pi', pi)

  // Add lead selection
  const lead = formData.get('lead')
  if (lead) params.append('lead', lead)

  // Add search term
  const search = formData.get('search')
  if (search) params.append('search', search)

  // Reload page with filters
  window.location.href =
    window.location.pathname + '?' + params.toString()
})

// Restore form state from URL parameters
$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search)

  // Restore modality checkboxes
  const modalities = urlParams.getAll('modality')
  modalities.forEach((mod) => {
    $('input[name="modality"][value="' + mod + '"]').prop('checked', true)
  })

  // Restore PI selection
  const pi = urlParams.get('pi')
  if (pi) {
    $('select[name="pi"]').val(pi)
  }

  // Restore lead selection
  const lead = urlParams.get('lead')
  if (lead) {
    $('select[name="lead"]').val(lead)
  }

  // Restore search term
  const search = urlParams.get('search')
  if (search) {
    $('#search-input').val(search)
  }

  // Handle reset filters button
  $('#reset-filters-btn').click(function(e) {
    e.preventDefault()

    // Clear all form fields
    $('#search-input').val('')
    $('input[name="modality"]').prop('checked', false)
    $('select[name="pi"]').val('')
    $('select[name="lead"]').val('')

    // Reload page without any parameters
    window.location.href = window.location.pathname
  })

  // Handle new annotation creation
  $('.create-new-annotation').click(function(e) {
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
          'Error: name must match ^[0-9a-zA-Z_]+$\nthat is, only numbers, letters and underscore are allowed'
        )
      }
    }
  })

  // Handle download button clicks
  $('.download-btn').click(function(e) {
    e.preventDefault()
    const datasetName = $(this).data('dataset-name')
    const datasetFile = $(this).data('dataset-file')

    // Set dataset name in all tabs
    $('#dataset-name').text(datasetName)
    $('#dataset-name-python').text(datasetName)
    $('#dataset-name-r').text(datasetName)

    // Generate download URL (you can customize this based on your backend)
    const downloadUrl =
      window.location.origin + '/download/' + datasetFile
    $('#download-url').val(downloadUrl)

    // Update code examples with actual dataset ID
    const datasetId = datasetFile.replace('.h5ad', '')
    $('#python-code').text(`import cellxgene
    # Download dataset
    dataset = cellxgene.download("${datasetId}")
    # Load the dataset
    adata = dataset.load()`)

    $('#r-code').text(`library(cellxgene)
    # Download dataset
    dataset <- cellxgene_download("${datasetId}")
    # Load the dataset
    adata <- dataset$load()`)

    // Show the modal
    $('#downloadModal').modal('show')
  })

  // Handle copy URL button
  $('#copy-url-btn').click(function() {
    const urlInput = document.getElementById('download-url')
    urlInput.select()
    urlInput.setSelectionRange(0, 99999) // For mobile devices
    document.execCommand('copy')

    // Show feedback
    const btn = $(this)
    const originalText = btn.text()
    btn
      .text('Copied!')
      .addClass('btn-success')
      .removeClass('btn-outline-secondary')
    setTimeout(function() {
      btn
        .text(originalText)
        .removeClass('btn-success')
        .addClass('btn-outline-secondary')
    }, 2000)
  })

  // Handle download button in modal
  $('#download-btn').click(function() {
    const downloadUrl = $('#download-url').val()
    if (downloadUrl) {
      window.open(downloadUrl, '_blank')
      $('#downloadModal').modal('hide')
    }
  })
})    // Handle filter form submission
$('#filter-form').on('submit', function(e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const params = new URLSearchParams()

  // Add modality selections
  const modalities = formData.getAll('modality')
  modalities.forEach((mod) => params.append('modality', mod))

  // Add PI selection
  const pi = formData.get('pi')
  if (pi) params.append('pi', pi)

  // Add lead selection
  const lead = formData.get('lead')
  if (lead) params.append('lead', lead)

  // Add search term
  const search = formData.get('search')
  if (search) params.append('search', search)

  // Reload page with filters
  window.location.href =
    window.location.pathname + '?' + params.toString()
})

// Restore form state from URL parameters
$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search)

  // Restore modality checkboxes
  const modalities = urlParams.getAll('modality')
  modalities.forEach((mod) => {
    $('input[name="modality"][value="' + mod + '"]').prop('checked', true)
  })

  // Restore PI selection
  const pi = urlParams.get('pi')
  if (pi) {
    $('select[name="pi"]').val(pi)
  }

  // Restore lead selection
  const lead = urlParams.get('lead')
  if (lead) {
    $('select[name="lead"]').val(lead)
  }

  // Restore search term
  const search = urlParams.get('search')
  if (search) {
    $('#search-input').val(search)
  }

  // Handle reset filters button
  $('#reset-filters-btn').click(function(e) {
    e.preventDefault()

    // Clear all form fields
    $('#search-input').val('')
    $('input[name="modality"]').prop('checked', false)
    $('select[name="pi"]').val('')
    $('select[name="lead"]').val('')

    // Reload page without any parameters
    window.location.href = window.location.pathname
  })

  // Handle new annotation creation
  $('.create-new-annotation').click(function(e) {
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
          'Error: name must match ^[0-9a-zA-Z_]+$\nthat is, only numbers, letters and underscore are allowed'
        )
      }
    }
  })

  // Handle download button clicks
  $('.download-btn').click(function(e) {
    e.preventDefault()
    const datasetName = $(this).data('dataset-name')
    const datasetFile = $(this).data('dataset-file')

    // Set dataset name in all tabs
    $('#dataset-name').text(datasetName)
    $('#dataset-name-python').text(datasetName)
    $('#dataset-name-r').text(datasetName)

    // Generate download URL (you can customize this based on your backend)
    const downloadUrl =
      window.location.origin + '/download/' + datasetFile
    $('#download-url').val(downloadUrl)

    // Update code examples with actual dataset ID
    const datasetId = datasetFile.replace('.h5ad', '')
    $('#python-code').text(`import cellxgene
# Download dataset
dataset = cellxgene.download("${datasetId}")
# Load the dataset
adata = dataset.load()`)

    $('#r-code').text(`library(cellxgene)
# Download dataset
dataset <- cellxgene_download("${datasetId}")
# Load the dataset
adata <- dataset$load()`)

    // Show the modal
    $('#downloadModal').modal('show')
  })

  // Handle copy URL button
  $('#copy-url-btn').click(function() {
    const urlInput = document.getElementById('download-url')
    urlInput.select()
    urlInput.setSelectionRange(0, 99999) // For mobile devices
    document.execCommand('copy')

    // Show feedback
    const btn = $(this)
    const originalText = btn.text()
    btn
      .text('Copied!')
      .addClass('btn-success')
      .removeClass('btn-outline-secondary')
    setTimeout(function() {
      btn
        .text(originalText)
        .removeClass('btn-success')
        .addClass('btn-outline-secondary')
    }, 2000)
  })

  // Handle download button in modal
  $('#download-btn').click(function() {
    const downloadUrl = $('#download-url').val()
    if (downloadUrl) {
      window.open(downloadUrl, '_blank')
      $('#downloadModal').modal('hide')
    }
  })
})
