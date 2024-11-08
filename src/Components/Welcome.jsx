import React, {useState, useEffect} from 'react';
import WelcomeStudent from '../images/welcome_student.png';

function Welcome(){
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 400){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        
        <>
            <div className={`main flex p-3 overflow-hidden`}>
                <div className={`left w-2/5 pl-5 ml-5 duration-1000 ${scrolled ? 'translate-x-0' : '-translate-x-full'}`}>
                    {/* //students image */}
                    <img src={WelcomeStudent} alt="img" className='h-4/5 mt-4' />
                </div>

                <div className={`right mt-[10vh] w-2/3 mr-8 duration-1000 ${scrolled ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="welcome-head flex items-center">
                        <div className="welcoming font-bold">WELCOME</div>
                        <div className="welcoming font-bold ml-1"> TO</div>
                        <div className="line w-full h-px bg-gray-300 my-3 ml-12"></div>
                    </div>

                    <div className="welcome-to flex">
                        <div className="school_name w-1/2 text-5xl font-bold mt-8 text-[#d59f0f]">
                            <div className="sub-name mt-2">THE ERUDITE</div>
                            <div className="sub-name mt-2">WORLD</div>
                            <div className="sub-name mt-2">SCHOOL</div>
                        </div>

                        <div className="desc w-1/2 mt-10">
                            <div className="">
                                We are excited that you are considering The Erudite World School (TEWS) for your child's education. Located on Yamuna Nagar Road, near Bata Chowk in Paonta Sahib, Sirmour, Himachal Pradesh (HP), 173025, our school offers a nurturing, co-educational environment focused on academic excellence and holistic development.
                            </div>

                            <div className=" mt-3">
                                Serving students from various nearby areas, we are proud to be part of the vibrant educational community in Himachal Pradesh and look forward to partnering with you in your child's growth and learning journey.                                
                            </div>

                            <div className="btns flex space-x-6 mt-5 font-bold">
                                <div className="about-us">
                                    <button className="about-us bg-[#d59f0f] text-white px-6 py-1 rounded-full hover:bg-black border-2 hover:border-black border-[#d59f0f] transition-all duration-300 ease-in-out">
                                        ABOUT US
                                    </button>
                                </div>
                                <div className="apply">
                                    <button className="apply text-[#d59f0f] px-6 py-1 rounded-full hover:bg-black hover:border-black border-2 border-[#d59f0f] transition-all duration-300 ease-in-out">
                                        APPLY TO TEWS
                                    </button>
                                </div>
                            </div>

                            
                        </div>


                    </div>
                </div>
            </div>
            
        </>
    )
}


export default Welcome;