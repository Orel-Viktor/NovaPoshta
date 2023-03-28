// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';
// Parts
import { Box } from '@mui/material';

function TrackingInfoInner(props) {
   const { data } = props;
   return (
      <>
         <Box sx={{ fontSize: '30px', color: 'primary.main' }}>
            {data.Status}
         </Box>
      </>
   );
}

export function TrackingInfo() {
   const trackingItems = useSelector(selectorsTrackingPackage.items);
   const trackingItemsData = trackingItems.data;
   return (
      <>
         <Box component="h1">INFO</Box>
         {typeof trackingItemsData !== 'undefined' ? (
            trackingItemsData.map((data, id) => {
               return (
                  <TrackingInfoInner key={id} data={data}></TrackingInfoInner>
               );
            })
         ) : (
            <div>Статус Посылки</div>
         )}
      </>
   );
}
