(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.fade').forEach((el) => observer.observe(el));

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 16) header.style.borderBottomColor = '#ced7e5';
    else header.style.borderBottomColor = '#dfe5ee';
  }, { passive: true });
})();
