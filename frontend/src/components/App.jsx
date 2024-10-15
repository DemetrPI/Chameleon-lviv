import "../assets/carousel.css"
import Sidebar from "./Sidebar";
import MainHero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Contacts from "./Contacts";
import RandomImages from "./Random-Image";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { ChameleonsProvider } from "../utils/chameleonsContext";


function App() {
  return (
    <>
      <ChameleonsProvider>
        <RandomImages />
        <Sidebar>
          <MainHero id="home" />
          <Features id="features" />
          <Gallery id="gallery" />
          <Testimonials id="testimonials" />
          <Contacts id="contacts" />
          <Footer />
        </Sidebar>
      </ChameleonsProvider>
    </>
  );
}

export default App;
