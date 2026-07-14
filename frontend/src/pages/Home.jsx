import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Topbar from "../components/Topbar";
import Services from "../components/Services";
import Why from "../components/Why";
import Process from "../components/Process";
// import Portfolio from "../components/Portfolio";
// import Testimonials from "../components/Testimonials";
import Project from "../components/Project";
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
      <Process/>
      <Project />
      <Footer />
      {/*
      <Portfolio />
      <Testimonials />
      
       */}
    </>
  );
}

export default Home;