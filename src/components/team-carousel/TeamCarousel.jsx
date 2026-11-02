import "./TeamCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const featuredTeams = [
    {
        name: "Boston Celtics",
        city: "Boston, Massachusetts",
        logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg"
    },
    {
        name: "New York Knicks",
        city: "New York, New York",
        logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg"
    },
    {
        name: "Oklahoma City Thunder",
        city: "Oklahoma City, Oklahoma",
        logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg"
    },
    {
        name: "Los Angeles Lakers",
        city: "Los Angeles, California",
        logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg"
    },
    {
        name: "Golden State Warriors",
        city: "San Francisco, California",
        logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg"
    }
];

function TeamCarousel() {
    return (
        <section className="team-carousel-section">
            <p>FEATURED TEAMS</p>
            <h2>League Favorites</h2>

            <Swiper
                className="team-swiper"
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    600: {
                        slidesPerView: 2
                    },
                    950: {
                        slidesPerView: 3
                    }
                }}
            >
                {featuredTeams.map((team) => (
                    <SwiperSlide key={team.name}>
                        <article className="carousel-team-card">
                            <img src={team.logo} alt={`${team.name} logo`} />
                            <h3>{team.name}</h3>
                            <span>{team.city}</span>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default TeamCarousel;