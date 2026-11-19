import { type MouseEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";

import { PortfolioHeader } from "@/src/components/portfolio/PortfolioHeader";
import { EnsoVisual, GraduationVisual, InflationVisual, JasmonicVisual, PrintPathVisual } from "@/src/components/portfolio/ProjectVisuals";
import { StoryChapter } from "@/src/components/portfolio/StoryChapter";
import { caseStudies, chapters, links, researchProjects } from "@/src/content/portfolio";
import { useHorizontalStory } from "@/src/hooks/use-horizontal-story";
import { useScrollReveals } from "@/src/hooks/use-scroll-reveals";
import { AboutPage } from "@/src/pages/AboutPage";
import { CaseStudyPage } from "@/src/pages/CaseStudyPage";
import { EnsoDeepDivePage } from "@/src/pages/EnsoDeepDivePage";
import { PrinciplesPage } from "@/src/pages/PrinciplesPage";
import { ResearchProjectPage } from "@/src/pages/ResearchProjectPage";
import { WorkDeepDivePage } from "@/src/pages/WorkDeepDivePage";

type NavigateTo = (path: string) => void;

type PortfolioExperienceProps = {
  navigateTo: NavigateTo;
};

type ProjectLinkProps = {
  href: string;
  onClick: () => void;
  children: ReactNode;
};

const researchChapterIds = [
  "research-enso",
  "research-jasmonic",
  "research-crypto",
  "research-graduation",
] as const;

const researchVisuals = [EnsoVisual, JasmonicVisual, InflationVisual, GraduationVisual] as const;

function ProjectLink({ href, onClick, children }: ProjectLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <a className="project-link" href={href} onClick={handleClick}>
      {children}
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

function PortfolioExperience({ navigateTo }: PortfolioExperienceProps) {
  const { shellRef, trackRef, active, goTo } = useHorizontalStory({ chapterCount: chapters.length });

  const skipToIntroduction = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    goTo(0, "auto");
  };

  return (
    <>
      <a className="skip-link" href="#intro" onClick={skipToIntroduction}>
        Skip to portfolio
      </a>

      <main ref={shellRef} className="site-shell">
        <PortfolioHeader active={active} onNavigate={goTo} />

        <section ref={trackRef} className="story-track" aria-label="Nidhi Baindur portfolio">
          <StoryChapter id="intro" active={active === 0} className="intro-chapter">
            <div className="intro-statement chapter-reveal">
              <h1>
                Hi! I’m <em>Nidhi.</em>
              </h1>
              <p>
                I’m a software engineer with a background in computational mathematics. I build
                GenAI applications and software that connects cloud services, data, interfaces,
                and real-world devices.
              </p>
            </div>
          </StoryChapter>

          <StoryChapter id="about" active={active === 1} className="about-chapter">
            <div className="about-composition">
              <div className="about-kicker chapter-reveal">
                Math
                <br />
                <i>meets</i>
                <br />
                software.
              </div>
              <div className="about-copy chapter-reveal">
                <p className="section-label">About</p>
                <h2>I like the complicated part.</h2>
                <p>
                  I came to software through computational mathematics, with a creative-writing
                  immersion that still shapes how I explain technical decisions. I’m drawn to
                  systems where the underlying structure is complex, but the experience should
                  feel clear.
                </p>
                <ProjectLink href="/about" onClick={() => navigateTo("/about")}>
                  More about me
                </ProjectLink>
              </div>
            </div>
          </StoryChapter>

          <StoryChapter id="work" active={active === 2} className="project-chapter prep-chapter">
            <div className="project-composition prep-composition">
              <div className="project-copy chapter-reveal">
                <p className="section-label">Current work · Ecolab</p>
                <h2>
                  Prep N
                  <br />
                  Print
                </h2>
                <p className="project-summary">
                  An enterprise printing system that carries cloud state through services, mobile
                  rendering, and printer hardware used across 64,000 restaurant locations.
                </p>
                <p className="project-context">
                  My work spans cross-device recovery, SQL and Kusto, queue-based messaging,
                  React Native rendering, and the final label output.
                </p>
                <ProjectLink
                  href="/work/prep-n-print"
                  onClick={() => navigateTo("/work/prep-n-print")}
                >
                  Technical deep dive
                </ProjectLink>
              </div>
              <div className="visual-wrap chapter-reveal">
                <PrintPathVisual />
              </div>
            </div>
          </StoryChapter>

          {researchProjects.map((project, index) => {
            const Visual = researchVisuals[index];
            const projectPath = `/research/${project.slug}`;

            return (
              <StoryChapter
                id={researchChapterIds[index]}
                active={active === index + 3}
                className={`project-chapter research-chapter research-${index + 1}`}
                key={project.slug}
              >
                <div className="project-composition research-composition">
                  <div className="research-title chapter-reveal">
                    <p className="section-label">Research · {project.context}</p>
                    <h2>{project.title}</h2>
                  </div>
                  <div className="visual-wrap chapter-reveal">
                    <Visual />
                  </div>
                  <div className="research-note chapter-reveal">
                    <p>{project.summary}</p>
                    <dl>
                      <div>
                        <dt>Question</dt>
                        <dd>{project.question}</dd>
                      </div>
                      <div>
                        <dt>Mentor{project.mentor.includes("·") ? "s" : ""}</dt>
                        <dd>{project.mentor}</dd>
                      </div>
                    </dl>
                    <ProjectLink href={projectPath} onClick={() => navigateTo(projectPath)}>
                      Read more
                    </ProjectLink>
                  </div>
                </div>
              </StoryChapter>
            );
          })}

          <StoryChapter
            id="daily-digest"
            active={active === 7}
            className="project-chapter daily-chapter"
          >
            <div className="project-composition screenshot-composition daily-composition">
              <figure className="product-screen chapter-reveal">
                <div className="product-screen-media">
                  <img
                    src="/projects/daily-digest/daily-digest.png"
                    alt="Daily Digest interface showing an evidence-backed research hypothesis with source and confidence context."
                  />
                </div>
                <figcaption>
                  Live product · evidence remains attached to the research trail.
                </figcaption>
              </figure>

              <div className="project-copy chapter-reveal">
                <p className="section-label">Independent project · GenAI application</p>
                <h2>
                  Daily
                  <br />
                  Digest
                </h2>
                <p className="project-summary">
                  A research pipeline that keeps generated claims connected to their sources,
                  limitations, and contradictions.
                </p>
                <p className="project-context">
                  I designed the AI workflow, provenance model, deterministic validators, and
                  durable job system that make each result inspectable.
                </p>
                <div className="project-actions">
                  <ProjectLink
                    href="/projects/daily-digest"
                    onClick={() => navigateTo("/projects/daily-digest")}
                  >
                    How it works
                  </ProjectLink>
                  <a href={links.dailyDigestDemo} target="_blank" rel="noreferrer">
                    Open live product <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </StoryChapter>

          <StoryChapter
            id="study-buddy"
            active={active === 8}
            className="project-chapter study-chapter"
          >
            <div className="project-composition screenshot-composition study-composition">
              <div className="project-copy chapter-reveal">
                <p className="section-label">Independent project · AI learning product</p>
                <h2>
                  Study
                  <br />
                  Buddy
                </h2>
                <p className="project-summary">
                  A system-design tutor that evaluates why a learner made an architecture decision,
                  then adapts the next question.
                </p>
                <p className="project-context">
                  I separated bounded AI assessment from deterministic mastery, with append-only
                  evidence, idempotent attempts, and tested fallback behavior.
                </p>
                <div className="project-actions">
                  <ProjectLink
                    href="/projects/study-buddy"
                    onClick={() => navigateTo("/projects/study-buddy")}
                  >
                    How it works
                  </ProjectLink>
                  <a href={links.studyBuddyDemo} target="_blank" rel="noreferrer">
                    Open live prototype <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>

              <figure className="product-screen chapter-reveal">
                <div className="product-screen-media">
                  <img
                    src="/projects/study-buddy/homepage.png"
                    alt="Study Buddy interface asking a learner to reason through a URL shortener design decision."
                  />
                </div>
                <figcaption>
                  Current prototype · one consequential design decision at a time.
                </figcaption>
              </figure>
            </div>
          </StoryChapter>

          <StoryChapter id="contact" active={active === 9} className="contact-chapter">
            <div className="contact-composition">
              <div className="contact-copy chapter-reveal">
                <p className="section-label">Open to opportunities</p>
                <h2>
                  Let’s build something <em>worth understanding.</em>
                </h2>
                <p>
                  I’m looking for backend, distributed-systems, and GenAI application engineering
                  roles.
                </p>
                <a className="contact-email" href={links.email}>
                  <Mail aria-hidden="true" /> nidhibaindur@outlook.com
                </a>
              </div>
              <nav className="contact-directory chapter-reveal" aria-label="Contact and profile links">
                <a href={links.resume} target="_blank" rel="noreferrer">
                  <span>Résumé</span>
                  <Download aria-hidden="true" />
                </a>
                <a href={links.github} target="_blank" rel="noreferrer">
                  <span>GitHub</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  <span>LinkedIn</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </nav>
            </div>
          </StoryChapter>
        </section>
      </main>
    </>
  );
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const previousPathnameRef = useRef(pathname);
  useScrollReveals(pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) return;
    previousPathnameRef.current = pathname;

    const frame = window.requestAnimationFrame(() => {
      const hashTarget =
        pathname === "/" && window.location.hash
          ? document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
          : null;
      const focusTarget = hashTarget ?? document.querySelector<HTMLElement>("main");

      if (!focusTarget) return;
      if (!focusTarget.hasAttribute("tabindex")) focusTarget.setAttribute("tabindex", "-1");
      focusTarget.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  const navigateTo: NavigateTo = (path) => {
    window.history.pushState({ portfolioDetail: true }, "", path);
    setPathname(path);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const closeDetail = (fallback = "/") => {
    if (window.history.state?.portfolioDetail) {
      window.history.back();
      return;
    }

    window.history.replaceState({}, "", fallback);
    setPathname("/");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const projectSlug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  const study = caseStudies.find((item) => item.slug === projectSlug);

  if (study) {
    return <CaseStudyPage study={study} onBack={() => closeDetail(`/#${study.slug}`)} />;
  }
  if (pathname === "/work/prep-n-print" || pathname === "/work/prep-n-print/") {
    return <WorkDeepDivePage onBack={() => closeDetail("/#work")} />;
  }
  if (pathname === "/research/enso" || pathname === "/research/enso/") {
    return <EnsoDeepDivePage onBack={() => closeDetail("/#research-enso")} />;
  }
  const researchSlug = pathname.match(/^\/research\/([^/]+)\/?$/)?.[1];
  const researchProject = researchProjects.find((project) => project.slug === researchSlug);

  if (researchProject) {
    return (
      <ResearchProjectPage
        project={researchProject}
        onBack={() => closeDetail("/#research-enso")}
      />
    );
  }
  if (pathname === "/about/how-i-work" || pathname === "/about/how-i-work/") {
    return <PrinciplesPage onBack={() => closeDetail("/#about")} />;
  }
  if (pathname === "/about" || pathname === "/about/") {
    return <AboutPage onBack={() => closeDetail("/#about")} />;
  }

  return <PortfolioExperience navigateTo={navigateTo} />;
}
