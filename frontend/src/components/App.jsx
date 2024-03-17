import "../assets/carousel.css"
import Sidebar from "./Sidebar";
import MainHero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Contacts from "./Contacts";
import RandomImages from "./Random-Image";
import Carousel from "./Carousel";
import Footer from "./Footer";


function App() {
  return (
    <>
      <RandomImages/>
    <Sidebar>
      <MainHero id="home" />
      <Features id="features" />
      <Carousel id="gallery" />
      <Testimonials id="testimonials" />
      <Contacts id="contacts" />
      <Footer/>
    </Sidebar>
    </>
  );
}

export default App;
