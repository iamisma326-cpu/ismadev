/** Palabra gigante de fondo para cada sección (outline sutil).
 *  Se traduce con el idioma activo y su color se adapta al tema. */
export default function SectionWord({ word }) {
  if (!word) return null;
  return (
    <span className="section-word" aria-hidden="true">
      {word}
    </span>
  );
}
