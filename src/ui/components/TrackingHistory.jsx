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
import { styled } from '@mui/system';
// Components
import { Button } from './Button';
import IconDelete from './_Icons/IconDelete.jsx';

const Wrapper = styled(Box)({});

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
   return (
      <Wrapper>
         <Box
            onClick={onClick}
            sx={{
               fontSize: '30px',
               color: 'primary.main',
               marginRight: '10px',
            }}
         >
            {data ? data.Number : <div>Дані відсутні</div>}
         </Box>
      </Wrapper>
   );
}

export function TrackingHistory() {
   const dispatch = useDispatch();
   const items = useSelector(selectorsTrackingPackage.items);

   const checkItem = (clickedTrackingNumber) => {
      dispatch(checkTrackingItemAsync(clickedTrackingNumber));
   };
   const deleteItem = (clickedTrackingNumber) => {
      dispatch(deleteTrackingItemAsync(clickedTrackingNumber));
   };
   return (
      <>
         <Box component="h2">Поточні ТТН</Box>
         {items.length ? (
            items.map((data, id) => {
               return (
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '10px',
                     }}
                     key={data.Number + id}
                  >
                     <TrackingHistoryInner
                        onClick={() => checkItem(data.Number)}
                        data={data}
                     />
                     <DelButton onClick={() => deleteItem(data.Number)} />
                  </Box>
               );
            })
         ) : (
            <div>History</div>
         )}
      </>
   );
}
