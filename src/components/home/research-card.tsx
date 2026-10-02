import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { research } from "@/content/site";

export function ResearchCard() {
  return (
    <Link
      href="/research"
      className="group block overflow-hidden rounded-xl border border-line bg-ink-2 p-6 transition-colors hover:bg-surface sm:p-8"
    >
      <div className="font-mono text-xs text-ember">Nghiên cứu · {research.year}</div>
      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-bone transition-colors group-hover:text-ember sm:text-2xl">
        {research.title}
      </h3>
      <p className="mt-2 font-mono text-xs text-muted">{research.byline}</p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-dim">{research.subtitle}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-ember">
        Xem chi tiết
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
