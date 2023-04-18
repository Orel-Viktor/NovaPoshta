// Core
import { put } from 'redux-saga/effects';
// Parts
import { deleteItem } from '../../slice';

// Engine

export function* callTrackingDeleteItemWorker(action) {
   const deleteNumber = action.payload;
   yield put(deleteItem(deleteNumber));
}
