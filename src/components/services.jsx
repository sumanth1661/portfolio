import React from 'react';
import uiux from '../assets/uiux.png';
import webDev from '../assets/webdev.png';
import illustration from '../assets/illustration.png';
import graphicDesign from '../assets/graphicdesign.png';
import branding from '../assets/branding.png';
import rightArrow from '../assets/rightarrow.svg';
import underline from '../assets/underline.png';

const Services = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8 font-raleway">
      <div className="container mx-auto flex flex-col items-start">
        <div className="text-left mb-12">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-vt323 font-raleway mb-0">
            My Services
          </h2>
          <img src={underline} alt="underline" className="w-32 md:w-48 mb-6" />
        </div>

        <div className="space-y-16">
          {[
            { title: "UI/UX Design", img: uiux, desc: "From wireframes to prototypes, I create intuitive interfaces that enhance user interaction and drive engagement. Ranging from mobile apps, websites, and dashboards, I create seamless interfaces that stand out." },
            { title: "Web Development", img: webDev, desc: "I develop sleek and optimized websites that deliver a fast, user-friendly experience across devices. My websites are customizable, scalable, and responsive, ensuring they’re future-ready." },
            { title: "Illustrations", img: illustration, desc: "I bring ideas to life with illustrations that connect deeply with audiences. I incorporate modern, minimal, and detailed art styles based on user desires." },
            { title: "Graphic Design", img: graphicDesign, desc: "From posters to digital media, I design graphics that capture attention and communicate effectively, whether for promotions or heartwarming events." },
            { title: "Branding", img: branding, desc: "I help your brand stand out with unique and cohesive designs that capture your essence, from colors that resonate with your ideas to logos that make an impact." },
          ].map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="w-full md:w-1/4 mb-4 md:mb-0 max-w-xs transition-transform transform hover:scale-105">
                <img src={service.img} alt={service.title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-[#A9A9A9] leading-relaxed">
                  {service.desc}
                </p>
                <a href="#more" className="text-[#A9A9A9] flex items-center mt-3 justify-center md:justify-start transition-transform transform hover:scale-105">
                  Learn More <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
