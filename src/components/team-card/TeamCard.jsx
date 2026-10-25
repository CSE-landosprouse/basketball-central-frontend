import "./TeamCard.css";

function TeamCard({ name, city, logo }) {
    return (
        <article className="team-card">
            <img src={logo} alt={`${name} logo`} />
            <h3>{name}</h3>
            <p>{city}</p>
        </article>
    );
}

export default TeamCard;