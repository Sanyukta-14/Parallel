import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <nav className="navbar">
        <h2 className="logo">PARALLEL<span>.</span></h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="/explore">Worlds</a>
        </div>

        <button
          className="nav-button"
          onClick={() => navigate("/explore")}
        >
          Enter Multiverse ↗
        </button>
      </nav>

      <section className="hero">

        <p className="tagline">✦ BEYOND THE REALITY YOU KNOW ✦</p>

        <h1>
          WHAT IF
          <br />
          <span>EVERYTHING</span>
          <br />
          WAS DIFFERENT?
        </h1>

        <p className="description">
          Somewhere beyond your reality, another version of the world exists.
          Explore the possibilities. Discover alternate realities.
        </p>

        <button
          className="explore-button"
          onClick={() => navigate("/explore")}
        >
          Explore Alternate Worlds ↗
        </button>

        <div className="portal">
          <div className="portal-inner"></div>
        </div>

        <p className="portal-caption">
          YOUR REALITY IS JUST ONE POSSIBILITY
        </p>

      </section>
    </div>
  );
}

export default Home;