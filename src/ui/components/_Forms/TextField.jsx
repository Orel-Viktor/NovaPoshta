// Core
import React from 'react';
// Parts
import TextFieldMui from '@mui/material/TextField';

export default function TextField(props) {
   const { id, label, type, variant, input, meta, placeholder } = props;
   return (
      <TextFieldMui
         InputProps={{
            sx: { borderRadius: '40px', overflow: 'hidden' },
            className: 'root mobile-input custom-input',
         }}
         placeholder={placeholder}
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
