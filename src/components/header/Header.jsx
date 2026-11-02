import { useState } from "react";
import "./Header.css";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="site-header">
            <Logo />

            <button
                className="menu-toggle"
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
            >
                ☰
            </button>

            <Navigation
                isOpen={isMenuOpen}
                closeMenu={closeMenu}
            />
        </header>
    );
}

export default Header;