import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Topbar from "../components/Topbar";
import Services from "../components/Services";
import Why from "../components/Why";
// import Portfolio from "../components/Portfolio";
// import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Topbar/>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Why />
      <Footer />
      {/*
      <Portfolio />
      <Testimonials />
      <Contact />
       */}
    </>
  );
}

export default Home;