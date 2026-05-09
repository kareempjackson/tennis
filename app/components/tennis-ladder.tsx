"use client";

import { useEffect, useState } from "react";
import Nav from "./nav";
import Hero from "./hero";
import BarryGrid from "./barry-grid";
import HowItWorks from "./how-it-works";
import Ladder from "./ladder";
import ActionCards from "./action-cards";
import Rules from "./rules";
import Footer from "./footer";

export type Player = { id: number; name: string; w: number; l: number };
export type Match = {
  id: number;
  winner: string;
  loser: string;
  score: string;
  date: string;
};

const defaultPlayers: Player[] = [
  { id: 1, name: "Barry Collymore", w: 0, l: 0 },
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 2,
    name: "—",
    w: 0,
    l: 0,
  })),
];

export default function TennisLadder() {
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/ladder", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        if (Array.isArray(data.players)) setPlayers(data.players);
        if (Array.isArray(data.matches)) setMatches(data.matches);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  function postAction(body: unknown) {
    fetch("/api/ladder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((next) => {
        if (!next) return;
        if (Array.isArray(next.players)) setPlayers(next.players);
        if (Array.isArray(next.matches)) setMatches(next.matches);
      })
      .catch(() => {});
  }

  function handleJoin(name: string) {
    setPlayers((prev) => {
      const idx = prev.findIndex((p) => p.name === "—");
      if (idx === -1) return prev;
      const next = [...prev];
      next[idx] = { ...next[idx], name };
      return next;
    });
    postAction({ type: "join", payload: { name } });
  }

  function handleReport(
    winnerName: string,
    loserName: string,
    score: string,
    date: string
  ) {
    setPlayers((prev) => {
      const next = prev.map((p) => {
        if (p.name === winnerName) return { ...p, w: p.w + 1 };
        if (p.name === loserName) return { ...p, l: p.l + 1 };
        return p;
      });
      const wIdx = next.findIndex((p) => p.name === winnerName);
      const lIdx = next.findIndex((p) => p.name === loserName);
      if (wIdx > lIdx && wIdx !== -1 && lIdx !== -1) {
        const tmp = next[wIdx];
        next[wIdx] = next[lIdx];
        next[lIdx] = tmp;
      }
      return next;
    });

    setMatches((prev) => [
      {
        id: Date.now(),
        winner: winnerName,
        loser: loserName,
        score,
        date,
      },
      ...prev,
    ]);

    postAction({
      type: "report",
      payload: { winner: winnerName, loser: loserName, score, date },
    });
  }

  const activePlayers = players.filter((p) => p.name !== "—");

  return (
    <>
      <Nav />
      <main className="flex-1 bg-white">
        <Hero playerCount={activePlayers.length} matchCount={matches.length} />
        <BarryGrid />
        <HowItWorks />
        <Ladder players={players} matches={matches} />
        <ActionCards
          activePlayers={activePlayers}
          onJoin={handleJoin}
          onReport={handleReport}
        />
        <Rules />
      </main>
      <Footer />
    </>
  );
}
