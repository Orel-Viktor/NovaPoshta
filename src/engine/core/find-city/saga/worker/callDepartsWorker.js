// Core
import { call, put } from 'redux-saga/effects';
// Parts
import { findDepart, setLoading } from '../../slice';
// Engine
import { api } from '../../../../config/axios';
import { store } from '../../../../config/store';

export function* callDepartsWorker(action) {
   console.log('setLoading');
   yield put(setLoading(true));

   const { payload } = action;
   const response = yield call(
      api.getInfoDeparts,
      payload.city,
      payload.numberDeparts
   );

   const data = response.data;
   yield put(findDepart(data));
   yield put(setLoading(false));
   console.log(store.getState());
}

// 20450690193860     380976980750
// 20450690077413      380660830324
