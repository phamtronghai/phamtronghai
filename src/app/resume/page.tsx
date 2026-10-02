import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { education, experiences, profile, projects, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "Hồ sơ",
  description:
    "Hồ sơ Phạm Trọng Hải: kỹ sư phần mềm và chuyên gia GIS/Bản đồ, SAMCOM và MIIGAiK.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="pt-32 pb-28">
      <Container>
        <Eyebrow>hồ sơ</Eyebrow>
        <h1 className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-sm text-muted">{profile.role}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-bone-dim">
          {profile.location} · {profile.birthday}
          <br />
          {profile.phones.map((p) => p.display).join(" / ")} · {profile.email}
          <br />
          {profile.socials.githubLabel}
        </p>

        <section className="mt-14 max-w-3xl">
          <Eyebrow>tóm tắt</Eyebrow>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-bone-dim">{profile.intro}</p>
        </section>

        <section className="mt-14 max-w-3xl">
          <Eyebrow>kinh nghiệm</Eyebrow>
          <div className="mt-6 space-y-8">
            {experiences.map((e) => (
              <article key={e.start}>
                <h2 className="font-display text-xl font-semibold text-bone">
                  {e.company}
                  <span className="text-muted"> · {e.location}</span>
                </h2>
                <p className="mt-1 font-mono text-sm text-muted">
                  {e.role} · {e.mode} · {e.start} – {e.end}
                </p>
                <ul className="mt-3 space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[0.95rem] leading-relaxed text-bone-dim">
                      <span className="mt-2 h-px w-3 shrink-0 bg-ember/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 max-w-3xl">
          <Eyebrow>học vấn</Eyebrow>
          <h2 className="mt-5 font-display text-xl font-semibold text-bone">{education.school}</h2>
          <p className="mt-1 font-mono text-sm text-muted">
            {education.program} · {education.start} – {education.end} · {education.location}
          </p>
          <ul className="mt-3 space-y-2">
            {education.points.map((p) => (
              <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-bone-dim">
                <span className="mt-2 h-px w-3 shrink-0 bg-ember/60" />
                {p}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 max-w-3xl">
          <Eyebrow>dự án tiêu biểu</Eyebrow>
          <ul className="mt-5 space-y-3">
            {projects.map((p) => (
              <li key={p.slug} className="text-[0.95rem] leading-relaxed text-bone-dim">
                <span className="text-bone">{p.name}.</span> {p.oneLiner}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 max-w-3xl">
          <Eyebrow>kỹ năng</Eyebrow>
          <div className="mt-6 space-y-4">
            {skills.map((g) => (
              <p key={g.group} className="text-[0.95rem] leading-relaxed text-bone-dim">
                <span className="text-bone">{g.group}:</span> {g.items.join(", ")}.
              </p>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
