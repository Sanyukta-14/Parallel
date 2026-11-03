
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import universes from "../data/universes";

function MultiverseStats() {
  const location = useLocation();

  const [savedCount, setSavedCount] = useState(0);
  const [visitedCount, setVisitedCount] = useState(0);

  useEffect(() => {
    const updateStats = () => {
      try {
        const saved = JSON.parse(
          localStorage.getItem("savedUniverses") || "[]"
        );

        const visited = JSON.parse(
          localStorage.getItem("visitedUniverses") || "[]"
        );

        setSavedCount(saved.length);
        setVisitedCount(visited.length);
      } catch {
        setSavedCount(0);
        setVisitedCount(0);
      }
    };

    updateStats();

    window.addEventListener("storage", updateStats);

    return () => {
      window.removeEventListener("storage", updateStats);
    };
  }, [location.pathname]);

  const stats = [
    {
      number: universes.length,
      label: "Known Universes",
      symbol: "✧"
    },
    {
      number: savedCount,
      label: "Saved Realities",
      symbol: "★"
    },
    {
      number: visitedCount,
      label: "Worlds Explored",
      symbol: "◎"
    }
  ];

  return (
    <section className="multiverse-stats">
      <p className="stats-tagline">
        YOUR MULTIVERSE JOURNEY
      </p>

      <h2>Beyond One Reality</h2>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stats-card" key={stat.label}>
            <span>{stat.symbol}</span>

            <h3>{stat.number}</h3>

            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MultiverseStats;