import "./Header.css";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

function Header() {
    return (
        <header className="site-header">
            <Logo />
            <Navigation />
        </header>
    );
}

export default Header;