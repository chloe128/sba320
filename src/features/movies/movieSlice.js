// src/features/movies/moviesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  movies: [],
  watchlist: [],
  status: "idle",
  error: null,
};

// Fetch movies from OMDb API
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (query) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`
    );
    return response.data.Search;
  }
);

// Create movies slice
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state.watchlist.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToWatchlist, removeFromWatchlist } = moviesSlice.actions;

export default moviesSlice.reducer;
