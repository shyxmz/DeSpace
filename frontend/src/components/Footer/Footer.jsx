import React, { useEffect } from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    });
  }, []);

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-gray-200 px-5 relative z-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* First Column - Newsletter */}
            <div className="space-y-6" data-aos="fade-right" data-aos-delay="0">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-200">Be Ready to Grow</h2>
                <p className="text-gray-300" data-aos="fade-up" data-aos-delay="100">
                  Get Exclusive <span className="font-bold text-gray-200">Updates</span> straight to your inbox
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3" data-aos="fade-up" data-aos-delay="200">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-blue-600 text-gray-200 font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Second Column - Quick Links */}
            <div className="grid grid-cols-2 gap-8 md:gap-12" data-aos="fade-up" data-aos-delay="100">
              {/* Quick Links Section 1 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-200">Quick Links</h3>
                <ul className="space-y-3">
                  {['Home', 'About', 'Services', 'Login'].map((item, index) => (
                    <li key={item} data-aos="fade-left" data-aos-delay={150 + index * 50}>
                      <a href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links Section 2 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-200">Resources</h3>
                <ul className="space-y-3">
                  {['Blog', 'Support', 'Contact', 'FAQ'].map((item, index) => (
                    <li key={item} data-aos="fade-left" data-aos-delay={200 + index * 50}>
                      <a href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Third Column - Contact */}
            <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-xl font-bold text-gray-200">Contact Us</h3>
              <div className="space-y-4">
                {[
                  { Icon: HiLocationMarker, text: "IIIT Sri City, Andhra Pradesh" },
                  { Icon: MdMessage, text: "shyammodi1729@gmail.com" },
                  { Icon: MdCall, text: "+91 7780462541" }
                ].map(({ Icon, text }, index) => (
                  <div 
                    key={text}
                    className="flex items-start gap-3"
                    data-aos="fade-up"
                    data-aos-delay={250 + index * 50}
                  >
                    <Icon className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Links section */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div 
              className="flex items-center justify-center gap-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {[
                { Icon: FaGithub, href: "https://github.com/shyxmz" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/shyam-modi-1729zyu/" },
                { Icon: FaInstagram, href: "https://www.instagram.com/shyxm.zz/" }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay={350 + index * 50}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Privacy and Terms */}
            <div 
              className="flex items-center justify-center space-x-4 text-sm"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms & Conditions
              </a>
            </div>

            {/* Copyright */}
            <div 
              className="text-sm text-gray-400"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Copyright &copy; {new Date().getFullYear()} by DeSpace. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;