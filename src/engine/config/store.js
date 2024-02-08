// Core
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// Engine

import { trackingPackageReducer } from '../core/tracking-package/slice';
import { findCityDepartsReducer } from '../core/find-city/slice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
   reducer: {
      trackingPackage: trackingPackageReducer,
      findCityDeparts: findCityDepartsReducer,
   },
   middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
