// Core
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';

// Engine
import { store, history } from '../../engine/config/store';
import { Provider } from 'react-redux';
import { pages } from '../../engine/config/routers';

// Components
import { Layout } from './Layout';

function App() {
   return (
      <Provider store={store}>
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
      </Provider>
   );
}

export default App;
