import AboutMe from "./components/About";
import CardsGrid from "./components/cards/CardsGrid";
import ContactUs from "./components/contacts/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import "./app.css";
import ClientReviewSlider from "./components/ClientReviewSlider";
import LatestNewsSection from "./components/LatestNews";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsGrid />
      <AboutMe />
      <PortfolioSection />
      <LatestNewsSection />
      <ClientReviewSlider />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
