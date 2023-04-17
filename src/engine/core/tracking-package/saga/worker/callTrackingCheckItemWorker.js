// Core
import { put } from 'redux-saga/effects';
// Parts
import { checkItem } from '../../slice';
// Engine

export function* callTrackingCheckItemWorker(action) {
   const { payload } = action;
   yield put(checkItem(payload));
}
