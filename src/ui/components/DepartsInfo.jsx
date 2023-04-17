// Core
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectorsFindCityDeparts } from '../../engine/core/find-city/selectors';
// Components
import { LoaderLinear } from './_Helpers/Loader';

function DepartsInfoInner(props) {
   const { data } = props;
   return data.length ? (
      <Box component="div" sx={{ fontSize: '30px', color: 'primary.main' }}>
         <Box component="div">
            Місто :{data.map((elem) => elem.CityDescription).slice(0, 1)}
         </Box>
         {data.map((elem, id) => {
            return (
               <Box
                  sx={{ fontSize: '15px', color: 'secondary.info' }}
                  component="div"
                  key={elem + id}
               >
                  <Box
                     sx={{
                        boxShadow:
                           'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                     }}
                  >
                     {elem.Description}
                  </Box>
               </Box>
            );
         })}
      </Box>
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
      <Box component="div">
         <Box component="h2">Відділеня</Box>
         {items.length ? (
            items.map((data, id) => {
               return (
                  <DepartsInfoInner key={data.Description + id} data={data} />
               );
            })
         ) : (
            <div>Список відділень</div>
         )}
      </Box>
   );
}
