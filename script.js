/**
 * ==========================================================================
 * OrionPulse Technologies OPC Private Limited - Core Application Script
 * Features: Dark Mode, ROI Estimator, Service Filters, Counter Animations,
 * FAQ Search, Testimonial Slider, Lead Capture, AI Chatbot Demo.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. Preloader Screen Handler
     ------------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.querySelector('.preloader-bar-fill');
  
  if (preloaderBar) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 15;
      preloaderBar.style.width = `${Math.min(progress, 100)}%`;
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (preloader) preloader.classList.add('loaded');
        }, 300);
      }
    }, 50);
  }

  /* ------------------------------------------------------------------------
     2. Dark Mode Toggle & Theme Persistence
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  
  // Check system preference or stored theme
  const savedTheme = localStorage.getItem('orionpulse_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
    document.body.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.className = 'lucide-sun';
  } else {
    document.body.classList.remove('dark-mode');
    document.body.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.className = 'lucide-moon';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('orionpulse_theme', isDark ? 'dark' : 'light');
      if (themeIcon) {
        themeIcon.className = isDark ? 'lucide-sun' : 'lucide-moon';
      }
    });
  }

  /* ------------------------------------------------------------------------
     3. Sticky Navbar & Scroll Effects
     ------------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      if (navbar) navbar.classList.add('scrolled');
      if (scrollTopBtn) scrollTopBtn.classList.add('visible');
    } else {
      if (navbar) navbar.classList.remove('scrolled');
      if (scrollTopBtn) scrollTopBtn.classList.remove('visible');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Mobile Drawer Toggle */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  /* ------------------------------------------------------------------------
     4. Scroll Reveal Animations (IntersectionObserver)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ------------------------------------------------------------------------
     5. Animated Statistics Counters
     ------------------------------------------------------------------------ */
  const counterElements = document.querySelectorAll('.counter-number');
  let animatedCounters = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedCounters) {
        animatedCounters = true;
        counterElements.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const suffix = counter.getAttribute('data-suffix') || '';
          const prefix = counter.getAttribute('data-prefix') || '';
          const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
          
          let count = 0;
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              counter.textContent = prefix + target.toFixed(decimals) + suffix;
              clearInterval(timer);
            } else {
              counter.textContent = prefix + count.toFixed(decimals) + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('statsSection');
  if (statsSection) counterObserver.observe(statsSection);

  /* ------------------------------------------------------------------------
     6. Interactive AI Growth / ROI Estimator in Hero
     ------------------------------------------------------------------------ */
  const industrySelect = document.getElementById('calcIndustry');
  const spendInput = document.getElementById('calcSpend');
  const spendValDisplay = document.getElementById('calcSpendVal');
  const projLeadsDisplay = document.getElementById('projLeads');
  const projRevenueDisplay = document.getElementById('projRevenue');

  function calculateGrowthMetrics() {
    if (!spendInput || !projLeadsDisplay || !projRevenueDisplay) return;
    const spend = parseInt(spendInput.value, 10);
    if (spendValDisplay) spendValDisplay.textContent = `₹${spend.toLocaleString('en-IN')}`;

    const multiplierMap = {
      'startup': { leadFactor: 0.08, roiFactor: 3.8 },
      'sme': { leadFactor: 0.065, roiFactor: 4.2 },
      'restaurant': { leadFactor: 0.12, roiFactor: 3.5 },
      'tech': { leadFactor: 0.05, roiFactor: 4.6 },
      'local': { leadFactor: 0.09, roiFactor: 3.9 }
    };

    const industry = industrySelect ? industrySelect.value : 'sme';
    const factors = multiplierMap[industry] || multiplierMap['sme'];

    const estimatedLeads = Math.round((spend * factors.leadFactor) / 100);
    const estimatedRev = Math.round(spend * factors.roiFactor);

    projLeadsDisplay.textContent = `${estimatedLeads}+`;
    projRevenueDisplay.textContent = `₹${(estimatedRev / 100000).toFixed(2)} Lakhs`;
  }

  if (spendInput) spendInput.addEventListener('input', calculateGrowthMetrics);
  if (industrySelect) industrySelect.addEventListener('change', calculateGrowthMetrics);
  calculateGrowthMetrics(); // initial execution

  /* ------------------------------------------------------------------------
     7. Services Filter Bar
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     8. Testimonials Carousel Slider
     ------------------------------------------------------------------------ */
  const track = document.getElementById('testimonialTrack');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  let currentSlide = 0;

  function updateSlidePosition() {
    if (track) {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlidePosition();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlidePosition();
    });
  }

  // Auto-play carousel
  setInterval(() => {
    if (slides.length > 0) {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlidePosition();
    }
  }, 6000);

  /* ------------------------------------------------------------------------
     9. Pricing Billing Toggle
     ------------------------------------------------------------------------ */
  const billingToggle = document.getElementById('billingToggle');
  const starterPrice = document.getElementById('starterPrice');
  const growthPrice = document.getElementById('growthPrice');
  const enterprisePrice = document.getElementById('enterprisePrice');

  if (billingToggle) {
    billingToggle.addEventListener('change', () => {
      const isAnnual = billingToggle.checked;
      if (starterPrice) starterPrice.textContent = isAnnual ? '₹24,999' : '₹29,999';
      if (growthPrice) growthPrice.textContent = isAnnual ? '₹49,999' : '₹59,999';
      if (enterprisePrice) enterprisePrice.textContent = isAnnual ? '₹99,999' : '₹1,19,999';
    });
  }

  /* ------------------------------------------------------------------------
     10. FAQ Accordion & Instant Search Filter
     ------------------------------------------------------------------------ */
  const faqItems = document.querySelectorAll('.faq-item');
  const faqSearchInput = document.getElementById('faqSearchInput');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-header').textContent.toLowerCase();
        const answer = item.querySelector('.faq-content').textContent.toLowerCase();
        if (question.includes(query) || answer.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     11. Lead Capture Form Submission & Live Toast Feedback
     ------------------------------------------------------------------------ */
  const proposalForm = document.getElementById('proposalForm');
  const formSuccessToast = document.getElementById('formSuccessToast');

  if (proposalForm) {
    proposalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = proposalForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⚡ Generating AI Proposal...';
      }

      setTimeout(() => {
        if (formSuccessToast) {
          formSuccessToast.style.display = 'block';
          formSuccessToast.scrollIntoView({ behavior: 'smooth' });
        }
        proposalForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Get Free AI Growth Proposal →';
        }
      }, 1500);
    });
  }

  /* ------------------------------------------------------------------------
     12. Floating AI Assistant Chatbot Widget
     ------------------------------------------------------------------------ */
  const chatbotTrigger = document.getElementById('chatbotTrigger');
  const chatbotModal = document.getElementById('chatbotModal');
  const closeChatbot = document.getElementById('closeChatbot');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');

  if (chatbotTrigger && chatbotModal) {
    chatbotTrigger.addEventListener('click', () => {
      chatbotModal.classList.toggle('open');
    });
  }

  if (closeChatbot && chatbotModal) {
    closeChatbot.addEventListener('click', () => {
      chatbotModal.classList.remove('open');
    });
  }

  if (chatForm && chatInput && chatBody) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userText = chatInput.value.trim();
      if (!userText) return;

      // Render User Message
      const userMsgDiv = document.createElement('div');
      userMsgDiv.className = 'chat-msg user';
      userMsgDiv.textContent = userText;
      chatBody.appendChild(userMsgDiv);

      chatInput.value = '';
      chatBody.scrollTop = chatBody.scrollHeight;

      // Simulated Intelligent Agency Response
      setTimeout(() => {
        const botMsgDiv = document.createElement('div');
        botMsgDiv.className = 'chat-msg bot';

        const lower = userText.toLowerCase();
        let response = "Thanks for asking! OrionPulse specializes in high-converting SEO, Meta/Google Ads, custom websites, and 24/7 AI chatbots. Would you like to request a free custom growth proposal?";

        if (lower.includes('seo') || lower.includes('google')) {
          response = "Our SEO engine targets high-intent local & global keywords with technical speed optimization and AI content strategies to boost organic traffic by 3x+!";
        } else if (lower.includes('price') || lower.includes('cost') || lower.includes('package')) {
          response = "Our packages start at ₹24,999/mo for local SMEs up to enterprise AI automation scale. You can also view our pricing section above!";
        } else if (lower.includes('contact') || lower.includes('call') || lower.includes('email')) {
          response = "You can reach our team directly at contact@orionpulse.co.in or fill out the free proposal form above!";
        }

        botMsgDiv.textContent = response;
        chatBody.appendChild(botMsgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 800);
    });
  }
});
