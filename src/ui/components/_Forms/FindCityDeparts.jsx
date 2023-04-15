// Core
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectorsFindCityDeparts } from '../../../engine/core/find-city/selectors';
// Parts
import { Grid, Box } from '@mui/material';
// Components
import { Button } from '../Button';
import TextField from './TextField';
// Engine
import { getDataDepartsAsync } from '../../../engine/core/find-city/saga/asyncActions';

export function FindCityDeparts() {
   const loading = useSelector(selectorsFindCityDeparts.loading);
   const dispatch = useDispatch();
   const onSubmit = (values) => {
      dispatch(getDataDepartsAsync(values));
   };
   const onValidate = (value) => {
      const errors = {};
      if (value.city === undefined) {
         errors.city = 'Введите значние';
         return errors;
      }
   };

   return (
      <Box component="div">
         <Form
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
                              name="city"
                              label="city"
                              component={TextField}
                           />
                        </Grid>
                        <Grid item={true} xs={4}>
                           <Field
                              name="numberDeparts"
                              label="numberDeparts"
                              component={TextField}
                           />
                        </Grid>
                        <Grid item={true} xs={3}>
                           <Button
                              type="submit"
                              xs={4}
                              disabled={!valid || loading}
                           >
                              Send
                           </Button>
                        </Grid>
                     </Grid>
                  </Box>
               );
            }}
         />
      </Box>
   );
}
