import "./TeamModal.css";

function TeamModal({ team, onClose }) {
    if (!team) {
        return null;
    }

    return (
        <div className="team-modal-overlay" onClick={onClose}>
            <section
                className="team-modal"
                role="dialog"
                aria-modal="true"
                aria-label={`${team.name} details`}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    className="team-modal-close"
                    type="button"
                    onClick={onClose}
                    aria-label="Close team details"
                >
                    ×
                </button>

                <img src={team.logo} alt={`${team.name} logo`} />

                <p className="team-modal-eyebrow">{team.conference}</p>
                <h2>{team.name}</h2>
                <p className="team-modal-city">{team.city}</p>

                <div className="team-modal-details">
                    <p>
                        <strong>Home Arena</strong>
                        {team.arena}
                    </p>
                    <p>
                        <strong>Championships</strong>
                        {team.championships}
                    </p>
                </div>
            </section>
        </div>
    );
}

export default TeamModal;