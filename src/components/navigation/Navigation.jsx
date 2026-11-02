import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isOpen, closeMenu }) {
    const linkClass = ({ isActive }) =>
        isActive ? "active" : "";

    return (
        <nav className={`navigation ${isOpen ? "show-menu" : ""}`}>
            <NavLink to="/" end className={linkClass} onClick={closeMenu}>
                Home
            </NavLink>

            <NavLink to="/scores" className={linkClass} onClick={closeMenu}>
                Scores
            </NavLink>

            <NavLink to="/teams" className={linkClass} onClick={closeMenu}>
                Teams
            </NavLink>

            <NavLink to="/players" className={linkClass} onClick={closeMenu}>
                Players
            </NavLink>

            <NavLink to="/schedule" className={linkClass} onClick={closeMenu}>
                Schedule
            </NavLink>

            <NavLink to="/news" className={linkClass} onClick={closeMenu}>
                News
            </NavLink>

            <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
                Contact
            </NavLink>
        </nav>
    );
}

export default Navigation;