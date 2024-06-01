import "./global.scss";
import Navigations from "./components/Navigations";
import Hero from "./components/Hero";
import SolarBanner from "./components/SolarBanner";
import Mission from "./components/Mission";
import AboutUs from "./components/AboutUs";
import Boxes from "./components/Boxes";
import HeroBanner from "./components/HeroBanner";
import ServicesBanner from "./components/ServicesBanner";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navigations />
      <Hero />
      <HeroBanner />
      <Mission />
      <AboutUs />
      <SolarBanner />
      <ServicesBanner />
      <Boxes />
      <Footer />
    </>
  );
}

export default App;
