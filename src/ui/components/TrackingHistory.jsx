// Core
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';
// Parts
import { Box } from '@mui/material';

function TrackingHistoryInner(props) {
   const { data } = props;
   const trackingNumbers = [];

   useEffect(() => {
      trackingNumbers.push(data.Number);
   }, []);
   console.log(trackingNumbers);
   //    localStorage.setItem('trackingNumber', [JSON.stringify(data.Number)]);
   return (
      <>
         <Box sx={{ fontSize: '30px', color: 'primary.main' }}>
            {data.Number}
         </Box>
      </>
   );
}

export function TrackingHistory() {
   const trackingItems = useSelector(selectorsTrackingPackage.items);
   const trackingItemsData = trackingItems.data;
   return (
      <>
         <Box component="h2">Текущие накладные</Box>
         {typeof trackingItemsData !== 'undefined' ? (
            trackingItemsData.map((data, id) => {
               return (
                  <TrackingHistoryInner
                     key={id}
                     data={data}
                  ></TrackingHistoryInner>
               );
            })
         ) : (
            <div>History</div>
         )}
      </>
   );
}
