// OrionPulse Technologies - Interactive Application Logic

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initServicesFilter();
  initAiDiagnostic();
  initRoiCalculator();
  initPortfolioFilter();
  initScopeCalculator();
  initFaqAccordion();
  initForms();
  initProposalModal();
  initChatWidget();
});

/* ==========================================
   1. NAVBAR & NAVIGATION
   ========================================== */
function initNavbar() {
  const header = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('bg-[#0F172A]/85', 'backdrop-blur-md', 'border-b', 'border-white/5', 'shadow-2xl', 'py-3');
      header?.classList.remove('bg-transparent', 'py-5');
    } else {
      header?.classList.remove('bg-[#0F172A]/85', 'backdrop-blur-md', 'border-b', 'border-white/5', 'shadow-2xl', 'py-3');
      header?.classList.add('bg-transparent', 'py-5');
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* ==========================================
   2. SERVICES CATEGORY FILTER
   ========================================== */
function initServicesFilter() {
  const filterButtons = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      // Active state styling
      filterButtons.forEach(b => {
        b.classList.remove('bg-[#0A84FF]', 'text-white', 'shadow-lg');
        b.classList.add('bg-white/5', 'text-slate-300', 'hover:text-white', 'border', 'border-white/5');
      });
      btn.classList.add('bg-[#0A84FF]', 'text-white', 'shadow-lg');
      btn.classList.remove('bg-white/5', 'text-slate-300', 'border-white/5');

      // Filter cards
      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.classList.remove('hidden');
          card.classList.add('animate-fade-in');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================
   3. AI SHOWCASE DIAGNOSTIC SANDBOX
   ========================================== */
function initAiDiagnostic() {
  const runBtn = document.getElementById('run-ai-diagnostic-btn');
  const urlInput = document.getElementById('ai-diagnostic-url');
  const resultsContainer = document.getElementById('ai-diagnostic-results');

  if (!runBtn || !resultsContainer) return;

  runBtn.addEventListener('click', () => {
    const targetUrl = urlInput?.value || 'acmehealth.com';
    runBtn.disabled = true;
    runBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Analyzing Website Architecture...
    `;

    setTimeout(() => {
      runBtn.disabled = false;
      runBtn.innerHTML = `
        <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Re-Run AI Growth Diagnostic
      `;

      resultsContainer.classList.remove('hidden');
      resultsContainer.classList.add('animate-fade-in');
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Dynamic text fill
      const targetSpan = document.getElementById('diagnostic-target-domain');
      if (targetSpan) targetSpan.textContent = targetUrl.replace(/https?:\/\//, '');
    }, 1500);
  });
}

/* ==========================================
   4. INTERACTIVE ROI CALCULATOR
   ========================================== */
function initRoiCalculator() {
  const adSpendSlider = document.getElementById('roi-ad-spend');
  const adSpendValue = document.getElementById('roi-ad-spend-val');
  const leadOutput = document.getElementById('roi-leads-out');
  const revenueOutput = document.getElementById('roi-revenue-out');
  const roasOutput = document.getElementById('roi-roas-out');

  if (!adSpendSlider) return;

  function updateRoi() {
    const spend = parseInt(adSpendSlider.value, 10);
    if (adSpendValue) adSpendValue.textContent = '$' + spend.toLocaleString();

    // Projected calculation parameters
    const avgCpl = 18; // Cost per lead $18
    const conversionRate = 0.08; // 8% sales conversion
    const avgDealValue = 1850; // $1850 revenue per customer

    const estLeads = Math.floor(spend / avgCpl);
    const estDeals = Math.floor(estLeads * conversionRate);
    const estRevenue = estDeals * avgDealValue;
    const roas = spend > 0 ? (estRevenue / spend).toFixed(1) : '0.0';

    if (leadOutput) leadOutput.textContent = estLeads.toLocaleString() + ' Qualified Leads';
    if (revenueOutput) revenueOutput.textContent = '$' + estRevenue.toLocaleString();
    if (roasOutput) roasOutput.textContent = roas + 'x ROAS';
  }

  adSpendSlider.addEventListener('input', updateRoi);
  updateRoi();
}

/* ==========================================
   5. PORTFOLIO FILTER & PREVIEW
   ========================================== */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      filterBtns.forEach(b => {
        b.classList.remove('bg-[#0A84FF]', 'text-white');
        b.classList.add('bg-white/5', 'text-slate-400', 'hover:text-white');
      });
      btn.classList.add('bg-[#0A84FF]', 'text-white');
      btn.classList.remove('bg-white/5', 'text-slate-400');

      portfolioItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          item.classList.remove('hidden');
          item.classList.add('animate-fade-in');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================
   6. CUSTOM SCOPE PRICING CALCULATOR
   ========================================== */
function initScopeCalculator() {
  const checkboxes = document.querySelectorAll('.scope-checkbox');
  const customTotalEl = document.getElementById('custom-scope-total');
  const customCta = document.getElementById('custom-scope-cta');

  if (!checkboxes.length || !customTotalEl) return;

  function calculateTotal() {
    let total = 800; // base retainer
    checkboxes.forEach(cb => {
      if (cb.checked) {
        total += parseInt(cb.getAttribute('data-price') || '0', 10);
      }
    });

    customTotalEl.textContent = '$' + total.toLocaleString() + ' / mo';
    if (customCta) {
      customCta.setAttribute('data-preset', `Custom Scope ($${total}/mo)`);
    }
  }

  checkboxes.forEach(cb => cb.addEventListener('change', calculateTotal));
  calculateTotal();
}

/* ==========================================
   7. FAQ ACCORDION & SEARCH
   ========================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  const faqSearch = document.getElementById('faq-search-input');
  const faqCatBtns = document.querySelectorAll('.faq-cat-btn');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all
      faqItems.forEach(i => {
        i.classList.remove('active');
        const answer = i.querySelector('.faq-answer');
        const icon = i.querySelector('.faq-chevron');
        if (answer) answer.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-chevron');
        if (answer) answer.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Search filter
  if (faqSearch) {
    faqSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      faqItems.forEach(item => {
        const text = item.textContent?.toLowerCase() || '';
        if (text.includes(query)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  }

  // Category filter
  faqCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      faqCatBtns.forEach(b => {
        b.classList.remove('bg-[#0A84FF]', 'text-white', 'font-bold');
        b.classList.add('bg-white/5', 'text-slate-400');
      });
      btn.classList.add('bg-[#0A84FF]', 'text-white', 'font-bold');
      btn.classList.remove('bg-white/5', 'text-slate-400');

      faqItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (cat === 'All' || itemCat === cat) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================
   8. FORM SUBMISSIONS
   ========================================== */
function initForms() {
  const leadForm = document.getElementById('main-lead-form');
  const leadSuccess = document.getElementById('lead-form-success');
  const contactForm = document.getElementById('quick-contact-form');
  const contactSuccess = document.getElementById('quick-contact-success');

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('lead-name')?.value;
      const email = document.getElementById('lead-email')?.value;
      const business = document.getElementById('lead-business')?.value || 'Business';

      const submitBtn = leadForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.textContent = 'Generating AI Proposal & Blueprint...';

      setTimeout(() => {
        leadForm.classList.add('hidden');
        if (leadSuccess) {
          leadSuccess.classList.remove('hidden');
          const nameEl = document.getElementById('lead-success-name');
          const waBtn = document.getElementById('lead-success-wa-btn');
          if (nameEl) nameEl.textContent = name || 'Growth Partner';
          if (waBtn) {
            waBtn.href = `https://wa.me/919876543210?text=Hi%20OrionPulse!%20I%20just%20submitted%20a%20proposal%20request%20for%20${encodeURIComponent(business)}.`;
          }
        }
      }, 1200);
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value;
      contactForm.classList.add('hidden');
      if (contactSuccess) {
        contactSuccess.classList.remove('hidden');
        const nameEl = document.getElementById('contact-success-name');
        if (nameEl) nameEl.textContent = name || 'Partner';
      }
    });
  }
}

/* ==========================================
   9. PROPOSAL MODAL & CALL RESERVATION
   ========================================== */
function initProposalModal() {
  const modal = document.getElementById('proposal-modal');
  const closeModalBtns = document.querySelectorAll('.close-proposal-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const presetInput = document.getElementById('modal-preset-service');
  const modalForm = document.getElementById('modal-form');
  const modalSuccess = document.getElementById('modal-success');

  // Open modal buttons triggers
  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-proposal]');
    if (trigger) {
      const preset = trigger.getAttribute('data-preset') || 'Full-Stack AI Growth Engine';
      const isCall = trigger.getAttribute('data-is-call') === 'true';

      if (modal) {
        if (presetInput) presetInput.value = preset;
        if (modalTitle) {
          modalTitle.textContent = isCall ? 'Schedule Your 1-on-1 Strategy Call' : 'Request Your Free Growth Blueprint';
        }
        if (modalBadge) {
          modalBadge.textContent = isCall ? 'STRATEGY CALL RESERVATION' : 'CONFIDENTIAL PROPOSAL REQUEST';
        }

        if (modalForm) modalForm.classList.remove('hidden');
        if (modalSuccess) modalSuccess.classList.add('hidden');

        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  });

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.textContent = 'Transmitting Proposal Request...';

      setTimeout(() => {
        modalForm.classList.add('hidden');
        if (modalSuccess) modalSuccess.classList.remove('hidden');
      }, 1000);
    });
  }
}

/* ==========================================
   10. 24/7 AI ASSISTANT CHAT WIDGET
   ========================================== */
function initChatWidget() {
  const chatToggle = document.getElementById('chat-widget-toggle');
  const chatDrawer = document.getElementById('chat-widget-drawer');
  const chatClose = document.getElementById('chat-widget-close');
  const chatForm = document.getElementById('chat-widget-form');
  const chatInput = document.getElementById('chat-widget-input');
  const chatMessages = document.getElementById('chat-messages-container');

  if (!chatToggle || !chatDrawer) return;

  chatToggle.addEventListener('click', () => {
    chatDrawer.classList.remove('hidden');
    chatToggle.classList.add('hidden');
  });

  chatClose?.addEventListener('click', () => {
    chatDrawer.classList.add('hidden');
    chatToggle.classList.remove('hidden');
  });

  if (chatForm && chatInput && chatMessages) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userMsg = chatInput.value.trim();
      if (!userMsg) return;

      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Append user message
      const userBubble = document.createElement('div');
      userBubble.className = 'flex justify-end animate-fade-in';
      userBubble.innerHTML = `
        <div class="max-w-[82%] p-3 rounded-2xl text-xs bg-[#0A84FF] text-white font-medium rounded-tr-none">
          <div>${escapeHtml(userMsg)}</div>
          <div class="text-[9px] mt-1 text-slate-200">${now}</div>
        </div>
      `;
      chatMessages.appendChild(userBubble);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Generate bot response
      setTimeout(() => {
        let responseText = "Thank you for reaching out! OrionPulse Technologies OPC Pvt Ltd specializes in AI automation, bespoke web apps, SEO, and performance marketing. Would you like a free proposal?";

        const lower = userMsg.toLowerCase();
        if (lower.includes('price') || lower.includes('cost') || lower.includes('plan')) {
          responseText = "Our Growth Retainers start at $1,499/mo for Starter AI Growth, $3,499/mo for Scale Engine, and custom packages for Enterprise. Annual billing includes a 20% discount!";
        } else if (lower.includes('service') || lower.includes('seo') || lower.includes('ad') || lower.includes('web')) {
          responseText = "We offer 15 full-stack growth services including SEO, Google Ads, Meta Ads, Next.js Web Apps, 24/7 Gemini AI Chatbots, B2B Lead Gen, and CRM Sync!";
        } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('location')) {
          responseText = "You can reach our Bengaluru office directly at +91 98765 43210 or email contact@orionpulse.co.in. Average response velocity is under 15 minutes!";
        }

        const botBubble = document.createElement('div');
        botBubble.className = 'flex justify-start animate-fade-in';
        botBubble.innerHTML = `
          <div class="max-w-[82%] p-3 rounded-2xl text-xs bg-white/10 text-slate-200 border border-white/10 rounded-tl-none">
            <div>${responseText}</div>
            <div class="text-[9px] mt-1 text-slate-400">Just now</div>
          </div>
        `;
        chatMessages.appendChild(botBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 700);
    });
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
