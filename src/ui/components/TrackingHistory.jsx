// Core
import React, { useState } from 'react';
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
import IconDelete from '../../../public/icons/IconDelete';

function DelButton(props) {
   const { onClick } = props;
   return (
      <Button
         className="tracking-history__mobile-button root"
         onClick={onClick}
      >
         <IconDelete />
         <img
            className="tracking-history__mobile-delete-icon root"
            src="./icons/deleteMobileIcon.png"
            alt="видалити  ТТН"
         />
      </Button>
   );
}
function handleCellClick(event) {
   event.stopPropagation();
}
const handleCellKeyPress = (event) => {
   event.key === 'Enter' || event.key === ' ';
};

function TrackingHistoryInner(props) {
   const { data, onClick } = props;
   const dispatch = useDispatch();

   const deleteItem = (clickedTrackingNumber) => {
      dispatch(deleteTrackingItemAsync(clickedTrackingNumber));
   };
   return (
      <Box
         className="tracking-history__tr"
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
               <td>
                  {data.CounterpartySenderDescription ||
                     data.CounterpartyRecipientDescription}
               </td>
               <td>{data.Status}</td>
               <td
                  onClick={handleCellClick}
                  onKeyDown={handleCellKeyPress}
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                  role="button"
               >
                  <DelButton onClick={() => deleteItem(data.Number)} />
               </td>
            </>
         ) : null}
      </Box>
   );
}

function MobileTrackingHistoryInner(props) {
   const [notification, setNotification] = useState(null);
   const { data, onClick } = props;
   const dispatch = useDispatch();
   const deleteItem = (clickedTrackingNumber) => {
      dispatch(deleteTrackingItemAsync(clickedTrackingNumber));
   };
   function coppyNumber(number) {
      navigator.clipboard.writeText(number).then(function () {
         showNotification('Номер Скопійовано');
      });
   }
   function showNotification(message) {
      setNotification(message);
      // let notification = document.querySelector('.notification');
      // notification.innerText = message;
      // notification.style.display = 'block';
      setTimeout(function () {
         setNotification(null);
      }, 2000);
   }
   return (
      <Box
         className="tracking-history__mobile"
         component="div"
         onClick={onClick}
         sx={{
            cursor: 'pointer',
         }}
      >
         {data ? (
            <div className="tracking-history__mobile-inner">
               <div className="tracking-history__mobile-number-delete">
                  <div>
                     {notification ? (
                        <div className="notification">{notification}</div>
                     ) : null}
                     {data.Number}
                     <img
                        onKeyDown={handleCellKeyPress}
                        tabIndex={0}
                        onClick={() => coppyNumber(data.Number)}
                        className="tracking-history__mobile-coppy-image"
                        src="./icons/coppyNumberImage.png"
                        alt="копіювати ТТН"
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                        role="button"
                     />
                  </div>
                  <div
                     onClick={handleCellClick}
                     onKeyDown={handleCellKeyPress}
                     tabIndex={0}
                     role="button"
                  >
                     <DelButton onClick={() => deleteItem(data.Number)} />
                  </div>
               </div>
               {data.CounterpartySenderDescription ||
               data.CounterpartyRecipientDescription ? (
                  <div className="tracking-history__mobile-sender">
                     <div>Віпправник</div>
                     <div>
                        {data.CounterpartySenderDescription ||
                           data.CounterpartyRecipientDescription}
                     </div>
                  </div>
               ) : null}

               <div className="tracking-history__mobile-status">
                  <div>Статус</div>
                  <div>{data.Status}</div>
               </div>
            </div>
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
      <Box className="tracking-history">
         <Box component="h2">Історія пошуку</Box>
         {items.length ? (
            <div className="tracking-history__table-div">
               <table>
                  <thead>
                     <tr>
                        <th>TTH</th>
                        <th>Віпправник</th>
                        <th>Статус</th>
                        <th></th>
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
                                         data.PhoneRecipient ||
                                            data.PhoneSender,
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
            </div>
         ) : null}

         {items.length
            ? items.map((data, id) => {
                 return (
                    <MobileTrackingHistoryInner
                       key={data.Number + id}
                       onClick={() =>
                          checkItem([
                             data.Number,
                             data.PhoneRecipient || data.PhoneSender,
                          ])
                       }
                       data={data}
                    />
                 );
              })
            : null}
      </Box>
   );
}
