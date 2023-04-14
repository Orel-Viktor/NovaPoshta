import { createSlice } from '@reduxjs/toolkit';

const findCityDeparts = createSlice({
   name: 'findCityDeparts',
   initialState: {
      city: [],
      numberDepart: [],
   },
   reducers: {
      findDepart: (state, action) => {
         state.city = [action.payload];
      },
   },
});
export const { findDepart } = findCityDeparts.actions;
export const findCityDepartsReducer = findCityDeparts.reduser;
