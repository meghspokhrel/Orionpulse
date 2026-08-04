import { ServiceItem, PortfolioItem, CaseStudy, Testimonial, PricingPlan, TechItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: "OrionPulse Technologies OPC Private Limited",
  shortName: "OrionPulse",
  tagline: "Grow Smarter. Scale Faster. Dominate Digitally.",
  subheading: "AI-powered digital marketing, websites, automation, SEO, and growth strategies built for ambitious businesses.",
  domain: "orionpulse.co.in",
  email: "growth@orionpulse.co.in",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  cin: "U72900KA2024OPC189234",
  address: "Cyber City Tech Hub, Phase 3, Outer Ring Road, Bengaluru, Karnataka 560100, India",
  responseAvg: "< 15 minutes",
  founded: "2023",
  rating: 4.95,
  reviewsCount: 184
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    category: "marketing",
    icon: "Search",
    shortDesc: "Dominate Google search results with AI-driven keyword mapping, technical audits, and high-authority link acquisition.",
    fullDesc: "Our SEO framework combines deep intent keyword clustering, programmatic schema insertion, and semantic context alignment to secure #1 rankings for high-intent keywords.",
    deliverables: ["Comprehensive Technical Audit", "Core Web Vitals Optimization", "Monthly Content Strategy", "Authority Link Building", "Real-Time Ranking Dashboard"],
    roiImpact: "320% average organic traffic growth within 6 months",
    timeToDeploy: "Immediate onboarding, results in 60-90 days",
    popular: true
  },
  {
    id: "local-seo",
    title: "Local SEO & Map Pack Domination",
    category: "marketing",
    icon: "MapPin",
    shortDesc: "Capture high-converting nearby buyers with Google Business Profile optimization and geo-targeted local citations.",
    fullDesc: "Ensure your business owns the top 3 spots in local Google Map Packs. We optimize geo-relevance, local schema, citation consistency, and automated customer review generation.",
    deliverables: ["Google Business Profile Takeover", "Geo-Grid Rank Tracking", "Local Citation Building", "Automated Review Campaign Setup", "Local Schema Markup"],
    roiImpact: "4.5x increase in inbound calls and store directions",
    timeToDeploy: "2-3 weeks setup"
  },
  {
    id: "google-ads",
    title: "Google Ads (PPC & Shopping)",
    category: "marketing",
    icon: "Target",
    shortDesc: "High-ROI Google Search, Performance Max, and Remarketing campaigns managed by Google Certified strategists.",
    fullDesc: "Maximize ROAS through AI bid optimization, negative keyword filtering, high-converting ad copy iterations, and dedicated custom landing page funnels.",
    deliverables: ["Search & Performance Max Setup", "Conversion Tracking Architecture", "Custom Negative Keyword Engine", "Dynamic Ad Copy A/B Testing", "Weekly ROAS Reports"],
    roiImpact: "Average 4.8x ROAS across client campaigns",
    timeToDeploy: "7-10 days launch window",
    popular: true
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    category: "marketing",
    icon: "Share2",
    shortDesc: "Hyper-targeted visual creative campaigns that capture attention, generate qualified leads, and drive e-commerce sales.",
    fullDesc: "Combine striking video creatives, dynamic UGC ads, and custom Conversions API setup to bypass iOS privacy restrictions and capture high-intent audiences on Instagram and Facebook.",
    deliverables: ["High-Converting Video & Image Ads", "Conversions API (CAPI) Integration", "Lookalike & Retargeting Funnels", "Hooks & Copy Writing Testing", "Creative Refresh Pipeline"],
    roiImpact: "3.2x CAC reduction and high scaling throughput",
    timeToDeploy: "5-7 days setup"
  },
  {
    id: "web-design",
    title: "Bespoke UI/UX & Website Design",
    category: "web",
    icon: "Layout",
    shortDesc: "Apple-caliber, conversion-focused interface design built with luxury aesthetic precision and flawless accessibility.",
    fullDesc: "We craft custom digital experiences that mesmerize visitors, communicate brand authority, and turn passive traffic into passionate customers.",
    deliverables: ["Figma Interactive Wireframes", "Custom Design System & Tokens", "Mobile-First UX Architecture", "Micro-Interactions & Motion Guide", "Usability Testing & Refinements"],
    roiImpact: "65%+ boost in baseline conversion rates",
    timeToDeploy: "3-4 weeks delivery",
    popular: true
  },
  {
    id: "web-dev",
    title: "High-Performance Web Development",
    category: "web",
    icon: "Code",
    shortDesc: "Lightning-fast Next.js, React, and Tailwind web applications with 98+ Lighthouse scores and sub-second load times.",
    fullDesc: "Modern frontend engineering with serverless backends, edge delivery, semantic markup, zero bloat, and enterprise security standards.",
    deliverables: ["React / Next.js Custom Codebase", "Headless CMS Integration", "Core Web Vitals 99/100 Guarantee", "SSL & Cloud Run Infrastructure", "SEO & Analytics Setup"],
    roiImpact: "Sub-500ms page speeds yielding 40% lower bounce rates",
    timeToDeploy: "3-6 weeks delivery"
  },
  {
    id: "ai-chatbots",
    title: "Intelligent AI Chatbots & Agents",
    category: "ai",
    icon: "Bot",
    shortDesc: "24/7 autonomous Gemini & GPT-powered AI sales agents that qualify leads, answer customer questions, and book meetings.",
    fullDesc: "Deploy custom-trained AI chatbots trained on your company knowledge base, CRM data, and product catalogs to instantly engage visitors and drive pipeline.",
    deliverables: ["Custom Trained Gemini Model", "Vector Database Knowledge Index", "Live CRM & Calendar Booking Sync", "Multi-Language Support", "Omnichannel Widget Deployment"],
    roiImpact: "70% reduction in support tickets & 3x lead capture",
    timeToDeploy: "10-14 days launch",
    popular: true
  },
  {
    id: "marketing-automation",
    title: "Marketing & Workflow Automation",
    category: "ai",
    icon: "Zap",
    shortDesc: "Eliminate repetitive manual tasks by automating lead routing, follow-up sequences, invoice generation, and customer onboarding.",
    fullDesc: "Connect your entire tech stack (Make, n8n, Zapier, Webhooks) with custom AI agents to trigger instant personal SMS/email responses whenever a lead submits a form.",
    deliverables: ["End-to-End Workflow Mapping", "Custom Webhooks & API Connectors", "Instant Lead Response Trigger", "Automated Multi-Channel Sequences", "Error Monitoring & Logs"],
    roiImpact: "Saves 25+ staff hours per week per department",
    timeToDeploy: "1-2 weeks setup"
  },
  {
    id: "social-media",
    title: "Social Media Marketing & Growth",
    category: "marketing",
    icon: "TrendingUp",
    shortDesc: "Build an organic brand powerhouse on LinkedIn, Instagram, and X through viral content engine creation.",
    fullDesc: "Position your leadership and brand as market authorities through daily value posts, carousel graphics, short-form reels scripts, and strategic engagement.",
    deliverables: ["Monthly Content Calendar", "Graphic Design & Short Video Editing", "Profile Optimization", "Community Management & Outreach", "Analytics & Impressions Growth"],
    roiImpact: "10M+ organic impressions delivered for clients",
    timeToDeploy: "Ongoing retainer"
  },
  {
    id: "content-marketing",
    title: "Authority Content & Copywriting",
    category: "marketing",
    icon: "FileText",
    shortDesc: "High-converting sales copy, thought-leadership whitepapers, and programmatic blog articles designed for buyers and search engines.",
    fullDesc: "Craft persuasive storytelling backed by data. We write landing pages, email nurture series, press releases, and technical documentation that builds trust.",
    deliverables: ["Long-Form SEO Pillar Articles", "High-Converting Sales Page Copy", "Lead Magnet eBooks & Whitepapers", "Case Study Stories", "Email Campaign Copies"],
    roiImpact: "Establishes category leadership and drives organic backlinks",
    timeToDeploy: "Weekly content drops"
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Lifecycle Retention",
    category: "marketing",
    icon: "Mail",
    shortDesc: "Automated Klavyio/HubSpot email flows that turn cold subscribers into repeat buyers and active brand advocates.",
    fullDesc: "Design custom HTML email templates and construct hyper-personalized lifecycle flows: Welcome series, abandoned cart recovery, post-purchase onboarding, and win-back campaigns.",
    deliverables: ["Custom HTML Email Templates", "Automated Flow Architecture", "Audience Segmentation Rules", "A/B Subject Line & CTA Testing", "Deliverability & SPF/DKIM Audit"],
    roiImpact: "Generates 25-35% of total revenue from email channels",
    timeToDeploy: "2-3 weeks setup"
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy & Visual Identity",
    category: "growth",
    icon: "Sparkles",
    shortDesc: "Craft an unmistakable visual identity, positioning statement, logo suite, and brand guidelines that outshine competitors.",
    fullDesc: "Define your market moat. We craft brand archetypes, voice guidelines, typography tokens, vector logo assets, and pitch decks for ambitious startups and scaleups.",
    deliverables: ["Brand Positioning & Messaging Guide", "Primary & Secondary Logo Suite", "Color Palette & Typography Tokens", "Brand Collateral & Deck Templates", "Style Guidelines PDF"],
    roiImpact: "Commands premium pricing power in crowded industries",
    timeToDeploy: "3-4 weeks"
  },
  {
    id: "analytics",
    title: "Advanced Analytics & Growth BI",
    category: "growth",
    icon: "BarChart3",
    shortDesc: "Server-side tracking, GA4 custom events, post-purchase attribution modeling, and automated real-time executive dashboards.",
    fullDesc: "Get 100% data clarity. Eliminate dark traffic and cookie blocking using server-side Google Tag Manager, custom Looker Studio dashboards, and customer lifetime value cohort tracking.",
    deliverables: ["GA4 & Server-Side GTM Setup", "Custom Looker Studio BI Dashboard", "E-commerce & Conversion Telemetry", "Multi-Touch Attribution Modeling", "Weekly Automated Growth Alerts"],
    roiImpact: "Uncovers hidden friction points to boost conversion by 20%+",
    timeToDeploy: "1-2 weeks"
  },
  {
    id: "lead-generation",
    title: "B2B Lead Generation & Outreach Engine",
    category: "growth",
    icon: "Users",
    shortDesc: "Systematic B2B prospecting pipelines that deliver verified decision-maker meetings directly to your sales team's calendar.",
    fullDesc: "Combine targeted cold email infrastructure, domain warmup, AI personalization, and LinkedIn Sales Navigator outreach to guarantee qualified sales meetings every month.",
    deliverables: ["Ideal Customer Profile (ICP) Mapping", "Verified Lead List Sourcing", "Domain Setup & Infrastructure Warmup", "AI-Personalized Pitch Sequences", "Calendar Booking Automation"],
    roiImpact: "Generates 20-50 qualified B2B sales calls monthly",
    timeToDeploy: "2-3 weeks setup",
    popular: true
  },
  {
    id: "crm-integration",
    title: "CRM Architecture & Integration",
    category: "growth",
    icon: "Database",
    shortDesc: "Seamless setup and bidirectional synchronization across HubSpot, Salesforce, Zoho, Pipedrive, and custom databases.",
    fullDesc: "Structure your sales pipeline for maximum conversion velocity. We customize deal stages, lead scoring rules, automated task assignments, and reporting dashboards.",
    deliverables: ["HubSpot / Salesforce Configuration", "Pipeline & Deal Stage Mapping", "Automated Lead Distribution Rules", "Custom Field & Data Cleaning", "Sales Team Training & SOPs"],
    roiImpact: "30% faster sales cycle velocity and zero lead leakage",
    timeToDeploy: "2-3 weeks"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "fintech-scale",
    title: "AuraPay AI Financial Assistant & Portal",
    client: "AuraPay Global Inc.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    metric: "420%",
    metricLabel: "User Engagement Boost",
    tags: ["React 19", "Gemini 2.5", "Tailwind CSS", "Next.js"],
    summary: "Built an AI-first fintech dashboard with automated voice statement generation, intelligent spending forecasting, and sub-200ms transaction analytics.",
    challenge: "AuraPay had a clunky legacy portal with high churn rate and zero automated customer support.",
    solution: "Designed an Apple-inspired glassmorphism web platform featuring an embedded AI assistant and automated fraud detection alerts.",
    results: ["120,000 active monthly users within 90 days", "Reduced customer service resolution time by 78%", "Achieved 99.4/100 performance rating on Google Lighthouse"]
  },
  {
    id: "healthtech-growth",
    title: "OmniHealth Direct Patient Acquisition Engine",
    client: "OmniHealth Care Network",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    metric: "5.4x ROAS",
    metricLabel: "Google & Meta Ads Yield",
    tags: ["Local SEO", "Meta Ads", "Google PPC", "CRM Automation"],
    summary: "Engineered an omnichannel performance marketing framework driving high-ticket medical consultation bookings across 12 clinic branches.",
    challenge: "High cost-per-acquisition ($180/lead) and low conversion rate on generic clinic landing pages.",
    solution: "Built localized landing funnels with real-time slot booking and deployed AI conversational SMS bots for instant follow-ups.",
    results: ["Reduced CAC from $180 to $38 per qualified patient", "Generated over 14,500 qualified appointments in 6 months", "Dominated local map packs for 45 top healthcare keywords"]
  },
  {
    id: "saas-seo-domination",
    title: "CloudMatrix SaaS Programmatic Organic Engine",
    client: "CloudMatrix Software",
    category: "seo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    metric: "1.2M",
    metricLabel: "Monthly Organic Visitors",
    tags: ["Programmatic SEO", "Schema Markup", "Content Engine", "Link Building"],
    summary: "Designed a programmatic SEO architecture generating 800+ high-intent landing pages for developer tools.",
    challenge: "Stuck at 25k monthly organic visits due to poor technical site architecture and thin blog content.",
    solution: "Deployed semantic schema tags, programmatic landing page generators, and a high-tier tech backlink strategy.",
    results: ["Organic traffic grew from 25K to 1.2M monthly visits in 10 months", "Ranked #1 for 185 high-intent commercial search phrases", "Generated $1.8M in pipeline ARR purely from organic search"]
  },
  {
    id: "luxury-ecommerce",
    title: "Velour & Co Luxury E-Commerce Experience",
    client: "Velour Apparel House",
    category: "web",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    metric: "185%",
    metricLabel: "Online Revenue Growth",
    tags: ["Shopify Headless", "Three.js 3D", "Tailwind CSS", "Klaviyo"],
    summary: "Created a high-luxury 3D interactive web store with 360-degree product inspection and bespoke micro-interactions.",
    challenge: "High bounce rate on mobile devices due to slow page loads and uninspiring standard store template.",
    solution: "Rebuilt the store as a headless web app with ultra-fluid page transitions and instant image loading.",
    results: ["Average order value increased by 42%", "Mobile conversion rate rose from 1.4% to 3.8%", "Featured in top design awards showcase"]
  },
  {
    id: "ai-realestate-bot",
    title: "PropPulse Autonomous Real Estate Sales Agent",
    client: "PropPulse Realty Group",
    category: "ai",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    metric: "3,400+",
    metricLabel: "Qualified Property Leads",
    tags: ["Gemini AI", "WhatsApp API", "HubSpot CRM", "Voice AI"],
    summary: "Developed an AI WhatsApp bot that conducts property virtual tours, qualifies buyer budgets, and schedules site visits.",
    challenge: "Sales agents were missing 60% of weekend leads due to manual response delays.",
    solution: "Deployed a 24/7 AI agent that responds in under 5 seconds, answers complex query details, and syncs directly to WhatsApp & CRM.",
    results: ["Lead response time dropped from 4 hours to 4 seconds", "Captured 3,400+ qualified villa & penthouse buyer leads in 90 days", "Closed $12M in sales volume directly attributed to AI leads"]
  },
  {
    id: "b2b-lead-gen",
    title: "Nexus Cyber B2B Enterprise Account Engine",
    client: "Nexus CyberSecurity",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    metric: "$4.2M",
    metricLabel: "New Qualified Pipeline",
    tags: ["Cold Outreach", "LinkedIn Ads", "Account-Based Marketing", "Salesforce"],
    summary: "Executed targeted Account-Based Marketing (ABM) campaigns targeting CISOs at Fortune 500 enterprises.",
    challenge: "Zero traction from broad display ads and high competition in cybersecurity keywords.",
    solution: "Crafted hyper-personalized video landing pages and multi-touch executive outreach sequences.",
    results: ["Secured 48 executive pitch meetings in 60 days", "Built $4.2M in enterprise deal pipeline", "Contract win rate increased by 35%"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-fintech",
    title: "How AuraPay Scaled from $2M to $18M Valuation with OrionPulse Growth Engine",
    client: "AuraPay Financial",
    industry: "Fintech & Payments",
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    growthMultiplier: "9x Valuation Lift",
    primaryMetric: "+420% User Signups",
    secondaryMetric: "3.8x ROAS Achieved",
    summary: "By deploying an integrated AI chatbot, redesigning their mobile web application, and managing hyper-targeted performance marketing campaigns, OrionPulse transformed AuraPay into a leading digital wallet contender.",
    beforeStats: [
      { label: "Monthly Signups", value: "1,200" },
      { label: "CAC", value: "$85.00" },
      { label: "Organic Rank", value: "Page 4" }
    ],
    afterStats: [
      { label: "Monthly Signups", value: "18,400+" },
      { label: "CAC", value: "$19.20" },
      { label: "Organic Rank", value: "#1 Spot" }
    ]
  },
  {
    id: "case-health",
    title: "OmniHealth: 14,000+ Appointments Generated in 6 Months with AI Local Marketing",
    client: "OmniHealth Network",
    industry: "Healthcare & Clinics",
    heroImage: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1200&auto=format&fit=crop",
    growthMultiplier: "5.4x Return on Ad Spend",
    primaryMetric: "14,500 Appointments",
    secondaryMetric: "-78% Acquisition Cost",
    summary: "OrionPulse overhauled OmniHealth's local Google Business profiles, launched geo-fenced Meta ad campaigns, and automated patient booking with an instant AI SMS bot.",
    beforeStats: [
      { label: "Monthly Leads", value: "350" },
      { label: "Cost Per Booking", value: "$180" },
      { label: "Map Rank", value: "Not in Top 10" }
    ],
    afterStats: [
      { label: "Monthly Leads", value: "2,400+" },
      { label: "Cost Per Booking", value: "$38" },
      { label: "Map Rank", value: "#1 in 12 Zones" }
    ]
  },
  {
    id: "case-saas",
    title: "CloudMatrix: From Zero to 1.2 Million Organic Visitors/Month via AI Programmatic SEO",
    client: "CloudMatrix Tech",
    industry: "Enterprise B2B SaaS",
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    growthMultiplier: "48x Traffic Expansion",
    primaryMetric: "1.2M Organic Traffic",
    secondaryMetric: "$1.8M ARR Added",
    summary: "Using OrionPulse's programmatic SEO suite, we generated over 800 programmatic landing pages aligned with exact developer search queries, paired with custom Schema markup.",
    beforeStats: [
      { label: "Organic Visits", value: "25,000/mo" },
      { label: "Domain Rating", value: "DR 18" },
      { label: "Organic Pipeline", value: "$40k ARR" }
    ],
    afterStats: [
      { label: "Organic Visits", value: "1,200,000/mo" },
      { label: "Domain Rating", value: "DR 62" },
      { label: "Organic Pipeline", value: "$1,850,000 ARR" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikram Malhotra",
    role: "Co-Founder & CEO",
    company: "AuraPay Financial",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    quote: "OrionPulse is not just another agency; they are our core growth engine. Their AI chatbot cut our support overhead by 80%, while their ads generated a 4.8x ROAS consistently. Absolute game changers.",
    rating: 5,
    highlightMetric: "+420% User Signups",
    verified: true
  },
  {
    id: "test-2",
    name: "Dr. Ananya Sharma",
    role: "Chief Medical Director",
    company: "OmniHealth Network",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    quote: "We went from struggling to fill appointment slots to having a 3-week waiting list across all 12 clinics. The website they built is lightning fast, and the local SEO results are incredible.",
    rating: 5,
    highlightMetric: "14,500+ Bookings",
    verified: true
  },
  {
    id: "test-3",
    name: "David Chen",
    role: "VP of Growth Marketing",
    company: "CloudMatrix Software",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    quote: "Their programmatic SEO strategy delivered 1.2 million monthly organic visitors in less than a year. The level of design detail and technical execution is equal to Silicon Valley's top agencies.",
    rating: 5,
    highlightMetric: "1.2M Organic Traffic",
    verified: true
  },
  {
    id: "test-4",
    name: "Siddharth Rao",
    role: "Managing Director",
    company: "PropPulse Realty",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    quote: "The WhatsApp AI sales agent built by OrionPulse qualifies buyer budgets instantly. It runs 24/7 and has driven over $12 Million in closed luxury home transactions.",
    rating: 5,
    highlightMetric: "$12M Sales Pipeline",
    verified: true
  },
  {
    id: "test-5",
    name: "Elena Rostova",
    role: "Global Creative Director",
    company: "Velour Apparel House",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    quote: "The web design OrionPulse delivered is pure art. Apple-level minimalism, 3D product renders, and sub-second page loads. Our online store conversion skyrocketed by 185%.",
    rating: 5,
    highlightMetric: "185% E-Commerce Lift",
    verified: true
  },
  {
    id: "test-6",
    name: "Karan Johar",
    role: "Head of Marketing",
    company: "Nexus Cyber",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    quote: "OrionPulse helped us secure 48 CISO pitch meetings at Fortune 500 companies within two months. Their ABM outreach engine and video landing pages convert at a unbelievable rate.",
    rating: 5,
    highlightMetric: "$4.2M Enterprise Pipeline",
    verified: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter AI Growth",
    priceMonthly: 1499,
    priceAnnualMonthly: 1199,
    badge: "For Emerging Businesses",
    description: "Essential AI automation, website optimization, and local SEO foundation to kickstart consistent inbound growth.",
    features: [
      "Custom High-Speed Website (Up to 5 pages)",
      "Technical & On-Page SEO Setup",
      "Google Business Profile & Map Pack Optimization",
      "1 AI Sales Chatbot (Trained on your business)",
      "Google Ads or Meta Ads Campaign Management",
      "Basic Lead Capture & CRM Sync",
      "Bi-Weekly Strategy & Performance Calls",
      "24/7 Slack / WhatsApp Direct Support"
    ],
    ctaText: "Launch Starter Growth"
  },
  {
    id: "scale",
    name: "Scale Growth Engine",
    priceMonthly: 3499,
    priceAnnualMonthly: 2799,
    badge: "Most Popular • High ROI",
    highlighted: true,
    description: "Complete AI automation suite, multi-channel performance advertising, and custom web application designed for rapid scaling.",
    features: [
      "Bespoke Web App / E-Commerce (Unlimited pages)",
      "Full SEO Domination & Programmatic Content Engine",
      "Omnichannel Performance Marketing (Google + Meta + LinkedIn)",
      "Advanced Multi-Agent AI Chatbot & Voice Assistant",
      "Complete Marketing Automation (Make / n8n workflows)",
      "B2B Cold Outreach Engine (1,000 verified leads/mo)",
      "Server-Side GA4 Analytics & Custom BI Dashboard",
      "Dedicated Senior Growth Strategist & Tech Lead",
      "Weekly KPI Reviews & Conversion Rate Audits"
    ],
    ctaText: "Get Scale Engine"
  },
  {
    id: "enterprise",
    name: "Enterprise Domination",
    priceMonthly: 6999,
    priceAnnualMonthly: 5599,
    badge: "Custom Dedicated Team",
    description: "Fully custom tech architecture, dedicated AI engineers, bespoke growth marketing team, and guaranteed revenue growth targets.",
    features: [
      "Custom Enterprise Tech Stack & Microservices",
      "Dedicated Team of 5 (AI Engineer, Designer, Ads Specialist, SEO Lead, Copywriter)",
      "Uncapped Performance Marketing Management",
      "Bespoke LLM / Gemini AI Model Fine-Tuning & Integration",
      "Custom CRM & ERP Bi-Directional Synchronization",
      "Account-Based Marketing (ABM) for Enterprise Deals",
      "Conversion Rate Optimization (CRO) A/B Testing Lab",
      "Guaranteed SLAs & 1-Hour Emergency Support",
      "Quarterly On-Site Growth Workshops"
    ],
    ctaText: "Request Enterprise Blueprint"
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "Google Gemini 2.5", category: "AI & ML", icon: "Sparkles", desc: "Multimodal reasoning & autonomous sales bots", featured: true },
  { name: "OpenAI GPT-4o", category: "AI & ML", icon: "Brain", desc: "Natural language generation & semantic parsing" },
  { name: "Pinecone / Vector DB", category: "AI & ML", icon: "Database", desc: "Ultra-fast contextual memory indexing" },
  { name: "Python / PyTorch", category: "AI & ML", icon: "Code2", desc: "Custom model training & predictive lead scoring" },
  { name: "React 19 & Next.js", category: "Web & Cloud", icon: "Globe", desc: "High-performance serverless frontends", featured: true },
  { name: "Tailwind CSS v4", category: "Web & Cloud", icon: "Palette", desc: "Apple-caliber design systems & micro-interactions" },
  { name: "TypeScript", category: "Web & Cloud", icon: "ShieldCheck", desc: "Strict type-safe enterprise codebases" },
  { name: "Google Cloud & AWS", category: "Web & Cloud", icon: "Cloud", desc: "Global edge hosting with 99.99% uptime" },
  { name: "Google Ads (PMax)", category: "Marketing Tech", icon: "Target", desc: "AI-driven bidding & search domination", featured: true },
  { name: "Meta Business & CAPI", category: "Marketing Tech", icon: "Share2", desc: "Server-side pixel tracking & visual ads" },
  { name: "Klaviyo & HubSpot", category: "Marketing Tech", icon: "Mail", desc: "Automated retention & email workflows" },
  { name: "Make & n8n Automation", category: "Marketing Tech", icon: "Zap", desc: "Autonomous multi-app webhook orchestration" },
  { name: "GA4 & Server GTM", category: "Analytics & CRM", icon: "BarChart", desc: "Cookie-proof attribution tracking", featured: true },
  { name: "Salesforce & Pipedrive", category: "Analytics & CRM", icon: "Briefcase", desc: "Enterprise pipeline management" },
  { name: "Looker Studio BI", category: "Analytics & CRM", icon: "PieChart", desc: "Real-time executive performance dashboards" },
  { name: "PostgreSQL & Prisma", category: "Analytics & CRM", icon: "HardDrive", desc: "Ultra-fast relational cloud storage" }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What makes OrionPulse Technologies different from traditional marketing agencies?",
    answer: "Traditional agencies rely on manual execution and slow monthly reports. OrionPulse combines deep AI automation, bespoke web software engineering, and data-driven performance marketing into a unified Growth Engine. We build autonomous AI chatbots, programmatic SEO engines, and automated sales pipelines that work 24/7 to scale your business at fraction of traditional costs."
  },
  {
    id: "faq-2",
    category: "Services & AI",
    question: "How do your AI Chatbots and Automation agents work for my business?",
    answer: "We train custom AI models (powered by Google Gemini) using your company knowledge base, service FAQs, pricing, and CRM data. These AI agents handle 24/7 web chat, WhatsApp inquiries, instant lead qualification, and automatic calendar scheduling, syncing directly with your sales team."
  },
  {
    id: "faq-3",
    category: "Timeline",
    question: "How fast can we launch and see tangible results?",
    answer: "Our onboarding takes under 48 hours. Paid ad campaigns (Google & Meta Ads) and instant AI chatbots are launched within 5-7 days. Website re-designs take 2-4 weeks. Organic SEO and content engines show momentum within 30-60 days."
  },
  {
    id: "faq-4",
    category: "Pricing & ROI",
    question: "Do you offer guaranteed performance metrics or contracts?",
    answer: "Yes! We set clear KPI targets (CPA reduction, ROAS targets, website speed scores, and qualified leads) in our growth agreement. We offer flexible month-to-month retainers as well as performance-tiered revenue share models for qualified partners."
  },
  {
    id: "faq-5",
    category: "General",
    question: "Is OrionPulse suitable for startups, local businesses, or enterprise companies?",
    answer: "We work with ambitious businesses across all growth stages. Our Starter plan is crafted for high-growth local businesses and regional practices, while our Scale and Enterprise plans serve venture-backed SaaS, fintech, e-commerce, and real estate leaders."
  },
  {
    id: "faq-6",
    category: "Services & AI",
    question: "Will I have a dedicated project manager and team?",
    answer: "Absolutely. Every client is assigned a dedicated Senior Growth Strategist and Technical Lead available via Slack, WhatsApp, and weekly Zoom strategy reviews."
  },
  {
    id: "faq-7",
    category: "Timeline",
    question: "What is required from our team during the onboarding phase?",
    answer: "We make onboarding effortless. We collect brand guidelines, existing account access (Google Ads, Meta, Analytics, CRM), and conduct a 45-minute discovery call. Our team handles 100% of the strategy, copywriting, technical build, and optimization."
  }
];

export const WHY_US_FEATURES = [
  {
    title: "AI-Powered Speed & Efficiency",
    desc: "We leverage Gemini AI models to execute campaigns, build code, and automate customer responses 10x faster than traditional agencies.",
    icon: "Cpu"
  },
  {
    title: "Transparent Real-Time Dashboards",
    desc: "Zero hidden metrics or confusing spreadsheets. Access a live 24/7 BI dashboard showing exact ROAS, leads, CPA, and traffic lift.",
    icon: "Activity"
  },
  {
    title: "Apple-Caliber Design & Speed",
    desc: "Sub-500ms load speeds with sleek, luxury design interfaces that command instant industry respect and conversion trust.",
    icon: "Sparkles"
  },
  {
    title: "End-to-End Growth Architecture",
    desc: "From initial keyword research and ad creative to automated CRM lead follow-up and retention emails, we manage the full funnel.",
    icon: "ShieldCheck"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Deep Growth Audit & AI Analysis",
    subtitle: "Uncovering Hidden Bottlenecks",
    description: "We analyze your website velocity, SEO positions, ad account efficiency, and CRM friction points using custom AI diagnostic tools.",
    duration: "Days 1 - 3",
    deliverable: "Comprehensive 25-Page Growth Audit & Revenue Gap Roadmap"
  },
  {
    step: "02",
    title: "Growth Blueprint & Architecture",
    subtitle: "Engineering Your Moat",
    description: "We design high-converting wireframes, craft high-intent ad creative scripts, and structure programmatic SEO keyword funnels.",
    duration: "Days 4 - 7",
    deliverable: "Custom UX Prototypes, Ad Creative Deck & AI Bot Blueprint"
  },
  {
    step: "03",
    title: "Rapid Execution & Deployment",
    subtitle: "Turning On the Engine",
    description: "Our engineering and marketing teams launch your new web application, deploy Gemini AI bots, and trigger live performance ad campaigns.",
    duration: "Week 2 - 3",
    deliverable: "Live Website, AI Chatbot Deployment, Google & Meta Ads Live"
  },
  {
    step: "04",
    title: "AI Automation & Workflow Sync",
    subtitle: "24/7 Autonomous Lead Capture",
    description: "We connect web forms and ad leads directly to instant WhatsApp/SMS follow-up bots, calendar booking, and CRM deal pipelines.",
    duration: "Week 3",
    deliverable: "Automated Lead Routing, Multi-Channel Email/SMS Flows"
  },
  {
    step: "05",
    title: "Hyper-Optimization & Scaling",
    subtitle: "Maximizing Compound ROI",
    description: "We conduct daily CRO A/B testing, scale budget on winning ad creatives, and continuously train AI models to double pipeline throughput.",
    duration: "Ongoing",
    deliverable: "Weekly KPI Reviews, Real-Time BI Dashboard & Scale Reports"
  }
];
