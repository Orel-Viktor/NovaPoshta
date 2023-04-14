import { createSlice } from '@reduxjs/toolkit';

const findCityDeparts = createSlice({
   name: 'findCityDeparts',
   initialState: {
      cityDeparts: [],
      numberDepart: [],
   },
   reducers: {
      findDepart: (state, action) => {
         state.cityDeparts = [action.payload.data];
      },
   },
});
export const { findDepart } = findCityDeparts.actions;
export const findCityDepartsReducer = findCityDeparts.reducer;
