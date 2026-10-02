import { useCallback, useEffect, useRef } from "react";

/**
 * Devuelve un callback-ref que añade `is-visible` al elemento cuando
 * entra al viewport. Se usa con la utilidad `.reveal` de index.css
 * y puede aplicarse a varios elementos de la misma vista.
 */
export function useReveal() {
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

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
    return () => observer.disconnect();
  }, []);

  const observe = useCallback((el) => {
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    observerRef.current?.observe(el);
  }, []);

  return observe;
}
