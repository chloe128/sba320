// src/components/Watchlist.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchlist } from "../features/movies/moviesSlice";

function Watchlist() {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.movies.watchlist);

  return (
    <div>
      <h2>Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        watchlist.map((movie) => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <button onClick={() => dispatch(removeFromWatchlist(movie.imdbID))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlist;
