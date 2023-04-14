// Core
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectorsFindCityDeparts } from '../../engine/core/find-city/selectors';

function DepartsInfoInner(props) {
   const { data } = props;
   console.log(data);
   return data.length ? (
      <Box component="div" sx={{ fontSize: '30px', color: 'primary.main' }}>
         <Box component="div">
            Отделения города :
            {data.map((elem) => elem.CityDescription).slice(0, 1)}
         </Box>
         {data.map((elem, id) => {
            return (
               <Box
                  sx={{ fontSize: '15px', color: 'secondary.info' }}
                  component="div"
                  key={elem + id}
               >
                  <Box>{elem.Description}</Box>
               </Box>
            );
         })}
      </Box>
   ) : (
      <Box sx={{ fontSize: '15px', color: 'secondary.main' }}>
         Отделения с таким номером в этом городе нет
      </Box>
   );
}

export function DepartsInfo() {
   const items = useSelector(selectorsFindCityDeparts.items);
   console.log(items);
   return (
      <Box component="div">
         <Box component="h2">Отделения</Box>
         {items.length ? (
            items.map((data, id) => {
               return (
                  <DepartsInfoInner key={data.Description + id} data={data} />
               );
            })
         ) : (
            <div>Список отделений</div>
         )}
      </Box>
   );
}
