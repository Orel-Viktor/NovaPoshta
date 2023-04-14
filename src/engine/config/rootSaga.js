// Core
import { all, call } from 'redux-saga/effects';
import { trackingPackageWatcher } from '../core/tracking-package/saga/watchers';
import { findDepartsWatcher } from '../core/find-city/saga/wathcers';

export default function* rootSaga() {
   yield all([call(trackingPackageWatcher), call(findDepartsWatcher)]);
}
