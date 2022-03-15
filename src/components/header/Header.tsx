import React from 'react';
import s from  './Header.module.css';


export const Header = () => {
  return (
      <header className={s.header}>
          <img className={s.logo}
               src="https://toppng.com/uploads/preview/coffee-logo-png-file-1152606554110umdspn7i.png"
               alt="logo"/>
      </header>
  )
}