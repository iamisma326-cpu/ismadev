import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import SectionWord from "./SectionWord";
import SectionDecor from "./SectionDecor";
import "./About.css";

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang].about;
  const ref = useReveal();

  return (
    <section id="sobre-mi" className="section about">
      <SectionWord word={t.bgWord} />
      <SectionDecor variant="about" />
      <div className="container">
        <div className="section-head reveal" ref={ref}>
          <span className="index">/{t.index}</span>
          <h2>{t.title}</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
            <p className="about-sign" aria-hidden="true">
              — Ismael
            </p>
          </div>

          <dl className="about-facts">
            {t.facts.map((fact) => (
              <div key={fact.term} className="about-fact">
                <dt>{fact.term}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
