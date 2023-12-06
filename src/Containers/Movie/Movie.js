import { useParams } from "react-router-dom";

const Movie = () => {
  const params = useParams();
  console.log(params.toto);

  return <div>Movie Page , appel d' api avec id {params.toto}</div>;
};
export default Movie;
