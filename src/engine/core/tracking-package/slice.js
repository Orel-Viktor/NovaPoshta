import { createSlice } from '@reduxjs/toolkit';

const trackingPackage = createSlice({
   name: 'trackingPackage',
   initialState: {
      items: JSON.parse(localStorage.getItem('data')) || [],
      loading: true,
   },
   reducers: {
      addItem: (state, action) => {
         state.items = [...state.items, action.payload];
         localStorage.setItem('data', JSON.stringify(state.items));
      },
      setItems: (state, action) => {
         state.items = action.payload;
      },
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
   },
});

export const { setItems, setLoading, addItem } = trackingPackage.actions;
export const trackingPackageReducer = trackingPackage.reducer;
