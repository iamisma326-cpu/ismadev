import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { content, contact } from "../data/content";
import { useLogoTypewriter, LogoTyped } from "../hooks/useLogoTypewriter.jsx";
import {
  SunIcon,
  MoonIcon,
  GlobeIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme }) {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { shown, dotVisible, caretDone } = useLogoTypewriter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const ids = [...t.links.map((l) => l.id), "contacto"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [t]);

  // Bloquea el scroll con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-inner container">
        <a
          href="#inicio"
          className="navbar-logo"
          onClick={() => setOpen(false)}
          aria-label="ismael."
        >
          <LogoTyped shown={shown} dotVisible={dotVisible} caretDone={caretDone} />
        </a>

        <nav className="navbar-links" aria-label="Principal">
          {t.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : ""}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="icon-btn"
            onClick={toggleLang}
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
            title={lang === "es" ? "Switch to English" : "Cambiar a español"}
          >
            <GlobeIcon />
            <span className="icon-btn-text">{lang.toUpperCase()}</span>
          </button>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
            }
            title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href={`https://wa.me/${contact.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid navbar-cta"
          >
            {t.cta}
          </a>

          <button
            className="icon-btn navbar-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`navbar-mobile ${open ? "is-open" : ""}`}>
        <nav aria-label="Menú móvil">
          {t.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mobile-cta"
            onClick={() => setOpen(false)}
          >
            {t.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
