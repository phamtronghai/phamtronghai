import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { RevealText } from "@/components/motion/reveal-text";
import { profile, research } from "@/content/site";

export const metadata: Metadata = {
  title: research.title,
  description: research.summary,
  alternates: { canonical: "/research" },
  openGraph: {
    type: "article",
    title: `${research.title} · ${profile.name}`,
    description: research.subtitle,
    url: "/research",
  },
};

export default function ResearchPage() {
  return (
    <div className="pt-28 pb-28">
      <Container>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-bone"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          Tất cả dự án
        </Link>

        <div className="mt-9 flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="text-ember tabular-nums">{research.year}</span>
          <span className="h-px w-6 bg-line" />
          <span className="text-muted">{research.byline}</span>
        </div>

        <RevealText
          as="h1"
          className="mt-4 max-w-3xl font-display text-[2.4rem] font-semibold leading-[1.0] tracking-[-0.03em] text-bone sm:text-6xl"
        >
          {research.title}
        </RevealText>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone-dim sm:text-xl">
          {research.subtitle}
        </p>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <Eyebrow>tóm tắt</Eyebrow>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-bone-dim">{research.summary}</p>
          <p className="mt-5 text-[0.97rem] leading-relaxed text-muted">{research.note}</p>
        </div>

        <div className="lg:border-l lg:border-line lg:pl-12">
          <Eyebrow>nội dung</Eyebrow>
          <ul className="mt-5 space-y-3">
            {research.findings.map((f) => (
              <li key={f} className="flex gap-3 text-[0.95rem] leading-relaxed text-bone-dim">
                <span className="mt-2 h-px w-3 shrink-0 bg-ember/60" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-24 border-t border-line pt-10">
        <Link href="/projects" className="group flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Quay lại</span>
          <span className="inline-flex items-center gap-2 font-display text-xl font-semibold text-bone transition-colors group-hover:text-ember sm:text-2xl">
            Tất cả dự án
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </Container>
    </div>
  );
}
