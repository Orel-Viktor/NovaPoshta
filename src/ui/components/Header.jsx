// Core
import React, { useState } from 'react';
// Parts
import Stack from '@mui/material/Stack';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
// Engine
import { routes } from '../../engine/config/routers';

export function Header() {
   const [activeLink, setActiveLink] = useState(null);

   const handleClick = (link) => {
      setActiveLink(link);
   };
   return (
      <Stack spacing={2} direction="row">
         <Link
            onClick={() => {
               handleClick('link1');
            }}
            className={
               activeLink === 'link1' ? 'header-link active ' : 'header-link'
            }
            to={routes.home}
         >
            Знайти посилку
         </Link>
         <Link
            onClick={() => handleClick('link2')}
            className={
               activeLink === 'link2' ? 'header-link active ' : 'header-link'
            }
            to={routes.admissionsList}
         >
            Знайти відділення
         </Link>
      </Stack>
   );
}
