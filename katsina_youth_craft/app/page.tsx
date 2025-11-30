import FocusAreas from "./components/FocusAreas";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import ImpactReports from "./components/ImpactReports";
import NewsRoom from "./components/NewsRoom";
import OurPartnersSection from "./components/OurPartners";
import OurStory from "./components/OurStory";
import TestimonialSection from "./components/Testimonials";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FocusAreas/>
      <ImpactReports/>
      <OurStory/>
      <NewsRoom/>
      <OurPartnersSection/>
      <TestimonialSection/>
      <Footer/>
    </>
  );
}
