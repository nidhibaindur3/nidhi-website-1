import { type MouseEvent, type ReactNode, useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";

import { PortfolioHeader } from "@/src/components/portfolio/PortfolioHeader";
import { EnsoVisual, GraduationVisual, InflationVisual, JasmonicVisual, PrintPathVisual } from "@/src/components/portfolio/ProjectVisuals";
import { StoryChapter } from "@/src/components/portfolio/StoryChapter";
import { caseStudies, chapters, links, researchProjects } from "@/src/content/portfolio";
import { useHorizontalStory } from "@/src/hooks/use-horizontal-story";
import { AboutPage } from "@/src/pages/AboutPage";
import { CaseStudyPage } from "@/src/pages/CaseStudyPage";
import { EnsoDeepDivePage } from "@/src/pages/EnsoDeepDivePage";
import { PrinciplesPage } from "@/src/pages/PrinciplesPage";
import { ResearchDeepDivePage } from "@/src/pages/ResearchDeepDivePage";
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
                I’m a software engineer with a background in computational mathematics. I work
                across software, data, and technical problems—building systems that make complex
                ideas useful.
              </p>
            </div>
          </StoryChapter>

          <StoryChapter id="work" active={active === 1} className="project-chapter prep-chapter">
            <div className="project-composition prep-composition">
              <div className="project-copy chapter-reveal">
                <p className="section-label">Current work · Ecolab</p>
                <h2>
                  Prep N
                  <br />
                  Print
                </h2>
                <p className="project-summary">
                  Enterprise software connecting Azure services and data pipelines to a React
                  Native print experience used across restaurant locations.
                </p>
                <p className="project-context">
                  I work across backend services, SQL and Kusto, asynchronous messaging, mobile
                  rendering, and physical printer behavior.
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

          <StoryChapter
            id="daily-digest"
            active={active === 2}
            className="project-chapter daily-chapter"
          >
            <div className="project-composition screenshot-composition daily-composition">
              <figure className="product-screen chapter-reveal">
                <img
                  src="/projects/daily-digest/daily-digest.png"
                  alt="Daily Digest interface showing an evidence-backed research hypothesis with source and confidence context."
                />
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
                  An evidence-first research system that turns current information into
                  inspectable leads—not untraceable answers.
                </p>
                <p className="project-context">
                  Structured AI workflows, provenance, deterministic validation, retries, and
                  durable background jobs.
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
            active={active === 3}
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
                  An adaptive system-design tutor that evaluates the reasoning behind an
                  architectural decision, not a memorized answer.
                </p>
                <p className="project-context">
                  Append-only learning evidence, deterministic mastery projection, bounded AI
                  assessment, and tested fallback behavior.
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
                <img
                  src="/projects/study-buddy/homepage.png"
                  alt="Study Buddy interface asking a learner to reason through a URL shortener design decision."
                />
                <figcaption>
                  Current prototype · one consequential design decision at a time.
                </figcaption>
              </figure>
            </div>
          </StoryChapter>

          {researchProjects.map((project, index) => {
            const Visual = researchVisuals[index];
            const projectPath = `/research/${project.slug}`;

            return (
              <StoryChapter
                id={researchChapterIds[index]}
                active={active === index + 4}
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
                      Open research note
                    </ProjectLink>
                  </div>
                </div>
              </StoryChapter>
            );
          })}

          <StoryChapter id="about" active={active === 8} className="about-chapter">
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

          <StoryChapter id="principles" active={active === 9} className="principles-chapter">
            <div className="principles-composition">
              <header className="chapter-reveal">
                <p className="section-label">How I work</p>
                <h2>Make the reasoning visible.</h2>
              </header>
              <ol className="principles-sequence chapter-reveal">
                <li>
                  <span>Understand</span>
                  <p>Trace the whole system before narrowing the problem.</p>
                </li>
                <li>
                  <span>Separate</span>
                  <p>Give every model, service, and interface a clear boundary.</p>
                </li>
                <li>
                  <span>Test</span>
                  <p>Design for imperfect dependencies and explicit failure paths.</p>
                </li>
                <li>
                  <span>Explain</span>
                  <p>Leave decisions legible for the next person.</p>
                </li>
              </ol>
              <ProjectLink
                href="/about/how-i-work"
                onClick={() => navigateTo("/about/how-i-work")}
              >
                Read the principles
              </ProjectLink>
            </div>
          </StoryChapter>

          <StoryChapter id="contact" active={active === 10} className="contact-chapter">
            <div className="contact-composition">
              <div className="contact-copy chapter-reveal">
                <p className="section-label">Open to opportunities</p>
                <h2>
                  Let’s build something <em>worth understanding.</em>
                </h2>
                <p>I’m looking for GenAI application engineering and software engineering roles.</p>
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

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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

  if (study) return <CaseStudyPage study={study} onBack={() => closeDetail("/#work")} />;
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
  if (pathname === "/research" || pathname === "/research/") {
    return <ResearchDeepDivePage onBack={() => closeDetail("/#research-enso")} />;
  }
  if (pathname === "/about/how-i-work" || pathname === "/about/how-i-work/") {
    return <PrinciplesPage onBack={() => closeDetail("/#about")} />;
  }
  if (pathname === "/about" || pathname === "/about/") {
    return <AboutPage onBack={() => closeDetail("/#about")} />;
  }

  return <PortfolioExperience navigateTo={navigateTo} />;
}
