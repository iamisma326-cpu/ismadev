import "./BgDecor.css";

/**
 * Capa decorativa de fondo (estilo GFX anime adaptado a minimalismo):
 * lavados de gradiente azul/violeta, trama halftone, brillos "+" y grano.
 * Es puramente visual: pointer-events none y aria-hidden.
 */
export default function BgDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <div className="bg-wash bg-wash--blue" />
      <div className="bg-wash bg-wash--violet" />

      <div className="bg-halftone bg-halftone--tr" />
      <div className="bg-halftone bg-halftone--bl" />

      <span className="bg-sparkle bg-sparkle--1" />
      <span className="bg-sparkle bg-sparkle--2" />
      <span className="bg-sparkle bg-sparkle--3" />
      <span className="bg-sparkle bg-sparkle--4" />
      <span className="bg-dot bg-dot--1" />
      <span className="bg-dot bg-dot--2" />

      <div className="bg-grain" />
    </div>
  );
}
