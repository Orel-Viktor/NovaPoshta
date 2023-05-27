// Core
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';
// Components
import { LoaderLinear } from './_Helpers/Loader';

function TrackingInfoInner(props) {
   const { data } = props;
   return (
      <>
         <Box className=" tracking-inner tracking">
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
               {data.PhoneRecipient || data.PhoneSender ? (
                  <Box
                     sx={{
                        color: 'secondary.info',
                        padding: '10px',
                        boxShadow:
                           'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                     }}
                  >
                     <div>
                        <Box className="text-gradient">Відправник :</Box>
                        {data.CounterpartySenderDescription ||
                           data.CounterpartyRecipientDescription}
                     </div>
                     <div>
                        <Box className="text-gradient">Отримувач :</Box>
                        {data.RecipientFullName
                           ? data.RecipientFullName
                           : data.RecipientFullNameEW}{' '}
                     </div>
                     <div>
                        <Box className="text-gradient">
                           Місто відправлення :
                        </Box>
                        {data.SenderAddress || data.WarehouseSender}
                     </div>
                     <div>
                        {' '}
                        <Box className="text-gradient">
                           Місто прибуття :
                        </Box>{' '}
                        {data.RecipientAddress}
                     </div>
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
   const loading = useSelector(selectorsTrackingPackage.loading);
   const currentItem = items.length
      ? items.find((data) => data.Number === currentTrackingNumber)
      : null;
   return loading ? (
      <LoaderLinear />
   ) : (
      <Box>
         <Box className="root text-gradient" component="h2">
            Інформація за ТТН
         </Box>
         {currentItem ? (
            <TrackingInfoInner data={currentItem}></TrackingInfoInner>
         ) : (
            <div>Статус Відправлення</div>
         )}
      </Box>
   );
}
