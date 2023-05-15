import { createSlice } from '@reduxjs/toolkit';

const trackingPackage = createSlice({
   name: 'trackingPackage',
   initialState: {
      items: JSON.parse(localStorage.getItem('data')) || [],
      loading: false,
      trackingNumber: JSON.parse(localStorage.getItem('trackingNumber')) || [],
   },
   reducers: {
      addItems: (state, action) => {
         let nextItems = [...state.items];
         const item = action.payload;
         const itemData = item.data[0];
         if (item.data.length === 0) {
            alert(item.errors.join());
            return;
         }
         if (itemData.StatusCode === '3') {
            alert(itemData.Status);
            return;
         }
         nextItems = nextItems.filter((elem) => {
            return elem.Number !== state.trackingNumber;
         });

         state.items = [...item.data, ...nextItems];
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
         const deleteNumber = action.payload;
         state.items = state.items.filter(
            (elem) => elem.Number !== deleteNumber
         );
         localStorage.setItem('data', JSON.stringify(state.items));
      },
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
   },
});

export const {
   checkItem,
   addItems,
   addTrackingNumber,
   deleteItem,
   setLoading,
} = trackingPackage.actions;
export const trackingPackageReducer = trackingPackage.reducer;
