// src/components/MovieSearch.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, addToWatchlist } from "../features/movies/moviesSlice";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);

  const handleSearch = () => {
    dispatch(fetchMovies(query));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>

      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <div>
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <button onClick={() => dispatch(addToWatchlist(movie))}>
                Add to Watchlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
