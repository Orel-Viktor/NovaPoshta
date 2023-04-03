// Core
import { put } from 'redux-saga/effects';

// import { useSelector } from 'react-redux';
// import { selectorsTrackingPackage } from '../../selectors';
// Parts
import { deleteItem } from '../../slice';

// Engine

export function* callTrackingDeleteItemWorker(action) {
   const deleteNumber = action.payload;
   yield put(deleteItem(deleteNumber));
}
