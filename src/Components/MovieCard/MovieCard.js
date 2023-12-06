import "./moviecard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const myId = props.movie.id;
  return (
    <Link to={`/movie/${myId}`}>
      <div className="movieCardContainer">
        {props.movie.name}
        <img src={props.movie.imgurl} />
      </div>
    </Link>
  );
};
export default MovieCard;
