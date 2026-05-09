"use client";

import type { Match, Player } from "./tennis-ladder";

type LadderProps = {
  players: Player[];
  matches: Match[];
};

export default function Ladder({ players, matches }: LadderProps) {
  return (
    <section id="ladder" className="px-4 sm:px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <hr className="border-0 border-t border-[var(--color-sand-border)]" />
      </div>
      <div className="max-w-[1280px] mx-auto py-16 sm:py-20 md:py-28">
        <div className="flex items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          <div className="min-w-0">
            <span className="block mb-3 sm:mb-5 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
              Standings
            </span>
            <h2
              className="font-[family-name:var(--font-display)] font-black uppercase text-[var(--color-navy)] leading-[0.88]"
              style={{
                fontSize: "clamp(40px, 9vw, 104px)",
                letterSpacing: "-0.015em",
              }}
            >
              The Ladder
            </h2>
          </div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3 shrink-0">
            <span
              className="block rounded-full bg-[var(--color-cinnamon)] animate-pulse"
              style={{ width: 7, height: 7 }}
              aria-hidden
            />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-navy)]/60 font-semibold whitespace-nowrap">
              <span className="hidden sm:inline">Live Rankings</span>
              <span className="sm:hidden">Live</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-12">
          <div>
            <div
              className="grid items-center text-[var(--color-navy)]/30 uppercase font-semibold pb-4 border-b-2 border-[var(--color-navy)]/10 grid-cols-[44px_1fr_56px] sm:grid-cols-[52px_1fr_64px]"
              style={{
                fontSize: 9,
                letterSpacing: "2px",
              }}
            >
              <span>Rank</span>
              <span>Player</span>
              <span className="text-right">W-L</span>
            </div>

            {players.map((p, idx) => {
              const rank = idx + 1;
              const isEmpty = p.name === "—";
              let rankColor = "rgba(12,35,64,0.18)";
              if (rank === 1) rankColor = "var(--color-cinnamon)";
              else if (rank === 2 || rank === 3)
                rankColor = "var(--color-navy)";

              const isBarry = p.name === "Barry Collymore";

              return (
                <div
                  key={p.id}
                  className="group grid items-center py-4 sm:py-5 border-b border-[var(--color-sand-border)] hover:bg-[var(--color-cream)] transition-colors grid-cols-[44px_1fr_56px] sm:grid-cols-[52px_1fr_64px]"
                >
                  <span
                    className="font-[family-name:var(--font-display)] font-bold leading-none text-[18px] sm:text-[22px]"
                    style={{ color: rankColor }}
                  >
                    {String(rank).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex items-baseline gap-2 sm:gap-3 flex-wrap min-w-0 text-[14px] sm:text-[15px] ${
                      isEmpty
                        ? "text-[var(--color-navy)]/15"
                        : "text-[var(--color-navy)]"
                    }`}
                    style={{
                      fontWeight: isBarry ? 600 : 400,
                    }}
                  >
                    <span className="break-words">{p.name}</span>
                    {isBarry && (
                      <span
                        className="text-[var(--color-cinnamon)] uppercase font-semibold text-[8px] sm:text-[9px]"
                        style={{ letterSpacing: "1.8px" }}
                      >
                        Chairman
                      </span>
                    )}
                    {rank === 1 && !isEmpty && !isBarry && (
                      <span
                        className="text-[var(--color-cinnamon)] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-[8px] sm:text-[9px]"
                        style={{ letterSpacing: "1.8px" }}
                      >
                        Top Seed
                      </span>
                    )}
                  </span>
                  <span
                    className="text-right text-[var(--color-navy)]/30 tabular-nums text-[12px] sm:text-[13px]"
                  >
                    {isEmpty ? "—" : `${p.w}-${p.l}`}
                  </span>
                </div>
              );
            })}

            <p
              className="mt-5 sm:mt-6 text-[var(--color-navy)]/30 italic font-[family-name:var(--font-serif)] text-[12px] sm:text-[13px]"
            >
              Registered players receive the private directory via email.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[var(--color-sand)] p-7 sm:p-9 md:p-10">
              <span className="block mb-4 sm:mb-5 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
                Brief
              </span>
              <h3
                className="font-[family-name:var(--font-display)] font-bold uppercase text-[var(--color-navy)] leading-[0.95] text-[22px] sm:text-[24px] md:text-[26px]"
                style={{ letterSpacing: "-0.005em" }}
              >
                About the Ladder
              </h3>
              <p className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] font-light leading-[1.7] text-[var(--color-navy)]/55">
                A community-run ladder for tennis players in Grenada. Open to
                all skill levels. Play anywhere on the island — the goal is
                more matches, more often.
              </p>
            </div>

            {matches.length > 0 && (
              <div className="border border-[var(--color-sand-border)] p-6 sm:p-7 md:p-8">
                <span className="block mb-4 sm:mb-5 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
                  Recent Results
                </span>
                <ul className="space-y-4">
                  {matches.slice(0, 5).map((m) => (
                    <li
                      key={m.id}
                      className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3"
                    >
                      <div className="min-w-0 flex items-baseline gap-1.5 flex-wrap">
                        <span
                          className="text-[var(--color-cinnamon)] font-semibold text-[12px] sm:text-[13px]"
                        >
                          {m.winner}
                        </span>
                        <span
                          className="text-[var(--color-navy)]/20 italic font-[family-name:var(--font-serif)] text-[12px] sm:text-[13px]"
                        >
                          def.
                        </span>
                        <span
                          className="text-[var(--color-navy)]/45 text-[12px] sm:text-[13px]"
                        >
                          {m.loser}
                        </span>
                      </div>
                      <div
                        className="sm:text-right shrink-0 text-[var(--color-navy)]/25 tabular-nums text-[10px] sm:text-[11px]"
                      >
                        {m.score} · {m.date}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
