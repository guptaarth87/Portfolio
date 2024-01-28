// LandingPage.jsx
import React, { useState } from 'react';
import Hero from '../Components/Hero/Hero';
import Experience from '../Components/Experience/Experience';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Education from '../Components/Education/Education';
import CertificatesAndBadges from '../Components/CertificatesAndBadges/CertificatesAndBadges';
import DownloadResume from '../Components/DownloadResume/DownloadResume';
import Footer from '../Components/Footer/Footer';
import { HashLink } from 'react-router-hash-link';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`h-screen flex overflow-hidden ${isOpen ? 'ml-0' : 'ml-0'}`}> 
      {/* Sidebar */}
      <div
        className={`background-clr transition-all transform ease-in-out duration-300 fixed h-full w-96 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        
      >  
     

        {/* Sidebar Content */}
        <div className="p-4 text-white ">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Sections</h1>
            <button onClick={closeSidebar} className="text-gray-400 focus:outline-none"> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Sidebar Links */}
          <ul className="mt-4">
            <li><HashLink className="py-2 font-semibold text-2xl transition-transform hover:underline ">Go To Top</HashLink></li><br></br>
            <li> <HashLink className="py-2 font-semibold text-2xl transition-transform hover:underline ">Experience</HashLink></li><br></br>
            <li> <HashLink className="py-2 font-semibold text-2xl transition-transform hover:underline ">Technologies Known</HashLink></li><br></br>
            <li> <HashLink className="py-2 font-semibold text-2xl transition-transform hover:underline ">Projects</HashLink></li><br></br>
            <li><HashLink className="py-2 font-semibold text-2xl transition-transform hover:underline ">Education</HashLink></li><br></br>
            <li><HashLink className="py-2 font-semibold text-2xl transition-transform hover:underline ">Certificates and Badges</HashLink></li><br></br>
            <DownloadResume/>
           
           
            {/* Add more links as needed */}
          </ul>
        </div>
      
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Your page content goes here */}
        <header className=" background-clr p-4">
       
          <button onClick={toggleSidebar} className=" text-gray-600 text-2xl">
          <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
           </svg>
          
          </button>

          
         
        </header>
       
        <main className="flex-1 overflow-x-hidden overflow-y-auto background-clr p-4">
          {/* Page content goes here */}
          <div className="container">
           <Hero/>
           <Experience/>
          
           <Skills/>
           <Projects/>
           <Education/>
           <CertificatesAndBadges/>
          
           </div>
           <Footer/>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
