import { useEffect, useRef, useState } from "react";

const LOGO_TEXT = "ismael";
const TYPE_SPEED = 95; // ms por carácter
const TYPE_START_DELAY = 450; // espera inicial

/**
 * Efecto de escritura del logo "ismael.": escribe letra a letra, muestra
 * el punto final y desvanece el cursor.
 *
 * @param {object} options
 * @param {boolean} options.startWhenVisible si es true, espera a que el
 *   elemento referenciado entre al viewport para escribir (útil en el
 *   footer, que no es visible al cargar la página).
 */
export function useLogoTypewriter({ startWhenVisible = false } = {}) {
  const [shown, setShown] = useState("");
  const [dotVisible, setDotVisible] = useState(false);
  const [caretDone, setCaretDone] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timers = { start: 0, interval: 0, dot: 0, caret: 0 };
    let started = false;

    const clearAll = () => {
      clearTimeout(timers.start);
      clearInterval(timers.interval);
      clearTimeout(timers.dot);
      clearTimeout(timers.caret);
    };

    const run = () => {
      if (started) return;
      started = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setShown(LOGO_TEXT);
        setDotVisible(true);
        setCaretDone(true);
        return;
      }

      let i = 0;
      timers.start = setTimeout(() => {
        timers.interval = setInterval(() => {
          i += 1;
          setShown(LOGO_TEXT.slice(0, i));
          if (i >= LOGO_TEXT.length) {
            clearInterval(timers.interval);
            timers.dot = setTimeout(() => setDotVisible(true), TYPE_SPEED);
            timers.caret = setTimeout(() => setCaretDone(true), 1500);
          }
        }, TYPE_SPEED);
      }, TYPE_START_DELAY);
    };

    let detach = () => {};

    if (startWhenVisible) {
      // Disparo por scroll: más confiable que IntersectionObserver en
      // navegadores embebidos con rendering throttled.
      const check = () => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          detach();
          run();
        }
      };
      detach = () => {
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      };
      check();
      window.addEventListener("scroll", check, { passive: true });
      window.addEventListener("resize", check);
    } else {
      run();
    }

    return () => {
      detach();
      clearAll();
    };
  }, [startWhenVisible]);

  return { shown, dotVisible, caretDone, ref };
}

/** JSX del logo con escritura — compartir entre Navbar y Footer */
export function LogoTyped({ shown, dotVisible, caretDone }) {
  return (
    <span className="logo-type" aria-hidden="true">
      {shown}
      <span className="logo-dot">{dotVisible ? "." : ""}</span>
      <span
        className={`logo-caret ${caretDone ? "is-done" : ""}`}
        aria-hidden="true"
      />
    </span>
  );
}
