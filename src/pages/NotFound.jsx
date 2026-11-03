import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="not-found"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="not-found-tag">REALITY NOT FOUND</p>

      <h1>404</h1>

      <h2>You've entered an unknown universe.</h2>

      <p>
        This reality doesn't exist in our multiverse.
        Let's take you back to a known dimension.
      </p>

      <button onClick={() => navigate("/")}>
        Return to Home →
      </button>
    </motion.div>
  );
}

export default NotFound;