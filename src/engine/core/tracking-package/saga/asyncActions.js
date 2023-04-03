// Core
import { createAction } from '@reduxjs/toolkit';

const asyncActions = Object.freeze({
   getDataTrackingPackageAsync: createAction('GET_DATA_TRACKING_PACKAGE_ASYNC'),
   checkTrackingItemAsync: createAction('CHECK_TRACKING_ITEM_ASYNC'),
   deleteTrackingItemAsync: createAction('DELETE_TRACKING_ITEM_ASYNC'),
});

export const {
   getDataTrackingPackageAsync,
   checkTrackingItemAsync,
   deleteTrackingItemAsync,
} = asyncActions;
