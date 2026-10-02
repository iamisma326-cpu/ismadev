import "./SectionDecor.css";

/** Estrella de 4 puntas estilo GFX (compartida con el hero) */
export function Star({ size = 22, className = "", style }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z"
        fill="currentColor"
      />
    </svg>
  );
}

function Plus({ style }) {
  return <span className="sdeco sdeco--plus" style={style} aria-hidden="true" />;
}

function Dot({ style, violet }) {
  return (
    <span
      className={`sdeco sdeco--dot ${violet ? "sdeco--violet-bg" : ""}`}
      style={style}
      aria-hidden="true"
    />
  );
}

function Circle({ style }) {
  return (
    <span className="sdeco sdeco--circle" style={style} aria-hidden="true" />
  );
}

function SStar({ size, style, violet, delay = "0s" }) {
  return (
    <Star
      size={size}
      className={`sdeco sdeco--star ${violet ? "sdeco--violet" : ""}`}
      style={{ ...style, animationDelay: delay }}
    />
  );
}

/* Cada sección tiene su combinación propia para diferenciarse */
const VARIANTS = {
  about: (
    <>
      <SStar size={22} style={{ top: "13%", right: "24%" }} violet delay="0.8s" />
      <Plus style={{ top: "58%", right: "8%" }} />
      <Dot style={{ top: "22%", right: "5%" }} />
    </>
  ),
  skills: (
    <>
      <SStar size={18} style={{ top: "11%", left: "42%" }} delay="1.9s" />
      <Circle style={{ bottom: "5%", right: "9%", width: 150, height: 150 }} />
    </>
  ),
  projects: (
    <>
      <SStar size={26} style={{ bottom: "10%", left: "6%" }} delay="1.6s" />
      <Plus style={{ top: "13%", right: "30%" }} />
      <Dot style={{ top: "62%", right: "4%" }} violet />
    </>
  ),
  certifications: (
    <>
      <SStar size={20} style={{ top: "16%", right: "7%" }} violet delay="2.6s" />
      <Plus style={{ top: "72%", left: "38%" }} />
    </>
  ),
  contact: (
    <>
      <Circle style={{ top: "7%", right: "11%", width: 120, height: 120 }} />
      <SStar size={24} style={{ top: "30%", right: "32%" }} delay="0.4s" />
      <SStar size={14} style={{ bottom: "22%", left: "9%" }} violet delay="2s" />
    </>
  ),
};

/** Decoración flotante por sección: estrellas, cruces, círculos y puntos */
export default function SectionDecor({ variant }) {
  return (
    <div className="section-deco" aria-hidden="true">
      {VARIANTS[variant]}
    </div>
  );
}
