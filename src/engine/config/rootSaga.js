// Core
import { all, call } from 'redux-saga/effects';
import { trackingPackageWatcher } from '../core/tracking-package/saga/watchers';

export default function* rootSaga() {
   yield all([call(trackingPackageWatcher)]);
}
