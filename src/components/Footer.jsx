import { useLanguage } from "../context/LanguageContext";
import { content, contact } from "../data/content";
import { useLogoTypewriter, LogoTyped } from "../hooks/useLogoTypewriter.jsx";
import { GithubIcon, LinkedinIcon, ArrowUpIcon } from "./icons";
import "./Footer.css";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang].footer;
  const { shown, dotVisible, caretDone, ref } = useLogoTypewriter({
    startWhenVisible: true,
  });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a
            href="#inicio"
            className="footer-logo"
            aria-label="ismael."
            ref={ref}
          >
            <LogoTyped shown={shown} dotVisible={dotVisible} caretDone={caretDone} />
          </a>
          <p>{t.madeIn}</p>
        </div>

        <div className="footer-social">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon width={18} height={18} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon width={18} height={18} />
          </a>
        </div>

        <div className="footer-meta">
          <a href="#inicio" className="footer-top">
            {t.top}
            <ArrowUpIcon width={15} height={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
