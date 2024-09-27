// Core
import React from 'react';
// Parts
import { Box } from '@mui/material';
import { TrackingForm } from '../components/_Forms/TrackingForm';
import { TrackingInfo } from '../components/TrackingInfo';
import { TrackingHistory } from '../components/TrackingHistory';

export function Main() {
   return (
      <Box component="div">
         <Box className="form-tracking-info">
            <TrackingForm />
            <TrackingInfo />
         </Box>
         <TrackingHistory />
      </Box>
   );
}
