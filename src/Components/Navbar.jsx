import logo from '../images/school_logo.png';
import backgroundImage from '../images/school.jpeg'
import academics from '../images/academics.png'
import atheletics from '../images/atheletics.png'
import extracurricular from '../images/extracurricular.png'
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import aboutBack from '../images/aboutBack.jpeg'
import academicsBack from '../images/academicsBack.jpg'
import admissionsBack from '../images/admissionsBack.jpeg'
import extracurricularBack from '../images/extracurricularBack.jpeg'
import athleticsBack from '../images/athleticsBack.jpeg'
import StudentLifeBack from '../images/StudentLifeBack.jpeg'
import contactBack from '../images/contactBack.jpeg'



function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/Erudite_School/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const backgroundImages = {
        '/Erudite_School/': backgroundImage,
        '/Erudite_School/about': backgroundImage,
        '/Erudite_School/admissions': admissionsBack,
        '/Erudite_School/academics': academicsBack,
        '/Erudite_School/studentLife': StudentLifeBack,
        '/Erudite_School/athletics': athleticsBack,
        '/Erudite_School/contact': contactBack,
        '/Erudite_School/extracurricular': extracurricularBack,
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="flex">
                {/* Video Background */}
                {isHomePage ? (
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        className="absolute top-0 left-0 w-full h-[85vh] object-cover -z-10"
                    >
                        <source src="https://www.bishopfoley.org/files/galleries/Sequence_01.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={backgroundImages[location.pathname]}
                        alt="background"
                        className="absolute top-0 left-0 w-full h-[85vh] object-cover -z-10"
                    />
                )}
                
                {/* Dark Overlay for the Video Only */}
                <div className="absolute top-0 left-0 w-full h-[85vh] bg-black opacity-30 -z-5"></div>
                
                {/* Centered Text */}
                {isHomePage && 
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 ">
                        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold">READY TO START YOUR NEXT</h1>
                        <h1 className='text-4xl md:text-6xl lg:text-6xl font-bold text-[#d59f0f]'>ADVENTURE?</h1>
                    </div>
                }


                {/* Navbar Content */}
                <div className={`fixed p-5 flex items-center w-full transition-all duration-300 ${isScrolled ? 'bg-[#F6F6F6]' : ''} z-10`}>
                    <div className="left mr-auto">
                        <img src={logo} alt="logo" className={`transition-all duration-300 ${isScrolled ? 'h-14' : 'md:h-32 h-14'} w-auto`} />
                    </div>

                    {/* Center: Navigation Links with Vertical Separators */}
                    <div className={`hidden md:block center flex space-x-6 ${isScrolled ? 'text-black' : 'text-white'}`}>
                        <NavLink
                            to="/Erudite_School/"
                            end
                            className={({isActive}) => `hover:text-[#d59f0f] transition-colors duration-300 ${isActive ? 'text-[#d59f0f]' : ''}`}>
                                Home
                        </NavLink>

                        <NavLink 
                            to="/Erudite_School/about" 
                            className={({isActive}) => `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 ${isActive ? 'text-[#d59f0f]' : ''}`}>
                                About Us
                        </NavLink>

                        <NavLink 
                            to="/Erudite_School/admissions" 
                            className={({isActive}) => `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 ${isActive ? 'text-[#d59f0f]' : ''}`}>
                                Admissions
                        </NavLink>

                        <NavLink 
                            to="/Erudite_School/academics" 
                            className={({isActive}) => `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 ${isActive ? 'text-[#d59f0f]' : ''}`}>
                                Academics
                        </NavLink>

                        <NavLink 
                            to="/Erudite_School/studentLife" 
                            className={({isActive}) => `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 ${isActive ? 'text-[#d59f0f]' : ''}`}>
                                Student Life
                        </NavLink>

                        <NavLink 
                            to="/Erudite_School/athletics" 
                            className={({isActive}) => `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 ${isActive ? 'text-[#d59f0f]' : ''}`}>
                                Athletics
                        </NavLink>

                        <NavLink 
                            to="/Erudite_School/contact" 
                            className={({isActive}) => `border-l border-[#d59f0f] pl-2 hover:text-[#d59f0f] transition-colors duration-300 ${isActive ? 'text-[#d59f0f]' : ''}`}>
                                Contact
                        </NavLink>
                    </div>

                    <div className="right ml-auto">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd8Lb-Z-6O820DpJcYjkP-bamxUL4wBVwmvHqBGvmhjIbUQsg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                            <button className="text-white px-4 py-2 rounded-3xl bg-[#d59f0f] hover:bg-black transition-all duration-300 eas-in-out">
                                APPLY NOW
                            </button>
                        </a>
                        
                    </div>

                    <div className="menu md:hidden ml-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <button className='text-[#d59f0f] text-3xl'>☰</button>
                    </div>
                </div>

            </div>

            {/* Mobile Menu: Links inside a white box when opened */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-5 left-30 pl-20 pr-20 pt-4 pb-4 right-0 bottom-30 bg-white z-10 flex flex-col items-center pt-16">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)} // Make sure you have setIsMenuOpen as a state function
                        className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-[#d59f0f]"
                    >
                        &times; {/* "X" symbol */}
                    </button>

                    <Link to="/Erudite_School/about" className="w-full text-center py-4 border-b border-gray-300 hover:text-[#d59f0f]">About Us</Link>
                    <Link to="/Erudite_School/admissions" className="w-full text-center py-4 border-b border-gray-300 hover:text-[#d59f0f]">Admissions</Link>
                    <Link to="/Erudite_School/academics" className="w-full text-center py-4 border-b border-gray-300 hover:text-[#d59f0f]">Academics</Link>
                    <Link to="/Erudite_School/studentLife" className="w-full text-center py-4 border-b border-gray-300 hover:text-[#d59f0f]">Student Life</Link>
                    <Link to="/Erudite_School/athletics" className="w-full text-center py-4 border-b border-gray-300 hover:text-[#d59f0f]">Athletics</Link>
                    <Link to="/Erudite_School/contact" className="w-full text-center py-4 border-b border-gray-300 hover:text-[#d59f0f]">Contact</Link>
                </div>
            )}
                
            {isHomePage &&
                <div className="boxes flex flex-wrap justify-between w-full p-1 mt-[78vh] mb-[5vh]">
                <div className="box1 w-full sm:w-64 h-48 mx-4 sm:mx-0 sm:ml-16 brightness-110 text-3xl pt-7 pl-5 pr-5 font-bold text-white border border-white shadow-xl" style={{ backgroundColor: '#d59f0f' }}>
                    WHERE WILL YOU VENTURE TO?
                </div>
            
                <Link to='/Erudite_School/academics' className="box2 w-full sm:w-64 h-48 bg-white brightness-110 border border-gray-300 shadow-xl hover:border-[#d59f0f] transition-colors duration-300 mx-4 sm:mx-0 mt-4 sm:mt-0">
                    <div className="img flex justify-center">
                        <img src={academics} alt="" className="h-20 w-20 mt-8" />
                    </div>
                    <div className="text flex justify-center mt-5 font-bold text-[#d59f0f] text-xl">
                        <h2>ACADEMICS</h2>
                    </div>
                </Link>
            
                <Link to='/Erudite_School/athletics' className="box3 w-full sm:w-64 h-48 bg-white brightness-110 border border-gray-300 shadow-xl hover:border-[#d59f0f] transition-colors duration-300 mx-4 sm:mx-0 mt-4 sm:mt-0">
                    <div className="img flex justify-center">
                        <img src={atheletics} alt="" className="h-20 w-20 mt-8" />
                    </div>
                    <div className="text flex justify-center mt-5 font-bold text-[#d59f0f] text-xl">
                        <h2>ATHLETICS</h2>
                    </div>
                </Link>
            
                <Link to='/Erudite_School/extracurricular' className="box4 w-full sm:w-64 h-48 bg-white brightness-110 border border-gray-300 shadow-xl hover:border-[#d59f0f] transition-colors duration-300 mx-4 sm:mx-0 mt-4 sm:mt-0 sm:mr-16">
                    <div className="img flex justify-center">
                        <img src={extracurricular} alt="" className="h-20 w-20 mt-8" />
                    </div>
                    <div className="text flex justify-center mt-5 font-bold text-[#d59f0f] text-xl">
                        <h2>EXTRACURRICULAR</h2>
                    </div>
                </Link>
            </div>
            
            }
        </>
    );
}

export default Navbar;