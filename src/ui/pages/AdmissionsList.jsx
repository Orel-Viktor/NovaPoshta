// Core
import React from 'react';
// Components
import { FindCityDeparts } from '../components/_Forms/FindCityDeparts';
import { DepartsInfo } from '../components/DepartsInfo';
// Parts
import { Box } from '@mui/material';

export function AdmissionsList() {
   return (
      <Box component="div">
         <FindCityDeparts />
         <DepartsInfo />
      </Box>
   );
}
