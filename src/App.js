import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Skill from "./components/skill/Skill";
import About from "./components/about/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Skill menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {/* <Testimonials /> */}
      </div>
    </div>
  );
}

export default App;
