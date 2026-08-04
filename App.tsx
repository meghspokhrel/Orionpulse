import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { Services } from './components/Services';
import { AiShowcase } from './components/AiShowcase';
import { WhyOrionPulse } from './components/WhyOrionPulse';
import { AboutCompany } from './components/AboutCompany';
import { Portfolio } from './components/Portfolio';
import { CaseStudies } from './components/CaseStudies';
import { ProcessTimeline } from './components/ProcessTimeline';
import { StatsCounter } from './components/StatsCounter';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { TechStack } from './components/TechStack';
import { FAQ } from './components/FAQ';
import { LeadSection } from './components/LeadSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [isCallBooking, setIsCallBooking] = useState(false);
  const [selectedPresetService, setSelectedPresetService] = useState<string | undefined>(undefined);

  const handleOpenProposal = (preset?: string) => {
    setIsCallBooking(false);
    setSelectedPresetService(preset);
    setProposalModalOpen(true);
  };

  const handleOpenStrategyCall = () => {
    setIsCallBooking(true);
    setSelectedPresetService('1-on-1 Growth Strategy Call');
    setProposalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans relative overflow-hidden selection:bg-[#0A84FF]/30 selection:text-[#00E5FF]">
      
      {/* Sophisticated Dark Radial & Grid Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#0A84FF22] via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 1. Premium Sticky Navigation */}
      <Navbar 
        onOpenProposal={() => handleOpenProposal()} 
        onOpenStrategyCall={handleOpenStrategyCall} 
      />

      {/* 2. Full-Screen Hero */}
      <Hero 
        onOpenProposal={() => handleOpenProposal()} 
        onOpenStrategyCall={handleOpenStrategyCall} 
      />

      {/* 3. Trusted-By Logos & Certifications */}
      <TrustMarquee />

      {/* 4. Services Section (15 Services + Tab Filters) */}
      <Services onOpenProposal={handleOpenProposal} />

      {/* 5. Live AI Automation Showcase & Diagnostic Sandbox */}
      <AiShowcase />

      {/* 6. Why OrionPulse Comparison Matrix */}
      <WhyOrionPulse />

      {/* 7. About Corporate Entity (OrionPulse Technologies OPC Pvt Ltd) */}
      <AboutCompany />

      {/* 8. Interactive Portfolio & Modal Previews */}
      <Portfolio onOpenProposal={handleOpenProposal} />

      {/* 9. Deep Case Studies & Interactive ROI Simulator */}
      <CaseStudies onOpenProposal={() => handleOpenProposal('ROI Growth Simulator')} />

      {/* 10. 5-Step Process Timeline */}
      <ProcessTimeline onOpenProposal={() => handleOpenProposal('Process Onboarding')} />

      {/* 11. Animated Statistics Counter */}
      <StatsCounter />

      {/* 12. Verified Testimonials Carousel */}
      <Testimonials />

      {/* 13. Transparent Pricing Plans & Custom Scope Calculator */}
      <Pricing onOpenProposal={handleOpenProposal} />

      {/* 14. Modern Enterprise Technology Stack */}
      <TechStack />

      {/* 15. Frequently Asked Questions Accordion */}
      <FAQ />

      {/* 16. Lead Generation & Interactive Proposal Form */}
      <LeadSection />

      {/* 17. Direct Corporate Contact & Address */}
      <ContactSection />

      {/* 18. Professional Corporate Footer */}
      <Footer />

      {/* Global Interactive Proposal & Call Booking Modal */}
      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
        presetService={selectedPresetService}
        isCallBooking={isCallBooking}
      />

      {/* Floating 24/7 AI Assistant Chat Widget */}
      <ChatWidget onOpenProposal={() => handleOpenProposal('AI Chat Assistant')} />

    </div>
  );
}

