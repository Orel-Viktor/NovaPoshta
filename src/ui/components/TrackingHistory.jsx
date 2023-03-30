// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';
// // Parts
import { Box } from '@mui/material';

function TrackingHistoryInner(props) {
   const { data } = props;
   return (
      <>
         <Box sx={{ fontSize: '30px', color: 'primary.main' }}>
            {data ? data.Number : <div>Данные отсутсвуют</div>}
         </Box>
      </>
   );
}

export function TrackingHistory() {
   const items = useSelector(selectorsTrackingPackage.items);
   const dataItems = items.map((elem) => elem.data).map((elem) => elem[0]);
   console.log(dataItems);
   console.log(items);

   return (
      <>
         <Box component="h2">Текущие накладные</Box>
         {dataItems.length ? (
            dataItems.map((data, id) => {
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
