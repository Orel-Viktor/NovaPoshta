// Core
import React from 'react';
// Parts
import { Box } from '@mui/material';
import { TrakingForm } from '../components/_Forms/TrakingForm';

export function Main() {
   return (
      <Box component="div">
         <TrakingForm />
         <Box
            component="div"
            sx={{ fontSize: '40px', lineHeight: 1, margin: 8 }}
         >
            Информация о посылке
         </Box>
         <Box
            component="div"
            sx={{ fontSize: '40px', lineHeight: 1, margin: 8 }}
         >
            история ТТН
         </Box>
      </Box>
   );
}
