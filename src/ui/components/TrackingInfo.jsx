// Core
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';

function TrackingInfoInner(props) {
   const { data } = props;
   return (
      <>
         <Box>
            <Box
               sx={{
                  fontSize: '20px',
                  color: 'primary.main',
                  marginBottom: '5px',
               }}
            >
               {data ? (
                  <>
                     {' '}
                     <div>{data.Status}</div>
                  </>
               ) : (
                  <div>Некоректний номер накладної</div>
               )}
            </Box>
            <Box sx={{ fontSize: '15px' }}>
               {data.CounterpartySenderDescription ? (
                  <Box
                     sx={{
                        color: 'secondary.info',
                        padding: '10px',
                        boxShadow:
                           'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                     }}
                  >
                     <div>
                        Відправник :{data.CounterpartySenderDescription}{' '}
                     </div>
                     <div>Місто відправлення :{data.WarehouseSender}</div>
                     <div>Місто прибуття :{data.RecipientAddress}</div>
                  </Box>
               ) : (
                  <Box sx={{ color: 'secondary.main' }}>
                     Для подробиць введіть номер телефону отримувача
                  </Box>
               )}
            </Box>
         </Box>
      </>
   );
}

export function TrackingInfo() {
   const items = useSelector(selectorsTrackingPackage.items);
   const currentTrackingNumber = useSelector(
      selectorsTrackingPackage.trackingNumber
   );
   const currentItem = items.length
      ? items.find((data) => data.Number === currentTrackingNumber)
      : null;
   return (
      <>
         <Box component="h2">Інформація за ТТН</Box>
         {currentItem ? (
            <TrackingInfoInner data={currentItem}></TrackingInfoInner>
         ) : (
            <div>Статус Відправлення</div>
         )}
      </>
   );
}
