import Image from "next/image";

export default function BarryGrid() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-20 md:py-28 px-4 sm:px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="The Chairman"
          title="Your Host"
          aside="Founder & Driving Force"
        />

        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
          <TitleCard />
          <PortraitCard />
          <QuoteCard />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  aside,
}: {
  eyebrow: string;
  title: string;
  aside?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4 sm:gap-6">
      <div className="min-w-0">
        <span className="block mb-3 sm:mb-5 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
          {eyebrow}
        </span>
        <h2
          className="font-[family-name:var(--font-display)] font-black uppercase text-[var(--color-navy)] leading-[0.88]"
          style={{
            fontSize: "clamp(40px, 9vw, 104px)",
            letterSpacing: "-0.015em",
          }}
        >
          {title}
        </h2>
      </div>
      {aside && (
        <span className="hidden md:inline mb-3 text-[10px] uppercase tracking-[3px] text-[var(--color-navy)]/40 font-medium shrink-0">
          {aside}
        </span>
      )}
    </div>
  );
}

function TitleCard() {
  return (
    <div
      className="relative overflow-hidden p-7 sm:p-9 md:p-10 text-white min-h-[360px] sm:min-h-[400px] md:min-h-[440px] md:col-span-1 lg:col-span-4 flex flex-col justify-between"
      style={{
        background:
          "linear-gradient(155deg, #E89A5A 0%, #C17A3E 45%, #8E5224 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)",
        }}
      />
      <div className="relative">
        <span className="block mb-4 sm:mb-6 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-white/85 font-semibold">
          01 / Host
        </span>
        <h3
          className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.9] text-[44px] sm:text-[52px] md:text-[60px]"
          style={{ letterSpacing: "-0.015em" }}
        >
          Your
          <br />
          Host
        </h3>
      </div>
      <div className="relative pt-8">
        <p className="text-[13px] font-light text-white/85 leading-[1.7] max-w-[260px] mb-6 sm:mb-7">
          Chairman of the Grenada Community Tennis Ladder.
        </p>
        <a
          href="https://www.instagram.com/barrycolly/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] text-white font-semibold border-b border-white/40 hover:border-white pb-1.5 transition-colors"
        >
          @barrycolly
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

function PortraitCard() {
  return (
    <div className="relative overflow-hidden min-h-[420px] sm:min-h-[460px] md:min-h-[440px] md:col-span-1 lg:col-span-4 bg-[#0C2340]">
      <Image
        src="/images/barry.jpg"
        alt="Barry Collymore"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-[center_20%]"
      />

      <span
        className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/70 uppercase font-semibold z-10 text-[8px] sm:text-[9px]"
        style={{ letterSpacing: "2.5px" }}
      >
        Portrait
      </span>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "linear-gradient(to top, rgba(6,15,31,0.98) 0%, rgba(6,15,31,0.7) 35%, transparent 100%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 px-6 sm:px-7 md:px-9 pt-16 sm:pt-20 pb-7 sm:pb-8">
        <span className="block mb-2 sm:mb-3 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
          02 / Profile
        </span>
        <div
          className="font-[family-name:var(--font-display)] font-bold uppercase text-white leading-[0.92] text-[30px] sm:text-[34px] md:text-[36px]"
          style={{ letterSpacing: "-0.01em" }}
        >
          Barry
          <br />
          Collymore
        </div>
        <div className="mt-2 sm:mt-3 text-[11px] sm:text-[12px] text-white/55 font-light">
          Chairman, Grenada Community Tennis Ladder
        </div>
      </div>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className="relative bg-white border border-[var(--color-sand-border)] p-7 sm:p-9 md:p-12 md:col-span-2 lg:col-span-4 flex flex-col justify-between min-h-[360px] sm:min-h-[400px] md:min-h-[440px]">
      <span className="block mb-2 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
        03 / On Record
      </span>

      <div className="relative flex-1 flex items-center pt-6 sm:pt-8">
        <div
          aria-hidden
          className="absolute -top-2 -left-2 font-[family-name:var(--font-serif)] leading-none select-none text-[80px] sm:text-[100px] md:text-[110px]"
          style={{ color: "rgba(193,122,62,0.12)" }}
        >
          “
        </div>
        <blockquote
          className="relative font-[family-name:var(--font-serif)] italic text-[var(--color-navy)] leading-[1.3]"
          style={{ fontSize: "clamp(18px, 2.4vw, 30px)", fontWeight: 400 }}
        >
          Tennis in Grenada is about community, competition, and getting out on
          the court. I wanted a simple way for all of us to find matches and
          elevate our game.
        </blockquote>
      </div>

      <div className="flex items-center gap-3 pt-6 sm:pt-7 border-t border-[var(--color-sand-border)]">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[1.8px] sm:tracking-[2px] text-[var(--color-navy)]/70 font-semibold">
          Barry Collymore — Chairman
        </span>
      </div>
    </div>
  );
}
