// Core
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Engine
import { store } from '../../engine/config/store';
import { Provider } from 'react-redux';
import { pages } from '../../engine/config/routers';

// Components
import { Layout } from './Layout';

function App() {
   return (
      <Provider store={store}>
         <BrowserRouter>
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
         </BrowserRouter>
      </Provider>
   );
}

export default App;
