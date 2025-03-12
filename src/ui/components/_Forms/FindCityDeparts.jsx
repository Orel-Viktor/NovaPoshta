// Core
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectorsFindCityDeparts } from '../../../engine/core/find-city/selectors';
// Parts
import { Box } from '@mui/material';
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
         errors.city = 'Введіть значення';
         return errors;
      }
   };

   return (
      <Box sx={{ margin: '100px 0px 40px 0' }} component="div">
         <Form
            validate={onValidate}
            onSubmit={onSubmit}
            render={(formProps) => {
               const { handleSubmit, valid } = formProps;
               return (
                  <Box
                     component="form"
                     onSubmit={handleSubmit}
                     className="form-tracking"
                  >
                     <Box component="h2">
                        Введіть данні для пошуку відділеня:
                     </Box>
                     <Box className="box">
                        <Field
                           name="city"
                           label="Місто"
                           component={TextField}
                        />
                     </Box>
                     <Box className="box">
                        <Field
                           name="numberDeparts"
                           label="Відділеня"
                           component={TextField}
                        />
                     </Box>
                     <Box>
                        <Button
                           type="submit"
                           xs={4}
                           disabled={!valid || loading}
                        >
                           Send
                        </Button>
                     </Box>
                  </Box>
               );
            }}
         />
      </Box>
   );
}
