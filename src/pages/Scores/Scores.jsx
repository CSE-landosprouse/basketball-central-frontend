import "./Scores.css";
import ScoreCard from "../../components/score-card/ScoreCard";

const scores = [
    {
        awayTeam: "Boston Celtics",
        awayScore: "112",
        homeTeam: "New York Knicks",
        homeScore: "105",
        status: "Final"
    },
    {
        awayTeam: "Los Angeles Lakers",
        awayScore: "118",
        homeTeam: "Golden State Warriors",
        homeScore: "121",
        status: "Final"
    },
    {
        awayTeam: "Denver Nuggets",
        awayScore: "109",
        homeTeam: "Oklahoma City Thunder",
        homeScore: "115",
        status: "Final"
    },
    {
        awayTeam: "Milwaukee Bucks",
        awayScore: "101",
        homeTeam: "Cleveland Cavaliers",
        homeScore: "107",
        status: "Final"
    }
];

function Scores() {
    return (
        <main>
            <section className="scores-banner">
                <p>NBA SCORES</p>
                <h1>Latest Results</h1>
                <span>Catch up on recent scores from around the league.</span>
            </section>

            <section className="scores-page-section">
                <h2>Tonight's Scoreboard</h2>

                <div className="scores-grid">
                    {scores.map((score) => (
                        <ScoreCard
                            key={`${score.awayTeam}-${score.homeTeam}`}
                            {...score}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Scores;