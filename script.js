const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', function () {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    mobileMenu.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});

document.querySelectorAll('details').forEach(function (detail) {
  detail.addEventListener('toggle', function () {
    if (!detail.open) return;
    document.querySelectorAll('details').forEach(function (other) {
      if (other !== detail) other.removeAttribute('open');
    });
  });
});