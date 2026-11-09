import "./TeamCard.css";

function TeamCard({
    name,
    city,
    conference,
    arena,
    championships,
    logo
}) {
    return (
        <article className="team-card">
            <img src={logo} alt={`${name} logo`} />

            <h3>{name}</h3>
            <p>{city}</p>

            <div className="team-details">
                <p><strong>Arena:</strong> {arena}</p>
                <p><strong>Championships:</strong> {championships}</p>
                <p><strong>Conference:</strong> {conference}</p>
            </div>
        </article>
    );
}

export default TeamCard;