
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import PortalLoader from "./PortalLoader";
import Home from "../pages/Home";

function EntryScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <PortalLoader key="loader" />
      ) : (
        <Home key="home" />
      )}
    </AnimatePresence>
  );
}

export default EntryScreen;