import "./Players.css";
import PlayerCard from "../../components/player-card/PlayerCard";

const players = [
    {
        name: "LeBron James",
        team: "Los Angeles Lakers",
        position: "Forward",
        number: "23",
        photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
    },
    {
        name: "Nikola Jokic",
        team: "Denver Nuggets",
        position: "Center",
        number: "15",
        photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png"
    },
    {
        name: "Shai Gilgeous-Alexander",
        team: "Oklahoma City Thunder",
        position: "Guard",
        number: "2",
        photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png"
    },
    {
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        position: "Forward",
        number: "34",
        photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png"
    },
    {
        name: "Jayson Tatum",
        team: "Boston Celtics",
        position: "Forward",
        number: "0",
        photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png"
    },
    {
        name: "Stephen Curry",
        team: "Golden State Warriors",
        position: "Guard",
        number: "30",
        photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
    }
];

function Players() {
    return (
        <main>
            <section className="players-banner">
                <p>NBA PLAYERS</p>
                <h1>Stars of the League</h1>
                <span>Meet some of basketball's most exciting players.</span>
            </section>

            <section className="players-page-section">
                <div className="players-grid">
                    {players.map((player) => (
                        <PlayerCard key={player.name} {...player} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Players;