// src/App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import MovieSearch from "./components/MovieSearch";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Movie Night Planner</h1>
        <MovieSearch />
        <Watchlist />
      </div>
    </Provider>
  );
}

export default App;
