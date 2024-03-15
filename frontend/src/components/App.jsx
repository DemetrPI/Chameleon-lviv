import Sidebar from "./Sidebar";
import MainHero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Contacts from "./Contacts";
import Map from "./Navigation";

function App() {
  return (
    <Sidebar>
    <MainHero id="home" />
    <Features id="features" />
    <Testimonials id="testimonials" />
    <Map />
    <Contacts id="contacts" />
  </Sidebar>
  );
}

export default App;
