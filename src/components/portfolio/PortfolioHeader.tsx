import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { chapters, navigation } from "@/src/content/portfolio";

type PortfolioHeaderProps = {
  active: number;
  onNavigate: (index: number) => void;
};

export function PortfolioHeader({ active, onNavigate }: PortfolioHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeGroup = chapters[active]?.nav;

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const navigate = (index: number) => {
    setMenuOpen(false);
    onNavigate(index);
  };

  return (
    <header className="topbar">
      <button className="wordmark" onClick={() => navigate(0)} aria-label="Return to introduction">
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
        className="menu-trigger"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        data-open={menuOpen}
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
