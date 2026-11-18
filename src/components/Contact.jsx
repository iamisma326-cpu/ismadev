import { useLanguage } from "../context/LanguageContext";
import { content, contact, whatsappUrl } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { WhatsAppIcon, MailIcon, GithubIcon, ArrowUpRightIcon } from "./icons";
import SectionWord from "./SectionWord";
import SectionDecor from "./SectionDecor";
import "./Contact.css";

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;
  const observe = useReveal();

  return (
    <section id="contacto" className="section contact">
      <SectionWord word={t.bgWord} />
      <SectionDecor variant="contact" />
      <div className="container">
        <div className="section-head reveal" ref={observe}>
          <span className="index">/{t.index}</span>
          <h2>{t.title}</h2>
        </div>

        <div className="contact-wrap reveal" ref={observe}>
          <h3 className="contact-heading">{t.heading}</h3>
          <p className="contact-subtitle">{t.subtitle}</p>

          <a
            href={`mailto:${contact.email}`}
            className="contact-email"
          >
            {contact.email}
            <ArrowUpRightIcon width={26} height={26} />
          </a>

          <div className="contact-actions">
            <a
              href={whatsappUrl(content[lang].whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid"
            >
              <WhatsAppIcon width={18} height={18} />
              {t.whatsapp} · {contact.whatsappDisplay}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="btn btn-ghost"
            >
              <MailIcon width={18} height={18} />
              {t.gmail}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <GithubIcon width={18} height={18} />
              GitHub
            </a>
          </div>

          <p className="contact-availability">
            <span className="availability-dot" aria-hidden="true" />
            {t.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
