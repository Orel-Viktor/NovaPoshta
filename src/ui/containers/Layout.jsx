// Engine
import { store } from '../../engine/config/store';
// Core
import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

// Parts
import { Header } from '../components/Header';
import { orange } from '@mui/material/colors';
import Box from '@mui/material/Box';
// Scrolling
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

const theme = createTheme({
   palette: {
      primary: {
         main: '#00e676',
      },
      secondary: {
         main: '#e65100',
         info: '#08bb11',
      },
      custom: {
         main: orange,
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
function ScrollTop(props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
   });

   const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
         '#back-to-top-anchor'
      );

      if (anchor) {
         anchor.scrollIntoView({
            block: 'center',
         });
      }
   };

   return (
      <Fade in={trigger}>
         <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
         >
            {children}
         </Box>
      </Fade>
   );
}

export function Layout() {
   return (
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <Container className="root custom-container">
               <React.Fragment>
                  <CssBaseline />
                  <HideOnScroll>
                     <AppBar className="custom-gradient">
                        <Toolbar sx={{ margin: '0 auto' }}>
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
            <ScrollTop>
               <Fab size="small" aria-label="scroll back to top">
                  <KeyboardArrowUpIcon />
               </Fab>
            </ScrollTop>
         </ThemeProvider>
      </Provider>
   );
}
