// Core
import React from 'react';
import { Form, Field } from 'react-final-form';
// Parts
import { Grid, Box } from '@mui/material';
// Components
import { Button } from '../Button';
import TextField from './TextField';

export function CityDeparts() {
   const onSubmit = (values) => {
      console.log(values);
   };
   return (
      <Box component="div">
         <Form
            onSubmit={onSubmit}
            render={(formProps) => {
               const { handleSubmit } = formProps;
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
                           <Button type="submit" xs={4}>
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
