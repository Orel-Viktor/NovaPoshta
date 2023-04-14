// Core
import { createAction } from '@reduxjs/toolkit';

const asyncActions = Object.freeze({
   getDataDepartsAsync: createAction('GET_DATA_DEPARTS_ASYNC'),
});

export const { getDataDepartsAsync } = asyncActions;
