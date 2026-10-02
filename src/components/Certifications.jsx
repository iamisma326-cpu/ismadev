import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import SectionWord from "./SectionWord";
import SectionDecor from "./SectionDecor";
import { AwardIcon, ArrowUpRightIcon } from "./icons";
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
          {t.items.map((cert, i) => (
            <article
              key={cert.title}
              className="cert-card reveal"
              style={{ transitionDelay: `${(i % 2) * 0.12}s` }}
              ref={observe}
            >
              <div className="cert-head">
                <span className="cert-icon">
                  <AwardIcon width={22} height={22} />
                </span>
                <span className="cert-year">{cert.year}</span>
              </div>

              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>

              <a
                className="cert-link"
                href={cert.credential}
                target={cert.credential !== "#" ? "_blank" : undefined}
                rel="noreferrer"
              >
                {t.viewCredential}
                <ArrowUpRightIcon width={15} height={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
