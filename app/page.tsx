import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonals from "./components/Testimonals";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Testimonals />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
