import Image from "next/image";

type HeroProps = {
  playerCount: number;
  matchCount: number;
};

export default function Hero({ playerCount, matchCount }: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white isolate min-h-[600px] sm:min-h-[720px] md:min-h-[800px]"
      style={{ minHeight: "min(820px, 96svh)" }}
    >
      <Image
        src="/images/xavier-cee-qx_C6x0wbbc-unsplash.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] -z-20"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(6,15,31,0.96) 0%, rgba(12,35,64,0.85) 38%, rgba(12,35,64,0.45) 62%, rgba(6,15,31,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,15,31,0.4) 0%, transparent 30%, transparent 60%, rgba(6,15,31,0.85) 100%)",
        }}
      />

      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[480px] h-[480px] sm:w-[640px] sm:h-[640px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(193,122,62,0.18) 0%, rgba(193,122,62,0) 60%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative max-w-[1280px] mx-auto px-4 sm:px-5 md:px-12 flex flex-col"
        style={{
          minHeight: "min(820px, 96svh)",
          paddingTop: "clamp(96px, 13vw, 184px)",
          paddingBottom: "clamp(140px, 16vw, 240px)",
        }}
      >
        <div className="flex items-center justify-between gap-3 mb-8 sm:mb-12 md:mb-16">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-white/55 font-medium">
            Grenada · Est. 2026
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[3px] text-white/35 font-medium text-right">
            Presented by Mount Cinnamon
          </span>
        </div>

        <h1
          className="font-[family-name:var(--font-display)] font-black uppercase"
          style={{
            fontSize: "clamp(60px, 14vw, 200px)",
            lineHeight: 0.82,
            letterSpacing: "-0.015em",
          }}
        >
          <span className="block drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            Tennis
          </span>
          <span
            className="block"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
            }}
          >
            Ladder
          </span>
        </h1>

        <div className="mt-10 sm:mt-12 md:mt-14 flex flex-col lg:flex-row lg:flex-wrap lg:items-end lg:justify-between gap-8 sm:gap-10 lg:gap-12">
          <div className="max-w-[440px] w-full">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-light leading-[1.7] text-white/70">
              Challenge local players, climb the ranks, and prove you own the
              court. No entry fees.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#join"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-[var(--color-cinnamon)] hover:bg-[var(--color-cinnamon-light)] text-white text-[12px] font-semibold uppercase tracking-[1.8px] transition-colors"
              >
                Join the Ladder
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <a
                href="#ladder"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 backdrop-blur-sm bg-white/[0.04] border border-white/20 hover:border-white/50 hover:bg-white/[0.08] text-white text-[12px] font-semibold uppercase tracking-[1.8px] transition-colors"
              >
                View Rankings
              </a>
            </div>
          </div>

          <div className="flex divide-x divide-white/15">
            <Stat
              value={String(playerCount).padStart(2, "0")}
              label="Players"
            />
            <Stat value={String(matchCount).padStart(2, "0")} label="Matches" />
            <Stat value="Free" label="Entry" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 sm:px-6 md:px-7 first:pl-0 last:pr-0">
      <div
        className="font-[family-name:var(--font-display)] font-bold text-white leading-none text-[32px] sm:text-[38px] md:text-[44px]"
        style={{ letterSpacing: "-0.005em" }}
      >
        {value}
      </div>
      <div
        className="mt-2 sm:mt-3 text-white/40 uppercase font-medium text-[8px] sm:text-[9px]"
        style={{ letterSpacing: "2.2px" }}
      >
        {label}
      </div>
    </div>
  );
}
