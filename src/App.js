import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <Profile />
      <Navigation />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
