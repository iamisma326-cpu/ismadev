import { useEffect, useRef, useState } from "react";
import { marqueeSkills, skillMeta } from "../data/skills";
import SkillIcon from "./SkillIcon";
import "./TechMarquee.css";

const MIN_REPS = 4;

export default function TechMarquee() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  // Repeticiones del set por mitad: cada mitad debe ser más ancha que la
  // pantalla para que el loop translateX(-50%) sea continuo y sin huecos.
  const [reps, setReps] = useState(MIN_REPS);

  useEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const measure = () => {
      const items = list.children;
      if (items.length <= marqueeSkills.length) return;
      // Ancho de una vuelta: del primer item al primer item de la copia siguiente
      const pitch =
        items[marqueeSkills.length].offsetLeft - items[0].offsetLeft;
      if (pitch <= 0) return;
      const needed = Math.ceil(section.clientWidth / pitch) + 1;
      setReps(Math.max(MIN_REPS, needed));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const row = Array.from({ length: reps * 2 }, () => marqueeSkills).flat();

  return (
    <section
      className="tech-marquee"
      aria-label="Tecnologías"
      ref={sectionRef}
    >
      <ul className="marquee" role="presentation" ref={listRef}>
        {row.map((id, i) => {
          const name = skillMeta[id].name;
          return (
            <li
              key={`${id}-${i}`}
              className="marquee-item"
              title={name}
              aria-hidden={i >= marqueeSkills.length}
              aria-label={i < marqueeSkills.length ? name : undefined}
            >
              <SkillIcon id={id} size={26} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
