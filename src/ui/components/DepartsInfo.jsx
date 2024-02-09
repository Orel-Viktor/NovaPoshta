// Core
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectorsFindCityDeparts } from '../../engine/core/find-city/selectors';
// Components
import { LoaderLinear } from './Helpers/Loader';

function DepartsInfoInner(props) {
   const { data } = props;
   console.log(data);
   return data.length ? (
      <tbody>
         {data.map((elem, id) => {
            return (
               <tr key={elem + id}>
                  <td>{elem.Number}</td>
                  <td>{elem.ShortAddressRu}</td>
                  <td>До {elem.PlaceMaxWeightAllowed}кг</td>
               </tr>
            );
         })}
      </tbody>
   ) : (
      <Box sx={{ fontSize: '15px', color: 'secondary.main' }}>
         Відділеня не знайдено
      </Box>
   );
}

function MobileDepartsInfoInner(props) {
   const { data } = props;
   return data.length ? (
      <div className="departs-city__mobile">
         {data.map((elem, id) => {
            return (
               <div className="departs-city__mobile-element" key={elem + id}>
                  <div>Відділення:{elem.Number}</div>
                  <div>{elem.ShortAddressRu}</div>
                  <div>(До {elem.PlaceMaxWeightAllowed}кг)</div>
               </div>
            );
         })}
      </div>
   ) : (
      <Box sx={{ fontSize: '15px', color: 'secondary.main' }}>
         Відділеня не знайдено
      </Box>
   );
}

export function DepartsInfo() {
   const items = useSelector(selectorsFindCityDeparts.items);
   const loading = useSelector(selectorsFindCityDeparts.loading);
   return loading ? (
      <LoaderLinear />
   ) : (
      <Box component="div" className="departs-city">
         {items.length ? (
            <div className="departs-city__table-div">
               <table>
                  <thead>
                     <tr>
                        <th>Відділення</th>
                        <th>Адреса</th>
                        <th>Вантажніть</th>
                     </tr>
                  </thead>
                  {items.length
                     ? items.map((data, id) => {
                          return (
                             <DepartsInfoInner
                                key={data.Description + id}
                                data={data}
                             />
                          );
                       })
                     : null}
               </table>
            </div>
         ) : (
            <Box component="h3">Відділення</Box>
         )}
         {items.length
            ? items.map((data, id) => {
                 return (
                    <MobileDepartsInfoInner
                       key={data.Number + id}
                       data={data}
                    />
                 );
              })
            : null}
      </Box>
   );
}
