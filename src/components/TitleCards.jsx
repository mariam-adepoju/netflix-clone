import { useState } from "react";
// import cards_data from "../assets/cards/Cards_data";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
const TitleCards = ({ title, category, className }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={`mt-10 mb-0 md:mt-12.5 md:mb-7.5 ${className}`}>
      <h2 className="text-[15px] sm:text-[20px] md:text-2xl font-semibold mb-1">
        {title ? title : "Popular on Netflix"}
      </h2>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mt-2.5"
      >
        {apiData.map((card, index) => (
          <SwiperSlide className="flex-shrink-0 relative" key={index}>
            <Link to={`/player/${card.id}`}>
              <img
                src={
                  card.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                    : "https://via.placeholder.com/150"
                }
                alt={card.original_title}
                className="w-full rounded-sm cursor-pointer"
              />
              <p className="absolute bottom-2.5 right-2.5 text-[10px] sm:text-[12px] md:text-base ">
                {card.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TitleCards;
