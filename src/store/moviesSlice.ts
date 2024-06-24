import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { getMovies } from '../services/api';
import { Program } from '../types/types';

interface MoviesState {
  movies: Program[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  moviesPerPage: number;
}

const initialState: MoviesState = {
  movies: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  moviesPerPage: 20
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const data = await getMovies();
  return data;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>){
      state.currentPage = action.payload
    },
    setMoviesPerPage(state, action:PayloadAction<number>) {
      state.moviesPerPage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status= 'loading'
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { setCurrentPage, setMoviesPerPage } = moviesSlice.actions;
export default moviesSlice.reducer;