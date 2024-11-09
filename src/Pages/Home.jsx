import Navbar from "../Components/Navbar";
import AnimatedLineLeft from "../Components/AnimatedLineLeft";
import AnimatedLineRight from "../Components/AnimatedLineRight";
import Welcome from "../Components/Welcome";
import Stats from "../Components/Stats";
import Future from "../Components/Future";
import Footer from "../Components/Footer";

function Home(){
    return(
        <>
            <AnimatedLineLeft/>
            <AnimatedLineRight/>
            <Welcome/>
            <Stats/>
            <Future/>
        </>
    )
}

export default Home;