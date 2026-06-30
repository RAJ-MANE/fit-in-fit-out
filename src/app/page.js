"use client";
import { useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AwardsMarquee from "@/components/AwardsMarquee";
import ServicesSection from "@/components/ServicesSection";
import AssessmentSection from "@/components/AssessmentSection";
import ConsultationSection from "@/components/ConsultationSection";
import WellnessSection from "@/components/WellnessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import GalleryBento from "@/components/GalleryBento";
import PodcastsSection from "@/components/PodcastsSection";
import EventsSection from "@/components/EventsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import PromoPopup from "@/components/PromoPopup";
import VideoModal from "@/components/VideoModal";
import ImageLightbox from "@/components/ImageLightbox";

export default function Home() {
  const [introActive, setIntroActive] = useState(true);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleIntroComplete = () => {
    setIntroActive(false);
  };

  const handleVideoSelect = (id) => {
    setSelectedVideoId(id);
  };

  const handleCloseModal = () => {
    setSelectedVideoId(null);
  };

  return (
    <>
      {/* Cinematic Intro Animation */}
      {introActive && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Main Page Elements */}
      <ScrollProgress />
      <Header />
      
      <main style={{ opacity: introActive ? 0 : 1, transition: "opacity 0.6s ease" }}>
        <HeroSection />
        <AboutSection />
        <AwardsMarquee onPreview={setPreviewImage} />
        <ServicesSection />
        <AssessmentSection />
        <ConsultationSection />
        <WellnessSection />
        <WhyChooseSection />
        <GalleryBento onPreview={setPreviewImage} />
        <PodcastsSection onVideoSelect={handleVideoSelect} />
        <EventsSection />
        <CtaBanner />
        <Footer />
      </main>

      {/* Floating Conversion WhatsApp Button */}
      <FloatingCta />

      {/* Periodic Consult Promo Popup */}
      <PromoPopup />

      {/* Dynamic YouTube Video Modal */}
      <VideoModal videoId={selectedVideoId} onClose={handleCloseModal} />

      {/* Global Image Preview Lightbox */}
      <ImageLightbox image={previewImage} onClose={() => setPreviewImage(null)} />
    </>
  );
}
