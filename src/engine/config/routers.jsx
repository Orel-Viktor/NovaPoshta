// Core
import React from 'react';
// Components
import { Main } from '../../ui/pages/Main';
import { AdmissionsList } from '../../ui/pages/AdmissionsList';

export const routes = {
   home: '/',
   admissionsList: '/admissionsList',
};

export const pages = [
   {
      path: routes.home,
      element: <Main />,
   },
   {
      path: routes.admissionsList,
      element: <AdmissionsList />,
   },
];
