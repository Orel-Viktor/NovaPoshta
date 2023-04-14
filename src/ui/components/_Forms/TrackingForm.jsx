// Core
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectorsTrackingPackage } from '../../../engine/core/tracking-package/selectors';
// Parts
import { Grid, Box } from '@mui/material';

// Components
import TextField from './TextField';
import { Button } from '../Button';
// Engine
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
         errors.tracking = 'допускаются только числа';
      } else if (value.tracking.length < 14) {
         errors.tracking = 'вы ввели меньше 14 цифр';
      } else if (value.tracking.length > 14) {
         errors.tracking = 'вы ввели больше 14 цифр';
      }
      return errors;
   };
   const onSubmit = (values) => {
      dispatch(getDataTrackingPackageAsync(values));
   };
   return (
      <div>
         <Form
            initialValues={{
               tracking: currentTrackingNumber,
            }}
            validate={onValidate}
            onSubmit={onSubmit}
            render={(formProps) => {
               const { handleSubmit, valid } = formProps;
               return (
                  <Box component="form" onSubmit={handleSubmit}>
                     <Grid
                        spacing={2}
                        sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                        }}
                        container
                     >
                        <Grid item={true} xs={5}>
                           <Field
                              name="tracking"
                              label="traking"
                              component={TextField}
                           />
                        </Grid>
                        <Grid item={true} xs={4}>
                           <Field
                              placeholder="380962700019"
                              name="phone"
                              label="phone"
                              component={TextField}
                           />
                        </Grid>
                        <Grid item={true} xs={3}>
                           <Button type="submit" xs={4} disabled={!valid}>
                              Send
                           </Button>
                        </Grid>
                     </Grid>
                  </Box>
               );
            }}
         />
      </div>
   );
}
