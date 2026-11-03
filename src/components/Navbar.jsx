
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-navbar">
      <NavLink to="/" className="nav-logo">
        PARALLEL<span>.</span>
      </NavLink>

      <div className="nav-menu">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/explore">
          Explore
        </NavLink>

        <NavLink to="/saved">
          My Discoveries
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;