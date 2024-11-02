import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bdVideo from './assets/earth-bg.mp4';
import Navbar from './components/Navbars/Navbar';
import Hero from './components/Heros/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';
import SpaceQuiz from './components/Features/SpaceQuiz';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <Router>
            <div className="">
                <Routes>
                    {/* Home Route */}
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Navbar />
                                <div className="h-[700px] relative">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
                                    >
                                        <source src={bdVideo} type="video/mp4" />
                                    </video>
                                    <Hero />
                                </div>
                                <Services />
                                <Banner />
                                <Banner2 />
                                <Footer />
                            </>
                        } 
                    />

                    {/* Quiz Route (No Navbar) */}
                    <Route path="/quiz" element={<SpaceQuiz />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;