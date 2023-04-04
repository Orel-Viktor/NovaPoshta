import { createSlice } from '@reduxjs/toolkit';

const trackingPackage = createSlice({
   name: 'trackingPackage',
   initialState: {
      items: JSON.parse(localStorage.getItem('data')) || [],
      loading: true,
      trackingNumber: localStorage.getItem('trackingNumber') || [],
      // deleteNumber: localStorage.getItem('deleteNumber') || [],
   },
   reducers: {
      addItems: (state, action) => {
         console.log([...state.items]);
         const item = action.payload;
         console.log(item);
         if (item.data.length === 0) {
            alert(item.errors.join());
            return;
         }
         state.items = [...item.data, ...state.items];
         localStorage.setItem('data', JSON.stringify(state.items));
         console.log('addItem');
      },
      addTrackingNumber: (state, action) => {
         state.trackingNumber = action.payload;
         localStorage.setItem(
            'trackingNumber',
            JSON.stringify(state.trackingNumber)
         );
      },
      checkItem: (state, action) => {
         console.log('checkitem');
         state.trackingNumber = action.payload;
         localStorage.setItem(
            'trackingNumber',
            JSON.stringify(state.trackingNumber)
         );
      },
      deleteItem: (state, action) => {
         console.log('deleteNumber', action.payload);
         const deleteNumber = action.payload;
         state.items = state.items.filter(
            (elem) => elem.Number !== deleteNumber
         );
         localStorage.setItem('data', JSON.stringify(state.items));
      },
   },
});

export const { checkItem, addItems, addTrackingNumber, deleteItem } =
   trackingPackage.actions;
export const trackingPackageReducer = trackingPackage.reducer;
