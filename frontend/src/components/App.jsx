import "../assets/carousel.css"
import Sidebar from "./Sidebar";
import MainHero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Contacts from "./Contacts";
import RandomImages from "./Random-Image";
import Carousel from "./Carousel";



const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function App() {
  return (
    <>
      <RandomImages/>
    <Sidebar>
      <MainHero id="home" />
      <Features id="features" />
      <Testimonials id="testimonials" />
      <Carousel images={images} />
      <Contacts id="contacts" />
    </Sidebar>
    </>
  );
}

export default App;
