import { createSlice } from '@reduxjs/toolkit';

const trackingPackage = createSlice({
   name: 'trackingPackage',
   initialState: {
      items: [],
      loading: true,
   },
   reducers: {
      setItems: (state, action) => {
         state.items = action.payload;
      },
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
   },
});

export const { setItems, setLoading } = trackingPackage.actions;
export const trackingPackageReducer = trackingPackage.reducer;
