// Core
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';
// Components
import { Layout } from './Layout';
// Parts
import { history } from '../../engine/config/store';
// Engine
import { pages } from '../../engine/config/routers';

function App() {
   return (
      <HistoryRouter history={history}>
         <Routes>
            <Route path="/" element={<Layout />}>
               {pages.map((route) => (
                  <Route
                     key={route.path}
                     path={route.path}
                     element={route.element}
                  />
               ))}
            </Route>
         </Routes>
      </HistoryRouter>
   );
}

export default App;
