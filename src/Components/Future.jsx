function Future(){
    return (
        <>
            <div className="main m-4">
                <div className="line flex justify-center">
                    <div className="w-1 h-32 bg-[#d59f0f]"></div>
                </div>

                <div className="bright-future mt-20 space-y-3">
                    <div className="flex justify-center font-bold text-5xl "> YOUR FUTURE IS BRIGHT</div>
                    <div className="flex justify-center font-bold text-5xl">WITH TEWS</div>
                </div>

                <div className="btns flex justify-center space-x-40 mt-10 font-bold">
                    <div className="about-us">
                        <button className="about-us bg-[#d59f0f] text-white px-6 py-1 rounded-full hover:bg-black border-2 hover:border-black border-[#d59f0f] transition-all duration-300 ease-in-out">
                            ABOUT US
                        </button>
                    </div>
                    <div className="apply">
                        <button className="apply text-[#d59f0f] px-6 py-1 rounded-full hover:bg-black hover:border-black border-2 border-[#d59f0f] transition-all duration-300 ease-in-out">
                            EXPLORE ACADEMICS
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Future;