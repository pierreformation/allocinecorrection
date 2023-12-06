import MovieCard from "../../Components/MovieCard/MovieCard";

const Home = () => {
  const movies = [
    {
      name: "batman",
      id: "adsf024",
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Batman_%28black_background%29.jpg/640px-Batman_%28black_background%29.jpg",
    },
    {
      name: "harry potter 3",
      id: "adsf022",
      imgurl: "https://m.media-amazon.com/images/I/71DmBF2SE3L.jpg",
    },
  ];

  return (
    <div>
      Home4
      {movies.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};
export default Home;
