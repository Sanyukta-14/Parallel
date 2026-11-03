import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import universes from "../data/universes";
import timelines from "../data/timelines";
import decisions from "../data/decisions";
import comparisons from "../data/comparisons";

function Universe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedChoice, setSelectedChoice] = useState(null);

  // Save discovered universes in LocalStorage
  const [savedIds, setSavedIds] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("savedUniverses") || "[]"
      );
    } catch {
      return [];
    }
  });

  // Find the selected universe
  const universe = universes.find(
    (world) => world.id === Number(id)
  );

  // Track visited universes
  useEffect(() => {
    if (!universe) return;

    try {
      const visited = JSON.parse(
        localStorage.getItem("visitedUniverses") || "[]"
      );

      if (!visited.includes(universe.id)) {
        const updatedVisited = [...visited, universe.id];

        localStorage.setItem(
          "visitedUniverses",
          JSON.stringify(updatedVisited)
        );
      }
    } catch (error) {
      console.error(
        "Unable to save visited universe:",
        error
      );
    }
  }, [universe]);

  // Handle invalid universe IDs
  if (!universe) {
    return (
      <div className="universe-detail">
        <h1>Universe Not Found</h1>

        <button
          className="back-button"
          onClick={() => navigate("/explore")}
        >
          ← Back to Universes
        </button>
      </div>
    );
  }

  // Check whether this universe is already saved
  const isSaved = savedIds.includes(universe.id);

  // Save or remove a universe
  const toggleSave = () => {
    const updatedIds = isSaved
      ? savedIds.filter(
          (savedId) => savedId !== universe.id
        )
      : [...savedIds, universe.id];

    setSavedIds(updatedIds);

    localStorage.setItem(
      "savedUniverses",
      JSON.stringify(updatedIds)
    );
  };

  // Get universe data
  const events = timelines[Number(id)] || [];
  const scenario = decisions[Number(id)];
  const comparisonData = comparisons[Number(id)] || [];

  // Animation settings
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="universe-detail"
      style={{ "--world-color": universe.color }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* BACK BUTTON */}
      <motion.button
        className="back-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/explore")}
      >
        ← Back to Universes
      </motion.button>

      {/* SAVE UNIVERSE BUTTON */}
      <motion.button
        className="save-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSave}
      >
        {isSaved
          ? "★ Saved to My Discoveries"
          : "☆ Save This Universe"}
      </motion.button>

      {/* UNIVERSE INTRODUCTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="universe-type">
          {universe.type}
        </p>

        <h1>{universe.name}</h1>

        <h3>{universe.tagline}</h3>

        <p className="detail-description">
          {universe.description}
        </p>
      </motion.div>

      {/* UNIVERSE STATISTICS */}
      <motion.div
        className="universe-stats"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <span>TIME PERIOD</span>
          <h3>{universe.year}</h3>
        </div>

        <div>
          <span>POPULATION</span>
          <h3>{universe.population}</h3>
        </div>

        <div>
          <span>TECHNOLOGY</span>
          <h3>{universe.technology}</h3>
        </div>
      </motion.div>

      {/* HISTORY */}
      <motion.section
        className="detail-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="tagline">THE HISTORY</p>

        <h2>How Did This World Change?</h2>

        <p>{universe.history}</p>
      </motion.section>

      {/* DAILY LIFE */}
      <motion.section
        className="detail-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="tagline">LIFE IN THIS REALITY</p>

        <h2>A Different Everyday Life</h2>

        <p>{universe.dailyLife}</p>
      </motion.section>

      {/* ALTERNATE TIMELINE */}
      <motion.section
        className="timeline-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="tagline">ALTERNATE HISTORY</p>

        <h2>The Timeline of This Reality</h2>

        <p className="timeline-intro">
          Discover the events that shaped this version
          of the world.
        </p>

        <div className="timeline">
          {events.map((event, index) => (
            <motion.div
              className="timeline-event"
              key={event.year}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15
              }}
            >
              <div className="timeline-marker">
                {index + 1}
              </div>

              <div className="timeline-content">
                <span>{event.year}</span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* INTERACTIVE DECISIONS */}
      {scenario && (
        <motion.section
          className="decision-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="tagline">
            YOUR CHOICE MATTERS
          </p>

          <h2>Shape the Future</h2>

          <p className="decision-description">
            {scenario.description}
          </p>

          <h3 className="decision-question">
            {scenario.question}
          </h3>

          <div className="decision-options">
            {scenario.options.map((option) => (
              <motion.button
                key={option.id}
                className={`decision-card ${
                  selectedChoice?.id === option.id
                    ? "selected"
                    : ""
                }`}
                whileHover={{
                  scale: 1.03,
                  y: -5
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedChoice(option)}
              >
                <span>OPTION {option.id}</span>

                <h3>{option.title}</h3>

                <p>{option.description}</p>
              </motion.button>
            ))}
          </div>

          {/* DECISION OUTCOME */}
          {selectedChoice && (
            <motion.div
              className="decision-outcome"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="tagline">
                YOUR ALTERNATE FUTURE
              </p>

              <h2>{selectedChoice.future}</h2>

              <p>{selectedChoice.outcome}</p>

              <motion.button
                className="reset-choice"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedChoice(null)}
              >
                ↻ Make Another Decision
              </motion.button>
            </motion.div>
          )}
        </motion.section>
      )}

      {/* REALITY COMPARISON */}
      <motion.section
        className="comparison-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="tagline">
          TWO DIFFERENT REALITIES
        </p>

        <h2>Our World vs {universe.name}</h2>

        <p className="comparison-intro">
          What changes when reality takes a different path?
          Compare our world with this alternate universe.
        </p>

        <div className="comparison-table">
          <div className="comparison-header">
            <div>ASPECT</div>

            <div>OUR WORLD</div>

            <div>
              {universe.name.toUpperCase()}
            </div>
          </div>

          {comparisonData.map((item, index) => (
            <motion.div
              className="comparison-row"
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
            >
              <div className="comparison-aspect">
                {item.aspect}
              </div>

              <div className="comparison-real">
                {item.real}
              </div>

              <div className="comparison-alternate">
                {item.alternate}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EXPLORE ANOTHER WORLD */}
      <motion.button
        className="back-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/explore")}
      >
        Explore Another Reality →
      </motion.button>

    </motion.div>
  );
}

export default Universe;