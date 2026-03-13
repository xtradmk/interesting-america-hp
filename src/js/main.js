// INTERESTING AMERICA - Main JavaScript
// Minimal JS - site works without JavaScript

(function() {
  'use strict';

  // Add smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add class to header on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('site-header--scrolled');
      } else {
        header.classList.remove('site-header--scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }

  // Form validation enhancement
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add('form__input--error');
        } else {
          field.classList.remove('form__input--error');
        }
      });
      
      if (!valid) {
        e.preventDefault();
      }
    });
  });

  console.log('INTERESTING AMERICA - Site loaded');
})();
