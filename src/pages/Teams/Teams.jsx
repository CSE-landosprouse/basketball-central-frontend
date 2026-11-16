import { useEffect, useState } from "react";
import "./Teams.css";
import TeamCard from "../../components/team-card/TeamCard";
import TeamForm from "../../components/team-form/TeamForm";
import TeamModal from "../../components/team-modal/TeamModal";

const apiUrl = "https://basketball-central-backend.onrender.com/api/teams";

function Teams() {
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedTeam, setSelectedTeam] = useState(null);

    useEffect(() => {
        async function getTeams() {
            try {
                const response = await fetch(apiUrl);

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

    async function addTeam(newTeamData) {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTeamData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unable to add this team.");
        }

        setTeams((currentTeams) => [...currentTeams, data.team]);
    }

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
                                <TeamCard
                                    key={team._id}
                                    {...team}
                                    onSelect={() => setSelectedTeam(team)}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="teams-section teams-section-alt">
                        <h2>Western Conference</h2>

                        <div className="teams-grid">
                            {westernTeams.map((team) => (
                                <TeamCard
                                    key={team._id}
                                    {...team}
                                    onSelect={() => setSelectedTeam(team)}
                                />
                            ))}
                        </div>
                    </section>

                    <TeamForm onAddTeam={addTeam} />
                </>
            )}

            <TeamModal
                team={selectedTeam}
                onClose={() => setSelectedTeam(null)}
            />
        </main>
    );
}

export default Teams;