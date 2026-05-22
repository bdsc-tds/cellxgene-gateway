// Script to handle filtering menu toggle

document.addEventListener('DOMContentLoaded', function () {
  // Get references to sidebar, toggle button, and main content area
  const sidebarCol = document.getElementById('sidebarCol')
  const btn = document.getElementById('formToggle')
  const mainContent = document.getElementById('mainContent')

  btn.addEventListener('click', function () {
    // Check current visibility state before toggling
    const isHidden = sidebarCol.classList.contains('d-none')

    // Show/hide the sidebar
    sidebarCol.classList.toggle('d-none')
    // Expand main content when sidebar is hidden
    mainContent.classList.toggle('full-width', !isHidden)
    // Update arrow direction to reflect new state
    btn.innerHTML = isHidden ? '◀' : '▶'
  })
})
