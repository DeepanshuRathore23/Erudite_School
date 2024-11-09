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
                    
                    
                </div>
            	
            </div>
        </>
    )
}

export default Footer


