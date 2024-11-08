import React, {useState} from "react";

function Stats(){
    const [activeTab, setActiveTab] = useState('Academics');  //default tab is academics
    return(
        <>
            <div className="main">

                {/* Headings of all the tabs */}
                <div className="head flex">
                    <div className={`head h-16 w-1/4 flex items-center justify-center text-[#969696] bg-gray-300`}>Select a tab</div>

                    <button onClick={() => setActiveTab('Academics')} className={`head h-16 w-1/4 flex items-center justify-center text-[#d59f0f] text-2xl font-bold ${activeTab == 'Academics' ? 'bg-[#FCF9F2]' : ''}`}>Academics</button>

                    <button onClick={() => setActiveTab('Athletics')} className={`head h-16 w-1/4 flex items-center justify-center text-[#653331] text-2xl font-bold ${activeTab == 'Athletics' ? 'bg-[#F5EEED]' : ''} `}>Athletics</button>

                    <button onClick={() => setActiveTab('Extracurricular')} className={`head h-16 w-1/4 flex items-center justify-center text-[#034C8C] text-2xl font-bold ${activeTab == 'Extracurricular' ? 'bg-[#EDF5FC]' : ''} `}>Extracurricular</button>
                </div>


                {/* Academics section */}
                <div className={`details flex ${activeTab == 'Academics' ? '' : 'hidden'}`}>
                    <div className={`left h-[60vh] w-1/4 flex justify-center text-white font-bold text-4xl bg-[#d59f0f] pt-16 pl-10 pr-10 `}>STATS THAT SET US APART</div>

                    <div className="academics-details h-[60vh] w-3/4 flex bg-[#FCF9F2]">
                        <div className="w-1/3">
                            <div className="sub-head  flex items-center justify-center mt-32 text-6xl font-bold text-[#d59f0f]">1000+ </div>
                            <div className="info  flex items-center justify-center p-4 pl-10 pr-10">Over 1,000 hours of dedicated academic support are available each year through tutoring, study sessions, and mentoring.</div>
                        </div>

                        <div className="w-1/3">
                            <div className="sub-head  flex items-center justify-center mt-32 text-6xl font-bold text-[#d59f0f]">15 : 1</div>
                            <div className="info  flex items-center justify-center p-4 pl-10 pr-10">The average student-to-teacher ratio is 15:1, with an average class size of 20.</div>
                        
                        </div>
                        <div className="w-1/3">
                            <div className="sub-head  flex items-center justify-center mt-32 text-6xl font-bold text-[#d59f0f]">12+</div>
                            <div className="info  flex items-center justify-center p-4 pl-10 pr-10">A strong emphasis on STEM with 12+ specialized courses in coding, robotics, and laboratory sciences..</div>

                        </div>
                    </div>
                </div>


                {/* Athletics Section */}
                <div className={`details flex ${activeTab == 'Athletics' ? '' : 'hidden'}`}>
                    <div className="left h-[60vh] w-1/4 flex justify-center text-white font-bold text-4xl bg-[#653331] pt-16 pl-10 pr-10">STATS THAT SET US APART</div>

                    <div className="academics-details h-[60vh] w-3/4 flex bg-[#F5EEED]">
                        <div className="w-1/3">
                            <div className="sub-head  flex items-center justify-center mt-32 text-6xl font-bold text-[#653331]">20+ </div>
                            <div className="info  flex items-center justify-center p-4 pl-10 pr-10">TEWS offers 20+ athletic teams across various sports, including soccer, basketball, track, and swimming.</div>
                        </div>

                        <div className="w-1/3">
                            <div className="sub-head  flex items-center justify-center mt-32 text-6xl font-bold text-[#653331]">12</div>
                            <div className="info  flex items-center justify-center p-4 pl-10 pr-10">TEWS is home to many 12-season athletes who excel in balancing academics and athletics.</div>
                        
                        </div>
                        <div className="w-1/3">
                            <div className="sub-head  flex items-center justify-center mt-32 text-6xl font-bold text-[#653331]">15+</div>
                            <div className="info  flex items-center justify-center p-4 pl-10 pr-10">
                            Over 15 regional and district championships won in the past decade, including 2 state championships.</div>

                        </div>
                    </div>
                </div>


                {/* Extracurricular Section */}
                <div className={`details flex ${activeTab == 'Extracurricular' ? '' : 'hidden'}`}>
                    <div className="left h-[60vh] w-1/4 flex justify-center text-white font-bold text-4xl bg-[#034C8C] pt-16 pl-10 pr-10">STATS THAT SET US APART</div>

                    <div className="academics-details h-[60vh] w-3/4 flex bg-[#EDF5FC]">
                        <div className="w-1/3">
                            <div className="sub-head  flex items-center justify-center mt-32 text-6xl font-bold text-[#034C8C]">90% </div>
                            <div className="info  flex items-center justify-center p-4 pl-10 pr-10">Over 90% of our students are involved in at least one extracurricular activity or club.</div>
                        </div>

                        <div className="w-1/3">
                            <div className="sub-head  flex items-center justify-center mt-32 text-6xl font-bold text-[#034C8C]">10+</div>
                            <div className="info  flex items-center justify-center p-4 pl-10 pr-10">TEWS Students have the opportunity to join 10+ clubs, ranging from robotics to arts, and culinary to medical science.</div>
                        
                        </div>
                        <div className="w-1/3">
                            <div className="sub-head  flex items-center justify-center mt-32 text-6xl font-bold text-[#034C8C]">5000+</div>
                            <div className="info  flex items-center justify-center p-4 pl-10 pr-10">TEWS Students collectively contribute over 5,000 hours of community service annually through service projects, volunteer clubs, and outreach programs.</div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Stats;