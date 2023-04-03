// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorsTrackingPackage } from '../../engine/core/tracking-package/selectors';
import { checkTrackingItemAsync } from '../../engine/core/tracking-package/saga/asyncActions';
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

   const dataItems = items.map((elem) => elem.data).map((elem) => elem[0]);
   console.log('curentData', items);

   const checkItem = (clickedTrackingNumber) => {
      dispatch(checkTrackingItemAsync(clickedTrackingNumber));
   };

   const deleteItem = (clickedTrackingNumber) => {
      const dataItems = items
         .map((elem) => elem.data)
         .map((elem) => elem[0])
         .filter((elem) => elem.Number !== clickedTrackingNumber);
      console.log('newData', dataItems);
      // dispatch(deleteTrackingItemAsync(dataItems));
   };

   return (
      <>
         <Box component="h2">Текущие накладные</Box>
         {dataItems.length ? (
            dataItems.reverse().map((data, id) => {
               return (
                  <>
                     {dataItems[0] ? (
                        <>
                           <TrackingHistoryInner
                              onClick={() => checkItem(data.Number)}
                              key={id}
                              data={data}
                           />
                           <DelButton onClick={() => deleteItem(data.Number)} />
                        </>
                     ) : (
                        <div key={id}>некоректный номер</div>
                     )}
                  </>
               );
            })
         ) : (
            <div>History</div>
         )}
      </>
   );
}
