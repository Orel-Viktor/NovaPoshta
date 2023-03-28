// Core
import { takeEvery } from 'redux-saga/effects';
// Engine
import { getDataTrackingPackageAsync } from './asyncActions';
import { callTrackingPackageWorker } from './worker/callTrackingPackageWorker';

export function* trackingPackageWatcher() {
   yield takeEvery(getDataTrackingPackageAsync.type, callTrackingPackageWorker);
}
