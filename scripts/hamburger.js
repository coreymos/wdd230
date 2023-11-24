document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menuItems = document.getElementById('menu-items');
  
    hamburgerBtn.addEventListener('click', function() {
      menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
      hamburgerBtn.textContent = hamburgerBtn.textContent === '☰' ? 'X' : '☰';
    });
  });
  