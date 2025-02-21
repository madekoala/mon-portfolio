"use client";

import { useEffect, useState } from "react";

export default function GithubStats() {
  const [stats, setStats] = useState({ public_repos: '...', language: '...' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    fetch("/api/contact/github")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          setStats(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError("Erreur de chargement des stats GitHub.");
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Stats GitHub</h3>
      <p>💻 Repos publics: {stats.public_repos}</p>
      <h2>language utilisés: {stats.language}</h2>
      {isLoading && <p className="loading-indicator">Chargement...</p>}
    </div>
  );
}
