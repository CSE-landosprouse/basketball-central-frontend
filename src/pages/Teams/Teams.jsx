import "./Teams.css";
import TeamCard from "../../components/team-card/TeamCard";

const easternTeams = [
    {
        name: "Boston Celtics",
        city: "Boston, Massachusetts",
        logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg"
    },
    {
        name: "New York Knicks",
        city: "New York, New York",
        logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg"
    },
    {
        name: "Cleveland Cavaliers",
        city: "Cleveland, Ohio",
        logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg"
    },
    {
        name: "Milwaukee Bucks",
        city: "Milwaukee, Wisconsin",
        logo: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg"
    }
];

const westernTeams = [
    {
        name: "Oklahoma City Thunder",
        city: "Oklahoma City, Oklahoma",
        logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg"
    },
    {
        name: "Denver Nuggets",
        city: "Denver, Colorado",
        logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg"
    },
    {
        name: "Los Angeles Lakers",
        city: "Los Angeles, California",
        logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg"
    },
    {
        name: "Golden State Warriors",
        city: "San Francisco, California",
        logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg"
    }
];

function Teams() {
    return (
        <main>
            <section className="teams-banner">
                <p>NBA TEAMS</p>
                <h1>League Contenders</h1>
                <span>Explore exciting teams from both NBA conferences.</span>
            </section>

            <section className="teams-section">
                <h2>Eastern Conference</h2>

                <div className="teams-grid">
                    {easternTeams.map((team) => (
                        <TeamCard key={team.name} {...team} />
                    ))}
                </div>
            </section>

            <section className="teams-section teams-section-alt">
                <h2>Western Conference</h2>

                <div className="teams-grid">
                    {westernTeams.map((team) => (
                        <TeamCard key={team.name} {...team} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Teams;