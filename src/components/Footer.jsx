import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>PARALLEL<span>.</span></h2>
          <p>
            Every choice creates a different reality.
            Explore the worlds beyond imagination.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/explore">Discover Worlds</Link>
          <Link to="/saved">My Discoveries</Link>
        </div>

        <div className="footer-message">
          <h3>One Reality. Infinite Possibilities.</h3>
          <p>Which world would you choose?</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PARALLEL. All realities reserved.</p>
        <p>Created with React</p>
      </div>
    </footer>
  );
}

export default Footer;