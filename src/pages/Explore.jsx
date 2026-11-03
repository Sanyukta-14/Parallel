
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import universes from "../data/universes";
import MultiverseStats from "../components/MultiverseStats";
import Journey from "../components/Journey";

function Explore() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Random universe discovery
  const discoverRandomUniverse = () => {
    if (universes.length === 0) return;

    const randomIndex = Math.floor(
      Math.random() * universes.length
    );

    const randomUniverse = universes[randomIndex];

    navigate(`/universe/${randomUniverse.id}`);
  };

  // Dynamic categories
  const categories = [
    "All",
    ...new Set(universes.map((world) => world.type))
  ];

  // Search and category filtering
  const filteredUniverses = universes.filter((world) => {
    const matchesSearch =
      world.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      world.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      world.type === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      className="explore-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >

      {/* MULTIVERSE STATISTICS */}
      <MultiverseStats />

      {/* PERSONAL EXPLORATION JOURNEY */}
      <Journey />

      {/* PAGE HEADER */}
      <motion.div
        className="explore-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="tagline">
          THE MULTIVERSE AWAITS
        </p>

        <h1>Explore Alternate Worlds</h1>

        <p>
          Every universe has a different story.
          Which reality will you discover?
        </p>

        {/* MY DISCOVERIES BUTTON */}
        <button
          className="saved-link"
          onClick={() => navigate("/saved")}
        >
          ★ My Discoveries
        </button>

        {/* RANDOM DISCOVERY BUTTON */}
        <button
          className="random-discover-btn"
          onClick={discoverRandomUniverse}
        >
          ✦ Discover a Random Reality
        </button>
      </motion.div>

      {/* SEARCH BAR */}
      <motion.div
        className="universe-search"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="Search alternate universes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </motion.div>

      {/* CATEGORY FILTER */}
      <motion.div
        className="category-filters"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "active-filter"
                : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* RESULTS COUNT */}
      <p className="results-count">
        {filteredUniverses.length} universe(s) discovered
      </p>

      {/* ANIMATED UNIVERSE CARDS */}
      {filteredUniverses.length > 0 ? (
        <motion.div
          className="universe-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`${searchTerm}-${selectedCategory}`}
        >
          {filteredUniverses.map((universe) => (
            <motion.div
              className="universe-card"
              key={universe.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03
              }}
              transition={{ duration: 0.3 }}
              style={{
                "--world-color": universe.color
              }}
            >
              <p>{universe.type}</p>

              <h2>{universe.name}</h2>

              <p>{universe.description}</p>

              <button
                onClick={() =>
                  navigate(`/universe/${universe.id}`)
                }
              >
                Discover World →
              </button>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>No Universes Found</h2>

          <p>
            Try another search term or select a different category.
          </p>

          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
          >
            Reset Filters
          </button>
        </motion.div>
      )}

    </motion.div>
  );
}

export default Explore;