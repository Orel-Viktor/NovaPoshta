import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function LoaderLinear() {
   return (
      <Box sx={{ width: '50%' }}>
         <LinearProgress />
      </Box>
   );
}
