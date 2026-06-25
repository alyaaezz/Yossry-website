// Page navigation
function showPage(name, linkEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + name);
  if (target) { target.classList.add('active'); window.scrollTo(0, 0); }

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  if (linkEl) {
    linkEl.classList.add('active');
  } else {
    document.querySelectorAll('.nav-link').forEach(l => {
      if (l.getAttribute('onclick') && l.getAttribute('onclick').includes("'" + name + "'")) {
        l.classList.add('active');
      }
    });
  }
}

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.menu-btn');
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});
