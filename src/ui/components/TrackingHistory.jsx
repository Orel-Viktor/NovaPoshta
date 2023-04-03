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

const Wrapper = styled(Box)({
   display: 'flex',
   padding: '8px',
   justifyContent: 'space-between',
   alignItems: 'center,',
});

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
            sx={{ fontSize: '30px', color: 'primary.main' }}
         >
            {data ? data.Number : <div>Данные отсутсвуют</div>}
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
      console.log(clickedTrackingNumber);
      dispatch(deleteTrackingItemAsync(clickedTrackingNumber));
   };

   return (
      <>
         <Box component="h2">Текущие накладные</Box>
         {items.length ? (
            items.map((data, id) => {
               return (
                  <div key={data.Number + id}>
                     <TrackingHistoryInner
                        onClick={() => checkItem(data.Number)}
                        data={data}
                     />
                     <DelButton onClick={() => deleteItem(data.Number)} />
                  </div>
               );
            })
         ) : (
            <div>History</div>
         )}
      </>
   );
}
