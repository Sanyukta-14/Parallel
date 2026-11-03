import { useState } from "react";
import { useNavigate } from "react-router-dom";
import universes from "../data/universes";

function Saved() {
  const navigate = useNavigate();

  const [savedIds, setSavedIds] = useState(() => {
    return JSON.parse(localStorage.getItem("savedUniverses") || "[]");
  });

  const savedUniverses = universes.filter((world) =>
    savedIds.includes(world.id)
  );

  const removeSaved = (id) => {
    const updatedIds = savedIds.filter(
      (savedId) => savedId !== id
    );

    setSavedIds(updatedIds);
    localStorage.setItem("savedUniverses", JSON.stringify(updatedIds));
  };

  return (
    <div className="explore-page">
      <button className="back-button" onClick={() => navigate("/explore")}>
        ← Back to Explore
      </button>

      <p className="tagline">YOUR PERSONAL COLLECTION</p>
      <h1>My Discoveries</h1>
      <p>Return to the alternate realities you found interesting.</p>

      {savedUniverses.length === 0 ? (
        <div className="empty-saved">
          <h2>No discoveries saved yet.</h2>
          <p>Explore a universe and save it to see it here.</p>
          <button
            className="back-button"
            onClick={() => navigate("/explore")}
          >
            Explore Universes
          </button>
        </div>
      ) : (
        <div className="universe-grid">
          {savedUniverses.map((world) => (
            <div
              className="universe-card"
              key={world.id}
              style={{ "--world-color": world.color }}
            >
              <p>{world.type}</p>
              <h2>{world.name}</h2>
              <p>{world.description}</p>

              <button onClick={() => navigate(`/universe/${world.id}`)}>
                Revisit World →
              </button>

              <button onClick={() => removeSaved(world.id)}>
                Remove from Saved
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Saved;