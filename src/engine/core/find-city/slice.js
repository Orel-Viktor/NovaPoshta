import { createSlice } from '@reduxjs/toolkit';

const findCityDeparts = createSlice({
   name: 'findCityDeparts',
   initialState: {
      cityDeparts: [],
      numberDepart: [],
      loading: false,
   },
   reducers: {
      findDepart: (state, action) => {
         state.cityDeparts = [action.payload.data];
      },
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
   },
});
export const { findDepart, setLoading } = findCityDeparts.actions;
export const findCityDepartsReducer = findCityDeparts.reducer;
