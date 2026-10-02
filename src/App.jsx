import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { content } from "./data/content";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BgDecor from "./components/BgDecor";

/** Enlace de accesibilidad para saltar directamente al contenido */
function SkipLink() {
  const { lang } = useLanguage();
  return (
    <a href="#contenido" className="skip-link">
      {content[lang].nav.skip}
    </a>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <LanguageProvider>
      <SkipLink />

      {/* Fondo decorativo estilo GFX: lavados, halftone, brillos y grano */}
      <BgDecor />

      {/* Líneas de cuadrícula verticales — textura de fondo estilo referencia */}
      <div className="grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="contenido">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </LanguageProvider>
  );
}
