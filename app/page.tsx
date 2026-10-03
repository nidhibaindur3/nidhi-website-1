"use client";

import { useEffect, useRef, useState } from "react";
import {
  Braces,
  Check,
  Code2,
  Command,
  Database,
  Mail,
  Network,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const chapters = [
  { id: "intro", label: "Start" },
  { id: "pulse", label: "Pulse" },
  { id: "atlas", label: "Atlas" },
  { id: "trace", label: "Trace" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const tools = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Figma",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
      <span className="h-px w-7 bg-lime-300" />
      {children}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 max-w-32 text-sm leading-snug text-zinc-500">{label}</p>
    </div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-lime-300">{index}</span>
      <Separator className="w-8 bg-zinc-800" />
      <span className="text-sm text-zinc-500">{title}</span>
    </div>
  );
}

function PulseVisual() {
  return (
    <Card className="visual-card overflow-hidden border-zinc-800/90 bg-[#101012] py-0 shadow-2xl shadow-black/30">
      <CardContent className="p-0">
        <div className="flex h-12 items-center justify-between border-b border-zinc-800 px-4">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
            <Command className="size-4 text-lime-300" /> Pulse / Incident 248
          </div>
          <Badge variant="outline" className="border-amber-400/30 bg-amber-400/10 text-amber-300">
            Investigating
          </Badge>
        </div>
        <div className="grid min-h-72 grid-cols-[1fr_1.25fr] max-sm:grid-cols-1">
          <div className="border-r border-zinc-800 p-4 max-sm:border-b max-sm:border-r-0">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-zinc-600">
              Signal timeline
            </p>
            <div className="space-y-5">
              {[
                ["09:42", "Error rate crossed 5%"],
                ["09:45", "Payments service isolated"],
                ["09:51", "Rollback in progress"],
              ].map(([time, copy], i) => (
                <div key={time} className="grid grid-cols-[48px_10px_1fr] items-start gap-2 text-xs">
                  <span className="font-mono text-zinc-600">{time}</span>
                  <span className={`mt-1 size-2 rounded-full ${i === 2 ? "bg-lime-300" : "bg-zinc-700"}`} />
                  <span className="leading-relaxed text-zinc-400">{copy}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">Live runbook</p>
              <span className="font-mono text-[10px] text-zinc-700">3 / 4</span>
            </div>
            <div className="space-y-2">
              {["Confirm blast radius", "Pause deploy pipeline", "Validate rollback", "Publish status update"].map(
                (item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-3 text-xs text-zinc-400"
                  >
                    <span className={`grid size-5 place-items-center rounded ${i < 3 ? "bg-lime-300 text-zinc-950" : "border border-zinc-700"}`}>
                      {i < 3 && <Check className="size-3.5" />}
                    </span>
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AtlasVisual() {
  return (
    <Card className="visual-card overflow-hidden border-zinc-800/90 bg-[#101012] py-0 shadow-2xl shadow-black/30">
      <CardContent className="p-0">
        <div className="flex h-12 items-center gap-3 border-b border-zinc-800 px-4 text-xs text-zinc-500">
          <Sparkles className="size-4 text-sky-300" />
          <span className="text-zinc-300">How do I rotate a production API key?</span>
          <span className="ml-auto rounded border border-zinc-800 px-2 py-1 font-mono text-[10px]">⌘ K</span>
        </div>
        <div className="grid min-h-72 grid-cols-[1.25fr_0.75fr] max-sm:grid-cols-1">
          <div className="p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-sky-300">Synthesized answer</p>
            <h3 className="mt-4 text-lg font-medium text-zinc-100">Rotate without downtime</h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400">
              Create the replacement key first, update the secret in both environments, then revoke the previous key after traffic confirms the new credential.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Security guide", "Platform handbook", "Runbook #42"].map((item) => (
                <Badge key={item} variant="secondary" className="bg-zinc-900 text-zinc-400">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-l border-zinc-800 bg-zinc-950/40 p-4 max-sm:border-l-0 max-sm:border-t">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-zinc-600">Context graph</p>
            <div className="grid gap-2">
              {["API keys", "Environment secrets", "Zero-downtime deploys", "Audit log"].map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-zinc-800/80 p-3 text-xs text-zinc-400">
                  <span className={`size-2 rounded-full ${i === 0 ? "bg-sky-300" : "bg-zinc-700"}`} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TraceVisual() {
  const bars = [32, 54, 44, 72, 61, 89, 74, 63, 48, 68, 55, 78];
  return (
    <Card className="visual-card overflow-hidden border-zinc-800/90 bg-[#101012] py-0 shadow-2xl shadow-black/30">
      <CardContent className="p-0">
        <div className="flex h-12 items-center justify-between border-b border-zinc-800 px-4">
          <div className="flex items-center gap-2 text-xs text-zinc-300">
            <TerminalSquare className="size-4 text-fuchsia-300" /> api-gateway / production
          </div>
          <span className="font-mono text-[10px] text-zinc-600">Last 60 min</span>
        </div>
        <div className="p-5">
          <div className="mb-7 grid grid-cols-3 gap-3">
            {[["p95", "184 ms"], ["Errors", "0.08%"], ["Requests", "48.2k"]].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
                <p className="font-mono text-[10px] uppercase text-zinc-600">{label}</p>
                <p className="mt-1 text-lg text-zinc-200">{value}</p>
              </div>
            ))}
          </div>
          <div className="flex h-28 items-end gap-2 border-b border-zinc-800 px-1">
            {bars.map((height, i) => (
              <div key={i} className="group relative h-full flex-1">
                <span
                  className="absolute inset-x-0 bottom-0 rounded-t-sm bg-fuchsia-300/70 transition-colors group-hover:bg-lime-300"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
            <span className="size-2 rounded-full bg-lime-300" /> Latency returned to baseline after cache fix
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const trackRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const sections = Array.from(track.querySelectorAll<HTMLElement>("[data-chapter]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(sections.indexOf(visible.target as HTMLElement));
      },
      { root: track, threshold: [0.5, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));

    const wheel = (event: WheelEvent) => {
      if (window.innerWidth < 768 || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (Math.abs(event.deltaY) > 4) {
        event.preventDefault();
        track.scrollLeft += event.deltaY;
      }
    };

    const keys = (event: KeyboardEvent) => {
      if (window.innerWidth < 768 || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "ArrowRight" ? Math.min(active + 1, sections.length - 1) : Math.max(active - 1, 0);
      sections[next]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    };

    track.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("keydown", keys);
    return () => {
      observer.disconnect();
      track.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", keys);
    };
  }, [active]);

  const goTo = (index: number) => {
    const section = trackRef.current?.querySelectorAll<HTMLElement>("[data-chapter]")[index];
    section?.scrollIntoView({ behavior: "smooth", inline: "start", block: "start" });
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => goTo(0)} aria-label="Back to introduction">
          <span className="brand-mark">NB</span>
          <span className="hidden sm:block">Nidhi B.</span>
        </button>

        <div className="hidden items-center gap-2 text-xs text-zinc-500 md:flex">
          <span className="size-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264]" />
          Software engineer · Product thinker
        </div>

        <Button variant="outline" size="sm" className="rounded-full border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-900 max-sm:hidden" onClick={() => goTo(5)}>
          <Mail className="size-3.5" /> Contact
        </Button>
      </header>

      <section ref={trackRef} className="story-track" aria-label="Portfolio chapters">
        <article id="intro" data-chapter className="chapter intro-chapter">
          <div className="chapter-inner intro-grid">
            <div className="self-center">
              <Eyebrow>01 / Introduction</Eyebrow>
              <h1 className="display mt-8 max-w-4xl text-[clamp(3.4rem,8vw,7.6rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                I build the <span className="text-lime-300">logic</span> behind products people trust.
              </h1>
              <p className="mt-8 hidden max-w-xl text-lg leading-8 text-zinc-400 sm:block sm:text-xl">
                Software engineer with a design eye—turning messy systems into clear, durable product experiences.
              </p>
              <p className="mt-8 text-lg leading-8 text-zinc-400 sm:hidden">
                Software engineer with a design eye.<br />I turn messy systems into clear,<br />durable products.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button className="rounded-full bg-lime-300 px-6 text-zinc-950 hover:bg-lime-200" onClick={() => goTo(1)}>
                  View selected work
                </Button>
                <span className="hidden font-mono text-xs text-zinc-600 md:inline">Scroll sideways · Use ← → keys</span>
                <span className="font-mono text-xs text-zinc-600 md:hidden">Scroll down to explore</span>
              </div>
            </div>

            <div className="intro-side self-end md:self-center">
              <div className="code-orbit" aria-hidden="true">
                <div className="orbit-center"><Braces className="size-8" /></div>
                {[Code2, Database, Network, Workflow].map((Icon, i) => (
                  <div key={i} className={`orbit-node orbit-node-${i + 1}`}><Icon className="size-4" /></div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-6">
                <Stat value="06+" label="years building for the web" />
                <Stat value="∞" label="curiosity for better systems" />
              </div>
            </div>
          </div>
        </article>

        <article id="pulse" data-chapter className="chapter">
          <div className="chapter-inner case-grid">
            <div className="case-copy">
              <SectionLabel index="02" title="Selected work" />
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <h2 className="display text-5xl font-medium tracking-[-0.05em] sm:text-7xl">Pulse</h2>
                <Badge variant="outline" className="border-lime-300/30 text-lime-300">Incident operations</Badge>
              </div>
              <p className="mt-5 max-w-xl text-xl leading-8 text-zinc-400">
                One calm place for engineering teams to understand, coordinate, and resolve production incidents.
              </p>
              <div className="case-notes">
                <div><span>Why</span><p>Critical context was scattered across chat, logs, and runbooks when every minute mattered.</p></div>
                <div><span>What I did</span><p>Mapped the response workflow, built the real-time event layer, and shaped the operator UI.</p></div>
                <div><span>Built with</span><p>Next.js · TypeScript · WebSockets · Postgres</p></div>
              </div>
              <div className="mt-8 flex gap-8"><Stat value="−41%" label="median time to resolve" /><Stat value="2.3×" label="faster team handoffs" /></div>
            </div>
            <div className="self-center"><PulseVisual /></div>
          </div>
        </article>

        <article id="atlas" data-chapter className="chapter">
          <div className="chapter-inner case-grid">
            <div className="case-copy">
              <SectionLabel index="03" title="Selected work" />
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <h2 className="display text-5xl font-medium tracking-[-0.05em] sm:text-7xl">Atlas</h2>
                <Badge variant="outline" className="border-sky-300/30 text-sky-300">Knowledge search</Badge>
              </div>
              <p className="mt-5 max-w-xl text-xl leading-8 text-zinc-400">
                A context-aware search experience that turns fragmented company knowledge into answers people can verify.
              </p>
              <div className="case-notes">
                <div><span>Why</span><p>Teams spent more time finding the right document than using what was inside it.</p></div>
                <div><span>What I did</span><p>Designed the retrieval pipeline, citation model, and progressive answer experience.</p></div>
                <div><span>Built with</span><p>React · Python · pgvector · OpenAI API</p></div>
              </div>
              <div className="mt-8 flex gap-8"><Stat value="88%" label="answers with useful citations" /><Stat value="−63%" label="time spent searching" /></div>
            </div>
            <div className="self-center"><AtlasVisual /></div>
          </div>
        </article>

        <article id="trace" data-chapter className="chapter">
          <div className="chapter-inner case-grid">
            <div className="case-copy">
              <SectionLabel index="04" title="Selected work" />
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <h2 className="display text-5xl font-medium tracking-[-0.05em] sm:text-7xl">Trace</h2>
                <Badge variant="outline" className="border-fuchsia-300/30 text-fuchsia-300">Observability</Badge>
              </div>
              <p className="mt-5 max-w-xl text-xl leading-8 text-zinc-400">
                A developer-first observability layer that makes service health legible before an alert becomes a fire.
              </p>
              <div className="case-notes">
                <div><span>Why</span><p>Raw telemetry was abundant, but the path from symptom to root cause was still unclear.</p></div>
                <div><span>What I did</span><p>Led the front-end architecture and built reusable patterns for dense technical data.</p></div>
                <div><span>Built with</span><p>React · Go · ClickHouse · OpenTelemetry</p></div>
              </div>
              <div className="mt-8 flex gap-8"><Stat value="4.7×" label="faster trace exploration" /><Stat value="99.95%" label="dashboard availability" /></div>
            </div>
            <div className="self-center"><TraceVisual /></div>
          </div>
        </article>

        <article id="about" data-chapter className="chapter">
          <div className="chapter-inner about-grid">
            <div>
              <Eyebrow>05 / How I work</Eyebrow>
              <h2 className="display mt-8 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl">
                Strong products happen when <span className="text-zinc-600">the system</span> and <span className="text-lime-300">the story</span> agree.
              </h2>
            </div>
            <div className="work-principles">
              {[
                ["01", "Start with the why", "I clarify the user tension and business constraint before choosing a technical shape."],
                ["02", "Prototype the hard part", "I test the riskiest interaction or system assumption early, while change is still cheap."],
                ["03", "Build for the next person", "Clear interfaces, useful docs, and boring infrastructure make good work last."],
              ].map(([number, title, copy]) => (
                <div key={number} className="principle">
                  <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
            <div className="tools-row">
              {tools.map((tool) => <Badge key={tool} variant="secondary" className="rounded-full bg-zinc-900 px-4 py-2 text-zinc-400">{tool}</Badge>)}
            </div>
          </div>
        </article>

        <article id="contact" data-chapter className="chapter contact-chapter">
          <div className="chapter-inner contact-grid">
            <div>
              <Eyebrow>06 / Let’s build</Eyebrow>
              <h2 className="display mt-8 max-w-5xl text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                Have a hard problem worth making <span className="text-lime-300">simple?</span>
              </h2>
            </div>
            <div className="contact-card">
              <div>
                <p className="text-sm text-zinc-500">Open to thoughtful product engineering work.</p>
                <p className="mt-2 text-xl text-zinc-100">Let’s make the next chapter count.</p>
              </div>
              <Button asChild className="h-12 rounded-full bg-lime-300 px-6 text-zinc-950 hover:bg-lime-200">
                <a href="mailto:hello@nidhi.dev"><Mail className="size-4" /> hello@nidhi.dev</a>
              </Button>
            </div>
            <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-600">
              <span>Designed & engineered by Nidhi B.</span>
              <span className="font-mono">Available in Pacific Time · 2026</span>
            </footer>
          </div>
        </article>
      </section>

      <nav className="chapter-nav" aria-label="Portfolio chapter navigation">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <span className="w-10 shrink-0 font-mono text-xs text-zinc-500">0{active + 1}/0{chapters.length}</span>
          <Progress value={((active + 1) / chapters.length) * 100} className="h-px max-w-44 bg-zinc-800 [&_[data-slot=progress-indicator]]:bg-lime-300" />
        </div>
        <div className="nav-pills">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => goTo(index)}
              className={active === index ? "active" : ""}
              aria-current={active === index ? "page" : undefined}
            >
              {chapter.label}
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
