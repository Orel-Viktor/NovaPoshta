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
   padding: '20px',
   justifyContent: 'space-between',
   alignItems: 'center,',
});

export function Header() {
   return (
      <Wrapper className="mobile-header" component="header">
         <Stack spacing={2} direction="row">
            <Button to={routes.home}>Знайти посилку</Button>
            <Button to={routes.admissionsList}>Знайти відділення</Button>
         </Stack>
      </Wrapper>
   );
}
