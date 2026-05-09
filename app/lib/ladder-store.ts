import { promises as fs } from "fs";
import path from "path";

export type Player = { id: number; name: string; w: number; l: number };
export type Match = {
  id: number;
  winner: string;
  loser: string;
  score: string;
  date: string;
};
export type LadderState = { players: Player[]; matches: Match[] };

export type Action =
  | { type: "join"; payload: { name: string; email?: string } }
  | {
      type: "report";
      payload: { winner: string; loser: string; score: string; date: string };
    };

const FILE_PATH = path.join(process.cwd(), "data", "ladder.json");

const defaultState: LadderState = {
  players: [
    { id: 1, name: "Barry Collymore", w: 0, l: 0 },
    ...Array.from({ length: 9 }, (_, i) => ({
      id: i + 2,
      name: "—",
      w: 0,
      l: 0,
    })),
  ],
  matches: [],
};

async function readState(): Promise<LadderState> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Partial<LadderState>;
    return {
      players: Array.isArray(parsed.players)
        ? parsed.players
        : defaultState.players,
      matches: Array.isArray(parsed.matches)
        ? parsed.matches
        : defaultState.matches,
    };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return defaultState;
    throw err;
  }
}

async function writeState(state: LadderState): Promise<void> {
  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(state, null, 2), "utf8");
}

export async function getState(): Promise<LadderState> {
  return readState();
}

export function applyAction(state: LadderState, action: Action): LadderState {
  if (action.type === "join") {
    const name = action.payload.name.trim();
    if (!name) return state;
    const idx = state.players.findIndex((p) => p.name === "—");
    if (idx === -1) return state;
    const players = state.players.map((p, i) =>
      i === idx ? { ...p, name } : p
    );
    return { ...state, players };
  }

  if (action.type === "report") {
    const { winner, loser, score, date } = action.payload;
    if (!winner || !loser || winner === loser) return state;

    let players = state.players.map((p) => {
      if (p.name === winner) return { ...p, w: p.w + 1 };
      if (p.name === loser) return { ...p, l: p.l + 1 };
      return p;
    });

    const wIdx = players.findIndex((p) => p.name === winner);
    const lIdx = players.findIndex((p) => p.name === loser);
    if (wIdx > lIdx && wIdx !== -1 && lIdx !== -1) {
      const next = [...players];
      const tmp = next[wIdx];
      next[wIdx] = next[lIdx];
      next[lIdx] = tmp;
      players = next;
    }

    const matches: Match[] = [
      { id: Date.now(), winner, loser, score, date },
      ...state.matches,
    ];

    return { players, matches };
  }

  return state;
}

export async function commit(action: Action): Promise<LadderState> {
  const current = await readState();
  const next = applyAction(current, action);
  await writeState(next);
  return next;
}
