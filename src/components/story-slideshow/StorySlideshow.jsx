import { useState } from "react";
import { Link } from "react-router-dom";
import "./StorySlideshow.css";

import heroImage from "../../images/hero2.jpg";
import featuredStoryImage from "../../images/featured-story2.jpg";
import newsImage from "../../images/news-feature.jpg";

const stories = [
    {
        category: "PLAYOFF RACE",
        title: "The Race for the Playoffs Is Heating Up",
        description: "Teams across both conferences are battling for important postseason positioning.",
        image: featuredStoryImage
    },
    {
        category: "TEAM SPOTLIGHT",
        title: "The League's Best Teams Are Ready",
        description: "The biggest NBA contenders are building momentum as the season reaches its most exciting stretch.",
        image: heroImage
    },
    {
        category: "NBA NEWS",
        title: "Every Game Can Change the Standings",
        description: "Follow the latest stories, scores, players, and teams with Full Court.",
        image: newsImage
    }
];

function StorySlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const showPreviousSlide = () => {
        setCurrentSlide((currentSlide + stories.length - 1) % stories.length);
    };

    const showNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % stories.length);
    };

    const story = stories[currentSlide];

    return (
        <section
            className="story-slideshow"
            style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.68), rgba(15, 23, 42, 0.68)), url(${story.image})`
            }}
        >
            <div className="story-slideshow-content">
                <p className="story-category">{story.category}</p>
                <h2>{story.title}</h2>
                <p>{story.description}</p>
                <Link className="story-button" to="/news">
                    Read NBA News
                </Link>
            </div>

            <div className="story-controls">
                <button type="button" onClick={showPreviousSlide} aria-label="Previous story">
                    ←
                </button>

                <p>
                    {currentSlide + 1} / {stories.length}
                </p>

                <button type="button" onClick={showNextSlide} aria-label="Next story">
                    →
                </button>
            </div>
        </section>
    );
}

export default StorySlideshow;