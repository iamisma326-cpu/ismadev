import { useCallback, useEffect, useRef } from "react";

/**
 * Devuelve un callback-ref que añade `is-visible` al elemento cuando
 * entra al viewport. Se usa con la utilidad `.reveal` de index.css
 * y puede aplicarse a varios elementos de la misma vista.
 *
 * React adjunta los refs antes de montar los efectos, así que el observer
 * se crea de forma perezosa desde `observe`:crearlo dentro de un
 * `useEffect` dejaba `observerRef.current` en null durante el primer
 * commit y ningún elemento quedaba observado.
 */
export function useReveal() {
  const observerRef = useRef(null);
  const queueRef = useRef([]);

  const getObserver = useCallback(() => {
    if (typeof IntersectionObserver === "undefined") return null;
    if (observerRef.current) return observerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observerRef.current = observer;

    // Los elementos registrados antes de que existiera el observer
    // seConnectan ahora, en el orden original.
    const pending = queueRef.current;
    queueRef.current = [];
    pending.forEach((el) => observer.observe(el));

    return observer;
  }, []);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  const observe = useCallback(
    (el) => {
      if (!el) return;

      // Sin IntersectionObserver (o con reduced motion) se muestra todo:
      // el contenido nunca debe quedar invisible de forma permanente.
      if (typeof IntersectionObserver === "undefined") {
        el.classList.add("is-visible");
        return;
      }

      const observer = getObserver();
      if (observer) {
        observer.observe(el);
      } else {
        queueRef.current.push(el);
      }
    },
    [getObserver]
  );

  return observe;
}
