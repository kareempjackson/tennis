"use client";

import { useEffect, useState } from "react";
import type { Player } from "./tennis-ladder";

type ActionCardsProps = {
  activePlayers: Player[];
  onJoin: (name: string) => void;
  onReport: (
    winner: string,
    loser: string,
    score: string,
    date: string
  ) => void;
};

export default function ActionCards({
  activePlayers,
  onJoin,
  onReport,
}: ActionCardsProps) {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-20 md:py-28 px-4 sm:px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
        <JoinCard onJoin={onJoin} hasOpenSlot={activePlayers.length < 10} />
        <ReportCard activePlayers={activePlayers} onReport={onReport} />
      </div>
    </section>
  );
}

function JoinCard({
  onJoin,
  hasOpenSlot,
}: {
  onJoin: (name: string) => void;
  hasOpenSlot: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 5000);
    return () => clearTimeout(t);
  }, [success]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed || !hasOpenSlot) return;
    onJoin(trimmed);
    setName("");
    setEmail("");
    setSuccess(true);
  }

  return (
    <div
      id="join"
      className="relative overflow-hidden text-white p-7 sm:p-10 md:p-14 min-h-[400px] sm:min-h-[440px] flex flex-col"
      style={{
        background:
          "linear-gradient(165deg, #163054 0%, #0C2340 60%, #060F1F 100%)",
        ...(success
          ? { boxShadow: "inset 0 2px 0 0 var(--color-cinnamon)" }
          : {}),
      }}
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(193,122,62,0.18) 0%, rgba(193,122,62,0) 60%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative">
        <span className="block mb-4 sm:mb-6 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
          Enter
        </span>
        <h3
          className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.92] text-[40px] sm:text-[46px] md:text-[52px]"
          style={{ letterSpacing: "-0.015em" }}
        >
          Join the
          <br />
          Ladder
        </h3>
        <p className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] font-light text-white/45 leading-[1.7] max-w-[340px]">
          Free to enter. Open to all Grenada-based players. Add your name and
          we'll place you in the next available slot.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative mt-auto pt-6 sm:pt-8 flex flex-col gap-3"
      >
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          className="px-5 py-4 bg-white/[0.05] border text-white placeholder:text-white/30 text-[13px] focus:outline-none focus:border-[var(--color-cinnamon)] transition-colors"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="px-5 py-4 bg-white/[0.05] border text-white placeholder:text-white/30 text-[13px] focus:outline-none focus:border-[var(--color-cinnamon)] transition-colors"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        />
        <button
          type="submit"
          disabled={!hasOpenSlot}
          className="group mt-2 py-4 bg-[var(--color-cinnamon)] hover:bg-[var(--color-cinnamon-light)] disabled:opacity-50 disabled:cursor-not-allowed text-white text-[12px] font-semibold uppercase tracking-[1.8px] transition-colors flex items-center justify-center gap-2"
        >
          {hasOpenSlot ? "Join Now" : "Ladder Full"}
          {hasOpenSlot && (
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          )}
        </button>

        {success && (
          <p className="mt-2 text-[12px] text-[var(--color-cinnamon-light)] font-light">
            You're on the ladder. Check your email for the player directory.
          </p>
        )}
      </form>
    </div>
  );
}

function ReportCard({
  activePlayers,
  onReport,
}: {
  activePlayers: Player[];
  onReport: (
    winner: string,
    loser: string,
    score: string,
    date: string
  ) => void;
}) {
  const [winner, setWinner] = useState("");
  const [loser, setLoser] = useState("");
  const [score, setScore] = useState("");
  const [date, setDate] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 5000);
    return () => clearTimeout(t);
  }, [success]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!winner || !loser || !score || !date || winner === loser) return;
    onReport(winner, loser, score, date);
    setWinner("");
    setLoser("");
    setScore("");
    setDate("");
    setSuccess(true);
  }

  const inputClass =
    "w-full px-5 py-4 bg-white border border-[var(--color-sand-border)] text-[var(--color-navy)] text-[13px] focus:outline-none focus:border-[var(--color-cinnamon)] transition-colors";

  return (
    <div
      id="report"
      className="relative bg-white border border-[var(--color-sand-border)] p-7 sm:p-10 md:p-14 min-h-[400px] sm:min-h-[440px] flex flex-col"
      style={
        success ? { boxShadow: "inset 0 2px 0 0 var(--color-cinnamon)" } : {}
      }
    >
      <span className="block mb-4 sm:mb-6 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] sm:tracking-[3px] text-[var(--color-cinnamon)] font-semibold">
        Submit
      </span>
      <h3
        className="font-[family-name:var(--font-display)] font-black uppercase text-[var(--color-navy)] leading-[0.92] text-[40px] sm:text-[46px] md:text-[52px]"
        style={{ letterSpacing: "-0.015em" }}
      >
        Report
        <br />
        a Match
      </h3>
      <p className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] font-light text-[var(--color-navy)]/55 leading-[1.7] max-w-[340px]">
        Winners report results. If you beat someone above you on the ladder,
        you'll take their spot.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-auto pt-6 sm:pt-8 flex flex-col gap-3"
      >
        <select
          required
          value={winner}
          onChange={(e) => setWinner(e.target.value)}
          className={inputClass}
        >
          <option value="">Winner</option>
          {activePlayers.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
        <select
          required
          value={loser}
          onChange={(e) => setLoser(e.target.value)}
          className={inputClass}
        >
          <option value="">Loser</option>
          {activePlayers
            .filter((p) => p.name !== winner)
            .map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
        </select>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            required
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Score (6-3, 6-4)"
            className={inputClass}
          />
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          className="group mt-2 py-4 bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] text-white text-[12px] font-semibold uppercase tracking-[1.8px] transition-colors flex items-center justify-center gap-2"
        >
          Submit Result
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>

        {success && (
          <p className="mt-2 text-[12px] text-[var(--color-cinnamon)] font-light">
            Result recorded. Standings have been updated.
          </p>
        )}
      </form>
    </div>
  );
}
