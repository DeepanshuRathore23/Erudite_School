import schoolLogo from '../images/school_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return(
        <>
            <div className="footer bg-[#4d4d4d] h-[70vh] w-full mt-20 pt-20 pl-10 pr-10 text-white flex">
                <div className="w-1/4 m-2">
                    <div className="school-logo">
                        <img src={schoolLogo} alt="" className='h-1/2 w-1/2'/>
                    </div>                    
                    <div className="about-school mt-8">
                        At The Erudite Wold School, students receive so much more than an ordinary education. We pride ourselves on creating a unique, exciting environment that embraces all types of learners and promotes growth both academically and personally. Students and families are also welcomed into a dynamic and supportive community. 
                    </div>
                </div>


                <div className="w-1/4 m-2">
                    <div className="line  h-px bg-gray-500 "></div>

                    <div className="addrs mt-6">
                        Yamuna Nagar Raod, Near Bata Chowk, Paonta Sahib, Sirmour, HP, 173025
                    </div>

                    <div className="phone mt-4">
                        Phone1: 9418-1586-04
                    </div>

                    <div className="phone mt-1">
                        Phone2: 7591-0015-33
                    </div>

                    <div className="mail mt-4 flex space-x-2">
                        <div>Email- </div>
                        <a href="mailto:EruditeWS.20@gmail.com">EruditeWS.20@gmail.com</a>
                    </div>

                    <div className="line  h-px bg-gray-500 mt-6"></div>
                </div>


                <div className="w-1/4 m-2">
                    <div className="line h-px bg-gray-500 mb-4"></div>
                    <i className="about-us mt-4">
                        <a href="#" className="hover:text-[#d59f0f] transition-colors duration-300">About TEWS</a>
                    </i>

                    <div className="line h-px bg-gray-500 mt-4 mb-4"></div>
                    <i className="admissions mt-4">
                        <a href="#" className="hover:text-[#d59f0f] transition-colors duration-300">Admissions</a>
                    </i>

                    <div className="line  h-px bg-gray-500 mt-4 mb-4"></div>
                    <i className="academics mt-4">
                        <a href="#" className="hover:text-[#d59f0f] transition-colors duration-300">Academics</a>
                    </i>

                    <div className="line  h-px bg-gray-500 mt-4 mb-4"></div>
                    <i className="student-life mt-4">
                        <a href="#" className="hover:text-[#d59f0f] transition-colors duration-300">Student Life</a>
                    </i>

                    <div className="line  h-px bg-gray-500 mt-4 mb-4"></div>                    
                    <i className="athletics mt-4">
                        <a href="#" className="hover:text-[#d59f0f] transiti on-colors duration-300">Athletics</a>
                    </i>

                    <div className="line  h-px bg-gray-500 mt-4"></div>
                </div>

                <div className="w-1/4 m-2 ">
                    <div className="social space-x-8 flex justify-center">
                        <a className='hover:text-[#d59f0f] duration-300' href="https://www.facebook.com/LRTEWS" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>

                        <a className='hover:text-[#d59f0f] duration-300' href="https://www.youtube.com/@theeruditeworldschool4741" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        
                    </div>
                    
                    <div className="map mt-16">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13759.460639916162!2d77.56703404474821!3d30.43769037470503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f23d533dbc55d%3A0x5e7db0ac5b4d117!2sThe%20Erudite%20World%20School!5e0!3m2!1sen!2sin!4v1731124150901!5m2!1sen!2sin" 
                            width="330" 
                            height="280" 
                            style={{border:0}}
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                    
                </div>
            	
            </div>

            <div className="copyright h-14 w-full bg-[#383838] flex justify-center text-white align-center items-center">
                © Copyright 2024 
                The Erudite World School. All Rights Reserved.

            </div>
        </>
    )
}

export default Footer


