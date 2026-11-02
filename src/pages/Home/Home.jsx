import "./Home.css";
import { Link } from "react-router-dom";
import heroImage from "../../images/hero2.jpg";
import StorySlideshow from "../../components/story-slideshow/StorySlideshow";
import ArenaMap from "../../components/arena-map/ArenaMap";

function Home() {
    return (
        <main>
            <section
                className="home-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.62), rgba(15, 23, 42, 0.62)), url(${heroImage})`
                }}
            >
                <div className="home-hero-content">
                    <p className="home-eyebrow">FULL COURT NBA COVERAGE</p>
                    <h1>Every Game. Every Team. Every Story.</h1>
                    <p>
                        Follow the latest NBA scores, players, teams, schedules,
                        and headlines in one place.
                    </p>
                    <Link className="home-button" to="/scores">
                        View Live Scores
                    </Link>
                </div>
            </section>

            <section className="home-intro">
                <div>
                    <p className="home-eyebrow">WELCOME TO FULL COURT</p>
                    <h2>Built for Basketball Fans</h2>
                    <p>
                        Full Court brings together the teams, stars, game results,
                        and stories that matter most around the NBA.
                    </p>
                </div>

                <div className="home-links">
                    <Link to="/teams">Explore Teams</Link>
                    <Link to="/players">Meet Players</Link>
                    <Link to="/schedule">View Schedule</Link>
                </div>
            </section>

            <StorySlideshow />
            <ArenaMap />
        </main>
    );
}

export default Home;