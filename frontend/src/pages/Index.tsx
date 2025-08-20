import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PremiumFleet } from "@/components/PremiumFleet";
import { AboutSection } from "@/components/AboutSection";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLoading } from "@/contexts/LoadingContext";


const Index = () => {
  const { isInitialLoading } = useLoading();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: carsRef, isVisible: carsVisible } = useScrollAnimation();
  

  

  
  if (isInitialLoading) {
    return <LoadingSpinner />;
  }
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    "name": "Vismart Car Hire - Premium Car Rental Kenya",
    "description": "Premium Car Hire Services for vehicles in Kenya. Quality service and competitive prices.",
    "url": "https://Vismart Car Hire.com",
    "telephone": "+254-720-813-111",
    "email": "vismartcarhire@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "T Plaza, 4th Floor",
      "addressLocality": "Thika",
      "addressRegion": "Kiambu County",
      "postalCode": "01000",
      "addressCountry": "KE"
    },
    "priceRange": "KSH 3000-15000",
    "openingHours": "Mo-Su 08:00-18:00",
    "paymentAccepted": ["Cash", "Credit Card", "Mobile Money"],
    "currenciesAccepted": "KES",

    "sameAs": [
      "https://facebook.com/Vismart Car Hire",
      "https://instagram.com/Vismart Car Hire",
      "https://twitter.com/Vismart Car Hire"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Vismart Car Hire - Premium Car Rental Kenya | Best Vehicle Rental Services</title>
        <meta name="description" content="Premium car rental services in Kenya. Luxury vehicles, 24/7 support, competitive prices. Book now for business, leisure & special occasions. 500+ satisfied customers." />
        <meta name="keywords" content="car rental Kenya, vehicle rental Nairobi, luxury car hire, Premium Car Hire Services, airport transfer Kenya, wedding car rental, corporate fleet" />
        <meta name="author" content="Vismart Car Hire" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#dc2626" />
        <meta property="og:title" content="Vismart Car Hire - Premium Car Rental Kenya | Best Vehicle Rental Services" />
        <meta property="og:description" content="Discover luxury and reliability with our premium fleet. Perfect for business trips, family adventures, and special occasions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Vismart Car Hire.com/" />
        <meta property="og:site_name" content="Vismart Car Hire" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:image" content="https://Vismart Car Hire.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Vismart Car Hire" />
        <meta name="twitter:title" content="Vismart Car Hire - Premium Car Rental Kenya" />
        <meta name="twitter:description" content="Premium car rental services with luxury vehicles and exceptional customer service in Kenya." />
        <meta name="twitter:image" content="https://Vismart Car Hire.com/og-image.jpg" />
        <link rel="canonical" href="https://Vismart Car Hire.com/" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="relative">
          <Header />
          <Hero />
        </div>
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-[#141414]">
          <PremiumFleet />
          <AboutSection />
          <div className={`bg-gray-50 dark:bg-[#141414] texture-subtle transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`} ref={statsRef}>
            <Stats />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;