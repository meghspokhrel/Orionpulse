/**
 * OrionPulse Technologies OPC Private Limited
 * Official Frontend Application JavaScript
 * Domain: orionpulse.co.in
 */

// Global State
let currentTestimonialIndex = 0;
let testimonialTimer = null;
let selectedSlotBtn = null;

// ==========================================
// 1. SERVICES DATA & RENDER ENGINE (15 SERVICES)
// ==========================================
const servicesData = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    category: "marketing",
    icon: "fa-solid font-2xl fa-magnifying-glass-chart text-[#00E5FF]",
    shortDesc: "Dominate Google search rankings with AI-assisted keyword mapping, schema markup, and technical SEO architecture.",
    deliverables: ["Semantic Keyword Mapping", "Core Web Vitals Optimization", "High-DA Backlink Acquisition", "Monthly Keyword Ranking Reports"],
    roi: "+340% Organic Traffic Growth",
    tag: "High Intent"
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Maps Domination",
    category: "marketing",
    icon: "fa-solid font-2xl fa-location-dot text-[#10B981]",
    shortDesc: "Capture local high-intent phone calls and store visits with top 3 Google Business Profile map pack rankings.",
    deliverables: ["Google Business Profile Optimization", "Local Citation Building", "Geo-Targeted Landing Pages", "Review Velocity Automation"],
    roi: "+220% Local Store Calls",
    tag: "High Local Lead Flow"
  },
  {
    id: "google-ads",
    title: "Google Ads (PPC) Management",
    category: "marketing",
    icon: "fa-brands font-2xl fa-google text-[#0A84FF]",
    shortDesc: "Maximize conversion rate and minimize cost-per-click with dynamic Search, Shopping, and Performance Max campaigns.",
    deliverables: ["Negative Keyword Guardrails", "A/B Responsive Search Ad Copy", "Smart Bidding Algorithms", "Click Fraud Protection"],
    roi: "4.8x Average Campaign ROAS",
    tag: "Instant Revenue"
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    category: "marketing",
    icon: "fa-brands font-2xl fa-meta text-[#00E5FF]",
    shortDesc: "Scale revenue with high-converting video reels, dynamic product ads, and AI audience lookalike modeling.",
    deliverables: ["Creative UGC Video Production", "Custom CAPI & Pixel Setup", "Lookalike Audience Scaling", "Retargeting Funnel Engineering"],
    roi: "5.2x Ecommerce Return",
    tag: "High Volume"
  },
  {
    id: "website-design",
    title: "Website Design & UI/UX Strategy",
    category: "web",
    icon: "fa-solid font-2xl fa-compass-drafting text-purple-400",
    shortDesc: "Apple-inspired, conversion-focused UI/UX design that elevates brand authority and turns visitors into customers.",
    deliverables: ["Figma Interactive Mockups", "Mobile-First UX Audits", "Custom Motion & Interactions", "Brand Design Systems"],
    roi: "2.8x Higher Conversion Rate",
    tag: "Premium Aesthetic"
  },
  {
    id: "website-dev",
    title: "Website & Web Portal Development",
    category: "web",
    icon: "fa-solid font-2xl fa-code text-[#00E5FF]",
    shortDesc: "Sub-500ms lightning fast web applications built on React 19, Vite, Next.js, and Node.js enterprise stack.",
    deliverables: ["Clean Modular Codebase", "98+ Lighthouse Performance Score", "Custom CMS Integration", "SOC2 Data Encryption"],
    roi: "Sub-400ms Page Load Time",
    tag: "Ultra Fast"
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Conversational Agents",
    category: "ai",
    icon: "fa-solid font-2xl fa-robot text-[#10B981]",
    shortDesc: "Deploy 24/7 intelligent AI agents trained on your business data to capture, qualify, and book leads automatically.",
    deliverables: ["Fine-Tuned AI Models", "WhatsApp & Web Integration", "CRM Auto-Sync", "Multilingual Support (30+ Languages)"],
    roi: "100% Instant Lead Engagement",
    tag: "24/7 Active"
  },
  {
    id: "marketing-auto",
    title: "Marketing & Revenue Automation",
    category: "ai",
    icon: "fa-solid font-2xl fa-gears text-amber-400",
    shortDesc: "Connect your marketing stack with automated Zapier/Make workflows that eliminate manual data entry.",
    deliverables: ["Multi-Channel Lead Routing", "Instant SMS/Email Triggers", "Lead Scoring Algorithms", "Automated Invoice Billing"],
    roi: "Save 40+ Staff Hours/Week",
    tag: "Efficiency"
  },
  {
    id: "social-media",
    title: "Social Media Growth & Marketing",
    category: "marketing",
    icon: "fa-solid font-2xl fa-[#00E5FF] fa-share-nodes text-rose-400",
    shortDesc: "Build an organic brand presence across LinkedIn, Instagram, and X with viral content strategy and community management.",
    deliverables: ["Monthly Content Calendar", "Short-Form Video Production", "Community Engagement", "Influencer Partnerships"],
    roi: "+150K Organic Impressions",
    tag: "Brand Impact"
  },
  {
    id: "content-mktg",
    title: "Content Marketing & Copywriting",
    category: "strategy",
    icon: "fa-solid font-2xl fa-pen-nib text-sky-400",
    shortDesc: "High-converting sales copy, whitepapers, and thought leadership articles engineered to educate and convert.",
    deliverables: ["SEO Thought Leadership Blogs", "Sales Page Copywriting", "Lead Magnet E-Books", "Email Campaign Sequences"],
    roi: "3.4x Higher Organic Opt-ins",
    tag: "Thought Leadership"
  },
  {
    id: "email-mktg",
    title: "Email Marketing & Customer Nurture",
    category: "marketing",
    icon: "fa-solid font-2xl fa-paper-plane text-[#0A84FF]",
    shortDesc: "Automate customer retention and abandoned cart recovery with personalized Klaviyo and HubSpot email sequences.",
    deliverables: ["Welcome Series Automation", "Abandoned Cart Recovery", "Segmented Broadcast Newsletters", "Deliverability Guardrails"],
    roi: "32% Total Revenue Contribution",
    tag: "High ROI"
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy & Positioning",
    category: "strategy",
    icon: "fa-solid font-2xl fa-bullseye text-[#10B981]",
    shortDesc: "Define your market category, value proposition, and visual identity to command premium pricing.",
    deliverables: ["Market Positioning Matrix", "Brand Voice Architecture", "Competitive Differentiation Audit", "Go-To-Market Roadmap"],
    roi: "Command 2x Price Premium",
    tag: "Enterprise Value"
  },
  {
    id: "analytics",
    title: "GA4 Analytics & Growth Tracking",
    category: "strategy",
    icon: "fa-solid font-2xl fa-chart-pie text-[#00E5FF]",
    shortDesc: "Complete attribution modeling to track every dollar spent across your ads, SEO, and sales pipeline.",
    deliverables: ["GA4 Custom Dashboard", "Server-Side Tracking Setup", "Funnel Drop-off Analysis", "Executive Weekly Reports"],
    roi: "100% Attribution Accuracy",
    tag: "Data Science"
  },
  {
    id: "lead-gen",
    title: "High-Intent Lead Generation",
    category: "marketing",
    icon: "fa-solid font-2xl fa-filter text-[#0A84FF]",
    shortDesc: "B2B and B2C qualified lead generation funnels designed to fill your sales calendars with decision-makers.",
    deliverables: ["Custom Quiz & Assessment Funnels", "Cold Email Outreach Engines", "Verified Lead Verification", "Appointment Booking Setup"],
    roi: "100+ Qualified Leads/Mo",
    tag: "High Volume"
  },
  {
    id: "crm-integration",
    title: "CRM & Sales Pipeline Integration",
    category: "ai",
    icon: "fa-solid font-2xl fa-diagram-project text-purple-400",
    shortDesc: "Seamlessly integrate Salesforce, HubSpot, or Zoho with your website and ad campaigns for zero lead leakage.",
    deliverables: ["Custom Webhook API Setup", "Pipeline Stage Automation", "Sales Team Notification Bots", "Historical Data Migration"],
    roi: "Zero Lead Leakage",
    tag: "Infrastructure"
  }
];

function renderServices(items = servicesData) {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = items.map(s => `
    <div class="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 hover:border-[#00E5FF]/60 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-xl">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
            <i class="${s.icon}"></i>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-[#00E5FF]">${s.tag}</span>
        </div>
        <h3 class="text-xl font-bold text-white mb-2 font-heading group-hover:text-[#00E5FF] transition-colors">${s.title}</h3>
        <p class="text-slate-400 text-xs leading-relaxed mb-4">${s.shortDesc}</p>
      </div>

      <div>
        <div class="py-2 px-3 rounded-lg bg-slate-950/60 border border-slate-800/80 mb-4 flex items-center justify-between text-xs">
          <span class="text-slate-400">Verified Impact:</span>
          <span class="text-[#10B981] font-bold">${s.roi}</span>
        </div>

        <button onclick="openServiceModal('${s.id}')" class="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-[#0A84FF] text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2">
          <span>Explore Service Details</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function openServiceModal(id) {
  const service = servicesData.find(s => s.id === id);
  if (!service) return;

  const modalBody = document.getElementById("service-modal-body");
  modalBody.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl">
          <i class="${service.icon}"></i>
        </div>
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] font-bold uppercase tracking-wider">${service.tag}</span>
          <h3 class="text-2xl font-bold text-white font-heading mt-1">${service.title}</h3>
        </div>
      </div>

      <p class="text-slate-300 text-sm leading-relaxed">${service.shortDesc}</p>

      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
        <div class="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">Key Deliverables Included:</div>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
          ${service.deliverables.map(d => `<li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#10B981]"></i> ${d}</li>`).join('')}
        </ul>
      </div>

      <div class="flex items-center justify-between p-4 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30">
        <div>
          <div class="text-xs text-slate-300">Expected Performance Metric</div>
          <div class="text-lg font-bold text-[#00E5FF] font-heading">${service.roi}</div>
        </div>
        <button onclick="closeServiceModal(); scrollToSection('lead-form');" class="px-6 py-2.5 rounded-xl bg-[#00E5FF] text-slate-950 font-bold text-xs hover:bg-[#10B981] transition-colors">
          Request Quote
        </button>
      </div>
    </div>
  `;

  document.getElementById("service-modal").classList.remove("hidden");
}

function closeServiceModal() {
  document.getElementById("service-modal").classList.add("hidden");
}

// Service Filter & Search Event Listeners
function setupServiceEvents() {
  const filterBtns = document.querySelectorAll("#service-filters .service-tab-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      if (filter === "all") {
        renderServices(servicesData);
      } else {
        renderServices(servicesData.filter(s => s.category === filter));
      }
    });
  });

  const searchInput = document.getElementById("service-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      renderServices(servicesData.filter(s => s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q)));
    });
  }
}

// ==========================================
// 2. PORTFOLIO DATA & RENDER ENGINE
// ==========================================
const portfolioData = [
  {
    id: "p1",
    title: "ApexPay Global — SaaS Platform",
    category: "saas",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    metrics: "+420% ARR Growth | 0.35s Load Speed",
    desc: "Complete digital transformation for a fintech SaaS, including Next.js web application architecture, automated lead qualifying chatbots, and Google PMax search campaigns.",
    client: "ApexPay Technologies Inc."
  },
  {
    id: "p2",
    title: "Aura Home — Luxury E-Commerce",
    category: "ecom",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    metrics: "₹4.2 Cr Revenue | 5.8x Meta ROAS",
    desc: "Custom Shopify Plus storefront optimization, predictive audience targeting models, and high-converting video ad creative production.",
    client: "Aura Lifestyle India"
  },
  {
    id: "p3",
    title: "Quantum AI — Autonomous Bot Portal",
    category: "ai",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    metrics: "14,000+ Auto Leads Processed",
    desc: "Deploying enterprise LLM fine-tuned chatbots across Web and WhatsApp, integrated with Salesforce CRM webhooks for real-time sales routing.",
    client: "Quantum AI Solutions"
  },
  {
    id: "p4",
    title: "Horizon Health — Local Healthcare SEO",
    category: "web",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    metrics: "#1 Ranking in 14 Cities",
    desc: "Dominating local Google Maps rankings for 18 clinics across India with automated review generation and Schema.org architecture.",
    client: "Horizon Hospitals Network"
  },
  {
    id: "p5",
    title: "CloudWave — Cloud Infrastructure Platform",
    category: "saas",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    metrics: "58% Reduction in CAC",
    desc: "B2B LinkedIn & Meta performance campaigns paired with high-converting interactive ROI calculator landing pages.",
    client: "CloudWave Systems"
  },
  {
    id: "p6",
    title: "NexGen Logistics — AI Fleet Automation",
    category: "ai",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    metrics: "Save 35 Hours/Week",
    desc: "End-to-end CRM and WhatsApp booking integration connecting customer requests directly with logistics dispatch systems.",
    client: "NexGen Logistics Pvt Ltd"
  }
];

function renderPortfolio(items = portfolioData) {
  const container = document.getElementById("portfolio-grid");
  if (!container) return;

  container.innerHTML = items.map(p => `
    <div class="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden hover:border-[#00E5FF]/60 transition-all duration-300 group shadow-xl">
      <div class="relative h-52 overflow-hidden">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
        <span class="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-[10px] font-bold text-[#00E5FF]">${p.metrics}</span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-white mb-2 font-heading group-hover:text-[#00E5FF] transition-colors">${p.title}</h3>
        <p class="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">${p.desc}</p>
        <button onclick="openPortfolioModal('${p.id}')" class="text-xs font-bold text-[#00E5FF] hover:underline flex items-center gap-1">
          View Case Breakdown &rarr;
        </button>
      </div>
    </div>
  `).join('');
}

function openPortfolioModal(id) {
  const project = portfolioData.find(p => p.id === id);
  if (!project) return;

  const body = document.getElementById("portfolio-modal-body");
  body.innerHTML = `
    <div class="space-y-6">
      <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-2xl border border-slate-700" />
      <div>
        <span class="px-3 py-1 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] text-xs font-bold uppercase">${project.metrics}</span>
        <h3 class="text-2xl font-bold text-white font-heading mt-2">${project.title}</h3>
        <p class="text-xs text-slate-400">Client: ${project.client}</p>
      </div>
      <p class="text-slate-300 text-sm leading-relaxed">${project.desc}</p>
      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
        <span class="text-xs text-slate-400">Want similar results for your business?</span>
        <button onclick="closePortfolioModal(); scrollToSection('lead-form');" class="px-6 py-2 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white font-bold text-xs">
          Get Proposal
        </button>
      </div>
    </div>
  `;
  document.getElementById("portfolio-modal").classList.remove("hidden");
}

function closePortfolioModal() {
  document.getElementById("portfolio-modal").classList.add("hidden");
}

function setupPortfolioEvents() {
  const btns = document.querySelectorAll("#portfolio-filters .portfolio-tab-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-cat");
      if (cat === "all") {
        renderPortfolio(portfolioData);
      } else {
        renderPortfolio(portfolioData.filter(p => p.category === cat));
      }
    });
  });
}

// ==========================================
// 3. TESTIMONIALS CAROUSEL ENGINE
// ==========================================
const testimonialsData = [
  {
    quote: "OrionPulse transformed our digital marketing trajectory completely. Within 90 days of launching their AI growth engine, our ROAS scaled from 2.1x to 5.4x while lowering acquisition costs by 45%.",
    author: "Rajesh Malhotra",
    title: "Chief Marketing Officer",
    company: "ApexPay Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    metric: "5.4x ROAS Scaled"
  },
  {
    quote: "The sub-400ms web portal OrionPulse engineered for AuraHome directly boosted our mobile checkout conversion rate by 64%. Their team is responsive, technical, and truly obsessed with metrics.",
    author: "Ananya Sharma",
    title: "Head of Digital Growth",
    company: "AuraHome India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    metric: "+64% Checkout Conv"
  },
  {
    quote: "Their AI chatbots handle 100% of our after-hours customer inquiries on WhatsApp. Our sales team wakes up every morning to pre-qualified leads already scheduled in Google Calendar.",
    author: "Vikramaditya Rao",
    title: "Founder & CEO",
    company: "Horizon Logistics",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    metric: "24/7 Auto Nurture"
  }
];

function renderTestimonial(index) {
  const container = document.getElementById("testimonial-card-container");
  const dotsContainer = document.getElementById("testimonial-dots");
  if (!container) return;

  const t = testimonialsData[index];

  container.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-1 text-amber-400 text-sm">
          ${Array(t.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
        </div>
        <span class="px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-bold">
          <i class="fa-solid fa-circle-check"></i> ${t.metric}
        </span>
      </div>

      <p class="text-slate-200 text-lg sm:text-xl italic font-light leading-relaxed">
        "${t.quote}"
      </p>

      <div class="flex items-center gap-4 pt-4 border-t border-slate-800">
        <img src="${t.avatar}" alt="${t.author}" class="w-12 h-12 rounded-full object-cover border-2 border-[#00E5FF]" />
        <div>
          <div class="text-white font-bold font-heading text-base">${t.author}</div>
          <div class="text-xs text-slate-400">${t.title} — <strong class="text-[#00E5FF]">${t.company}</strong></div>
        </div>
      </div>
    </div>
  `;

  if (dotsContainer) {
    dotsContainer.innerHTML = testimonialsData.map((_, i) => `
      <button onclick="goToTestimonial(${i})" class="w-3 h-3 rounded-full transition-all ${i === index ? 'bg-[#00E5FF] w-8' : 'bg-slate-700'}" aria-label="Go to slide ${i+1}"></button>
    `).join('');
  }
}

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
  renderTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
  renderTestimonial(currentTestimonialIndex);
}

function goToTestimonial(index) {
  currentTestimonialIndex = index;
  renderTestimonial(currentTestimonialIndex);
}

// Auto Play Carousel
function startTestimonialAutoPlay() {
  if (testimonialTimer) clearInterval(testimonialTimer);
  testimonialTimer = setInterval(nextTestimonial, 7000);
}

// ==========================================
// 4. INTERACTIVE ROI CALCULATOR SLIDERS
// ==========================================
function setupROICalculator() {
  const revSlider = document.getElementById("calc-rev");
  const budgetSlider = document.getElementById("calc-budget");

  if (!revSlider || !budgetSlider) return;

  function updateCalc() {
    const rev = parseInt(revSlider.value);
    const budget = parseInt(budgetSlider.value);

    // Format strings
    document.getElementById("calc-rev-val").innerText = `₹${rev.toLocaleString('en-IN')}`;
    document.getElementById("calc-budget-val").innerText = `₹${budget.toLocaleString('en-IN')}`;

    // Estimated additions (Average 3.4x to 5.2x return on ad spend + SEO efficiency)
    const estAdditional = Math.round(budget * 4.4 + rev * 0.15);
    const estROAS = (estAdditional / budget).toFixed(1);

    document.getElementById("calc-est-rev").innerText = `₹${estAdditional.toLocaleString('en-IN')}`;
    document.getElementById("calc-est-roas").innerText = `${estROAS}x`;
  }

  revSlider.addEventListener("input", updateCalc);
  budgetSlider.addEventListener("input", updateCalc);
  updateCalc();
}

// ==========================================
// 5. ANIMATED STATISTICS COUNTER ON SCROLL
// ==========================================
function setupCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-target"));
        let count = 0;
        const duration = 2000;
        const step = target / (duration / 20);

        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            counter.innerText = target + "+";
            clearInterval(timer);
          } else {
            counter.innerText = Math.floor(count) + "+";
          }
        }, 20);

        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ==========================================
// 6. PRICING BILLING TOGGLE
// ==========================================
function setupPricingToggle() {
  const toggleBtn = document.getElementById("pricing-toggle");
  const dot = document.getElementById("pricing-toggle-dot");
  if (!toggleBtn || !dot) return;

  let isAnnual = false;

  toggleBtn.addEventListener("click", () => {
    isAnnual = !isAnnual;
    if (isAnnual) {
      dot.style.transform = "translateX(24px)";
      document.querySelector(".price-starter").innerText = "₹63,999";
      document.querySelector(".price-scale").innerText = "₹1,59,999";
    } else {
      dot.style.transform = "translateX(0px)";
      document.querySelector(".price-starter").innerText = "₹79,999";
      document.querySelector(".price-scale").innerText = "₹1,99,999";
    }
  });
}

// ==========================================
// 7. AI SHOWCASE INTERACTIVE SIMULATOR
// ==========================================
function runAISimulation(scenario) {
  const output = document.getElementById("ai-sim-output");
  if (!output) return;

  output.innerHTML = `<div class="text-[#00E5FF] font-bold"><i class="fa-solid fa-spinner fa-spin"></i> Initializing OrionPulse AI Agent Core...</div>`;

  setTimeout(() => {
    if (scenario === 'seo') {
      output.innerHTML = `
        <div class="text-[#10B981] font-bold">[SUCCESS] Target Domain Analyzed: orionpulse.co.in</div>
        <div class="text-slate-400">&gt; Detected 42 high-volume keyword gaps in "AI Marketing India" category.</div>
        <div class="text-slate-400">&gt; Auto-generated Schema.org Organization + Service markup.</div>
        <div class="text-[#00E5FF] font-bold mt-2">&gt;&gt; EST. IMPACT: +380% Organic Impressions in 60 Days.</div>
      `;
    } else if (scenario === 'lead') {
      output.innerHTML = `
        <div class="text-[#10B981] font-bold">[ACTIVE] 24/7 Lead Bot Simulator Running</div>
        <div class="text-slate-400">&gt; Visitor initiated chat: "Looking for B2B Lead Gen in India".</div>
        <div class="text-slate-400">&gt; Bot qualified lead budget (> ₹2,00,000/mo) in 3 seconds.</div>
        <div class="text-[#00E5FF] font-bold mt-2">&gt;&gt; ACTION: Sent Calendar Invite + Synced with HubSpot CRM.</div>
      `;
    } else if (scenario === 'ads') {
      output.innerHTML = `
        <div class="text-[#10B981] font-bold">[OPTIMIZED] Meta & Google Ads Rebalance</div>
        <div class="text-slate-400">&gt; Detected Ad Set #4 fatigue (Frequency 4.8). Shifted ₹45,000 budget to Ad Set #2.</div>
        <div class="text-slate-400">&gt; Lowered Cost Per Lead (CPL) from ₹850 to ₹380.</div>
        <div class="text-[#00E5FF] font-bold mt-2">&gt;&gt; RESULT: ROAS increased from 3.2x to 5.6x.</div>
      `;
    }
  }, 1000);
}

// ==========================================
// 8. FAQ ACCORDION & SEARCH
// ==========================================
const faqData = [
  {
    q: "How fast can OrionPulse launch my digital marketing campaigns?",
    a: "Most web development and performance marketing ad campaigns go live within 7 to 10 business days after strategy onboarding."
  },
  {
    q: "Is there a minimum contract duration?",
    a: "No long-term lock-in required. Our standard agreements operate on flexible month-to-month contracts with 30-day notice periods."
  },
  {
    q: "How does OrionPulse guarantee sub-500ms website performance?",
    a: "We avoid bloated page builders. We build on custom React 19, Vite, Tailwind CSS, and edge CDN infrastructure hosted on Cloudflare."
  },
  {
    q: "Do you handle both Indian and International markets?",
    a: "Yes! OrionPulse Technologies OPC Pvt Ltd services enterprise clients across India, US, UK, Middle East, and APAC regions."
  },
  {
    q: "How do I access campaign reports?",
    a: "You get 24/7 access to your custom client portal displaying real-time GA4 metrics, ad ROAS, and CRM pipeline lead scoring."
  }
];

function renderFAQ(items = faqData) {
  const container = document.getElementById("faq-accordion");
  if (!container) return;

  container.innerHTML = items.map((f, i) => `
    <div class="bg-[#0F172A] border border-slate-800 rounded-xl overflow-hidden">
      <button onclick="toggleFAQ(${i})" class="w-full text-left p-5 font-bold text-white font-heading flex items-center justify-between hover:text-[#00E5FF] transition-colors">
        <span>${f.q}</span>
        <i class="fa-solid fa-chevron-down text-slate-400 text-xs transition-transform" id="faq-icon-${i}"></i>
      </button>
      <div id="faq-ans-${i}" class="hidden p-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/50">
        ${f.a}
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const ans = document.getElementById(`faq-ans-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!ans) return;

  if (ans.classList.contains("hidden")) {
    ans.classList.remove("hidden");
    icon.style.transform = "rotate(180deg)";
  } else {
    ans.classList.add("hidden");
    icon.style.transform = "rotate(0deg)";
  }
}

function setupFAQSearch() {
  const input = document.getElementById("faq-search");
  if (!input) return;

  input.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    renderFAQ(faqData.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)));
  });
}

// ==========================================
// 9. MULTI-STEP PROPOSAL FORM WIZARD
// ==========================================
let currentFormStep = 1;

function goToStep(step) {
  if (step === 2) {
    const name = document.getElementById("form-name").value;
    const company = document.getElementById("form-company").value;
    const email = document.getElementById("form-email").value;
    const phone = document.getElementById("form-phone").value;

    if (!name || !company || !email || !phone) {
      alert("Please fill in all required contact details before proceeding.");
      return;
    }
  }

  document.getElementById(`form-step-${currentFormStep}`).classList.add("hidden");
  document.getElementById(`form-step-${step}`).classList.remove("hidden");

  // Update badges
  if (step >= 2) {
    document.getElementById("step-2-badge").classList.replace("bg-slate-800", "bg-[#00E5FF]");
    document.getElementById("step-2-badge").classList.replace("text-slate-400", "text-slate-950");
    document.getElementById("step-line-1").classList.replace("bg-slate-800", "bg-[#00E5FF]");
  }
  if (step >= 3) {
    document.getElementById("step-3-badge").classList.replace("bg-slate-800", "bg-[#10B981]");
    document.getElementById("step-3-badge").classList.replace("text-slate-400", "text-slate-950");
    document.getElementById("step-line-2").classList.replace("bg-slate-800", "bg-[#10B981]");
  }

  currentFormStep = step;
}

function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("form-name").value;
  const company = document.getElementById("form-company").value;
  const email = document.getElementById("form-email").value;

  document.getElementById("success-user-name").innerText = name;
  document.getElementById("success-user-company").innerText = company;
  document.getElementById("success-user-email").innerText = email;
  document.getElementById("success-ref-id").innerText = Math.floor(100000 + Math.random() * 900000);

  document.getElementById("success-modal").classList.remove("hidden");

  // Fire confetti
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

function closeSuccessModal() {
  document.getElementById("success-modal").classList.add("hidden");
}

// ==========================================
// 10. BOOKING & QUICK CONTACT HANDLERS
// ==========================================
function openBookingModal() {
  document.getElementById("booking-modal").classList.remove("hidden");
  const dateInput = document.getElementById("booking-date");
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

function closeBookingModal() {
  document.getElementById("booking-modal").classList.add("hidden");
}

function selectTimeSlot(btn) {
  if (selectedSlotBtn) selectedSlotBtn.classList.remove("bg-[#00E5FF]", "text-slate-950", "font-bold");
  btn.classList.add("bg-[#00E5FF]", "text-slate-950", "font-bold");
  selectedSlotBtn = btn;
}

function confirmBooking() {
  const email = document.getElementById("booking-email").value;
  if (!email || !selectedSlotBtn) {
    alert("Please select a time slot and enter your email.");
    return;
  }
  alert(`Strategy Call reserved for ${email} at ${selectedSlotBtn.innerText}. A Google Meet invite has been generated.`);
  closeBookingModal();
}

function handleQuickContact(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent to contact@orionpulse.co.in. Our team will reply within 2 hours.");
  e.target.reset();
}

function handleNewsletter(e) {
  e.preventDefault();
  alert("Subscribed successfully! You are now on the OrionPulse AI Growth Report list.");
  e.target.reset();
}

// Scroll Helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// 11. HERO CANVAS ANIMATED PARTICLES
// ==========================================
function setupHeroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 2 + 1
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 229, 255, 0.4)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(10, 132, 255, ${1 - dist / 120})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// 12. HERO LIVE CHART BARS & LOG STREAM
// ==========================================
function setupHeroLiveChart() {
  const container = document.getElementById("hero-chart-bars");
  if (!container) return;

  const heights = [35, 55, 40, 70, 85, 60, 95, 80, 100, 75, 90, 110];
  container.innerHTML = heights.map(h => `
    <div class="w-full bg-gradient-to-t from-[#0A84FF] to-[#00E5FF] rounded-t transition-all duration-500" style="height: ${h}px;"></div>
  `).join('');

  // Live Counter Ticks
  let stat1 = 14290;
  let stat2 = 8.94;

  setInterval(() => {
    stat1 += Math.floor(Math.random() * 5);
    stat2 = (8.94 + (Math.random() * 0.2 - 0.1)).toFixed(2);

    const el1 = document.getElementById("hero-stat-1");
    const el2 = document.getElementById("hero-stat-2");

    if (el1) el1.innerText = stat1.toLocaleString();
    if (el2) el2.innerText = stat2;
  }, 2000);
}

// ==========================================
// INITIALIZATION ON DOM CONTENT LOADED
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  setupServiceEvents();

  renderPortfolio();
  setupPortfolioEvents();

  renderTestimonial(0);
  startTestimonialAutoPlay();

  setupROICalculator();
  setupCounters();
  setupPricingToggle();

  renderFAQ();
  setupFAQSearch();

  setupHeroCanvas();
  setupHeroLiveChart();

  // Scroll Progress Bar
  window.addEventListener("scroll", () => {
    const progress = document.getElementById("scroll-progress");
    if (progress) {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progressWidth = (window.scrollY / totalHeight) * 100;
      progress.style.width = `${progressWidth}%`;
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  // Announcement Bar Close
  const closeAnnouncement = document.getElementById("close-announcement");
  const announcementBar = document.getElementById("announcement-bar");
  if (closeAnnouncement && announcementBar) {
    closeAnnouncement.addEventListener("click", () => {
      announcementBar.style.display = "none";
    });
  }
});
