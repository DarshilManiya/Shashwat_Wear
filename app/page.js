'use client';

import ScrollProgress from '../components/ScrollProgress';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SectionDivider from '../components/SectionDivider';
import CategoriesSection from '../components/CategoriesSection';
import ProcessSection from '../components/ProcessSection';
import InfrastructureSection from '../components/InfrastructureSection';
import StatsSection from '../components/StatsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import CertificationsSection from '../components/CertificationsSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import QuoteCalculator from '../components/QuoteCalculator';
import LaunchCTASection from '../components/LaunchCTASection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <Header />
      <HeroSection />
      <SectionDivider color="var(--dark-slate)" variant="wave" />
      <CategoriesSection />
      <SectionDivider color="var(--navy-blue)" variant="curve" />
      <ProcessSection />
      <InfrastructureSection />
      <SectionDivider color="var(--dark-slate)" variant="wave" />
      <StatsSection />
      <WhyChooseSection />
      <SectionDivider color="var(--navy-blue)" variant="diagonal" />
      <CertificationsSection />
      <PortfolioSection />
      <SectionDivider color="var(--dark-slate)" variant="curve" />
      <TestimonialsSection />
      <QuoteCalculator />
      <LaunchCTASection />
      <SectionDivider color="var(--navy-blue)" variant="wave" />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

