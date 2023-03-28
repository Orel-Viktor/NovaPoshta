// Core
import React from 'react';
// Parts
import { Box } from '@mui/material';
import { TrakingForm } from '../components/_Forms/TrakingForm';
import { TrackingInfo } from '../components/TrackingInfo';
import { TrackingHistory } from '../components/TrackingHistory';

export function Main() {
   return (
      <Box component="div">
         <TrakingForm />
         <TrackingInfo />
         <TrackingHistory />
      </Box>
   );
}
