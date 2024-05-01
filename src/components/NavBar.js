import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar" to="/">Home</NavLink>
      <NavLink className="navbar" to="/actors">NavBar</NavLink>
      <NavBar className="navbar" to="/directories">Directories</NavBar>

    </nav>
    );
};

export default NavBar;
