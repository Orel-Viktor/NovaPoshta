// Core
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';

function TrackingInfoInner(props) {
   const { data } = props;
   return (
      <>
         <Box sx={{ fontSize: '30px', color: 'primary.main' }}>
            {data ? data.Status : <div>Некоректный номер накладной</div>}
         </Box>
      </>
   );
}

export function TrackingInfo() {
   const items = useSelector(selectorsTrackingPackage.items);
   const currentTrackingNumber = useSelector(
      selectorsTrackingPackage.trackingNumber
   );
   const dataItems = items.map((elem) => elem.data).map((elem) => elem[0]);
   console.log(dataItems);
   const selectedItem = dataItems.length
      ? dataItems.find((data) => data.Number === currentTrackingNumber)
      : null;
   return (
      <>
         <Box component="h2">INFO</Box>
         {selectedItem ? (
            <TrackingInfoInner data={selectedItem}></TrackingInfoInner>
         ) : (
            <div>Статус Посылки</div>
         )}
      </>
   );
}
