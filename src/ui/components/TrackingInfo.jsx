// Core
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';
// Components
import { LoaderLinear } from './Helpers/Loader';

function TrackingInfoInner(props) {
   const { data } = props;
   return (
      <>
         <Box className="tracking-info__details">
            <Box>
               {data ? (
                  <>
                     {' '}
                     <Box sx={{ color: 'secondary.status' }}>{data.Status}</Box>
                  </>
               ) : (
                  <div>Некоректний номер накладної</div>
               )}
            </Box>
            <Box>
               {data.PhoneRecipient || data.PhoneSender ? (
                  <Box>
                     <div>
                        <Box>Відправник :</Box>
                        {data.CounterpartySenderDescription ||
                           data.CounterpartyRecipientDescription}
                     </div>
                     <div>
                        <Box>Отримувач :</Box>
                        {data.RecipientFullName
                           ? data.RecipientFullName
                           : data.RecipientFullNameEW}{' '}
                     </div>
                     <div>
                        <Box>Місто відправлення :</Box>
                        {data.SenderAddress ||
                           'м.' +
                              ' ' +
                              data.CitySender +
                              ',' +
                              ' ' +
                              data.WarehouseSender}
                     </div>
                     <div>
                        {' '}
                        <Box>Місто прибуття :</Box> {data.RecipientAddress}
                     </div>
                  </Box>
               ) : (
                  <Box
                     className="tracking-info__advice"
                     sx={{ color: 'secondary.info' }}
                  >
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
   return (
      <Box className="tracking-info">
         {loading ? (
            <LoaderLinear />
         ) : (
            <>
               <Box component="h2">Деталі про відправлення:</Box>
               {currentItem ? (
                  <TrackingInfoInner data={currentItem} />
               ) : (
                  <Box
                     className="tracking-info__advice"
                     sx={{ color: 'secondary.info' }}
                  >
                     Введіть пошукові данні
                  </Box>
               )}
            </>
         )}
      </Box>
   );
}
