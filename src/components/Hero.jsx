import { useLanguage } from "../context/LanguageContext";
import { content, contact } from "../data/content";
import { ArrowDownIcon, WhatsAppIcon, PinIcon } from "./icons";
import { Star } from "./SectionDecor";
import ismaPhoto from "../assets/isma.png";
import "./Hero.css";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  return (
    <section id="inicio" className="hero">
      {/* Decoración GFX del hero */}
      <div className="hero-decor" aria-hidden="true">
        <div className="hero-band" />
        <span className="hero-word">ISMAEL</span>
        <span className="hero-side-text">PORTAFOLIO — LIMA · PERÚ — 2026</span>
        <div className="hero-circle" />
        <Star className="hero-star hero-star--1" size={26} />
        <Star className="hero-star hero-star--2" size={16} />
        <Star className="hero-star hero-star--3" size={34} />
        <span className="hero-plus" />
        <span className="hero-plus hero-plus--2" />
      </div>

      <div className="container hero-grid">
        {/* Columna de texto */}
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow" style={{ animationDelay: "0.05s" }}>
            {t.eyebrow}
          </p>

          <p
            className="hero-location"
            style={{ animationDelay: "0.12s" }}
          >
            <PinIcon width={16} height={16} />
            {t.location}
          </p>

          <h1 className="hero-title" style={{ animationDelay: "0.2s" }}>
            {t.titleA}
            <span className="hero-title-outline">{t.titleB}</span>
          </h1>

          <p className="hero-subtitle" style={{ animationDelay: "0.3s" }}>
            {t.subtitle}
          </p>

          <div className="hero-cta" style={{ animationDelay: "0.4s" }}>
            <a href="#proyectos" className="btn btn-solid">
              {t.ctaPrimary}
            </a>
            <a
              href={`https://wa.me/${contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <WhatsAppIcon width={18} height={18} />
              {t.ctaSecondary}
            </a>
          </div>

          {/* Cajas de estadísticas con borde — como en la referencia */}
          <dl className="hero-stats" style={{ animationDelay: "0.5s" }}>
            {t.stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Columna de la foto */}
        <div className="hero-photo" style={{ animationDelay: "0.35s" }}>
          <div className="hero-photo-frame">
            <img
              src={ismaPhoto}
              alt="Ismael Espinoza"
              width={640}
              height={800}
            />
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a href="#sobre-mi" className="hero-scroll" aria-label={t.scroll}>
        <span>{t.scroll}</span>
        <span className="hero-scroll-arrow">
          <ArrowDownIcon width={16} height={16} />
        </span>
      </a>
    </section>
  );
}
