import Navbar from "./components/Navbar.jsx";
import SideRails from "./components/SideRails.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import TechnicalFocus from "./components/TechnicalFocus.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <SideRails />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechnicalFocus />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
