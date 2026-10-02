import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/providers";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { profile, resolveSiteUrl } from "@/content/site";
import "./globals.css";

// geist for display + mono, hanken for body warmth
const display = Geist({
  variable: "--font-display-src",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body-src",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = resolveSiteUrl();
const description = profile.intro;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} · Kỹ sư phần mềm`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Phạm Trọng Hải",
    "Pham Trong Hai",
    "GIS",
    "WebGIS",
    "SAMCOM",
    "MIIGAiK",
    "Flutter",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "vi_VN",
    title: `${profile.name} · Kỹ sư phần mềm`,
    description,
    siteName: profile.name,
    images: [{ url: "/assets/portrait.jpg", alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Kỹ sư phần mềm`,
    description,
    images: ["/assets/portrait.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d0f",
  colorScheme: "dark",
};

// structured data so an already-indexed personal brand can surface a rich result
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      jobTitle: profile.role,
      email: profile.email,
      description,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "MIIGAiK",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hải Phòng",
        addressCountry: "VN",
      },
      image: `${siteUrl}/assets/portrait.jpg`,
      sameAs: [profile.socials.github],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: profile.name,
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      style={{ backgroundColor: "#0b0d0f" }}
      className={`${display.variable} ${mono.variable} ${body.variable}`}
    >
      <body className="min-h-dvh font-body antialiased">
        <a href="#main-content" className="skip-link">
          Tới nội dung
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
        <Analytics />
        {/* paused while over the hobby quota; uncomment to resume collection */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
