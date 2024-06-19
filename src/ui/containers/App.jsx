// Core
import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
// Components
import { Layout } from './Layout';
// Engine
import { pages } from '../../engine/config/routers';
import { store } from '../../engine/config/store';
import { Provider } from 'react-redux';

function App() {
   return (
      <Provider store={store}>
         <HashRouter>
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
         </HashRouter>
      </Provider>
   );
}

export default App;
