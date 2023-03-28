// Core
import { createAction } from '@reduxjs/toolkit';

const asyncActions = Object.freeze({
   getDataTrackingPackageAsync: createAction('GET_DATA_TRACKING_PACKAGE_ASYNC'),
});

export const { getDataTrackingPackageAsync } = asyncActions;
