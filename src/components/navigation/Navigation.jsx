import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                Home
            </NavLink>

            <NavLink to="/scores" className={({ isActive }) => isActive ? "active" : ""}>
                Scores
            </NavLink>

            <NavLink to="/teams" className={({ isActive }) => isActive ? "active" : ""}>
                Teams
            </NavLink>

            <NavLink to="/players" className={({ isActive }) => isActive ? "active" : ""}>
                Players
            </NavLink>

            <NavLink to="/schedule" className={({ isActive }) => isActive ? "active" : ""}>
                Schedule
            </NavLink>

            <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>
                News
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                Contact
            </NavLink>
        </nav>
    );
}

export default Navigation;