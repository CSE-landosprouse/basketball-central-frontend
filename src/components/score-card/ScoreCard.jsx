import "./ScoreCard.css";

function ScoreCard({ awayTeam, awayScore, homeTeam, homeScore, status }) {
    return (
        <article className="score-card">
            <div>
                <p>{awayTeam}</p>
                <strong>{awayScore}</strong>
            </div>

            <div>
                <p>{homeTeam}</p>
                <strong>{homeScore}</strong>
            </div>

            <span>{status}</span>
        </article>
    );
}

export default ScoreCard;