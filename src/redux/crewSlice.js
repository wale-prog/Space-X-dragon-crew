import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCrewDetail = createAsyncThunk(
  'Crew/getCrewDetail',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v4/crew');
    const responseData = await response.data;
    return responseData;
  },
);

const initialState = [];
const crewSlice = createSlice({
  name: 'Crew',
  initialState,
  reducers: {},
  extraReducers: {
    [getCrewDetail.fulfilled]: ((state, action) => [...state, ...action.payload]),
  },
});

export default crewSlice.reducer;
export const crewActions = crewSlice.actions;
