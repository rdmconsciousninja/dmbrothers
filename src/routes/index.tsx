import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Quote, Play, ThumbsUp } from "lucide-react";

import {
  HoursCounterWidget,
  MarinaStatusWidget,
  BeforeAfterWidget,
  LeadFeedWidget,
  MediaFeedWidget,
  NodeMapWidget,
} from "@/components/deploy-widgets";

import { LanguageProvider, useLanguage } from "@/lib/i18n";

import officialLogo from "@/assets/DM_LOGO_PNG.png.asset.json";
import yachtPlatform from "@/assets/yacht-platform.jpg";
import aiFood from "@/assets/ai-food.jpg";
import bgLoop from "@/assets/DMbackgroundloop.mp4.asset.json";
import bgPoster from "@/assets/DMbackground.png.asset.json";
import heroVideo from "@/assets/Hero_video.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE DM BROTHERS — Premium AI, Automation & Digital Media" },
      {
        name: "description",
        content:
          "Microsoft-certified engineering, custom AI automations, web platforms and creative digital media for enterprise and marine businesses.",
      },
      {
        property: "og:title",
        content: "THE DM BROTHERS — Premium AI, Automation & Digital Media",
      },
      {
        property: "og:description",
        content:
          "20+ years of technical precision. AI solutions, automation and creative digital media built with a Kodawari mindset.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold/80">{children}</p>
  );
}

function BackgroundVideo() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0a0a0b]">
      <video
        className="h-full w-full object-cover"
        src={bgLoop.url}
        poster={bgPoster.url}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-[#0a0a0b]/45" />
    </div>
  );
}

function HomePage() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

function Home() {
  return (
    <>
      <BackgroundVideo />
      <main className="circuit-traces min-h-screen overflow-x-clip">
        <Nav />
        <Hero />
        <Story />
        <FeaturedBuilds />

        <SocialProof />
        <ClosingCta />
        <Footer />
      </main>
    </>
  );
}

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const base =
    "px-1 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 sm:px-1.5 sm:tracking-[0.15em]";
  const activeCls = "text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]";
  const idleCls = "text-white/40 hover:text-white/70";
  return (
    <div
      className="flex h-7 w-16 items-center justify-center rounded-full px-1.5 py-1 backdrop-blur-md sm:h-auto sm:w-auto sm:px-2.5 sm:py-1.5"
      style={{
        background: "rgba(13, 16, 23, 0.75)",
        border: "1px solid rgba(212, 175, 55, 0.28)",
        boxShadow: "0 0 14px -4px rgba(0, 240, 255, 0.25)",
      }}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${base} ${lang === "en" ? activeCls : idleCls}`}
      >
        EN
      </button>
      <span className="h-2.5 w-px sm:h-3" style={{ background: "rgba(212, 175, 55, 0.35)" }} />
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`${base} ${lang === "es" ? activeCls : idleCls}`}
      >
        ES
      </button>
    </div>
  );
}

function Nav() {
  const { t } = useLanguage();
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass-nav">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-5 py-3.5 sm:grid-cols-3 sm:px-8">
          <a href="#top" className="flex items-center justify-self-start">
            <img
              src={officialLogo.url}
              alt="The DM Brothers logo"
              width={180}
              height={44}
              className="h-8 w-auto object-contain mix-blend-screen transition-all duration-300 hover:drop-shadow-[0_0_14px_rgba(212,175,55,0.55),0_0_28px_rgba(0,240,255,0.25)] sm:h-10"
            />
          </a>
          <span
            className="justify-self-center text-center text-[0.6rem] font-medium uppercase leading-tight tracking-[0.2em] sm:text-sm sm:tracking-[0.35em]"
            style={{ color: "#FFFFFF" }}
          >
            <span className="block sm:inline">The DM</span>{" "}
            <span className="block sm:inline">Brothers</span>
          </span>
          <nav className="flex items-center gap-2 justify-self-end sm:gap-3">
            <LanguageToggle />
            <a
              href="mailto:hello@thedmbrothers.com"
              className="btn-gold h-7 px-2.5 text-xs transition-all duration-300 hover:shadow-[0_0_18px_rgba(212,175,55,0.5),0_0_36px_rgba(0,240,255,0.2)] sm:h-auto sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {t("nav.cta")}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();
  return (
    <section id="top" className="relative flex min-h-screen items-center px-5 py-12 lg:py-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="depth-card px-4 py-12 sm:px-14 sm:py-20">
          <div className="flex flex-col items-center text-center">
            {/* Showreel video canvas */}
            <div className="relative w-full max-w-4xl">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  background: "rgba(13, 16, 23, 0.85)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  boxShadow:
                    "0 20px 50px rgba(0, 0, 0, 0.85), 0 0 60px -20px rgba(212, 175, 55, 0.25), 0 0 60px -20px rgba(0, 240, 255, 0.15)",
                }}
              >
                <div className="relative aspect-video w-full">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                    src={heroVideo.url}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    aria-label="The DM Brothers showreel"
                    onEnded={(e) => {
                      e.currentTarget.pause();
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px rgba(212, 175, 55, 0.18), inset 0 0 40px rgba(0, 240, 255, 0.06)",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const v = videoRef.current;
                      if (!v) return;
                      v.muted = false;
                      v.currentTime = 0;
                      v.play().catch(() => {});
                    }}
                    className="absolute bottom-4 left-4 flex cursor-pointer items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-white/70 transition-all duration-300 hover:scale-[1.02] hover:text-gold hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.55),0_0_18px_rgba(212,175,55,0.35)] hover:brightness-125"
                  >
                    <Play className="h-3.5 w-3.5 text-gold transition-colors duration-300 group-hover:text-cyan" />{" "}
                    {t("hero.showreel")}
                  </button>
                </div>
              </div>
            </div>

            <h1 className="mt-10 max-w-4xl font-display text-xl leading-[1.1] font-bold sm:text-4xl lg:text-6xl">
              <span className="text-white" style={{ color: "#FFFFFF" }}>
                {t("hero.title1")}
              </span>{" "}
              <span className="gold-text gold-glow" style={{ color: "#D4AF37" }}>
                {t("hero.title2")}
              </span>
            </h1>
            <p
              className="mt-6 max-w-2xl text-base"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              {t("hero.sub")}
            </p>

            <div className="mt-10 flex items-center justify-center">
              <a
                href="mailto:hello@thedmbrothers.com"
                className="btn-gold flex flex-col items-center px-8 py-4 text-center"
              >
                <span className="text-base font-bold tracking-widest">{t("hero.cta")}</span>
                <span
                  className="mt-0.5 text-xs font-normal tracking-wide"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {t("hero.ctaSub")}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const { t } = useLanguage();
  return (
    <section className="px-5 py-12 lg:py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="depth-card px-6 py-7 sm:px-14 sm:py-9">
          <SectionLabel>{t("story.label")}</SectionLabel>
          <div className="mt-6 max-w-3xl">
            <h2 className="text-3xl leading-tight sm:text-4xl">
              {t("story.title1")}
              <span style={{ color: "#FFFFFF" }}>{t("story.title2")}</span>.{" "}
              <span className="gold-text">{t("story.title3")}</span>
            </h2>
            <p className="mt-5 text-muted-foreground">{t("story.body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedBuilds() {
  const { t } = useLanguage();
  const items = [
    { key: "card1", widget: <HoursCounterWidget /> },
    { key: "card2", widget: <MarinaStatusWidget /> },
    { key: "card3", widget: <BeforeAfterWidget image={aiFood} /> },
    { key: "card4", widget: <LeadFeedWidget /> },
    { key: "card5", widget: <MediaFeedWidget />, tagGold: true },
    { key: "card6", widget: <NodeMapWidget /> },
  ];

  return (
    <section id="work" className="px-5 py-12 lg:py-20 sm:px-8">
      <div className="section-panel mx-auto max-w-6xl px-6 py-12 sm:px-14 sm:py-16">
        <SectionLabel>{t("builds.label")}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl">
          <span style={{ color: "#FFFFFF" }}>{t("builds.title1")}</span>{" "}
          <span className="gold-text">{t("builds.title2")}</span>
        </h2>

        <article className="depth-card depth-card-hover group mt-12 overflow-hidden rounded-2xl">
          <div className="relative h-[22rem] w-full">
            <img
              src={yachtPlatform}
              alt={t("builds.marinaAlt")}
              loading="lazy"
              className="h-full w-full scale-105 object-cover opacity-70 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,11,0.92), rgba(10,10,11,0.15) 60%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <div>
                <h3 className="text-lg">{t("builds.marina")}</h3>
              </div>
              <span className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <Play className="h-5 w-5 text-gold" />
              </span>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {items.map(({ key, tagGold, widget }) => (
            <article
              key={key}
              className="depth-card depth-card-hover group flex h-full flex-col px-7 py-8"
            >
              {widget}
              <div className="flex items-start justify-end">
                <span
                  className={`text-[0.65rem] uppercase tracking-[0.2em] ${tagGold ? "text-gold" : "text-muted-foreground"}`}
                >
                  {t(`${key}.tag`)}
                </span>
              </div>
              <h3 className="mt-6 text-xl">{t(`${key}.title`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`${key}.body`)}
              </p>
              <div className="gold-rule mt-auto pt-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const { t } = useLanguage();
  const dms = [
    {
      name: "Marco V.",
      handle: "@marco.charters",
      text: t("proof.t1"),
      emoji: "🚀",
      drift: "drift-a",
    },
    {
      name: "Alina K.",
      handle: "@alinakitchen",
      text: t("proof.t2"),
      emoji: "👍",
      drift: "drift-b",
    },
    {
      name: "Dev R.",
      handle: "@devroberts",
      text: t("proof.t3"),
      emoji: "🔥",
      drift: "drift-a",
    },
  ];

  return (
    <section className="px-5 py-12 lg:py-20 sm:px-8">
      <div className="section-panel mx-auto max-w-6xl px-6 py-12 sm:px-14 sm:py-16">
        <SectionLabel>{t("proof.label")}</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">{t("proof.title")}</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {dms.map((d, i) => (
            <figure
              key={d.name}
              className={`depth-card-light ${d.drift} px-6 py-6`}
              style={{ animationDelay: `${i * 1.2}s` }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
                  style={{ background: "#e8ecf3", color: "#3b4a63" }}
                >
                  {d.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold" style={{ color: "#14161a" }}>
                    {d.name}
                  </p>
                  <p className="text-xs" style={{ color: "#6b7280" }}>
                    {d.handle}
                  </p>
                </div>
                <Quote className="ml-auto h-5 w-5" style={{ color: "#1d7bf5" }} />
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed" style={{ color: "#232733" }}>
                {d.text}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 text-xs" style={{ color: "#6b7280" }}>
                <ThumbsUp className="h-3.5 w-3.5" style={{ color: "#1d7bf5" }} />
                <span>{d.emoji}</span>
                <span>{t("proof.status")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="px-5 py-12 lg:py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="depth-card px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="gold-rule pulse-glow mx-auto mb-10 w-40" />
          <h2 className="text-3xl leading-tight sm:text-5xl">
            {t("cta.title1")}
            <span className="gold-text gold-glow">{t("cta.title2")}</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
            {t("cta.sub")}
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="mailto:hello@thedmbrothers.com"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.08em] text-slate-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            >
              {t("cta.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="px-5 py-12 lg:py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="gold-rule" />
        <div className="flex flex-col items-center gap-8 pt-10">
          <div className="flex flex-col items-center gap-4">
            <img
              src={officialLogo.url}
              alt="The DM Brothers logo"
              loading="lazy"
              width={180}
              height={44}
              className="h-12 w-auto object-contain mix-blend-screen transition-all duration-300 hover:drop-shadow-[0_0_14px_rgba(212,175,55,0.55),0_0_28px_rgba(0,240,255,0.25)]"
            />
            <span className="text-center text-[0.7rem] font-medium uppercase leading-tight tracking-widest text-gold sm:text-sm sm:tracking-[0.35em]">
              <span className="block sm:inline">The DM</span>{" "}
              <span className="block sm:inline">Brothers</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
