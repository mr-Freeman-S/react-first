import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
        <img src="https://uc.agronews.com/sitelogomain/i/1579001627_21339116715e1da71b0ff535.71571325.png" alt='logo' />
      </header>
    );
}

export default Header;