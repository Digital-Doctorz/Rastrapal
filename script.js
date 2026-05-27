document.addEventListener('DOMContentLoaded', () => {

  // ============================
  // MOBILE HAMBURGER MENU
  // ============================
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.header');

  if (hamburger && nav) {
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !nav.classList.contains('open');
      nav.classList.toggle('open', isOpen);
      hamburger.classList.toggle('active', isOpen);
      overlay.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => toggleMenu());

    overlay.addEventListener('click', () => toggleMenu(false));

    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) toggleMenu(false);
    });
  }

  // Sticky header on scroll
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ============================
  // SERVICES CAROUSEL
  // ============================
  const servicesCarousel = document.querySelector('.services-carousel');
  const serviceCards = document.querySelectorAll('.service-card');
  const prevBtn = document.querySelector('.services-header .prev-btn');
  const nextBtn = document.querySelector('.services-header .next-btn');

  if (servicesCarousel && serviceCards.length > 0) {
    let activeIndex = 1;

    const updateActiveCard = (index) => {
      serviceCards.forEach((card, i) => {
        const isActive = i === index;
        card.classList.toggle('active', isActive);

        const badge = card.querySelector('.badge');
        const btn = card.querySelector('.circle-btn');

        if (isActive) {
          if (badge) { badge.classList.remove('badge-light'); badge.classList.add('badge-dark'); }
          if (btn) btn.classList.add('dark');
          if (!card.querySelector('.drag-indicator')) {
            const dragInd = document.createElement('div');
            dragInd.className = 'drag-indicator';
            dragInd.innerHTML = '<i class="fa-solid fa-chevron-left"></i> DRAG <i class="fa-solid fa-chevron-right"></i>';
            card.appendChild(dragInd);
          }
        } else {
          if (badge) { badge.classList.remove('badge-dark'); badge.classList.add('badge-light'); }
          if (btn) btn.classList.remove('dark');
          card.querySelector('.drag-indicator')?.remove();
        }
      });
    };

    updateActiveCard(activeIndex);

    serviceCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        activeIndex = index;
        updateActiveCard(activeIndex);
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (activeIndex > 0) {
          activeIndex--;
          updateActiveCard(activeIndex);
          serviceCards[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (activeIndex < serviceCards.length - 1) {
          activeIndex++;
          updateActiveCard(activeIndex);
          serviceCards[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    }

    // Touch swipe for carousel
    let touchStartX = 0;
    let touchEndX = 0;

    servicesCarousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    servicesCarousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      const threshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > threshold) {
        if (diff > 0 && activeIndex < serviceCards.length - 1) {
          activeIndex++;
        } else if (diff < 0 && activeIndex > 0) {
          activeIndex--;
        } else {
          return;
        }
        updateActiveCard(activeIndex);
        serviceCards[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    };
  }

  // ============================
  // WORKS HOVER IMAGE
  // ============================
  const workItems = document.querySelectorAll('.work-item');
  const hoverImageContainer = document.getElementById('hover-image-container');
  const hoverImage = document.getElementById('hover-image');

  if (workItems.length > 0 && hoverImageContainer && hoverImage && window.innerWidth > 768) {
    workItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const imgSrc = item.getAttribute('data-image');
        if (imgSrc) {
          hoverImage.src = imgSrc;
          hoverImageContainer.classList.add('visible');
        }
      });

      item.addEventListener('mousemove', (e) => {
        if (hoverImageContainer.classList.contains('visible')) {
          const x = e.clientX + 20;
          const y = e.clientY + 20;
          const maxX = window.innerWidth - hoverImageContainer.offsetWidth - 20;
          const maxY = window.innerHeight - hoverImageContainer.offsetHeight - 20;
          hoverImageContainer.style.left = Math.min(x, maxX) + 'px';
          hoverImageContainer.style.top = Math.min(y, maxY) + 'px';
        }
      });

      item.addEventListener('mouseleave', () => {
        hoverImageContainer.classList.remove('visible');
      });
    });
  }

  // ============================
  // TESTIMONIAL SLIDER
  // ============================
  const testimonials = [
    {
      name: 'Rick David',
      role: 'Corporate Client',
      rating: 5,
      text: 'From The Very First Consultation, I Experienced A High Level Of Professionalism And Clarity. Every Step Was Explained Clearly, And The Legal Strategy Was Handled With Precision And Care. I Felt Confident Knowing My Case Was In Experienced Hands.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Small Business Owner',
      rating: 5,
      text: 'Robert Helped Me Navigate A Complex Contract Dispute With Exceptional Skill. His Attention To Detail And Strategic Approach Made All The Difference. I Would Highly Recommend His Services To Anyone Facing Legal Challenges.',
    },
    {
      name: 'James Carter',
      role: 'Family Client',
      rating: 5,
      text: 'Going Through A Divorce Was Incredibly Difficult, But Robert Made The Legal Process Manageable. His Compassionate Yet Professional Approach Gave Me Confidence During A Hard Time. Truly Grateful For His Guidance.',
    },
  ];

  const testimonialCard = document.querySelector('.testimonial-card');
  const clientMainImg = document.querySelector('.client-main-img');
  const imageControls = document.querySelector('.image-controls');
  const testPrevBtn = document.querySelector('.testimonials-header .prev-btn');
  const testNextBtn = document.querySelector('.testimonials-header .next-btn');
  let currentTestimonial = 0;

  const updateTestimonial = (index) => {
    if (!testimonialCard) return;
    const t = testimonials[index];
    const avatar = testimonialCard.querySelector('.client-avatar');
    const nameEl = testimonialCard.querySelector('.client-info h4');
    const starsEl = testimonialCard.querySelector('.client-info .stars');
    const textEl = testimonialCard.querySelector('.testimonial-text');
    const roleEl = testimonialCard.querySelector('.client-role');

    if (nameEl) nameEl.textContent = t.name;
    if (textEl) textEl.textContent = t.text;
    if (roleEl) roleEl.textContent = `— ${t.role}`;
    if (starsEl) {
      starsEl.innerHTML = '';
      for (let i = 0; i < t.rating; i++) {
        starsEl.innerHTML += '<i class="fa-solid fa-star"></i>';
      }
    }

    if (imageControls) {
      imageControls.innerHTML = `<strong>${index + 1}</strong> / ${testimonials.length}`;
    }

    // Animate
    if (testimonialCard) {
      testimonialCard.style.opacity = '0';
      testimonialCard.style.transform = 'translateY(10px)';
      requestAnimationFrame(() => {
        testimonialCard.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        testimonialCard.style.opacity = '1';
        testimonialCard.style.transform = 'translateY(0)';
      });
    }
  };

  if (testPrevBtn) {
    testPrevBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonial);
    });
  }

  if (testNextBtn) {
    testNextBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      updateTestimonial(currentTestimonial);
    });
  }

  // Auto-rotate testimonials every 6 seconds
  let testimonialInterval;
  const startTestimonialInterval = () => {
    testimonialInterval = setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      updateTestimonial(currentTestimonial);
    }, 6000);
  };

  if (testPrevBtn && testNextBtn) {
    startTestimonialInterval();
    // Pause on interaction
    [testPrevBtn, testNextBtn].forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(testimonialInterval);
        startTestimonialInterval();
      });
    });
  }

  // ============================
  // SCROLL ANIMATIONS
  // ============================
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  if (animateElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    animateElements.forEach(el => observer.observe(el));
  }

  // ============================
  // FORM VALIDATION
  // ============================
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');

    const validateField = (field) => {
      if (field.type === 'checkbox') {
        if (!field.checked) {
          field.closest('.checkbox-group')?.classList.add('error');
          return false;
        }
        field.closest('.checkbox-group')?.classList.remove('error');
        return true;
      }

      if (field.tagName === 'SELECT') {
        if (!field.value || field.value === '') {
          field.classList.add('error');
          field.classList.remove('success');
          return false;
        }
        field.classList.remove('error');
        field.classList.add('success');
        return true;
      }

      if (field.value.trim() === '') {
        field.classList.add('error');
        field.classList.remove('success');
        return false;
      }

      if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          field.classList.add('error');
          field.classList.remove('success');
          return false;
        }
      }

      field.classList.remove('error');
      field.classList.add('success');
      return true;
    };

    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) validateField(input);
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      inputs.forEach(input => {
        if (!validateField(input)) isValid = false;
      });

      if (isValid) {
        const submitBtn = contactForm.querySelector('.btn-primary');
        if (submitBtn) {
          const originalText = submitBtn.innerHTML;
          submitBtn.innerHTML = 'Sent! <i class="fa-solid fa-check"></i>';
          submitBtn.style.backgroundColor = '#2ecc71';
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.backgroundColor = '';
            contactForm.reset();
            inputs.forEach(i => {
              i.classList.remove('success', 'error');
            });
          }, 2500);
        }
      } else {
        const firstError = contactForm.querySelector('.error');
        firstError?.focus();
      }
    });
  }

});
