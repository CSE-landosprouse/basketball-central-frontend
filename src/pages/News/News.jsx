import "./News.css";
import NewsCard from "../../components/news-card/NewsCard";

const stories = [
    {
        category: "PLAYOFF RACE",
        title: "The Race for the Playoffs Is Heating Up",
        description: "Teams across the NBA are battling for critical postseason positioning.",
        featured: true
    },
    {
        category: "TEAM NEWS",
        title: "Celtics Continue Their Strong Season",
        description: "Boston remains one of the league's toughest teams on both ends of the floor."
    },
    {
        category: "PLAYER SPOTLIGHT",
        title: "Shai Gilgeous-Alexander Leads the Thunder",
        description: "The Oklahoma City star continues to make a major impact every night."
    },
    {
        category: "GAME RECAP",
        title: "Lakers and Warriors Deliver Another Classic",
        description: "A close matchup between two NBA powers came down to the final minutes."
    },
    {
        category: "AROUND THE LEAGUE",
        title: "New York Looks to Build Momentum",
        description: "The Knicks are focused on finishing the season strong at Madison Square Garden."
    },
    {
        category: "NBA SCHEDULE",
        title: "Big Weekend Matchups Are Ahead",
        description: "Several conference rivals will face off in games with playoff implications."
    }
];

function News() {
    return (
        <main>
            <section className="news-banner">
                <p>FULL COURT NEWS</p>
                <h1>NBA Headlines</h1>
                <span>Stay updated with the biggest stories from around the league.</span>
            </section>

            <section className="news-page-section">
                <div className="news-grid">
                    {stories.map((story) => (
                        <NewsCard key={story.title} {...story} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default News;