import { useCallback, useEffect, useRef, useState } from "react";

const desktopQuery = "(min-width: 960px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)";

type HorizontalStoryOptions = {
  chapterCount: number;
};

export function useHorizontalStory({ chapterCount }: HorizontalStoryOptions) {
  const shellRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  const commitActive = useCallback((next: number) => {
    if (next === activeRef.current) return;
    activeRef.current = next;
    setActive(next);
  }, []);

  const goTo = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const shell = shellRef.current;
      const track = trackRef.current;
      const section = track?.querySelectorAll<HTMLElement>("[data-chapter]")[index];
      if (!shell || !track || !section) return;

      window.history.replaceState(window.history.state, "", `#${section.id}`);

      if (!window.matchMedia(desktopQuery).matches) {
        section.scrollIntoView({ behavior, block: "start" });
        return;
      }

      const verticalDistance = Math.max(1, shell.offsetHeight - window.innerHeight);
      window.scrollTo({
        top: shell.offsetTop + (index / Math.max(1, chapterCount - 1)) * verticalDistance,
        behavior,
      });
    },
    [chapterCount],
  );

  useEffect(() => {
    const shell = shellRef.current;
    const track = trackRef.current;
    if (!shell || !track) return;

    const media = window.matchMedia(desktopQuery);
    const sections = Array.from(track.querySelectorAll<HTMLElement>("[data-chapter]"));
    let mobileObserver: IntersectionObserver | null = null;

    const setGeometry = () => {
      if (!media.matches) {
        shell.style.removeProperty("height");
        track.scrollLeft = 0;
        shell.style.setProperty("--story-progress", "0");
        return;
      }

      const horizontalDistance = Math.max(0, track.scrollWidth - track.clientWidth);
      const scrollDistance = horizontalDistance * 0.78;
      shell.style.height = `${Math.max(window.innerHeight, scrollDistance + window.innerHeight)}px`;
      syncPosition();
    };

    const syncPosition = () => {
      if (!media.matches) return;
      const verticalDistance = Math.max(1, shell.offsetHeight - window.innerHeight);
      const horizontalDistance = Math.max(0, track.scrollWidth - track.clientWidth);
      const progress = Math.min(1, Math.max(0, (window.scrollY - shell.offsetTop) / verticalDistance));
      track.scrollLeft = progress * horizontalDistance;
      shell.style.setProperty("--story-progress", String(progress));
      commitActive(Math.min(chapterCount - 1, Math.round(progress * (chapterCount - 1))));
    };

    const requestSync = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        syncPosition();
      });
    };

    const observeMobileSections = () => {
      mobileObserver?.disconnect();
      if (media.matches) return;
      mobileObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) commitActive(Math.max(0, sections.indexOf(visible.target as HTMLElement)));
        },
        { threshold: [0.3, 0.55, 0.75] },
      );
      sections.forEach((section) => mobileObserver?.observe(section));
    };

    const handleModeChange = () => {
      observeMobileSections();
      setGeometry();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!media.matches || event.altKey || event.ctrlKey || event.metaKey) return;
      if ((event.target as HTMLElement | null)?.closest("input, textarea, select, [contenteditable='true']")) return;

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        goTo(
          event.key === "ArrowRight"
            ? Math.min(activeRef.current + 1, chapterCount - 1)
            : Math.max(activeRef.current - 1, 0),
        );
      }
    };

    const handleHashChange = () => {
      const target = decodeURIComponent(window.location.hash.slice(1));
      const index = sections.findIndex((section) => section.id === target);
      if (index >= 0) goTo(index, "auto");
    };

    const resizeObserver = new ResizeObserver(setGeometry);
    resizeObserver.observe(track);
    media.addEventListener("change", handleModeChange);
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", setGeometry);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("hashchange", handleHashChange);

    observeMobileSections();
    setGeometry();
    handleHashChange();

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      mobileObserver?.disconnect();
      media.removeEventListener("change", handleModeChange);
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", setGeometry);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [chapterCount, commitActive, goTo]);

  return { shellRef, trackRef, active, goTo };
}
