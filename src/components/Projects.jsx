import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";
import { skillMeta } from "../data/skills";
import SkillIcon from "./SkillIcon";
import { useReveal } from "../hooks/useReveal";
import { ArrowUpRightIcon, GithubIcon } from "./icons";
import SectionWord from "./SectionWord";
import SectionDecor from "./SectionDecor";
import "./Projects.css";

const PER_PAGE = 4;

export default function Projects() {
  const { lang } = useLanguage();
  const t = content[lang].projects;
  const observe = useReveal();

  const totalPages = Math.max(1, Math.ceil(t.items.length / PER_PAGE));
  const [page, setPage] = useState(0);
  const gridRef = useRef(null);
  // El key por página re-monta el grid y así la animación de entrada
  // (fade + deslizamiento) se repite en cada cambio de listado.
  const current = page < totalPages ? page : 0;
  const start = current * PER_PAGE;
  const visible = t.items.slice(start, start + PER_PAGE);

  const goTo = (p) => {
    if (p === current) return;
    setPage(p);
    // El key={current} re-monta el grid: los refs se re-registran y
    // useReveal añade is-visible al intersectar, así la animación de
    // entrada se repite en cada cambio. Tras el remount, el scroll ancho
    // puede quedar fuera de las nuevas tarjetas (el navegador re-ancla
    // el scroll y el IO no dispara): alineamos el grid a una posición
    // absoluta fija, con el smooth scroll desactivado solo para este
    // salto para que no se vea contenido vacío en el trayecto.
    requestAnimationFrame(() => {
      const grid = gridRef.current;
      if (!grid) return;
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      const top = window.scrollY + grid.getBoundingClientRect().top - 24;
      window.scrollTo(0, Math.max(0, top));
      html.style.scrollBehavior = prevBehavior;
    });
  };

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

        <div className="projects-grid" key={current} ref={gridRef}>
          {visible.map((project, i) => (
            <article
              key={project.title}
              className="project-card reveal"
              style={{ transitionDelay: `${(i % 2) * 0.12}s` }}
              ref={observe}
            >
              <a
                href={project.liveUrl || project.github}
                target="_blank"
                rel="noreferrer"
                className="project-media"
                aria-label={`${project.title} — ${project.liveUrl ? "Live" : "GitHub"}`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`Captura de ${project.title}`}
                    loading="lazy"
                    className="project-image"
                  />
                )}
                <span className="project-index">
                  {String(start + i + 1).padStart(2, "0")}
                </span>
                {project.subtitle && (
                  <span className="project-client">{project.subtitle}</span>
                )}
                <span className="project-arrow" aria-hidden="true">
                  <ArrowUpRightIcon width={22} height={22} />
                </span>
              </a>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {project.techIds?.length > 0 && (
                  <ul
                    className="project-tech"
                    aria-label={content[lang].projects.techLabel}
                  >
                    {project.techIds.map((id) => {
                      const meta = skillMeta[id];
                      if (!meta) return null;
                      return (
                        <li key={id} title={meta.name}>
                          <span aria-hidden="true">
                            <SkillIcon id={id} size={20} />
                          </span>
                          <span className="sr-only">{meta.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}

                <ul className="project-tags">
                  {project.tags?.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon width={16} height={16} />
                      {t.viewCode}
                    </a>
                  )}
                  {(project.liveUrl || project.demo !== "#") && (
                    <a
                      href={project.liveUrl || project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ArrowUpRightIcon width={16} height={16} />
                      {t.viewLive}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="projects-pagination" aria-label={t.paginationLabel}>
            <button
              type="button"
              className="pag-arrow"
              disabled={current === 0}
              onClick={() => goTo(current - 1)}
              aria-label={t.prevPage}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                type="button"
                className={`pag-num${idx === current ? " activa" : ""}`}
                onClick={() => goTo(idx)}
                aria-label={`${t.gotoPage} ${idx + 1}`}
                aria-current={idx === current ? "page" : undefined}
              >
                {idx + 1}
              </button>
            ))}

            <button
              type="button"
              className="pag-arrow"
              disabled={current === totalPages - 1}
              onClick={() => goTo(current + 1)}
              aria-label={t.nextPage}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
