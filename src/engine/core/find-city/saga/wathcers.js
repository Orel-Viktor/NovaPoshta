// Core
import { takeEvery } from 'redux-saga/effects';
// Engine
import { getDataDepartsAsync } from './asyncActions';
import { callDepartsWorker } from './worker/callDepartsWorker';

export function* findDepartsWatcher() {
   yield takeEvery(getDataDepartsAsync.type, callDepartsWorker);
}
