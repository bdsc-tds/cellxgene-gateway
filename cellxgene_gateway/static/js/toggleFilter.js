// Script to handle filtering menu toggle

// Wait for DOM to fully load before executing
document.addEventListener('DOMContentLoaded', function() {
  // Get references to sidebar, toggle button, and main content area
  const sidebar = document.querySelector('.sidebar');
  const btn = document.getElementById('formToggle');
  const mainContent = document.getElementById('mainContent');

  // Add click event listener to toggle button
  btn.addEventListener('click', function() {
    // Check if sidebar is currently hidden
    const isHidden = sidebar.classList.contains('hidden');

    // Toggle 'hidden' class on sidebar
    sidebar.classList.toggle('hidden');

    // If sidebar was hidden, show it
    if (isHidden) {
      // Resize main content to 9/12 width (75%)
      mainContent.classList.remove('col-md-12', 'full-width');
      mainContent.classList.add('col-md-9');
      // Change button arrow to point left (hide)
      btn.innerHTML = '◀';
    } else {
      // If sidebar was visible, hide it
      // Expand main content to full 12/12 width (100%)
      mainContent.classList.remove('col-md-9');
      mainContent.classList.add('col-md-12', 'full-width');
      // Change button arrow to point right (show)
      btn.innerHTML = '▶';
    }
  });
});
