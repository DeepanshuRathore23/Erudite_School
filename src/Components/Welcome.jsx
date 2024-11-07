import WelcomeStudent from '../images/welcome_student.png';
function Welcome(){
    return (
        <>
            <div className="main flex">
                <div className="left w-2/5 pl-5 ml-5">
                    {/* //students image */}
                    <img src={WelcomeStudent} alt="img" className='h-3/4' />
                </div>

                <div className="right mt-[16vh]">
                    <div className="welcome-head">
                        <div className="welcoming"></div>
                        <div className="line"></div>
                    </div>

                    <div className="welcome-to">
                        <div className="school-name"></div>
                        <dic className="desc"></dic>
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default Welcome;