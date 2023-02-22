import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portfolio />
    </div>
  );
}

export default App;
