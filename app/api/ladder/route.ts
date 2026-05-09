import { NextResponse } from "next/server";
import { commit, getState, type Action } from "../../lib/ladder-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const state = await getState();
  return NextResponse.json(state, {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(req: Request) {
  let action: Action;
  try {
    action = (await req.json()) as Action;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (action?.type !== "join" && action?.type !== "report") {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  const next = await commit(action);
  return NextResponse.json(next, {
    headers: { "Cache-Control": "no-store" },
  });
}
