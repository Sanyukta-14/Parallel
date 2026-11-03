
import { motion } from "framer-motion";

function PortalLoader() {
  return (
    <motion.div
      className="portal-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="loader-portal"
        animate={{
          rotate: 360,
          scale: [1, 1.08, 1]
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="loader-inner">
          <div className="loader-core" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        PARALLEL
      </motion.h2>

      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        Opening another reality...
      </motion.p>
    </motion.div>
  );
}

export default PortalLoader;