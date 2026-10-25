import "./Schedule.css";

const games = [
    {
        date: "Friday, April 10",
        away: "Boston Celtics",
        home: "New York Knicks",
        time: "7:30 PM ET"
    },
    {
        date: "Friday, April 10",
        away: "Los Angeles Lakers",
        home: "Golden State Warriors",
        time: "10:00 PM ET"
    },
    {
        date: "Saturday, April 11",
        away: "Denver Nuggets",
        home: "Oklahoma City Thunder",
        time: "8:00 PM ET"
    },
    {
        date: "Saturday, April 11",
        away: "Milwaukee Bucks",
        home: "Cleveland Cavaliers",
        time: "7:00 PM ET"
    }
];

function Schedule() {
    return (
        <main>
            <section className="schedule-banner">
                <p>NBA SCHEDULE</p>
                <h1>Upcoming Games</h1>
                <span>Plan ahead with the latest Full Court game schedule.</span>
            </section>

            <section className="schedule-page-section">
                {games.map((game) => (
                    <article className="schedule-game" key={`${game.away}-${game.home}`}>
                        <p className="schedule-date">{game.date}</p>

                        <div className="schedule-matchup">
                            <p>{game.away}</p>
                            <strong>VS</strong>
                            <p>{game.home}</p>
                            <span>{game.time}</span>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Schedule;