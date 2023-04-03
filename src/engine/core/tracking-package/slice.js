import { createSlice } from '@reduxjs/toolkit';

const trackingPackage = createSlice({
   name: 'trackingPackage',
   initialState: {
      items: JSON.parse(localStorage.getItem('data')) || [],
      loading: true,
      trackingNumber: localStorage.getItem('trackingNumber') || [],
   },
   reducers: {
      addItem: (state, action) => {
         const item = action.payload;
         if (item.data.length === 0) {
            alert(item.errors.join());
            return;
         }
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
      checkItem: (state, action) => {
         state.trackingNumber = action.payload;
         localStorage.setItem(
            'trackingNumber',
            JSON.stringify(state.trackingNumber)
         );
      },
      deleteItem: (state, action) => {
         state.items = [...state.items, action.payload];
         localStorage.setItem('data', JSON.stringify(state.items));
      },
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
   },
});

export const { checkItem, setLoading, addItem, addTrackingNumber, deleteItem } =
   trackingPackage.actions;
export const trackingPackageReducer = trackingPackage.reducer;
