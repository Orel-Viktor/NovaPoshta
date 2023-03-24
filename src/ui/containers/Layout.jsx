// Engine
import { store } from '../../engine/config/store';
// Core
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
// Parts
import { Header } from '../components/Header';

const theme = createTheme({
   palette: {
      primary: {
         main: '#00e676',
      },
      secondary: {
         main: '#009688',
      },
      custom: {
         main: '#ff3d00',
      },
   },
});

export function Layout() {
   return (
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <Header />
            <Container>
               <Outlet />
            </Container>
         </ThemeProvider>
      </Provider>
   );
}
