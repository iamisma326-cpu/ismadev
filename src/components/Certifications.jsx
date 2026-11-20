import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import SectionWord from "./SectionWord";
import SectionDecor from "./SectionDecor";
import {
  AwardIcon,
  ArrowUpRightIcon,
  DownloadIcon,
} from "./icons";
import "./Certifications.css";

export default function Certifications() {
  const { lang } = useLanguage();
  const t = content[lang].certifications;
  const observe = useReveal();

  return (
    <section id="certificaciones" className="section certs">
      <SectionWord word={t.bgWord} />
      <SectionDecor variant="certifications" />
      <div className="container">
        <div className="section-head reveal" ref={observe}>
          <span className="index">/{t.index}</span>
          <h2>{t.title}</h2>
        </div>

        <p className="certs-subtitle">{t.subtitle}</p>

        <div className="certs-grid">
          {t.items.map((cert) => (
            <article
              key={cert.title}
              className={`cert-card reveal${cert.topics ? "" : " cert-card--solo"}`}
              ref={observe}
            >
              <div className="cert-main">
                <div className="cert-head">
                  <span className="cert-icon">
                    <AwardIcon width={22} height={22} />
                  </span>
                  <span className="cert-year">{cert.year}</span>
                </div>

                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-desc">{cert.description}</p>

                {cert.stats && (
                  <dl className="cert-stats">
                    {cert.stats.map((stat) => (
                      <div key={stat.label}>
                        <dt>{stat.value}</dt>
                        <dd>{stat.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="cert-actions">
                  {/* Credencial oficial: se abre en el dominio del instructor. */}
                  <a
                    className="cert-link"
                    href={cert.credential}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.verifyCredential}
                    <ArrowUpRightIcon width={15} height={15} />
                  </a>

                  {/* Copia local: baja directo sin abrir pestaña. */}
                  {cert.downloadUrl && (
                    <a
                      className="cert-link cert-link-ghost"
                      href={cert.downloadUrl}
                      download={cert.fileName}
                    >
                      {t.downloadCredential}
                      <DownloadIcon width={15} height={15} />
                    </a>
                  )}
                </div>
              </div>

              {cert.topics && (
                <div className="cert-syllabus">
                  <span className="cert-label">{t.syllabusLabel}</span>
                  <ul>
                    {cert.topics.map((topic) => (
                      <li key={topic.name}>
                        <span className="cert-topic-name">{topic.name}</span>
                        <span className="cert-topic-tags">{topic.tags}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
