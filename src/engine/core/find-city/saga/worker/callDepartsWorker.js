// Core
import { call, put } from 'redux-saga/effects';
// Parts
import { findDepart } from '../../slice';
// Engine
import { api } from '../../../../config/axios';

export function* callDepartsWorker(action) {
   const { payload } = action;
   const response = yield call(
      api.getInfoDeparts,
      payload.city,
      payload.numberDeparts
   );

   const data = response.data;
   yield put(findDepart(data));
}
