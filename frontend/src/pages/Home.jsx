import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Topbar from "../components/Topbar";
import Services from "../components/Services";
import Why from "../components/Why";
import Process from "../components/Process";
import Tech from "../components/Tech";
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
      <Why />
      <Tech />
      <Services />
      <Process/>
      <Tech />
      <Project />
      <Footer />
      {/*
      <Testimonials />
      
       */}
    </>
  );
}

export default Home;