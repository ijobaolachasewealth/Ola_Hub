// ======== PRELOADER & INITIAL LOAD ========
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('hero').style.display = 'flex';
    document.getElementById('navbar').style.display = 'flex';
  }, 2000);
});

// ======== MENU TOGGLE ========
document.getElementById('menu-btn').addEventListener('click', () => {
  const menu = document.getElementById('menu-items');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// ======== SECTION NAVIGATION ========
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
  
  // Show selected section
  document.getElementById(sectionId).style.display = 'flex';
  
  // Close menu
  document.getElementById('menu-items').style.display = 'none';
}

// Link menu items to sections
document.querySelectorAll('#menu-items a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = e.target.getAttribute('href').substring(1);
    showSection(sectionId);
  });
});
