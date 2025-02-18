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

  // Récupère les repos publics de l'utilisateur
  const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!reposRes.ok) {
    return NextResponse.json(
      { error: "Impossible de récupérer les dépôts GitHub" },
      { status: reposRes.status }
    );
  }

  const repos = await reposRes.json();
  let languageStats = {};

  // Récupère l'utilisation des langages pour chaque repo
  for (const repo of repos) {
    const langRes = await fetch(repo.languages_url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (langRes.ok) {
      const repoLangs = await langRes.json();
      for (const [lang, bytes] of Object.entries(repoLangs)) {
        languageStats[lang] = (languageStats[lang] || 0) + bytes;
      }
    }
  }

  // Calculer la répartition en pourcentage
  const totalBytes = Object.values(languageStats).reduce((acc, val) => acc + val, 0);
  const langPercentages = Object.entries(languageStats)
    .map(([lang, bytes]) => ({ lang, percentage: ((bytes / totalBytes) * 100).toFixed(2) }))
    .sort((a, b) => b.percentage - a.percentage); // Trier du plus utilisé au moins utilisé

  return NextResponse.json(langPercentages);
}
