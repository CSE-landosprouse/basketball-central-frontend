import { useEffect, useState } from "react";
import "./Teams.css";
import TeamCard from "../../components/team-card/TeamCard";

function Teams() {
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getTeams() {
            try {
                const response = await fetch(
                    "https://basketball-central-backend.onrender.com/api/teams"
                );

                if (!response.ok) {
                    throw new Error("Could not load NBA teams.");
                }

                const data = await response.json();
                setTeams(data);
            } catch (error) {
                setError("Unable to load teams right now. Please try again soon.");
            } finally {
                setIsLoading(false);
            }
        }

        getTeams();
    }, []);

    const easternTeams = teams.filter(
        (team) => team.conference === "Eastern Conference"
    );

    const westernTeams = teams.filter(
        (team) => team.conference === "Western Conference"
    );

    return (
        <main>
            <section className="teams-banner">
                <p>NBA TEAMS</p>
                <h1>League Contenders</h1>
                <span>Explore exciting teams from both NBA conferences.</span>
            </section>

            {isLoading && (
                <p className="teams-message">Loading NBA teams...</p>
            )}

            {error && (
                <p className="teams-message teams-error">{error}</p>
            )}

            {!isLoading && !error && (
                <>
                    <section className="teams-section">
                        <h2>Eastern Conference</h2>

                        <div className="teams-grid">
                            {easternTeams.map((team) => (
                                <TeamCard key={team._id} {...team} />
                            ))}
                        </div>
                    </section>

                    <section className="teams-section teams-section-alt">
                        <h2>Western Conference</h2>

                        <div className="teams-grid">
                            {westernTeams.map((team) => (
                                <TeamCard key={team._id} {...team} />
                            ))}
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}

export default Teams;