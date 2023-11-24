document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const bodyElement = document.body; 
  
    darkModeToggle.addEventListener('click', function() {
      bodyElement.classList.toggle('dark-mode');
      darkModeToggle.textContent = bodyElement.classList.contains('dark-mode') ? '☀' : '🌙';
    });
});