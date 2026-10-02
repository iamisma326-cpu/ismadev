import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";
import { skillMeta, skillsByCategory } from "../data/skills";
import { useReveal } from "../hooks/useReveal";
import SkillIcon from "./SkillIcon";
import SectionWord from "./SectionWord";
import SectionDecor from "./SectionDecor";
import "./Skills.css";

function SkillChip({ id }) {
  const meta = skillMeta[id];
  return (
    <li className="skill-chip">
      <SkillIcon id={id} />
      <span>{meta.name}</span>
    </li>
  );
}

export default function Skills() {
  const { lang } = useLanguage();
  const t = content[lang].skills;
  const observe = useReveal();

  return (
    <section id="habilidades" className="section skills">
      <SectionWord word={t.bgWord} />
      <SectionDecor variant="skills" />
      <div className="container">
        <div className="section-head reveal" ref={observe}>
          <span className="index">/{t.index}</span>
          <h2>{t.title}</h2>
        </div>

        <p className="skills-subtitle">{t.subtitle}</p>

        <div className="skills-grid">
          {t.categories.map((cat, i) => (
            <article
              key={cat.id}
              className={`skill-card skill-card--${cat.id} reveal`}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              ref={observe}
            >
              <div className="skill-card-head">
                <span className="skill-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
              <ul className="skill-list">
                {skillsByCategory[cat.id].map((id) => (
                  <SkillChip key={id} id={id} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
