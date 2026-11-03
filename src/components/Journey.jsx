
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import universes from "../data/universes";

function Journey() {
  const navigate = useNavigate();

  const [visitedIds, setVisitedIds] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("visitedUniverses") || "[]"
      );
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const updateJourney = () => {
      try {
        setVisitedIds(
          JSON.parse(
            localStorage.getItem("visitedUniverses") || "[]"
          )
        );
      } catch {
        setVisitedIds([]);
      }
    };

    window.addEventListener("storage", updateJourney);

    return () => {
      window.removeEventListener("storage", updateJourney);
    };
  }, []);

  const visitedWorlds = universes.filter((world) =>
    visitedIds.includes(world.id)
  );

  return (
    <section className="journey-section">
      <div className="journey-heading">
        <p>YOUR PERSONAL MULTIVERSE</p>
        <h2>Your Exploration Journey</h2>
        <span>
          Every universe you visit becomes part of your story.
        </span>
      </div>

      {visitedWorlds.length > 0 ? (
        <div className="journey-grid">
          {visitedWorlds.map((world, index) => (
            <motion.div
              className="journey-card"
              key={world.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="journey-number">
                DISCOVERY {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{world.name}</h3>

              <p>{world.description}</p>

              <button
                onClick={() =>
                  navigate(`/universe/${world.id}`)
                }
              >
                Revisit Universe →
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="journey-empty">
          <span>✧</span>
          <h3>Your journey starts here.</h3>
          <p>
            Explore your first alternate reality to begin
            building your multiverse journey.
          </p>

          <button onClick={() => navigate("/explore")}>
            Explore Universes →
          </button>
        </div>
      )}
    </section>
  );
}

export default Journey;