// Core
import { put } from 'redux-saga/effects';
// import { useSelector } from 'react-redux';
// import { selectorsTrackingPackage } from '../../selectors';
// Parts
import { deleteItem } from '../../slice';
// Engine

export function* callTrackingDeleteItemWorker(action) {
   const { payload } = action;
   //    const data = useSelector(selectorsTrackingPackage.items).filter(
   //       (elem) => elem.Number !== payload
   //    );

   console.log(payload);
   yield put(deleteItem(payload));
}
