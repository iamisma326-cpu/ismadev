import { skillMeta } from "../data/skills";

/** Icono de marca de una skill — usado en Habilidades y el marquee */
export default function SkillIcon({ id, size = 18 }) {
  const meta = skillMeta[id];

  if (meta.custom) {
    const Custom = meta.CustomIcon;
    return <Custom size={size} color={meta.hex} />;
  }

  // Colores oficiales casi negros: en modo oscuro usan un gris claro
  const fill = meta.themeAware
    ? { fill: "var(--icon-brand)" }
    : { fill: meta.hex };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path d={meta.icon.path} style={fill} />
    </svg>
  );
}
