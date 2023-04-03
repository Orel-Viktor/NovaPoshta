// Core
import { takeEvery } from 'redux-saga/effects';
// Engine
import {
   getDataTrackingPackageAsync,
   checkTrackingItemAsync,
   deleteTrackingItemAsync,
} from './asyncActions';
import { callTrackingPackageWorker } from './worker/callTrackingPackageWorker';
import { callTrackingItemWorker } from './worker/callTrackingItemWorker';
import { callTrackingDeleteItemWorker } from './worker/callTrackingDeleteItemWorker';

export function* trackingPackageWatcher() {
   yield takeEvery(getDataTrackingPackageAsync.type, callTrackingPackageWorker);
   yield takeEvery(checkTrackingItemAsync.type, callTrackingItemWorker);
   yield takeEvery(deleteTrackingItemAsync.type, callTrackingDeleteItemWorker);
}
