import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Sri Viji Thanga Maaligai</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;