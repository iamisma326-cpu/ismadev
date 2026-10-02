import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { ArrowUpRightIcon, GithubIcon } from "./icons";
import SectionWord from "./SectionWord";
import SectionDecor from "./SectionDecor";
import "./Projects.css";

export default function Projects() {
  const { lang } = useLanguage();
  const t = content[lang].projects;
  const observe = useReveal();

  return (
    <section id="proyectos" className="section projects">
      <SectionWord word={t.bgWord} />
      <SectionDecor variant="projects" />
      <div className="container">
        <div className="section-head reveal" ref={observe}>
          <span className="index">/{t.index}</span>
          <h2>{t.title}</h2>
        </div>

        <p className="projects-subtitle">{t.subtitle}</p>

        <div className="projects-grid">
          {t.items.map((project, i) => (
            <article
              key={project.title}
              className="project-card reveal"
              style={{ transitionDelay: `${(i % 2) * 0.12}s` }}
              ref={observe}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-media"
                aria-label={`${project.title} — GitHub`}
              >
                <span className="project-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="project-arrow" aria-hidden="true">
                  <ArrowUpRightIcon width={22} height={22} />
                </span>
              </a>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <GithubIcon width={16} height={16} />
                    {t.viewCode}
                  </a>
                  <a
                    href={project.demo}
                    target={project.demo !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    <ArrowUpRightIcon width={16} height={16} />
                    {t.viewLive}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
