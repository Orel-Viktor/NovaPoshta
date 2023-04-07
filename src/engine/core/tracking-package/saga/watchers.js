// Core
import { takeEvery } from 'redux-saga/effects';
// Engine
import {
   getDataTrackingPackageAsync,
   checkTrackingItemAsync,
   deleteTrackingItemAsync,
} from './asyncActions';
import { callTrackingPackageWorker } from './worker/callTrackingPackageWorker';
import { callTrackingCheckItemWorker } from './worker/callTrackingCheckItemWorker';
import { callTrackingDeleteItemWorker } from './worker/callTrackingDeleteItemWorker';

export function* trackingPackageWatcher() {
   yield takeEvery(getDataTrackingPackageAsync.type, callTrackingPackageWorker);
   yield takeEvery(checkTrackingItemAsync.type, callTrackingCheckItemWorker);
   yield takeEvery(deleteTrackingItemAsync.type, callTrackingDeleteItemWorker);
}
