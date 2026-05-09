const steps = [
  {
    n: "01",
    title: "Sign Up",
    body:
      "Add your name to the ladder. Free for all Grenada-based players. You'll be placed in the next available rung.",
  },
  {
    n: "02",
    title: "Challenge",
    body:
      "Challenge any player up to three spots above your current rank. Coordinate the match directly with them.",
  },
  {
    n: "03",
    title: "Climb",
    body:
      "Win and you take their spot. Report the score and your new rank is live for everyone to see.",
  },
];

const stepBackgrounds = [
  "linear-gradient(160deg, #163054 0%, #0C2340 100%)",
  "linear-gradient(160deg, #1E4068 0%, #163054 100%)",
  "linear-gradient(160deg, #2B5689 0%, #1E4068 100%)",
];

export default function HowItWorks() {
  return (
    <section className="px-4 sm:px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <hr className="border-0 border-t border-[var(--color-sand-border)]" />
      </div>
      <div className="max-w-[1280px] mx-auto py-16 sm:py-20 md:py-28">
        <div className="flex items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          <div className="min-w-0">
            <span className="block mb-3 sm:mb-5 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
              Format
            </span>
            <h2
              className="font-[family-name:var(--font-display)] font-black uppercase text-[var(--color-navy)] leading-[0.88]"
              style={{
                fontSize: "clamp(40px, 9vw, 104px)",
                letterSpacing: "-0.015em",
              }}
            >
              How It Works
            </h2>
          </div>
          <span className="hidden md:inline mb-3 text-[10px] uppercase tracking-[3px] text-[var(--color-navy)]/40 font-medium shrink-0">
            Three Steps
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-[var(--color-sand)] p-7 sm:p-8 md:p-9 min-h-[260px] sm:min-h-[300px] md:min-h-[320px] flex flex-col justify-between">
            <div>
              <span className="block mb-4 sm:mb-5 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
                Overview
              </span>
              <p className="text-[13px] sm:text-[14px] font-light leading-[1.7] text-[var(--color-navy)]/65">
                A simple, transparent ladder format. Built for Grenada's tennis
                community to find matches, settle scores, and improve their
                game over time.
              </p>
            </div>
            <span className="mt-6 text-[10px] sm:text-[11px] uppercase tracking-[1.8px] sm:tracking-[2px] text-[var(--color-navy)]/40 font-semibold">
              3 Steps to climb
            </span>
          </div>

          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative overflow-hidden p-7 sm:p-8 md:p-9 text-white min-h-[260px] sm:min-h-[300px] md:min-h-[320px] flex flex-col justify-between"
              style={{ background: stepBackgrounds[i] }}
            >
              <span
                aria-hidden
                className="absolute top-4 right-5 sm:top-5 sm:right-6 font-[family-name:var(--font-display)] font-black leading-none select-none text-[72px] sm:text-[88px] md:text-[96px]"
                style={{ color: "rgba(255,255,255,0.05)" }}
              >
                {s.n}
              </span>
              <div className="relative">
                <span className="block mb-4 sm:mb-5 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
                  Step {s.n}
                </span>
                <h3
                  className="font-[family-name:var(--font-display)] font-bold uppercase leading-[0.95] mb-3 sm:mb-4 text-[26px] sm:text-[28px] md:text-[30px]"
                  style={{ letterSpacing: "-0.005em" }}
                >
                  {s.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.7] text-white/55">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
