// Core
import React from 'react';
import { Form, Field } from 'react-final-form';
// Parts
import { Grid, Box } from '@mui/material';
// Components
import TextField from './TextField';
import { Button } from '../Button';
import { api } from '../../../engine/config/axios';

export function TrakingForm() {
   const onValidate = (value) => {
      const errors = {};
      const regExpDigit = /^\d+$/;
      if (value.tracking === undefined) {
         errors.tracking = 'Введите значние';
      } else if (!regExpDigit.test(value.tracking)) {
         errors.tracking = 'допускаются только числа';
      } else if (value.tracking.length < 16) {
         errors.tracking = 'вы ввели меньше 16 цифр';
      } else if (value.tracking.length > 16) {
         errors.tracking = 'вы ввели больше 16 цифр';
      }
      return errors;
   };
   const onSubmit = (values, form) => {
      console.log(values);
      form.reset();
   };
   return (
      <div>
         <Form
            validate={onValidate}
            onSubmit={onSubmit}
            render={(formProps) => {
               const { handleSubmit, valid } = formProps;
               return (
                  <Box component="form" onSubmit={handleSubmit}>
                     <Grid container>
                        <Grid item={true} xs={8}>
                           <Field
                              name="tracking"
                              label="traking"
                              component={TextField}
                           />
                        </Grid>
                        <Grid item={true} xs={4}>
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
const response = api.getInfo();
console.log(response);
