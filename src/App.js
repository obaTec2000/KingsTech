import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=2c86c485";

const movie = {
  Title: "Amazing Kingstech Syndrome",
  Year: "2012",
  imdbID: "2c86c485",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <dev className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value ={searchTerm}
          onchange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} /> 
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </dev>
  );
};
export default App;
