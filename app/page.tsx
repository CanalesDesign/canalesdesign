'use client';
import CookiesBanner from './components/cookies/CookiesBanner';
import BenefitsSection from './components/organisms/benefits_section/BenefitsSection';
import CTASection from './components/organisms/cta_section/CTASection';
import CustomersSection from './components/organisms/customers_section/CustomersSection';
import FAQSection from './components/organisms/faq_section/FAQSection';
import FooterSection from './components/organisms/footer__section/FooterSection';
import HeroSection from './components/organisms/hero_section/HeroSection';
import ReviewsSection from './components/organisms/reviews_section/ReviewsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <ReviewsSection />
      <CustomersSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <CookiesBanner />
    </main>
  );
}
