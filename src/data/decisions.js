const decisions = {
  1: {
    question: "Who should control the future of humanity?",
    description:
      "An advanced AI system can now make decisions affecting the entire planet.",
    options: [
      {
        id: "A",
        title: "Trust Artificial Intelligence",
        description: "Allow AI to manage global decisions.",
        outcome:
          "AI takes control of global systems. Cities become extremely efficient, but humans gradually lose control over important decisions.",
        future: "The Age of Artificial Intelligence",
      },
      {
        id: "B",
        title: "Humanity Takes Control",
        description: "Keep important decisions in human hands.",
        outcome:
          "Humans remain in control and use AI only as an assistant. Progress becomes slower, but individual freedom is protected.",
        future: "The Human-Led Civilization",
      },
    ],
  },

  2: {
    question: "How should humanity protect the planet?",
    description:
      "The environment is recovering, but economic growth is creating new challenges.",
    options: [
      {
        id: "A",
        title: "Protect Every Ecosystem",
        description: "Limit industrial expansion to protect nature.",
        outcome:
          "Forests and oceans recover dramatically. Humanity learns to live with fewer resources and a healthier planet.",
        future: "The Age of Nature",
      },
      {
        id: "B",
        title: "Balance Nature and Technology",
        description: "Use advanced technology for sustainable growth.",
        outcome:
          "Smart green cities emerge. Technology helps restore ecosystems while supporting human development.",
        future: "The Sustainable Civilization",
      },
    ],
  },

  3: {
    question: "How should survivors rebuild civilization?",
    description:
      "The old world has collapsed. A surviving community must choose its future.",
    options: [
      {
        id: "A",
        title: "Rebuild Technology",
        description: "Recover and rebuild advanced machines.",
        outcome:
          "Technology returns and cities begin to recover. However, humanity risks repeating the mistakes of its past.",
        future: "The Technological Revival",
      },
      {
        id: "B",
        title: "Build a New Society",
        description: "Start again with simpler communities.",
        outcome:
          "Small independent communities grow. People focus on cooperation, survival and rebuilding trust.",
        future: "The New Human Era",
      },
    ],
  },

  4: {
    question: "Where should humanity expand next?",
    description:
      "Humanity has established colonies across the solar system.",
    options: [
      {
        id: "A",
        title: "Explore New Planets",
        description: "Search for habitable worlds beyond the solar system.",
        outcome:
          "Humanity begins exploring distant star systems and discovers new possibilities for civilization.",
        future: "The Galactic Expansion",
      },
      {
        id: "B",
        title: "Connect Existing Colonies",
        description: "Build a united planetary civilization.",
        outcome:
          "Planetary colonies become connected through a shared network, creating a powerful interplanetary society.",
        future: "The United Planetary Era",
      },
    ],
  },
};

export default decisions;