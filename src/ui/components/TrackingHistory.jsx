// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';
import { checkTrackingItemAsync } from '../../engine/core/tracking-package/saga/asyncActions';
// // Parts
import { Box } from '@mui/material';

function TrackingHistoryInner(props) {
   const { data, onClick } = props;
   return (
      <>
         <Box
            onClick={onClick}
            sx={{ fontSize: '30px', color: 'primary.main' }}
         >
            {data ? data.Number : <div>Данные отсутсвуют</div>}
         </Box>
      </>
   );
}

export function TrackingHistory() {
   const dispatch = useDispatch();
   const checkItem = (clickedTrackingNumber) => {
      console.log(clickedTrackingNumber);
      dispatch(checkTrackingItemAsync(clickedTrackingNumber));
   };

   const items = useSelector(selectorsTrackingPackage.items);
   const dataItems = items.map((elem) => elem.data).map((elem) => elem[0]);
   console.log(dataItems);
   return (
      <>
         <Box component="h2">Текущие накладные</Box>
         {dataItems.length ? (
            dataItems.reverse().map((data, id) => {
               return (
                  <>
                     {dataItems[0] ? (
                        <TrackingHistoryInner
                           onClick={() => checkItem(data.Number)}
                           key={id}
                           data={data}
                        ></TrackingHistoryInner>
                     ) : (
                        <div key={id}>некоректный номер</div>
                     )}
                  </>
               );
            })
         ) : (
            <div>History</div>
         )}
      </>
   );
}
