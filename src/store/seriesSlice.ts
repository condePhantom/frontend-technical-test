import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Program } from '../types/types';
import { getSeries } from '../services/api';

interface SeriesState {
  series: Program[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  seriesPerPage: number;
}

const initialState: SeriesState = {
  series: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  seriesPerPage: 20,
};

export const fetchSeries = createAsyncThunk('series/fetchSeries', async () => {
  const data = await getSeries();
  return data;
});

const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSeriesPerPage(state, action: PayloadAction<number>) {
      state.seriesPerPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.series = action.payload;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { setCurrentPage, setSeriesPerPage} = seriesSlice.actions;
export default seriesSlice.reducer;