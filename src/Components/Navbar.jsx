import logo from '../images/school_logo.png';
import backgroundImage from '../images/school.jpeg'
import academics from '../images/academics.png'
import atheletics from '../images/atheletics.png'
import extracurricular from '../images/extracurricular.png'
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/Erudite_School/';

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
                        src={backgroundImage}
                        alt="background"
                        className="absolute top-0 left-0 w-full h-[85vh] object-cover -z-10"
                    />
                )}
                
                {/* Dark Overlay for the Video Only */}
                <div className="absolute top-0 left-0 w-full h-[85vh] bg-black opacity-30 -z-5"></div>
                
                {/* Centered Text */}
                {isHomePage && 
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 ">
                        <h1 className="text-2xl md:text-2xl font-bold">READY TO START YOUR NEXT</h1>
                        <h1 className='text-6xl md:text-6xl font-bold text-[#d59f0f]'>ADVENTURE?</h1>
                    </div>
                }


                {/* Navbar Content */}
                <div className={`fixed p-5 flex items-center w-full transition-all duration-300 ${isScrolled ? 'bg-[#F6F6F6]' : ''} z-10`}>
                    <div className="left mr-auto">
                        <img src={logo} alt="logo" className={`transition-all duration-300 ${isScrolled ? 'h-14 w-auto' : 'h-32 w-auto'}`} />
                    </div>

                    {/* Center: Navigation Links with Vertical Separators */}
                    <div className={`center flex space-x-6 ${isScrolled ? 'text-black' : 'text-white'}`}>
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
                        <button className="text-white px-4 py-2 rounded-3xl transition-colors duration-300" style={{backgroundColor:"#d59f0f"}}>
                            APPLY NOW
                        </button>
                    </div>
                </div>

            </div>
                
            {
                <div className="boxes flex justify-between w-full p-1 mt-[78vh] mb-[5vh]">
                    <div className="box1 w-64 h-48 ml-16 brightness-110 text-3xl pt-7 pl-5 pr-5 font-bold text-white border border-white  shadow-xl" style={{backgroundColor:'#d59f0f'}}>
                        WHERE WILL YOU VENTURE TO?
                    </div>
                    
                    <a href='#' className="box2 w-64 h-48 bg-white brightness-110 border border-gray-300 shadow-xl hover:border-[#d59f0f] transition-colors duration-300">
                        <div className="img flex justify-center">
                            <img src={academics} alt="" className='h-20 w-20 mt-8'/>
                        </div>
                        <div className="text flex justify-center mt-5 font-bold text-[#d59f0f] text-xl">
                            <h2>ACADEMICS</h2>
                        </div>
                    </a>

                    <a href='#' className="box3 w-64 h-48 bg-white brightness-110 border border-gray-300 shadow-xl hover:border-[#d59f0f] transition-colors duration-300">
                        <div className="img flex justify-center">
                            <img src={atheletics} alt="" className='h-20 w-20 mt-8'/>
                        </div>
                        <div className="text flex justify-center mt-5 font-bold text-[#d59f0f] text-xl">
                            <h2>ATHELETICS</h2>
                        </div>
                    </a>

                    <a href='#' className="box4 w-64 h-48 bg-white mr-16 brightness-110 border border-gray-300 shadow-xl hover:border-[#d59f0f] transition-colors duration-300">
                        <div className="img flex justify-center">
                            <img src={extracurricular} alt="" className='h-20 w-20 mt-8'/>
                        </div>
                        <div className="text flex justify-center mt-5 font-bold text-[#d59f0f] text-xl">
                            <h2>EXTRACURRICULAR</h2>
                        </div>
                    </a>
                </div>
            }

            


        </>
    );
}

export default Navbar;

