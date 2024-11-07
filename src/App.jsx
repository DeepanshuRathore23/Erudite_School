import Navbar from "./Components/Navbar";
import AnimatedLineRight from "./Components/AnimatedLineRight";
import AnimatedLineLeft from "./Components/AnimatedLineLeft";
import Welcome from "./Components/Welcome";
function App(){
  return(
    <>
      <Navbar/>
      <AnimatedLineLeft/>
      <AnimatedLineRight/>
      <Welcome/>
    </>

  )
}

export default App;