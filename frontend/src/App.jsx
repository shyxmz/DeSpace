import React from 'react';
import bdVideo from "./assets/earth-bg.mp4";
import Navbar from './components/Navbars/Navbar.jsx';
import Hero from './components/Heros/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/Banner.jsx';
import Banner2 from './components/Banner/Banner2.jsx';
import Footer from './components/Footer/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
  });
});


  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={bdVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      {
        /* Service card Section */
      }
      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default App;
