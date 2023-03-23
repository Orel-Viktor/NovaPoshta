// Core
import React from 'react';
// Parts
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button } from './Button';
import { styled } from '@mui/system';
// Engine
import { routes } from '../../engine/config/routers';

const Wrapper = styled(Box)({
   display: 'flex',
   padding: '24px',
   justifyContent: 'space-between',
   alignItems: 'center,',
});

export function Header() {
   return (
      <Wrapper component="header">
         <Box
            component="div"
            sx={{ marginRight: '20px', color: 'custom.main' }}
         >
            API NovaPoshta
         </Box>
         <Stack spacing={2} direction="row">
            <Button to={routes.home}>Traking</Button>
            <Button to={routes.admissionsList}>AdmissionsList</Button>
         </Stack>
      </Wrapper>
   );
}
