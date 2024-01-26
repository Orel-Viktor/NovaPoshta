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
         <TrackingForm />
         <Box
            className="root tracking-mobile "
            sx={{ display: 'flex', justifyContent: 'space-between' }}
         >
            <TrackingInfo />
            <TrackingHistory />
         </Box>
      </Box>
   );
}
