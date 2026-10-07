import { useEffect, useRef, useState } from "react";
import { Cog, MapPin, Star, Webhook } from "lucide-react";
import hourglass from "@/assets/hourglass-3d.jpg";
import leadsAutopilot from "@/assets/leads-autopilot-3d.jpg";
import apiWorkflows from "@/assets/api-workflows-3d.jpg";
import mediaHub from "@/assets/media-hub-3d.jpg";
import marinaTerminal from "@/assets/marina-terminal-3d.jpg";






const frameClass =
  "relative mb-6 h-[120px] w-full overflow-hidden rounded-xl border border-gold/20 bg-black/40";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

export function HoursCounterWidget() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * 10));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <div ref={ref} className={frameClass}>
      <img
        src={hourglass}
        alt="3D gold and cyan hourglass with clockwork gears"
        loading="lazy"
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,9,12,0.95) 30%, rgba(7,9,12,0.35) 70%, rgba(7,9,12,0.1) 100%)",
        }}
      />
      <div className="relative flex h-full items-center gap-4 px-5">
        <Cog className="h-9 w-9 animate-[spin_6s_linear_infinite] text-gold/80" />
        <div>
          <p
            className="font-display text-3xl font-bold leading-none text-gold"
            style={{ textShadow: "0 0 18px rgba(212,175,55,0.55)" }}
          >
            {value}+
          </p>
          <p className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
            Hours Saved / Wk
          </p>
        </div>
      </div>
    </div>
  );
}


export function MarinaStatusWidget() {
  return (
    <div className={frameClass}>
      <img
        src={marinaTerminal}
        alt="Isometric marina control terminal showing Marina OS status beside a docked superyacht at night"
        loading="lazy"
        width={1280}
        height={896}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,9,12,0.35) 0%, rgba(7,9,12,0.2) 45%, rgba(7,9,12,0.1) 100%)",
        }}
      />

    </div>
  );
}

export function BeforeAfterWidget({ image }: { image: string }) {
  const [pos, setPos] = useState(55);
  return (
    <div className={frameClass}>
      <img
        src={image}
        alt="Original photo before enhancement"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "grayscale(1) brightness(0.55) contrast(0.9)" }}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <img
          src={image}
          alt="Enhanced result after color grading"
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ filter: "saturate(1.35) contrast(1.1) brightness(1.05)" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(212,175,55,0.18), rgba(0,240,255,0.14))",
          }}
        />
      </div>
      <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-white/70">
        Before
      </span>
      <span
        className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-gold"
        style={{ textShadow: "0 0 12px rgba(212,175,55,0.6)" }}
      >
        After
      </span>
      <div
        className="pointer-events-none absolute inset-y-0 w-px"
        style={{
          left: `${pos}%`,
          background: "linear-gradient(180deg,#D4AF37,#00F0FF)",
          boxShadow: "0 0 12px rgba(0,240,255,0.6)",
        }}
      />
      <span
        className="pointer-events-none absolute top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-black/70 text-[0.5rem] text-gold"
        style={{ left: `${pos}%` }}
      >
        ⇔
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label="Compare before and after enhancement"
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

export function LeadFeedWidget() {
  return (
    <div className={frameClass}>
      <img
        src={leadsAutopilot}
        alt="3D dark-glass lead acquisition dashboard with gold funnel"
        loading="lazy"
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(7,9,12,0.35), rgba(7,9,12,0.15))" }}
      />
    </div>
  );
}


export function LocalRankWidget() {
  return (
    <div className={frameClass}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.12) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        className="pointer-events-none absolute -left-6 top-6 h-16 w-32 rotate-[8deg] rounded-full"
        style={{ background: "rgba(212,175,55,0.10)", filter: "blur(6px)" }}
      />
      <div className="relative flex h-full items-center gap-3 px-4">
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
          <span
            className="absolute h-10 w-10 animate-ping rounded-full"
            style={{ background: "rgba(0,240,255,0.25)" }}
          />
          <span
            className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gold/50"
            style={{
              background: "rgba(0,0,0,0.6)",
              boxShadow: "0 0 16px rgba(0,240,255,0.45), 0 0 22px rgba(212,175,55,0.25)",
            }}
          >
            <MapPin className="h-4 w-4 text-gold" />
          </span>
        </span>
        <div className="min-w-0 flex-1 space-y-1.5">
          <div
            className="flex items-center gap-2 rounded-md border border-gold/30 px-2 py-1"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <span
              className="rounded px-1.5 text-[0.55rem] font-bold text-black"
              style={{ background: "linear-gradient(180deg,#F3D27A,#D4AF37)" }}
            >
              #1
            </span>
            <span className="truncate text-[0.6rem] uppercase tracking-[0.2em] text-white/85">
              Local Search Placement
            </span>
          </div>
          {["Competitor A", "Competitor B"].map((c) => (
            <div
              key={c}
              className="flex items-center gap-2 rounded-md px-2 py-1"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <Star className="h-3 w-3 text-muted-foreground" />
              <span className="truncate text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function NodeMapWidget() {
  const nodes = [
    { x: 12, y: 30 },
    { x: 40, y: 68 },
    { x: 62, y: 26 },
    { x: 88, y: 58 },
  ];
  return (
    <div className={frameClass}>
      <img
        src={apiWorkflows}
        alt="3D gold circuit board with cyan energy pulses and webhook nodes"
        loading="lazy"
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(7,9,12,0.55), rgba(7,9,12,0.85))" }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nodeLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#00F0FF" />
          </linearGradient>
        </defs>
        {nodes.slice(0, -1).map((n, i) => (
          <line
            key={i}
            x1={n.x}
            y1={n.y}
            x2={nodes[i + 1].x}
            y2={nodes[i + 1].y}
            stroke="url(#nodeLine)"
            strokeWidth={0.7}
            strokeDasharray="6 4"
            opacity={0.75}
          >
            <animate
              attributeName="stroke-dashoffset"
              from="20"
              to="0"
              dur="1.6s"
              repeatCount="indefinite"
            />
          </line>
        ))}
      </svg>
      {nodes.map((n, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            background: i % 2 ? "#00F0FF" : "#D4AF37",
            boxShadow: `0 0 12px ${i % 2 ? "rgba(0,240,255,0.8)" : "rgba(212,175,55,0.8)"}`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
      <span
        className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md border border-gold/25 px-2 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-white/80"
        style={{ background: "rgba(0,0,0,0.55)" }}
      >
        <Webhook className="h-3 w-3 text-gold" /> Webhook Sync • Active
      </span>
    </div>
  );
}

export function MediaFeedWidget() {
  return (
    <div
      className={frameClass}
      style={{ boxShadow: "0 0 24px rgba(0,240,255,0.10), inset 0 0 30px rgba(0,0,0,0.6)" }}
    >
      <img
        src={mediaHub}
        alt="3D cascading video thumbnail feed with gold and cyan play buttons"
        loading="lazy"
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(0,240,255,0.10), transparent 60%), radial-gradient(circle at 85% 15%, rgba(212,175,55,0.10), transparent 60%)",
        }}
      />
    </div>
  );
}

