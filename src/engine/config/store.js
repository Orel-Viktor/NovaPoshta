// Core
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// Engine
// import { createBrowserHistory } from 'history';
// import { createReduxHistoryContext } from 'redux-first-history';
import { trackingPackageReducer } from '../core/tracking-package/slice';
import { findCityDepartsReducer } from '../core/find-city/slice';
import rootSaga from './rootSaga';

// const { createReduxHistory, routerMiddleware, routerReducer } =
//    createReduxHistoryContext({
//       history: createBrowserHistory(),
//    });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
   reducer: {
      trackingPackage: trackingPackageReducer,
      findCityDeparts: findCityDepartsReducer,
      // router: routerReducer,
   },
   middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// export const history = createReduxHistory(store);
