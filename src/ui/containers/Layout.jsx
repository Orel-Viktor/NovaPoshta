// Core
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
// Parts
import { Header } from '../components/Header';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const theme = createTheme({
   palette: {
      primary: {
         main: '#9043ff',
      },
      secondary: {
         main: '#e65100',
         info: '#EC1F2B',
         status: '#90EE90',
      },
   },
});

function HideOnScroll(props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
   });
   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   );
}

HideOnScroll.propTypes = {
   children: PropTypes.element.isRequired,
   window: PropTypes.func,
};

export function Layout() {
   return (
      <ThemeProvider theme={theme}>
         <Container className="root custom-container">
            <React.Fragment>
               <CssBaseline />
               <HideOnScroll>
                  <AppBar className="header-appbar root">
                     <Toolbar
                        className="header-toolbar root"
                        sx={{ margin: '0 auto' }}
                     >
                        <Typography variant="h6" component="div">
                           <Header />
                        </Typography>
                     </Toolbar>
                  </AppBar>
               </HideOnScroll>
               <Toolbar id="back-to-top-anchor" />
            </React.Fragment>
            <Outlet />
         </Container>
         {/* <ScrollTop>
               <Fab size="small" aria-label="scroll back to top">
                  <KeyboardArrowUpIcon />
               </Fab>
            </ScrollTop> */}
      </ThemeProvider>
   );
}
