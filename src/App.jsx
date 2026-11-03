import { BrowserRouter, Routes, Route } from "react-router-dom";

import EntryScreen from "./components/EntryScreen";
import Explore from "./pages/Explore";
import Universe from "./pages/Universe";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<EntryScreen />}
        />

        {/* Explore Page */}
        <Route
          path="/explore"
          element={
            <>
              <Navbar />
              <Explore />
              <Footer />
            </>
          }
        />

        {/* Individual Universe Page */}
        <Route
          path="/universe/:id"
          element={
            <>
              <Navbar />
              <Universe />
              <Footer />
            </>
          }
        />

        {/* Saved Discoveries Page */}
        <Route
          path="/saved"
          element={
            <>
              <Navbar />
              <Saved />
              <Footer />
            </>
          }
        />

        {/* Custom 404 Page */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;