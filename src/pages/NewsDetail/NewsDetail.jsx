import "./NewsDetail.css";
import newsImage from "../../images/news-feature.jpg";

function NewsDetail() {
    return (
        <main>
            <section className="news-detail-header">
                <p>PLAYOFF RACE</p>
                <h1>The Race for the Playoffs Is Heating Up</h1>
                <span>By Full Court Staff</span>
            </section>

            <article className="news-detail-content">
                <img src={newsImage} alt="NBA basketball action" />

                <p className="news-detail-lead">
                    With the regular season nearing its biggest stretch, every game
                    is becoming more important for teams across the NBA.
                </p>

                <p>
                    From the Eastern Conference to the Western Conference, playoff
                    positioning is changing quickly. Contenders are trying to protect
                    home-court advantage while teams near the bottom of the standings
                    are fighting to stay alive.
                </p>

                <blockquote>
                    “This is the time of year when every possession matters.”
                </blockquote>

                <p>
                    Full Court will continue to cover the biggest scores, teams,
                    players, and headlines as the NBA season moves toward the
                    postseason.
                </p>
            </article>
        </main>
    );
}

export default NewsDetail;