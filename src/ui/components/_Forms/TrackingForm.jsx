// Core
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectorsTrackingPackage } from '../../../engine/core/tracking-package/selectors';
// Parts
import { Box } from '@mui/material';

// Components
import TextField from './TextField';
import { Button } from '../Button';

import { getDataTrackingPackageAsync } from '../../../engine/core/tracking-package/saga/asyncActions';

export function TrackingForm() {
   const dispatch = useDispatch();
   const currentTrackingNumber = useSelector(
      selectorsTrackingPackage.trackingNumber
   );

   const onValidate = (value) => {
      const errors = {};
      const regExpDigit = /^\d+$/;
      if (value.tracking === undefined) {
         errors.tracking = 'Введите значние';
      } else if (!regExpDigit.test(value.tracking)) {
         errors.tracking =
            'допускаются только числа,возможно в поле есть пробелы';
      } else if (value.tracking.length < 14) {
         errors.tracking = 'вы ввели меньше 14 цифр';
      } else if (value.tracking.length > 14) {
         errors.tracking = 'вы ввели больше 14 цифр';
      }
      return errors;
   };
   const onSubmit = (values, formApi) => {
      const { reset } = formApi;
      dispatch(getDataTrackingPackageAsync(values));
      reset();
   };
   return (
      <Form
         initialValues={{
            tracking: currentTrackingNumber,
         }}
         validate={onValidate}
         onSubmit={onSubmit}
         render={(formProps) => {
            const { handleSubmit, valid } = formProps;
            return (
               <Box
                  component="form"
                  onSubmit={handleSubmit}
                  className=" form-tracking "
               >
                  <Box component="h2">Введіть данні для пошуку посилки:</Box>
                  <Box className="box">
                     <Field
                        name="tracking"
                        label="Номер ТТН"
                        component={TextField}
                     />
                  </Box>
                  <Box className="box">
                     <Field
                        placeholder="380962700019"
                        name="phone"
                        label="Телефон"
                        component={TextField}
                        // variant="standard"
                     />
                  </Box>
                  <Box>
                     <Button
                        className={
                           !valid
                              ? '  custom-button-shadow root button-shadow'
                              : null
                        }
                        type="submit"
                        xs={4}
                        disabled={!valid}
                     >
                        Пошук
                     </Button>
                  </Box>
               </Box>
            );
         }}
      />
   );
}
