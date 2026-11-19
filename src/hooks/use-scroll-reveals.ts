import { useEffect } from "react";

const revealSelector = [
  ".detail-section",
  ".project-detail-image",
  ".engineering-walkthrough",
  ".about-origin",
  ".about-engineering-lens",
  ".about-stack",
  ".about-field-notes",
  ".detail-footer",
].join(", ");

export function useScrollReveals(routeKey: string) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    if (elements.length === 0) return;

    elements.forEach((element) => {
      element.dataset.reveal = "";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.revealVisible = "";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    const frame = window.requestAnimationFrame(() => {
      document.documentElement.dataset.revealReady = "";
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      delete document.documentElement.dataset.revealReady;
    };
  }, [routeKey]);
}
