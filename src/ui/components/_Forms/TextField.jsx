// Core
import React from 'react';
// Parts
import TextFieldMui from '@mui/material/TextField';

export default function TextField(props) {
   const { id, label, type, variant, input, meta } = props;
   console.log('meta', meta);
   return (
      <TextFieldMui
         {...input}
         error={Boolean(meta.error && meta.touched)}
         id={id}
         label={label}
         type={type}
         variant={variant}
         helperText={meta.error && meta.touched ? meta.error : null}
      />
   );
}
