import Banner from "../component/sections/body/banner/Banner"
import Banner2 from "../component/sections/body/banner2/Banner2"
import Banner3 from "../component/sections/body/banner3/Banner3"
import Kasalar from "../component/sections/body/kasalar/Kasalar"
import Kisayol from "../component/sections/body/kisayol/Kisayol"
import Mobilyalar from "../component/sections/body/mobilya/Mobilyalar"
import OfisMalzemeleri from "../component/sections/body/ofisMalzemeleri/OfisMalzemeleri"
import ResimMalzemeleri from "../component/sections/body/resimMalzemeleri/ResimMalzemeleri"
import Sandalye from "../component/sections/body/sandalye/Sandalye"
import Footer from "../component/sections/footer/Footer"
import SectionSlide from "../component/sections/slide/SectionSlide"



const Home = () => {
  return (
    <>
      <div>
        <SectionSlide />
      </div>
      <div>
        <OfisMalzemeleri />
      </div>
      <div>
        <ResimMalzemeleri />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Sandalye />
      </div>
      <div>
        <Banner2 />
      </div>
      <div>
        <Mobilyalar />
      </div>
      <div>
        <Banner3 />
      </div>
      <div>
        <Kasalar />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Kisayol />
      </div>
    </>
  )
}

export default Home
