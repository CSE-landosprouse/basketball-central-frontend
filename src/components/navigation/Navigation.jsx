import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navigation">
            <a className="active" href="#home">Home</a>
            <a href="#scores">Scores</a>
            <a href="#teams">Teams</a>
            <a href="#players">Players</a>
            <a href="#schedule">Schedule</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
        </nav>
    );
}

export default Navigation;