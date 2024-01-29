// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';
import {
   checkTrackingItemAsync,
   deleteTrackingItemAsync,
} from '../../engine/core/tracking-package/saga/asyncActions';
// // Parts
import { Box } from '@mui/material';

// Components
import { Button } from './Button';
import IconDelete from './_Icons/IconDelete.jsx';

function DelButton(props) {
   const { onClick } = props;
   return (
      <Button onClick={onClick}>
         <IconDelete />
      </Button>
   );
}

function TrackingHistoryInner(props) {
   const { data, onClick } = props;
   const dispatch = useDispatch();

   const deleteItem = (clickedTrackingNumber) => {
      dispatch(deleteTrackingItemAsync(clickedTrackingNumber));
   };
   return (
      <Box
         component="tr"
         onClick={onClick}
         sx={{
            cursor: 'pointer',
            fontSize: '30px',

            marginRight: '10px',
         }}
      >
         {data ? (
            <>
               <td>{data.Number}</td>
               <td>Віпправник</td>
               <td>Статус</td>
               <td>
                  <DelButton onClick={() => deleteItem(data.Number)} />
               </td>
            </>
         ) : null}
      </Box>
   );
}

export function TrackingHistory() {
   const dispatch = useDispatch();
   const items = useSelector(selectorsTrackingPackage.items);

   const checkItem = (clickedTrackingNumber) => {
      dispatch(checkTrackingItemAsync(clickedTrackingNumber));
   };

   return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
         <Box className="root text-gradient" component="h2">
            Історія пошуку
         </Box>
         <table>
            <thead>
               <tr>
                  <th>TTH</th>
                  <th>Віпправник</th>
                  <th>Статус</th>
               </tr>
            </thead>

            {items.length
               ? items.map((data, id) => {
                    return (
                       <tbody key={data.Number + id}>
                          <TrackingHistoryInner
                             onClick={() =>
                                checkItem([
                                   data.Number,
                                   data.PhoneRecipient || data.PhoneSender,
                                ])
                             }
                             data={data}
                          />
                       </tbody>
                    );
                 })
               : //
                 null}
         </table>
      </Box>
   );
}
