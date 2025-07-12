import { useEffect, useState } from "react";
import back_arrow from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjc3NmU5MDg4NmQ3M2RmZDM1NWFiMDc2MGVhMDYwNCIsIm5iZiI6MTc1MTk4MDQyOS41OTYsInN1YiI6IjY4NmQxOThkNjJlNzhjOWU2YzlhNGEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B7dhm4skbl1CWPcEA1EXoEfaGfZBrArBtQ5dVgMIkYQ",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        src={back_arrow}
        onClick={() => navigate(-2)}
        alt="Go back"
        className="absolute top-5 left-5 w-[50px] cursor-pointer"
      />
      <iframe
        height="80%"
        width="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        allowFullScreen
        frameBorder="0"
        className="rounded-[10px]"
      ></iframe>
      <div className="flex items-center justify-between w-9/10">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
