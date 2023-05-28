// Core
import React from 'react';
// Parts
import ButtonMUI from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function Button(props) {
   const { type, disabled, children, to, variant, className, sx, onClick } =
      props;

   return (
      <ButtonMUI
         className={className}
         sx={sx}
         disabled={disabled}
         type={type}
         variant={variant}
         onClick={onClick}
      >
         {to ? <Link to={to}>{children}</Link> : children}
      </ButtonMUI>
   );
}

Button.defaultProps = {
   variant: 'contained',
};
