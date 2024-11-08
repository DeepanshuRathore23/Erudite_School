import Navbar from "./Components/Navbar";
import AnimatedLineRight from "./Components/AnimatedLineRight";
import AnimatedLineLeft from "./Components/AnimatedLineLeft";
import Welcome from "./Components/Welcome";
import Stats from "./Components/Stats";


function App(){
  return(
    <>
      <Navbar/>
      <AnimatedLineLeft/>
      <AnimatedLineRight/>
      <Welcome/>
      <Stats/>
    </>

  )
}

export default App;