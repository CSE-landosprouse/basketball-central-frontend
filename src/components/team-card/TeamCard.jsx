import "./TeamCard.css";

function TeamCard({
    name,
    city,
    conference,
    arena,
    championships,
    logo,
    onSelect
}) {
    return (
        <button
            className="team-card"
            type="button"
            onClick={onSelect}
            aria-label={`View details for ${name}`}
        >
            <img src={logo} alt={`${name} logo`} />

            <h3>{name}</h3>
            <p>{city}</p>

            <div className="team-details">
                <p><strong>Arena:</strong> {arena}</p>
                <p><strong>Championships:</strong> {championships}</p>
                <p><strong>Conference:</strong> {conference}</p>
            </div>

            <span className="team-card-link">View Team Details →</span>
        </button>
    );
}

export default TeamCard;