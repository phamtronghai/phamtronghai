import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { RevealText } from "@/components/motion/reveal-text";
import { Magnetic } from "@/components/motion/magnetic";
import { ContactForm } from "@/components/ui/contact-form";
import { GithubIcon } from "@/components/ui/icons";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Phạm Trọng Hải qua email hoặc điện thoại.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh items-center pt-32 pb-24">
      <Container className="w-full">
        <Eyebrow>liên hệ</Eyebrow>
        <RevealText
          as="h1"
          className="mt-6 font-display text-[3rem] font-semibold leading-[0.95] tracking-[-0.03em] text-bone sm:text-[4.2rem]"
        >
          Trao đổi công việc.
        </RevealText>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-bone-dim">
              Email và điện thoại phía dưới đều tới tôi trực tiếp.
            </p>

            <div className="mt-9">
              <Magnetic>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-3 font-display text-xl text-bone transition-colors hover:text-ember sm:text-2xl"
                >
                  <Mail className="h-5 w-5 text-ember" />
                  {profile.email}
                </a>
              </Magnetic>
            </div>

            <ul className="mt-10 space-y-3 font-mono text-sm">
              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile, opens in a new tab"
                  className="group inline-flex items-center gap-3 text-bone transition-colors hover:text-ember"
                >
                  <GithubIcon className="h-4 w-4 text-muted transition-colors group-hover:text-ember" />
                  {profile.socials.githubLabel}
                </a>
              </li>
              {profile.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={`tel:${phone.href}`}
                    className="inline-flex items-center gap-3 text-bone transition-colors hover:text-ember"
                  >
                    <Phone className="h-4 w-4 text-muted" />
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="inline-flex items-center gap-3 text-muted">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
