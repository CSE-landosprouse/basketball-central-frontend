import "./NewsCard.css";
import { Link } from "react-router-dom";

function NewsCard({ category, title, description, featured }) {
    return (
        <article className={`news-card ${featured ? "featured-news-card" : ""}`}>
            <p className="news-category">{category}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to="/news-detail">Read More</Link>
        </article>
    );
}

export default NewsCard;