import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { chapters, navigation } from "@/src/content/portfolio";

type PortfolioHeaderProps = {
  active: number;
  onNavigate: (index: number) => void;
};

export function PortfolioHeader({ active, onNavigate }: PortfolioHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const restoreMenuFocusRef = useRef(true);
  const activeGroup = chapters[active]?.nav;

  useEffect(() => {
    if (!menuOpen) return;

    const storyTrack = document.querySelector<HTMLElement>(".story-track");
    const previousOverflow = document.body.style.overflow;
    const focusFirstLink = window.setTimeout(() => {
      mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    }, 200);

    storyTrack?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        restoreMenuFocusRef.current = true;
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = [
        menuTriggerRef.current,
        ...Array.from(mobileNavRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []),
      ].filter((element): element is HTMLElement => Boolean(element));
      const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);

      if (event.shiftKey && currentIndex <= 0) {
        event.preventDefault();
        focusable.at(-1)?.focus();
      } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
        event.preventDefault();
        focusable[0]?.focus();
      }
    };

    window.addEventListener("keydown", handleMenuKeyDown);
    return () => {
      window.clearTimeout(focusFirstLink);
      window.removeEventListener("keydown", handleMenuKeyDown);
      storyTrack?.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;

      if (restoreMenuFocusRef.current) {
        window.requestAnimationFrame(() => menuTriggerRef.current?.focus());
      }
      restoreMenuFocusRef.current = true;
    };
  }, [menuOpen]);

  const navigate = (index: number) => {
    const targetId = chapters[index]?.id;
    if (menuOpen) restoreMenuFocusRef.current = false;
    setMenuOpen(false);
    onNavigate(index);

    if (menuOpen && targetId) {
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.focus({ preventScroll: true });
      });
    }
  };

  return (
    <header className="topbar">
      <button
        className="wordmark"
        onClick={() => navigate(0)}
        aria-label="Return to introduction"
        tabIndex={menuOpen ? -1 : 0}
      >
        <strong>Nidhi Baindur</strong>
      </button>

      <nav className="desktop-nav" aria-label="Portfolio chapters">
        {navigation.map((item) => {
          const current = activeGroup === item.group;
          return (
            <a
              href={`#${chapters[item.chapterIndex].id}`}
              key={item.label}
              onClick={(event) => {
                event.preventDefault();
                navigate(item.chapterIndex);
              }}
              aria-current={current ? "location" : undefined}
              data-active={current}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <a
        className="header-resume"
        href="/resume/Nidhi-Baindur-Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Résumé <ArrowUpRight aria-hidden="true" />
      </a>

      <button
        ref={menuTriggerRef}
        className="menu-trigger"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        ref={mobileNavRef}
        id="mobile-navigation"
        className="mobile-nav"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
        aria-label="Mobile portfolio chapters"
      >
        <div>
          <span className="mobile-nav-label">Navigate</span>
          {navigation.map((item) => {
            const current = activeGroup === item.group;
            return (
              <a
                href={`#${chapters[item.chapterIndex].id}`}
                key={item.label}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(item.chapterIndex);
                }}
                aria-current={current ? "location" : undefined}
                data-active={current}
              >
                {item.label}
              </a>
            );
          })}
          <a
            className="mobile-resume"
            href="/resume/Nidhi-Baindur-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
