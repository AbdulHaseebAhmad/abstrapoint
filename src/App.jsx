import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Sections/Footer/Footer"
import Hero from "./Sections/Hero"
import SectionFive from "./Sections/SectionFive/SectionFive"
import SectionFour from "./Sections/SectionFour/SectionFour"
import SectionSix from "./Sections/SectionSix/SectionSix"
import SectionSeven from "./Sections/SectionsSeven/SectionSeven"
import SectionThree from "./Sections/SectionThree/SectionThree"
import SectionTwo from "./Sections/SectionTwo/SectionTwo"
 
function App() {

  return (
    <div className="bg-neutralsilver h-screen max-w-[1207px] mx-auto">
      <Navbar />
      <Hero/>
      <SectionTwo/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      {/* <Footer/> */}

      {/* <SectionThree/>
      */}
    </div>
  )
}

export default App


