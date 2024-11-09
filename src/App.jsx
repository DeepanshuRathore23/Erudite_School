import Navbar from "./Components/Navbar";
import AnimatedLineRight from "./Components/AnimatedLineRight";
import AnimatedLineLeft from "./Components/AnimatedLineLeft";
import Welcome from "./Components/Welcome";
import Stats from "./Components/Stats";
import Future from "./Components/Future";
import Footer from "./Components/Footer";



function App(){
  return(
    <>
      <Navbar/>
      <AnimatedLineLeft/>
      <AnimatedLineRight/>
      <Welcome/>
      <Stats/>
      <Future/>
      <Footer/>
    </>

  )
}

export default App;