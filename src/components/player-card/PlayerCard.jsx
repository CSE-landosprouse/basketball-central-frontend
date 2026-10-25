import "./PlayerCard.css";

function PlayerCard({ name, team, position, number, photo }) {
    return (
        <article className="player-card">
            <img src={photo} alt={name} />

            <div>
                <p className="player-number">#{number}</p>
                <h3>{name}</h3>
                <p>{team}</p>
                <p className="player-position">{position}</p>
            </div>
        </article>
    );
}

export default PlayerCard;