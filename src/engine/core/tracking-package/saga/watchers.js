// Core
import { takeEvery } from 'redux-saga/effects';
// Engine
import {
   getDataTrackingPackageAsync,
   checkTrackingItemAsync,
} from './asyncActions';
import { callTrackingPackageWorker } from './worker/callTrackingPackageWorker';
import { callTrackingItemWorker } from './worker/callTrackingItemWorker';

export function* trackingPackageWatcher() {
   yield takeEvery(getDataTrackingPackageAsync.type, callTrackingPackageWorker);
   yield takeEvery(checkTrackingItemAsync.type, callTrackingItemWorker);
}
