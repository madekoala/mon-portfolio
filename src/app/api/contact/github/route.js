import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_USERNAME = "madekoala";
  const TOKEN = process.env.GITHUB_TOKEN;

  if (!TOKEN) {
    return NextResponse.json(
      { error: "Token GitHub manquant" },
      { status: 500 }
    );
  }

  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Erreur GitHub", status: res.status },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
