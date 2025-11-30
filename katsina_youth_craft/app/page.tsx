import FocusAreas from "./components/FocusAreas";
import HeroSection from "./components/Hero";
import ImpactReports from "./components/ImpactReports";
import NewsRoom from "./components/NewsRoom";
import OurStory from "./components/OurStory";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FocusAreas/>
      <ImpactReports/>
      <OurStory/>
      <NewsRoom/>
    </>
  );
}
