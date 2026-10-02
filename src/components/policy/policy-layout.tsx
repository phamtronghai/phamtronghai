import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { RevealText } from "@/components/motion/reveal-text";

export function PolicyLayout({
  app,
  meta,
  children,
}: {
  app: string;
  meta: { label: string; value: string }[];
  children: ReactNode;
}) {
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

        <div className="mt-9">
          <Eyebrow>chính sách quyền riêng tư</Eyebrow>
          <RevealText
            as="h1"
            className="mt-4 max-w-3xl font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl"
          >
            {app}
          </RevealText>
        </div>

        <dl className="mt-8 max-w-3xl border-t border-line font-mono text-sm">
          {meta.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 border-b border-line py-3 sm:grid-cols-[220px_1fr] sm:gap-6"
            >
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">{row.label}</dt>
              <dd className="text-bone">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="policy-body mt-4 max-w-3xl text-[0.97rem] leading-relaxed text-bone-dim">
          {children}
        </div>
      </Container>
    </div>
  );
}

export function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 border-t border-line pt-8">
      <h2 className="font-display text-xl font-semibold tracking-tight text-bone">{title}</h2>
      <div className="mt-4 space-y-3 [&_a]:text-ember [&_a]:underline-offset-2 hover:[&_a]:underline [&_li]:mt-1.5 [&_strong]:font-medium [&_strong]:text-bone [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export function Lang({ children }: { children: string }) {
  return (
    <span className="mr-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ember">
      {children}
    </span>
  );
}
