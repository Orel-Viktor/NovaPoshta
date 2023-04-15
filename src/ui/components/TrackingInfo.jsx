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
            <Box sx={{ fontSize: '20px', color: 'primary.main' }}>
               {data ? (
                  <>
                     {' '}
                     <div>{data.Status}</div>
                  </>
               ) : (
                  <div>Некоректный номер накладной</div>
               )}
            </Box>
            <Box sx={{ fontSize: '15px' }}>
               {data.CounterpartySenderDescription ? (
                  <Box sx={{ color: 'secondary.info' }}>
                     <div>
                        Отправитель :{data.CounterpartySenderDescription}{' '}
                     </div>
                     <div>Место отправки :{data.WarehouseSender}</div>
                     <div>Место прибытия :{data.RecipientAddress}</div>
                  </Box>
               ) : (
                  <Box sx={{ color: 'secondary.main' }}>
                     Для подробностей введите номер телефона получателя
                  </Box>
               )}
            </Box>
         </Box>
      </>
   );
}

export function TrackingInfo() {
   const items = useSelector(selectorsTrackingPackage.items);
   console.log(items);
   const currentTrackingNumber = useSelector(
      selectorsTrackingPackage.trackingNumber
   );
   const currentItem = items.length
      ? items.find((data) => data.Number === currentTrackingNumber)
      : null;
   return (
      <>
         <Box component="h2">INFO</Box>
         {currentItem ? (
            <TrackingInfoInner data={currentItem}></TrackingInfoInner>
         ) : (
            <div>Статус Посылки</div>
         )}
      </>
   );
}
