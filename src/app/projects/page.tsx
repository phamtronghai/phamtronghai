import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { RevealText } from "@/components/motion/reveal-text";
import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/motion/parallax";
import { ProjectWindow } from "@/components/ui/project-window";
import { ProjectSignals, ActivePill } from "@/components/ui/project-signals";
import { ResearchCard } from "@/components/home/research-card";
import { GithubIcon } from "@/components/ui/icons";
import { projects, WEB_PROJECTS, FEATURED_ORDER } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Dự án của Phạm Trọng Hải: chấm công, thực địa, địa chính, mộ liệt sĩ, bản sao số và hạ tầng AI cục bộ.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => FEATURED_ORDER.indexOf(a.slug) - FEATURED_ORDER.indexOf(b.slug));
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="pt-32 pb-28">
      <Container>
        <Eyebrow>dự án</Eyebrow>
        <RevealText
          as="h1"
          className="mt-6 max-w-3xl font-display text-[2.4rem] font-semibold leading-[1.03] tracking-[-0.025em] text-bone sm:text-5xl"
        >
          Các hệ thống đã xây.
        </RevealText>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone-dim">
          Phần mềm vận hành nội bộ, GIS thực địa và hạ tầng AI cục bộ. Mở từng mục để xem mô tả.
        </p>
      </Container>

      <Container className="mt-20 space-y-28 sm:space-y-36">
        {featured.map((p, i) => (
          <Reveal key={p.slug}>
            <article className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Parallax speed={0.95} className={cn(i % 2 === 1 && "lg:order-2")}>
                <Link
                  href={`/projects/${p.slug}`}
                  aria-label={`${p.name} case study`}
                  className="block"
                >
                  <ProjectWindow
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    url={WEB_PROJECTS.includes(p.slug) ? p.links.live : undefined}
                    glow
                    fit={p.fit}
                  />
                </Link>
              </Parallax>

              <div className={cn(i % 2 === 1 && "lg:order-1")}>
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-ember tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted">{p.year}</span>
                  {p.active && (
                    <>
                      <span className="h-px w-5 bg-line" />
                      <ActivePill />
                    </>
                  )}
                </div>
                <Link href={`/projects/${p.slug}`} className="inline-block">
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-bone transition-colors group-hover:text-ember sm:text-3xl">
                    {p.name}
                  </h2>
                </Link>
                <p className="mt-1.5 font-mono text-sm text-muted">{p.tagline}</p>
                {p.team && (
                  <p className="mt-1 font-mono text-xs text-muted">{p.team}</p>
                )}
                <p className="mt-5 max-w-xl text-[0.97rem] leading-relaxed text-bone-dim">
                  {p.summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                  {p.stack.slice(0, 6).map((s) => (
                    <li key={s} className="rounded border border-line px-2.5 py-1 text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
                <ProjectSignals metrics={p.metrics} badges={p.badges} className="mt-6" />
                <div className="mt-7 flex flex-wrap items-center gap-6 font-mono text-sm">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group/cs inline-flex items-center gap-1.5 text-ember transition-colors hover:text-ember-bright"
                  >
                    Chi tiết
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cs:-translate-y-0.5 group-hover/cs:translate-x-0.5" />
                  </Link>
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-bone"
                    >
                      Trực tuyến
                    </a>
                  )}
                  {p.links.repo && (
                    <a
                      href={p.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-bone"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      Mã nguồn
                    </a>
                  )}
                  {p.links.docs && (
                    <Link
                      href={p.links.docs}
                      className="text-muted transition-colors hover:text-bone"
                    >
                      Chính sách
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </Container>

      <Container className="mt-32 border-t border-line pt-16">
        <Eyebrow>nghiên cứu</Eyebrow>
        <p className="mt-6 max-w-xl text-[0.97rem] leading-relaxed text-bone-dim">
          Nghiên cứu sinh tiến sĩ ngành Trắc địa và Bản đồ tại MIIGAiK. Luận án đã được bảo vệ.
        </p>
        <div className="mt-10">
          <Reveal>
            <ResearchCard />
          </Reveal>
        </div>
      </Container>

      <Container className="mt-28 border-t border-line pt-16">
        <Eyebrow>dự án khác</Eyebrow>
        <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link href={`/projects/${p.slug}`} className="group block">
                <ProjectWindow
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  url={WEB_PROJECTS.includes(p.slug) ? p.links.live : undefined}
                  objectPosition={p.slug === "knifethrow" ? "object-center" : undefined}
                  fit={p.fit}
                />
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-bone transition-colors group-hover:text-ember">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-muted">{p.year}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted">{p.tagline}</p>
                {p.team && (
                  <p className="mt-1 font-mono text-[0.7rem] text-muted">{p.team}</p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                  {p.oneLiner}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-ember">
                  Case study
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
