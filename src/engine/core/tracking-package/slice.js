import { createSlice } from '@reduxjs/toolkit';

const trackingPackage = createSlice({
   name: 'trackingPackage',
   initialState: {
      items: JSON.parse(localStorage.getItem('data')) || [],
      loading: true,
      trackingNumber: JSON.parse(localStorage.getItem('trackingNumber')) || [],
   },
   reducers: {
      addItem: (state, action) => {
         state.items = [...state.items, action.payload];
         localStorage.setItem('data', JSON.stringify(state.items));
      },
      addTrackingNumber: (state, action) => {
         state.trackingNumber = action.payload;
         localStorage.setItem(
            'trackingNumber',
            JSON.stringify(state.trackingNumber)
         );
      },
      setItems: (state, action) => {
         state.items = action.payload;
      },
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
   },
});

export const { setItems, setLoading, addItem, addTrackingNumber } =
   trackingPackage.actions;
export const trackingPackageReducer = trackingPackage.reducer;
