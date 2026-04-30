import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import {
  Play,
  ArrowUpRight,
  Check,
  ChevronRight,
  ChevronLeft,
  Lightbulb,
  Layers,
  Award,
  Users,
  Wrench,
  TrendingUp,
  Globe,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import FeaturedLogo1 from "../imports/Component/Component";
import FeaturedLogo2 from "../imports/Component1/Component1";
import FeaturedLogo3 from "../imports/Component2/Component2";
import FeaturedLogo4 from "../imports/Component3/Component3";
import FeaturedLogo5 from "../imports/Component4/Component4";
import FeaturedLogo6 from "../imports/Component5/Component5";
import kevinImg from "../imports/image.png";
import slide1 from "../imports/image-1.png";
import slide2 from "../imports/image-2.png";
import slide3 from "../imports/image-3.png";
import slide4 from "../imports/image-4.png";
import slide5 from "../imports/image-5.png";
import slide6 from "../imports/image-6.png";
import slide7 from "../imports/image-7.png";
import slide8 from "../imports/image-8.png";
import slide9 from "../imports/image-9.png";
import logoImg from "../imports/image-11.png";
import ctaBgImg from "../imports/image-12.png";
import heroBgImg from "../imports/DV.png";
import badge1 from "../imports/Group_1171275440-1.png";
import badge2 from "../imports/Group_1171275441-1.png";
import badge3 from "../imports/Group_1171275442-1.png";
import badge4 from "../imports/Group_1171275443-1.png";
import badge5 from "../imports/Group_1171275444.png";
import kaneImg from "../imports/image-16.png";
import alessiaImg from "../imports/image-17.png";
import thimaImg from "../imports/image-15.png";
import opportunityBgImg from "../imports/image-18.png";
import opportunityPersonImg from "../imports/image-19.png";

/* ─── DARK TOKENS ─────────────────────────────────────────────── */
const BG = "#08080f";
const CARD = "#0f0f1a";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#d4af37";
const GOLD_LT = "#f0d878";
const PURPLE = "#7c3aed";
const PURPLE_LT = "#a78bfa";
const PURPLE_DK = "#6d28d9";
const WHITE = "#ffffff";
const MUTED = "#6b7280";
const SUB = "#a0a8b8";
const STRIP_H = 44;

/* ─── LIGHT TOKENS ────────────────────────────────────────────── */
const L_BG = "#ffffff";
const L_CARD = "#f4f3ef";
const L_CARD2 = "#eceae3";
const L_BORDER = "rgba(0,0,0,0.09)";
const L_TEXT = "#0d0d14";
const L_SUB = "#4b5563";
const L_MUTED = "#9ca3af";
const GOLD_DARK = "#a8861e";

const FONT_DISPLAY = "'Bebas Neue', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FORM_SCRIPT_SRC =
  "https://l.industryrockstars.ch/js/form_embed.js";

const SLIDES = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
];
const WEBINAR_DATE = new Date("2026-05-07T19:00:00Z");

/* ─── RESPONSIVE HOOK ─────────────────────────────────────────── */
function useWindowWidth() {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

/* ─── DATA ───────────────────────────────────────────────────── */
const DISCOVER = [
  {
    n: "01",
    icon: Lightbulb,
    title: "Uncover the Secrets to AI Consulting Mastery",
    body: "Imagine having a clear, step-by-step blueprint that empowers you to start, scale, and succeed as an AI consultant—even if AI feels brand new and scary to you. We'll reveal how you can confidently walk into this lucrative, in-demand field with no prior experience.",
  },
  {
    n: "02",
    icon: Layers,
    title:
      "Harness the 5 Core Pillars to Create Game-Changing Results",
    body: "Dive into the insider strategies, tools, and frameworks that few people know about, allowing you to make an immediate and lasting impact on any business, from fresh startups to fast-scaling brands.",
  },
  {
    n: "03",
    icon: Award,
    title:
      "Earn 3 Elite Certifications and Stand Out Instantly",
    body: "Picture yourself as a recognized expert in AI Consulting, Implementation, and Data Strategies. These certifications don't just validate your expertise; they make you the go-to authority businesses are searching for to help them transform.",
  },
  {
    n: "04",
    icon: Users,
    title: "Attract High-Paying Clients with Confidence",
    body: "Get the secrets to positioning yourself as the trusted advisor that businesses can't wait to hire. Learn exactly how to attract clients who not only need AI but are ready to invest in your expertise to make it happen.",
  },
  {
    n: "05",
    icon: Wrench,
    title:
      "Access Exclusive, Ready-to-Use AI Tools and Workflows",
    body: "Gain access to our exclusive in-house toolkit that's not available to just anyone. These tools will allow you to walk into any business, map out custom workflows, and immediately prove the value of your services.",
  },
  {
    n: "06",
    icon: TrendingUp,
    title:
      "Stay Ahead with the Latest, Most Powerful AI Trends",
    body: "Imagine always being on the cutting edge of AI—knowing the newest advances in machine learning, automation, and data strategies, so you're not just keeping up but leading the pack.",
  },
  {
    n: "07",
    icon: Globe,
    title:
      "Make a Deep, Lasting Impact on Businesses Worldwide",
    body: "It's more than just consulting; it's about creating transformations that boost productivity, amplify revenue, and make companies more competitive. Imagine the fulfillment of seeing your clients grow and succeed because of your guidance.",
  },
];

const FOR_YOU = [
  {
    title:
      "You're Ready to Embrace a Once-in-a-Lifetime Paradigm Shift",
    body: "Just like the arrival of the telephone, TV, and the internet, AI is reshaping the world. If you want to be part of this rare moment in history and capitalize on the immense potential, this webinar is your entry point.",
  },
  {
    title:
      'You Want to Command the Kind of Influence Reserved for "The Gurus"',
    body: "Imagine having clients look to you as the expert guiding them through a revolution as groundbreaking as the internet. Learn to attract clients who value your insights—and are ready to invest in your expertise.",
  },
  {
    title:
      "You're Seeking a High-Demand Skill that Sets You Apart",
    body: "Adding AI consulting to your toolkit puts you on the cutting edge, setting you apart from peers and positioning you as an indispensable asset in a world increasingly driven by tech innovation. This is the future.",
  },
  {
    title: "You Feel Called to Something Bigger",
    body: "If you sense that you're meant to play a pivotal role in this era-defining shift, AI consulting could be the high-impact, fulfilling path you're looking for to help businesses harness the future.",
  },
  {
    title:
      "You're Fascinated by How AI Can Transform the World",
    body: "If the sheer potential of AI to disrupt and redefine industries sparks your curiosity and gets you excited, this webinar will reveal exactly how you can help businesses leverage this game-changing technology.",
  },
  {
    title:
      "You're Ready to Build a Legacy by Leading in the Next Big Tech Shift",
    body: "If freedom, financial independence, and being part of something monumental sound like the career shift you've been seeking, this training offers you the framework to take advantage of the AI revolution.",
  },
  {
    title:
      "You Want to Start Your Own Business or Grow an Existing One on Your Terms",
    body: "If the sheer potential of AI to disrupt and redefine industries sparks your curiosity and gets you excited, this webinar will reveal exactly how you can help businesses leverage this game-changing technology.",
  },
];

/* ─── GLOBAL STYLES ──────────────────────────────────────────── */
const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; overflow-x: hidden; }

  @keyframes strip-shine {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(0.7); }
  }
  @keyframes strip-bg {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes opp-shine {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`;

/* ─── ALERT STRIP ────────────────────────────────────────────── */
function AlertStrip({ isMobile }: { isMobile: boolean }) {
  const sentence =
    "⚡ LIMITED SEATS AVAILABLE  ·  FREE VIRTUAL WEBINAR  ·  MAY 7 · 7PM EST  ·  REGISTER NOW — 100% FREE · NO CREDIT CARD NEEDED";
  const repeated = Array(6).fill(sentence).join("     ✦     ");

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 110,
        height: `${STRIP_H}px`,
        background:
          "linear-gradient(270deg, #4c1d95, #7c3aed, #a855f7, #6d28d9, #4c1d95)",
        backgroundSize: "300% 300%",
        animation: "strip-bg 5s ease infinite",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: "strip-shine 2.8s linear infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(196,181,253,0.5), transparent)",
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: isMobile ? "10px" : "20px",
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: GOLD_LT,
            animation: "pulse-dot 1.4s ease-in-out infinite",
            boxShadow: `0 0 8px ${GOLD}`,
          }}
        />
        {!isMobile && (
          <span
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 700,
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              color: GOLD_LT,
              textTransform: "uppercase",
            }}
          >
            LIVE
          </span>
        )}
      </div>
      <div
        style={{
          overflow: "hidden",
          flex: 1,
          position: "relative",
          zIndex: 1,
          paddingLeft: isMobile ? "36px" : "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "marquee-scroll 32s linear infinite",
          }}
        >
          {[repeated, repeated].map((text, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: FONT_BODY,
                fontWeight: 800,
                fontSize: isMobile ? "0.6rem" : "0.72rem",
                letterSpacing: "0.18em",
                color: WHITE,
                textTransform: "uppercase",
                paddingRight: "80px",
                background:
                  "linear-gradient(90deg, #fff 0%, #c4b5fd 30%, #fff 55%, #d4af37 75%, #fff 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "strip-shine 4s linear infinite",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── COUNTDOWN TIMER ─────────────────────────────────────────── */
function CountdownTimer({
  isMobile,
  isSmall,
}: {
  isMobile: boolean;
  isSmall: boolean;
}) {
  const calc = () => {
    const diff = WEBINAR_DATE.getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  const units = [
    { val: time.d, label: "DAYS" },
    { val: time.h, label: "HRS" },
    { val: time.m, label: "MINS" },
    { val: time.s, label: "SECS" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        marginBottom: "28px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: FONT_DISPLAY,
          fontSize: isSmall ? "0.75rem" : "0.9rem",
          letterSpacing: "0.2em",
          color: PURPLE_LT,
        }}
      >
        <div
          style={{
            width: "16px",
            height: "1px",
            background: PURPLE_LT,
          }}
        />
        WEBINAR STARTS IN
        <div
          style={{
            width: "16px",
            height: "1px",
            background: PURPLE_LT,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: isSmall ? "3px" : "6px",
        }}
      >
        {units.map(({ val, label }, i) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: isSmall ? "3px" : "6px",
            }}
          >
            <div
              style={{
                background: "rgba(124,58,237,0.1)",
                border: `1px solid rgba(124,58,237,0.32)`,
                borderTop: `2px solid ${PURPLE}`,
                borderRadius: "6px",
                padding: isSmall
                  ? "8px 8px"
                  : isMobile
                    ? "10px 10px"
                    : "14px 22px",
                textAlign: "center",
                minWidth: isSmall
                  ? "48px"
                  : isMobile
                    ? "58px"
                    : "76px",
              }}
            >
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 900,
                  fontSize: isSmall
                    ? "1.4rem"
                    : isMobile
                      ? "1.7rem"
                      : "clamp(2rem, 3.5vw, 2.6rem)",
                  lineHeight: 1,
                  color: WHITE,
                  letterSpacing: "-0.01em",
                }}
              >
                {pad(val)}
              </div>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: isSmall ? "0.52rem" : "0.6rem",
                  letterSpacing: "0.14em",
                  color: PURPLE_LT,
                  marginTop: "5px",
                }}
              >
                {label}
              </div>
            </div>
            {i < 3 && (
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 900,
                  fontSize: isSmall
                    ? "1.2rem"
                    : isMobile
                      ? "1.4rem"
                      : "2rem",
                  color: "rgba(124,58,237,0.5)",
                  lineHeight: 1,
                  paddingBottom: isSmall
                    ? "12px"
                    : isMobile
                      ? "14px"
                      : "18px",
                }}
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FormCountdown({ isMobile }: { isMobile: boolean }) {
  const calc = () => {
    const diff = WEBINAR_DATE.getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const units = [
    { val: time.d, label: "DAYS" },
    { val: time.h, label: "HRS" },
    { val: time.m, label: "MINS" },
    { val: time.s, label: "SECS" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          fontFamily: FONT_DISPLAY,
          fontSize: isMobile ? "0.7rem" : "0.78rem",
          letterSpacing: "0.18em",
          color: PURPLE_LT,
        }}
      >
        <div
          style={{
            width: "14px",
            height: "1px",
            background: PURPLE_LT,
          }}
        />
        WEBINAR STARTS IN
        <div
          style={{
            width: "14px",
            height: "1px",
            background: PURPLE_LT,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: "4px",
          flexWrap: "wrap",
        }}
      >
        {units.map(({ val, label }, i) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "4px",
            }}
          >
            <div
              style={{
                background: "rgba(124,58,237,0.12)",
                border: `1px solid rgba(124,58,237,0.32)`,
                borderTop: `2px solid ${PURPLE}`,
                borderRadius: "6px",
                padding: isMobile ? "8px 9px" : "8px 11px",
                textAlign: "center",
                minWidth: isMobile ? "48px" : "56px",
              }}
            >
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 900,
                  fontSize: isMobile ? "1.2rem" : "1.4rem",
                  lineHeight: 1,
                  color: WHITE,
                  letterSpacing: "-0.01em",
                }}
              >
                {pad(val)}
              </div>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: "0.48rem",
                  letterSpacing: "0.13em",
                  color: PURPLE_LT,
                  marginTop: "4px",
                }}
              >
                {label}
              </div>
            </div>
            {i < 3 && (
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 900,
                  fontSize: "1rem",
                  color: "rgba(124,58,237,0.6)",
                  lineHeight: 1,
                  paddingBottom: "10px",
                }}
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── TESTIMONIAL IMAGE SLIDER ─────────────────────────────────── */
function TestimonialSlider({
  isMobile,
  isTablet,
}: {
  isMobile: boolean;
  isTablet: boolean;
}) {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplayPlugin.current],
  );
  const scrollPrev = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi],
  );

  const slideWidth = isMobile
    ? "calc(100%)"
    : isTablet
      ? "calc(50% - 8px)"
      : "calc(33.333% - 11px)";

  return (
    <section
      style={{
        backgroundColor: L_BG,
        padding: isMobile ? "48px 0 32px" : "80px 0 60px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "28px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  background: PURPLE,
                }}
              />
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "0.22em",
                  color: PURPLE,
                }}
              >
                REAL RESULTS
              </span>
            </div>
            <p
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 900,
                fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
                color: L_TEXT,
                margin: 0,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Students Already{" "}
              <span style={{ color: PURPLE_DK }}>Winning</span>
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {(
              [
                { fn: scrollPrev, Icon: ChevronLeft },
                { fn: scrollNext, Icon: ChevronRight },
              ] as const
            ).map(({ fn, Icon }, i) => (
              <button
                key={i}
                onClick={fn}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(124,58,237,0.08)",
                  border: `1px solid rgba(124,58,237,0.32)`,
                  color: PURPLE,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const b =
                    e.currentTarget as HTMLButtonElement;
                  b.style.background = PURPLE;
                  b.style.color = WHITE;
                }}
                onMouseLeave={(e) => {
                  const b =
                    e.currentTarget as HTMLButtonElement;
                  b.style.background = "rgba(124,58,237,0.08)";
                  b.style.color = PURPLE;
                }}
              >
                <Icon size={20} strokeWidth={2.2} />
              </button>
            ))}
          </div>
        </div>
        <div ref={emblaRef} style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "14px" }}>
            {SLIDES.map((src, i) => (
              <div
                key={i}
                style={{
                  flex: `0 0 ${slideWidth}`,
                  minWidth: 0,
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: `1px solid ${L_BORDER}`,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <img
                  src={src}
                  alt={`Student result ${i + 1}`}
                  style={{
                    width: "100%",
                    height: isMobile ? "240px" : "320px",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STAT COUNTER ───────────────────────────────────────────── */
interface StatCardProps {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}
function StatCard({
  prefix = "",
  value,
  suffix = "",
  label,
  duration = 1800,
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - startTime) / duration, 1);
            setCount(
              Math.round((1 - Math.pow(1 - p, 3)) * value),
            );
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? L_CARD2 : L_CARD,
        padding: "32px 24px",
        border: `1px solid ${L_BORDER}`,
        borderTop: `2px solid ${hovered ? PURPLE : L_BORDER}`,
        cursor: "default",
        transition: "all 0.25s ease",
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered
          ? `0 0 32px rgba(124,58,237,0.18)`
          : "none",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 900,
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          color: hovered ? PURPLE_DK : L_TEXT,
          lineHeight: 1,
          transition: "color 0.25s",
          letterSpacing: "-0.01em",
        }}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div
        style={{
          color: hovered ? L_SUB : L_MUTED,
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          marginTop: "8px",
          textTransform: "uppercase",
          transition: "color 0.25s",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── SHARED UI ───────────────────────────────────────────────── */
function CTABtn({
  label = "RESERVE MY SEAT NOW",
  small = false,
  full = false,
  onClick,
}: {
  label?: string;
  small?: boolean;
  full?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        fontFamily: FONT_DISPLAY,
        background: `linear-gradient(105deg, #c49b20 0%, ${GOLD_LT} 50%, #b8882a 100%)`,
        color: "#0a0a0a",
        letterSpacing: "0.12em",
        fontSize: small ? "0.85rem" : "1rem",
        padding: small ? "10px 28px" : "16px 36px",
        borderRadius: "2px",
        fontWeight: 900,
        border: "none",
        cursor: "pointer",
        textTransform: "uppercase" as const,
        boxShadow: `0 0 30px rgba(212,175,55,0.35)`,
        transition: "all 0.2s ease",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        width: full ? "100%" : undefined,
        justifyContent: full ? "center" : undefined,
        maxWidth: full ? "420px" : undefined,
      }}
      onMouseEnter={(e) => {
        const b = e.currentTarget as HTMLButtonElement;
        b.style.transform = "translateY(-2px)";
        b.style.boxShadow = "0 6px 40px rgba(212,175,55,0.55)";
      }}
      onMouseLeave={(e) => {
        const b = e.currentTarget as HTMLButtonElement;
        b.style.transform = "translateY(0)";
        b.style.boxShadow = "0 0 30px rgba(212,175,55,0.35)";
      }}
    >
      {label}
      <ArrowUpRight size={small ? 14 : 18} strokeWidth={2.5} />
    </button>
  );
}
function SecureNote({ dark = false }: { dark?: boolean }) {
  return (
    <p
      style={{
        fontFamily: FONT_BODY,
        color: dark ? L_SUB : WHITE,
        fontSize: "0.78rem",
        marginTop: "12px",
        letterSpacing: "0.05em",
      }}
    >
      Secure your seat &nbsp;·&nbsp; 100% Free &nbsp;·&nbsp; No
      credit card needed
    </p>
  );
}
function LDivider() {
  return null;
}
function DDivider() {
  return null;
}

/* ─── SECTION LABEL ──────────────────────────────────────────── */
function SectionLabel({
  text,
  center = false,
}: {
  text: string;
  center?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        marginBottom: "14px",
        justifyContent: center ? "center" : "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: "28px",
          height: "2px",
          background: PURPLE,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "0.22em",
          color: PURPLE,
          textTransform: "uppercase",
        }}
      >
        {text}
      </span>
      {center && (
        <div
          style={{
            width: "28px",
            height: "2px",
            background: PURPLE,
            flexShrink: 0,
          }}
        />
      )}
    </div>
  );
}

/* ─── MAIN APP ────────────────────────────────────────────────── */
export default function App() {
  const [activeDiscover, setActiveDiscover] = useState<
    number | null
  >(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const width = useWindowWidth();
  const isSmall = width < 480;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;
  const openFormModal = useCallback(() => setIsFormOpen(true), []);
  const closeFormModal = useCallback(() => setIsFormOpen(false), []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const existingScript = document.querySelector(
      `script[src="${FORM_SCRIPT_SRC}"]`,
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = FORM_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isFormOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFormOpen]);

  return (
    <div
      style={{
        background: BG,
        color: WHITE,
        fontFamily: FONT_BODY,
        overflowX: "hidden",
      }}
    >
      <style>{GLOBAL_CSS}</style>

      {/* ── ALERT STRIP ── */}
      <AlertStrip isMobile={isMobile} />

      {/* ══ HERO (DARK) ══ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: isSmall
            ? "120px 16px 60px"
            : isMobile
              ? "130px 20px 60px"
              : "170px 40px 80px",
          background: BG,
          overflow: "hidden",
          backgroundImage: `url(${heroBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ── NAV — lives inside the hero so it scrolls away with it ── */}
        <nav
          style={{
            position: "absolute",
            top: `${STRIP_H}px`,
            left: 0,
            right: 0,
            zIndex: 100,
            background: "transparent",
            padding: isSmall
              ? "10px 16px"
              : isMobile
                ? "12px 20px"
                : "18px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src={logoImg}
            alt="AI Unleashed"
            style={{
              height: isSmall
                ? "38px"
                : isMobile
                  ? "48px"
                  : "76px",
              objectFit: "contain",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {isMobile ? (
              <button
                type="button"
                onClick={openFormModal}
                style={{
                  fontFamily: FONT_DISPLAY,
                  background: `linear-gradient(105deg, #c49b20 0%, ${GOLD_LT} 50%, #b8882a 100%)`,
                  color: "#0a0a0a",
                  letterSpacing: "0.1em",
                  fontSize: isSmall ? "0.65rem" : "0.72rem",
                  padding: isSmall ? "7px 12px" : "8px 16px",
                  borderRadius: "2px",
                  fontWeight: 900,
                  border: "none",
                  cursor: "pointer",
                  textTransform: "uppercase" as const,
                }}
              >
                RESERVE
              </button>
            ) : (
              <CTABtn
                label="RESERVE SEAT"
                small
                onClick={openFormModal}
              />
            )}
          </div>
        </nav>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8,8,15,0.62)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "100%" : "900px",
            height: "600px",
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: `linear-gradient(90deg, ${PURPLE_DK}, ${PURPLE}, ${PURPLE_LT}, ${PURPLE}, ${PURPLE_DK})`,
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 900,
                fontSize: "clamp(2rem, 9vw, 6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: WHITE,
              }}
            >
              HOW TO BECOME A{" "}
              <span
                style={{
                  background: `linear-gradient(105deg, ${PURPLE} 0%, ${PURPLE_LT} 55%, ${PURPLE_DK} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                HIGH-PAID
              </span>
            </div>
            <div
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 900,
                fontSize: "clamp(2rem, 9vw, 6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: WHITE,
              }}
            >
              CERTIFIED AI CONSULTANT
            </div>
          </div>
          <p
            style={{
              color: SUB,
              fontSize: isMobile ? "0.92rem" : "1.1rem",
              lineHeight: 1.75,
              maxWidth: "640px",
              margin: "0 auto 28px",
            }}
          >
            And become the visionary who helps businesses
            successfully adopt AI, even if you have no past
            experience or tech knowledge
          </p>
          <CountdownTimer
            isMobile={isMobile}
            isSmall={isSmall}
          />
          {/* VIDEO */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "780px",
              margin: "0 auto 36px",
              aspectRatio: "16 / 9",
              border: `1px solid rgba(124,58,237,0.28)`,
              borderTop: `3px solid ${PURPLE}`,
              boxShadow:
                "0 0 80px rgba(124,58,237,0.3), 0 0 30px rgba(124,58,237,0.15)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <video
              src="https://res.cloudinary.com/dcuswyfur/video/upload/v1777479369/AI_Consultant_t8o1bu.mp4"
              controls
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                background: "#0d0d1e",
              }}
            />
          </div>
          <p
            style={{
              color: SUB,
              fontSize: isMobile ? "0.88rem" : "1rem",
              lineHeight: 1.85,
              maxWidth: "700px",
              margin: "0 auto 36px",
              fontFamily: FONT_BODY,
            }}
          >
            From Silicon Valley: Join The World's #1 Business
            Mentor,{" "}
            <strong style={{ color: WHITE }}>
              Kane Minkus
            </strong>
            , who's trained over{" "}
            <strong style={{ color: PURPLE_LT }}>
              5 million students globally
            </strong>{" "}
            (Inc 5000 #1048 fastest-growing Company, 3-time
            international bestselling author), for a FREE
            virtual webinar and discover your roadmap to
            becoming a{" "}
            <strong style={{ color: WHITE }}>
              highly paid, sought-after AI consultant.
            </strong>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CTABtn full={isMobile} onClick={openFormModal} />
            <SecureNote />
          </div>
        </div>
      </section>

      {/* ══ FEATURED IN (LIGHT) ══ */}
      <LDivider />
      <section
        style={{
          padding: isMobile ? "28px 16px" : "44px 40px",
          backgroundColor: L_CARD,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              color: L_MUTED,
              marginBottom: "24px",
            }}
          >
            HAVE BEEN FEATURED IN
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              FeaturedLogo1,
              FeaturedLogo2,
              FeaturedLogo3,
              FeaturedLogo4,
              FeaturedLogo5,
              FeaturedLogo6,
            ].map((Logo, i, arr) => (
              <div
                key={i}
                style={{
                  width: isMobile
                    ? "calc(33.33% - 2px)"
                    : "141px",
                  opacity: 0.55,
                  transition: "opacity 0.2s",
                  borderRight:
                    i < arr.length - 1
                      ? `1px solid ${L_BORDER}`
                      : "none",
                  borderBottom:
                    isMobile && i < 3
                      ? `1px solid ${L_BORDER}`
                      : "none",
                  padding: isMobile ? "10px 4px" : "0 8px",
                  cursor: "default",
                  boxSizing: "border-box" as const,
                  filter: "invert(1)",
                }}
                onMouseEnter={(e) =>
                  ((
                    e.currentTarget as HTMLDivElement
                  ).style.opacity = "0.9")
                }
                onMouseLeave={(e) =>
                  ((
                    e.currentTarget as HTMLDivElement
                  ).style.opacity = "0.55")
                }
              >
                <Logo />
              </div>
            ))}
          </div>
        </div>
      </section>
      <LDivider />

      {/* ══ OPPORTUNITY (LIGHT) ══ */}
      <section style={{ backgroundColor: L_BG }}>
        <div
          style={{
            padding: isSmall
              ? "48px 16px"
              : isMobile
                ? "60px 20px"
                : "100px 40px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* ── BG IMAGE CARD ── */}
          <div
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              minHeight: isSmall
                ? "360px"
                : isMobile
                  ? "420px"
                  : "500px",
              display: "flex",
              alignItems: "center",
              marginBottom: isMobile ? "24px" : "40px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <img
              src={opportunityBgImg}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center right",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isMobile
                  ? "linear-gradient(180deg, rgba(4,4,12,0.95) 0%, rgba(4,4,12,0.88) 60%, rgba(4,4,12,0.6) 100%)"
                  : "linear-gradient(100deg, rgba(4,4,12,0.97) 0%, rgba(4,4,12,0.92) 35%, rgba(4,4,12,0.74) 55%, rgba(4,4,12,0.22) 78%, transparent 100%)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "380px",
                height: "380px",
                background:
                  "radial-gradient(ellipse at left center, rgba(124,58,237,0.16) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "4px",
                background: `linear-gradient(180deg, ${GOLD_LT} 0%, ${PURPLE} 55%, ${GOLD} 100%)`,
                zIndex: 3,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 4,
                padding: isSmall
                  ? "40px 20px 40px 24px"
                  : isMobile
                    ? "48px 24px 48px 28px"
                    : "64px 64px 64px 72px",
                maxWidth: isMobile ? "100%" : "72%",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: isMobile ? "20px" : "28px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "2px",
                    background: GOLD,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 700,
                    fontSize: isSmall ? "0.85rem" : "1rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase" as const,
                    background: `linear-gradient(90deg, ${PURPLE_LT} 0%, ${GOLD} 30%, ${GOLD_LT} 55%, ${GOLD} 75%, ${PURPLE_LT} 100%)`,
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "opp-shine 3s linear infinite",
                  }}
                >
                  THE OPPORTUNITY
                </span>
              </div>
              <h2
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: isSmall
                    ? "clamp(1.5rem, 6.4vw, 2.1rem)"
                    : isMobile
                      ? "clamp(1.75rem, 7.2vw, 2.56rem)"
                      : "clamp(2.4rem, 3.7vw, 4rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  margin: 0,
                  color: WHITE,
                }}
              >
                Discover How Regular Folks Are Earning{" "}
                <span
                  style={{
                    background: `linear-gradient(105deg, ${GOLD} 0%, ${GOLD_LT} 45%, ${GOLD} 85%)`,
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "opp-shine 2.6s linear infinite",
                  }}
                >
                  $1,000–$25,000 Per Day
                </span>{" "}
                Helping Businesses Implement AI
              </h2>
            </div>
          </div>

          {/* ── IMAGE + BODY TEXT ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "clamp(260px, 38%, 500px) 1fr",
              gap: 0,
              marginBottom: isMobile ? "24px" : "40px",
              backgroundColor: L_CARD,
              border: `1px solid ${L_BORDER}`,
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                minHeight: isSmall
                  ? "260px"
                  : isMobile
                    ? "300px"
                    : "420px",
                overflow: "hidden",
              }}
            >
              <img
                src={opportunityPersonImg}
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                padding: isSmall
                  ? "28px 16px"
                  : isMobile
                    ? "32px 20px"
                    : "52px 52px 52px 44px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderLeft: isMobile
                  ? "none"
                  : `1px solid ${L_BORDER}`,
                borderTop: isMobile
                  ? `3px solid ${PURPLE}`
                  : "none",
              }}
            >
              <p
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 900,
                  color: L_TEXT,
                  fontSize: isSmall
                    ? "clamp(1.4rem, 5.5vw, 1.8rem)"
                    : isMobile
                      ? "clamp(1.6rem, 6vw, 2rem)"
                      : "clamp(1.8rem, 2.6vw, 2.8rem)",
                  lineHeight: 1.15,
                  letterSpacing: "0.01em",
                  textTransform: "uppercase" as const,
                  margin: "0 0 24px 0",
                }}
              >
                Right now, there are{" "}
                <span style={{ color: PURPLE_DK }}>
                  250 million businesses
                </span>{" "}
                globally scrambling to implement AI... but only
                a limited amount of certified consultants to
                help them.
              </p>
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`,
                  marginBottom: "24px",
                  borderRadius: "2px",
                }}
              />
              <p
                style={{
                  fontFamily: FONT_BODY,
                  color: L_SUB,
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  lineHeight: 1.9,
                  margin: "0 0 24px 0",
                }}
              >
                And here's the kicker - most of those
                consultants are technical specialists, not
                strategists. The opportunity is massive, and you
                don't need any technical background or prior AI
                knowledge to take advantage of it.
              </p>
              <p
                style={{
                  fontFamily: FONT_BODY,
                  color: L_SUB,
                  fontSize: "0.92rem",
                  lineHeight: 1.8,
                  margin: 0,
                  fontStyle: "italic",
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "16px",
                }}
              >
                In fact, some of our most successful AI
                consultants started exactly where you are today…
              </p>
            </div>
          </div>

          {/* ── STAT CARDS ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isSmall
                ? "repeat(2, 1fr)"
                : isMobile
                  ? "repeat(2, 1fr)"
                  : "repeat(4, 1fr)",
              gap: "2px",
            }}
          >
            <StatCard
              value={250}
              suffix="M"
              label="Businesses Need AI"
              duration={1600}
            />
            <StatCard
              value={5}
              suffix="M+"
              label="Students Trained"
              duration={1200}
            />
            <StatCard
              prefix="$"
              value={1}
              suffix="B+"
              label="Revenue Generated"
              duration={1400}
            />
            <StatCard
              value={90}
              label="Days to First Client"
              duration={1800}
            />
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL IMAGE SLIDER (LIGHT) ══ */}
      <LDivider />
      <TestimonialSlider
        isMobile={isMobile}
        isTablet={isTablet}
      />
      <LDivider />

      {/* ══ KEVIN HARRINGTON (DARK) ══ */}
      <section
        style={{ backgroundColor: L_BG, overflow: "hidden" }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "clamp(280px, 30%, 420px) 1fr",
            minHeight: isMobile ? "auto" : "560px",
          }}
        >
          {/* Photo side */}
          <div
            style={{
              position: "relative",
              background: CARD,
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
              minHeight: isSmall
                ? "280px"
                : isMobile
                  ? "340px"
                  : "auto",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: "3px",
                background: `linear-gradient(180deg, ${PURPLE_LT} 0%, ${PURPLE} 100%)`,
                zIndex: 2,
              }}
            />
            <img
              src={kevinImg}
              alt="Kevin Harrington"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
          </div>
          {/* Quote side */}
          <div
            style={{
              background: CARD,
              borderTop: `3px solid ${PURPLE}`,
              padding: isSmall
                ? "32px 16px"
                : isMobile
                  ? "36px 20px"
                  : "clamp(40px, 6vw, 80px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "400px",
                height: "400px",
                background:
                  "radial-gradient(ellipse, rgba(124,58,237,0.13) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 900,
                fontSize: isMobile
                  ? "clamp(1.3rem, 5vw, 1.9rem)"
                  : "clamp(1.4rem, 3vw, 2.3rem)",
                lineHeight: 1.12,
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                color: WHITE,
                marginBottom: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Kane and his team has collectively generated{" "}
              <span
                style={{
                  background: `linear-gradient(105deg, ${PURPLE_LT} 0%, #ddd6fe 55%, ${PURPLE} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                $1+ Billion
              </span>{" "}
              in sales across hundreds of brands.
            </p>
            <p
              style={{
                fontFamily: FONT_BODY,
                color: SUB,
                fontSize: isMobile ? "0.88rem" : "1rem",
                lineHeight: 1.9,
                maxWidth: "580px",
                marginBottom: "36px",
                position: "relative",
                zIndex: 1,
                fontStyle: "italic",
              }}
            >
              Every so often I come across really exceptional
              leaders in this field of educating and inspiring
              and transforming lives. Their names are Kane &
              Alessia Minkus. They, like myself, have been
              dedicated for many years to studying and
              researching what makes people magnificent.
            </p>
            <div
              style={{
                width: "56px",
                height: "2px",
                background: `linear-gradient(90deg, ${PURPLE}, transparent)`,
                marginBottom: "20px",
                position: "relative",
                zIndex: 1,
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 900,
                  fontSize: "1rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: WHITE,
                  lineHeight: 1,
                }}
              >
                Kevin Harrington
              </div>
              <div
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: "0.85rem",
                  color: PURPLE_LT,
                  letterSpacing: "0.1em",
                  marginTop: "5px",
                  textTransform: "uppercase",
                }}
              >
                Original Shark on ABC's Shark Tank · $5B+ in
                Sales
              </div>
            </div>
          </div>
        </div>
      </section>
      <LDivider />

      {/* ══ WHAT YOU'LL DISCOVER (LIGHT) ══ */}
      <section
        style={{
          backgroundColor: L_BG,
          backgroundImage: "none",
        }}
      >
        <div
          style={{
            padding: isSmall
              ? "48px 16px 32px"
              : isMobile
                ? "60px 20px 40px"
                : "100px 40px 56px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <SectionLabel text="WHAT YOU'LL DISCOVER" />
          <div
            style={{
              overflow: "hidden",
              marginBottom: isMobile ? "32px" : "60px",
            }}
          >
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: "clamp(2.8rem, 13vw, 12rem)",
                lineHeight: 0.88,
                color: "rgba(13,13,20,0.07)",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              DISCOVER
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(2, 1fr)",
              gap: "2px",
            }}
          >
            {DISCOVER.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: isSmall
                    ? "44px 1fr auto"
                    : isMobile
                      ? "52px 1fr auto"
                      : "72px 1fr auto",
                  alignItems: "center",
                  backgroundColor:
                    activeDiscover === i ? L_CARD : L_BG,
                  border: `1px solid ${L_BORDER}`,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={() => setActiveDiscover(i)}
                onMouseLeave={() => setActiveDiscover(null)}
                onClick={() =>
                  setActiveDiscover(
                    activeDiscover === i ? null : i,
                  )
                }
              >
                <div
                  style={{
                    padding: isSmall
                      ? "18px 0"
                      : isMobile
                        ? "22px 0"
                        : "28px 0",
                    borderRight: `1px solid ${L_BORDER}`,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <item.icon
                    size={isSmall ? 18 : isMobile ? 20 : 24}
                    strokeWidth={1.6}
                    style={{
                      color:
                        activeDiscover === i ? GOLD : "#c49b20",
                      filter:
                        activeDiscover === i
                          ? "drop-shadow(0 0 6px rgba(212,175,55,0.7))"
                          : "none",
                      transition: "color 0.2s, filter 0.2s",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: isSmall
                      ? "18px 12px"
                      : isMobile
                        ? "22px 14px"
                        : "28px 36px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontWeight: 700,
                      fontSize: isSmall
                        ? "0.95rem"
                        : isMobile
                          ? "1.05rem"
                          : "1.4rem",
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      color:
                        activeDiscover === i
                          ? L_TEXT
                          : "rgba(13,13,20,0.65)",
                      marginBottom:
                        activeDiscover === i ? "10px" : "0",
                      transition: "all 0.2s",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </div>
                  {activeDiscover === i && (
                    <p
                      style={{
                        color: L_SUB,
                        fontSize: isSmall
                          ? "0.82rem"
                          : "0.9rem",
                        lineHeight: 1.75,
                        maxWidth: "640px",
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  )}
                </div>
                <div
                  style={{
                    padding: isSmall
                      ? "18px 10px"
                      : isMobile
                        ? "22px 12px"
                        : "28px 28px",
                    color:
                      activeDiscover === i ? PURPLE : L_MUTED,
                    transition: "color 0.2s, transform 0.2s",
                    transform:
                      activeDiscover === i
                        ? "rotate(45deg)"
                        : "none",
                  }}
                >
                  <ChevronRight
                    size={isSmall ? 14 : isMobile ? 16 : 20}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        style={{
          padding: isSmall
            ? "32px 16px 48px"
            : isMobile
              ? "40px 20px 56px"
              : "56px 40px 88px",
          textAlign: "center",
          backgroundColor: L_BG,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CTABtn full={isMobile} onClick={openFormModal} />
        <SecureNote dark />
      </div>

      {/* ══ FOR YOU (LIGHT) ══ */}
      <section style={{ backgroundColor: L_CARD }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: isSmall
              ? "48px 16px"
              : isMobile
                ? "60px 20px"
                : "100px 40px",
          }}
        >
          <SectionLabel text="THIS WEBINAR IS FOR YOU IF..." />
          <div
            style={{
              overflow: "hidden",
              marginBottom: isMobile ? "32px" : "60px",
            }}
          >
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: "clamp(2.2rem, 11vw, 10rem)",
                lineHeight: 0.88,
                color: "rgba(13,13,20,0.07)",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              FOR YOU IF...
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                  ? "1fr"
                  : "repeat(2, 1fr)",
              gap: "2px",
            }}
          >
            {FOR_YOU.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: L_BG,
                  borderLeft: `3px solid ${i % 3 === 0 ? PURPLE : i % 3 === 1 ? PURPLE_DK : L_BORDER}`,
                  transition: "background 0.2s",
                  display: "flex",
                  overflow: "hidden",
                  alignItems: "stretch",
                }}
                onMouseEnter={(e) =>
                  ((
                    e.currentTarget as HTMLDivElement
                  ).style.backgroundColor = L_CARD2)
                }
                onMouseLeave={(e) =>
                  ((
                    e.currentTarget as HTMLDivElement
                  ).style.backgroundColor = L_BG)
                }
              >
                <div
                  style={{
                    flex: 1,
                    padding: isSmall
                      ? "20px 16px"
                      : isMobile
                        ? "24px 18px"
                        : "32px 36px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        flexShrink: 0,
                        marginTop: "2px",
                        background: PURPLE,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check
                        size={12}
                        color={WHITE}
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: FONT_DISPLAY,
                          fontWeight: 700,
                          fontSize: isSmall
                            ? "1.15rem"
                            : "1.4rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.03em",
                          color: L_TEXT,
                          marginBottom: "8px",
                          lineHeight: 1.2,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color: L_SUB,
                          fontSize: isSmall
                            ? "0.85rem"
                            : "0.9rem",
                          lineHeight: 1.75,
                          margin: 0,
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Image box — desktop only */}
            {isDesktop && (
              <div
                style={{
                  backgroundColor: L_BG,
                  borderLeft: `3px solid ${L_BORDER}`,
                  overflow: "hidden",
                  minHeight: "260px",
                  position: "relative",
                }}
              >
                <img
                  src={thimaImg}
                  alt="Thima"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
              </div>
            )}
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: isMobile ? "40px" : "72px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CTABtn full={isMobile} onClick={openFormModal} />
            <SecureNote dark />
          </div>
        </div>
      </section>

      {/* ══ TRAINERS (LIGHT) ══ */}
      <section style={{ backgroundColor: L_BG }}>
        <div
          style={{
            padding: isSmall
              ? "48px 16px"
              : isMobile
                ? "60px 20px"
                : "100px 40px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "14px",
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "2px",
                background: PURPLE,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 700,
                fontSize: isSmall
                  ? "0.72rem"
                  : isMobile
                    ? "0.82rem"
                    : "1rem",
                letterSpacing: "0.15em",
                color: PURPLE,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              AI Visionaries, Award-Winning Serial
              Entrepreneurs, 3x Best Selling Authors & The
              World's #1 Business Mentors
            </span>
            <div
              style={{
                width: "28px",
                height: "2px",
                background: PURPLE,
                flexShrink: 0,
              }}
            />
          </div>
          <div
            style={{
              overflow: "hidden",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: isSmall
                  ? "clamp(1.3rem, 5vw, 2rem)"
                  : "clamp(1.6rem, 4.5vw, 4.2rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: L_TEXT,
                margin: 0,
              }}
            >
              Meet The World Renowned, Silicon Valley,
              Technology Trainers of the{" "}
              <span style={{ color: PURPLE_DK }}>
                AI Unleashed Summit
              </span>
            </h2>
          </div>

          {/* BADGE IMAGES */}
          <div style={{ margin: "0 auto 56px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isSmall
                  ? "repeat(3, 1fr)"
                  : isMobile
                    ? "repeat(5, 1fr)"
                    : "repeat(5, 1fr)",
                gap: isSmall
                  ? "10px"
                  : isMobile
                    ? "10px"
                    : "20px",
                alignItems: "center",
              }}
            >
              {[badge1, badge2, badge3, badge4, badge5].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Badge ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                ),
              )}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                  ? "1fr"
                  : "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {[
              {
                name: "Kane Minkus",
                role: "World's #1 Business Mentor",
                img: kaneImg,
                bio: "Kane is renowned as one of the best business coaches in the world, having assisted entrepreneurs and investors in nearly every industry and niche. Kane's extensive knowledge and obsession with transformational technology & AI have led him to dedicate his time to researching new AI solutions before they become widely known. His commitment to AI has made him a sought-after faculty member for Tony Robbins' Business Mastery events, Richard Branson, Robert Kiyasoki, and dozens of other influential world leaders.",
                tag: PURPLE,
                tagText: WHITE,
              },
              {
                name: "Alessia Minkus",
                role: "Serial Entrepreneur & Coach",
                img: alessiaImg,
                bio: "Alessia is one of the most experienced entrepreneur coaches in the world, having personally advised thousands of female founders, setting them up with seven and eight-figure strategies. She is also a serial entrepreneur herself, having personally started and scaled up nine companies that have generated a total of over $180M in revenue. Over the last two decades as a business owner, she has faced every possible challenge and, through this, has a mission to create a world where female founders have the AI tools and knowledge they need to make a global impact.",
                tag: PURPLE,
                tagText: WHITE,
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: isSmall
                      ? "340px"
                      : isMobile
                        ? "400px"
                        : "520px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((
                        e.currentTarget as HTMLImageElement
                      ).style.transform = "scale(1.04)")
                    }
                    onMouseLeave={(e) =>
                      ((
                        e.currentTarget as HTMLImageElement
                      ).style.transform = "scale(1)")
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(8,8,15,0.88) 0%, transparent 55%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: isSmall
                        ? "16px"
                        : isMobile
                          ? "20px"
                          : "28px",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        background: t.tag,
                        color: t.tagText,
                        fontFamily: FONT_DISPLAY,
                        fontWeight: 900,
                        fontSize: "0.82rem",
                        letterSpacing: "0.16em",
                        padding: "4px 14px",
                        borderRadius: "2px",
                        marginBottom: "8px",
                      }}
                    >
                      {t.role}
                    </div>
                    <div
                      style={{
                        fontFamily: FONT_DISPLAY,
                        fontWeight: 900,
                        fontSize: isSmall
                          ? "1.9rem"
                          : isMobile
                            ? "2.2rem"
                            : "2.7rem",
                        color: WHITE,
                        textTransform: "uppercase",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {t.name}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: L_CARD,
                    padding: isSmall
                      ? "20px 16px"
                      : isMobile
                        ? "24px 20px"
                        : "32px",
                    flex: 1,
                    borderTop: `3px solid ${t.tag}`,
                  }}
                >
                  <p
                    style={{
                      color: L_SUB,
                      fontSize: isSmall ? "0.88rem" : "0.95rem",
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                  >
                    {t.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA (DARK) ══ */}
      <DDivider />
      <section
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            padding: isSmall
              ? "70px 16px"
              : isMobile
                ? "80px 20px"
                : "120px 40px",
            textAlign: "center",
            position: "relative",
            backgroundImage: `url(${ctaBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(8,8,15,0.6)",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "32px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  height: "1px",
                  width: "48px",
                  background: `linear-gradient(90deg, transparent, ${PURPLE_LT})`,
                }}
              />
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 700,
                  fontSize: isSmall ? "0.85rem" : "1.1rem",
                  letterSpacing: "0.22em",
                  color: PURPLE_LT,
                }}
              >
                LIMITED SEATS AVAILABLE
              </span>
              <div
                style={{
                  height: "1px",
                  width: "48px",
                  background: `linear-gradient(90deg, ${PURPLE_LT}, transparent)`,
                }}
              />
            </div>
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: isSmall
                  ? "clamp(1.52rem, 7.2vw, 2.56rem)"
                  : "clamp(1.6rem, 5.6vw, 5.2rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                color: WHITE,
                maxWidth: "860px",
                margin: "0 auto 20px",
              }}
            >
              How Complete Beginners Are Becoming{" "}
              <span
                style={{
                  background: `linear-gradient(105deg, ${PURPLE} 0%, ${PURPLE_LT} 55%, ${PURPLE_DK} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                High-Paid
              </span>{" "}
              AI Consultants In{" "}
              <span
                style={{
                  color: WHITE,
                  WebkitTextFillColor: WHITE,
                }}
              >
                90 Days
              </span>{" "}
              Or Less
            </h2>
            <p
              style={{
                color: WHITE,
                fontSize: isSmall
                  ? "0.92rem"
                  : isMobile
                    ? "1rem"
                    : "1.2rem",
                maxWidth: "520px",
                margin: "0 auto 40px",
                lineHeight: 1.75,
              }}
            >
              Join thousands of students who've already secured
              their path to financial freedom through AI
              consulting.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CTABtn full={isMobile} onClick={openFormModal} />
              <SecureNote />
            </div>
            <div
              style={{
                marginTop: "44px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={logoImg}
                alt="AI Unleashed"
                style={{
                  height: isSmall
                    ? "80px"
                    : isMobile
                      ? "100px"
                      : "144px",
                  objectFit: "contain",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {isFormOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="May 7 Webinar Registration"
          onClick={closeFormModal}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background:
              "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.18) 0%, rgba(0,0,0,0.82) 40%), rgba(0,0,0,0.86)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "12px" : "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "940px",
              background:
                "linear-gradient(145deg, rgba(124,58,237,0.22), rgba(212,175,55,0.2))",
              borderRadius: "14px",
              padding: isMobile ? "1px" : "2px",
              overflow: "hidden",
              boxShadow:
                "0 26px 90px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.22)",
            }}
          >
            <div
              style={{
                background: CARD,
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: isMobile ? "14px 12px" : "16px 18px",
                  borderBottom: `1px solid ${BORDER}`,
                  background:
                    "linear-gradient(90deg, rgba(124,58,237,0.25), rgba(15,15,26,0.92) 38%, rgba(212,175,55,0.16) 100%)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: GOLD_LT,
                      boxShadow: `0 0 12px ${GOLD}`,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: FONT_DISPLAY,
                        letterSpacing: "0.14em",
                        color: WHITE,
                        fontSize: isMobile ? "0.9rem" : "1rem",
                        lineHeight: 1,
                      }}
                    >
                      FORM FOR MAY 7
                    </div>
                    <div
                      style={{
                        fontFamily: FONT_BODY,
                        color: SUB,
                        fontSize: "0.72rem",
                        letterSpacing: "0.08em",
                        marginTop: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      Free Virtual Webinar Registration
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeFormModal}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    border: `1px solid rgba(255,255,255,0.25)`,
                    background: "rgba(255,255,255,0.08)",
                    color: WHITE,
                    cursor: "pointer",
                    fontSize: "1.25rem",
                    lineHeight: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label="Close registration form"
                >
                  ×
                </button>
              </div>
              <div
                style={{
                  padding: isMobile ? "10px 10px 12px" : "12px 12px 14px",
                  background: `linear-gradient(180deg, ${CARD} 0%, #0b0b13 100%)`,
                }}
              >
                <FormCountdown isMobile={isMobile} />
                <div
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: `1px solid ${BORDER}`,
                    background: WHITE,
                  }}
                >
                  <iframe
                    src="https://l.industryrockstars.ch/widget/form/Eeoriek3yVE9e0ikuPd3"
                    style={{
                      width: "100%",
                      height: isMobile ? "75vh" : "78vh",
                      minHeight: "489px",
                      border: "none",
                      borderRadius: "3px",
                    }}
                    id="inline-Eeoriek3yVE9e0ikuPd3"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="FB - AI Consultant Certification Webinar - May 7, 2026"
                    data-height="489"
                    data-layout-iframe-id="inline-Eeoriek3yVE9e0ikuPd3"
                    data-form-id="Eeoriek3yVE9e0ikuPd3"
                    title="FB - AI Consultant Certification Webinar - May 7, 2026"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ FOOTER ══ */}
      <footer
        style={{
          background: "#050508",
          padding: isSmall
            ? "20px 16px"
            : isMobile
              ? "24px 20px"
              : "32px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              color: MUTED,
              fontSize: "0.78rem",
              margin: 0,
            }}
          >
            © 2026 AI Consultant Webinar
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Terms", "Privacy"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: MUTED,
                  fontSize: "0.78rem",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((
                    e.currentTarget as HTMLAnchorElement
                  ).style.color = WHITE)
                }
                onMouseLeave={(e) =>
                  ((
                    e.currentTarget as HTMLAnchorElement
                  ).style.color = MUTED)
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}