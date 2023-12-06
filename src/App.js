import "./App.css";
import Home from "./Containers/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Containers/Movie/Movie";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:toto" element={<Movie />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="/movie/:movieId" element={<Movie/>} /> */
}
