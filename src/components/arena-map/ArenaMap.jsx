import "./ArenaMap.css";

function ArenaMap() {
    return (
        <section className="arena-map-section">
            <div className="arena-map-text">
                <p>NBA DESTINATION</p>
                <h2>Madison Square Garden</h2>
                <span>
                    Explore the location of one of basketball’s most famous arenas.
                </span>
            </div>

            <div className="arena-map-frame">
                <iframe
                    title="Map of Madison Square Garden"
                    src="https://www.google.com/maps?q=Madison%20Square%20Garden%2C%20New%20York%2C%20NY&output=embed"
                    loading="lazy"
                    allowFullScreen
                />
            </div>
        </section>
    );
}

export default ArenaMap;