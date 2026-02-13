import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventStructure from "@/components/EventStructure";
import AwardsSection from "@/components/AwardsSection";
import RegistrationSection from "@/components/RegistrationSection";
import OrganisersSection from "@/components/OrganisersSection";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <HeroSection />
      <CountdownTimer />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <EventStructure />
      <div className="section-divider" />
      <AwardsSection />
      <div className="section-divider" />
      <RegistrationSection />
      <div className="section-divider" />
      <OrganisersSection />
      <div className="section-divider" />
      <CoordinatorsSection />
      <Footer />
    </div>
  );
};

export default Index;
