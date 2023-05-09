import React from 'react';
import s from '/Navbar.module.css';

const Navbar = () => {
    return (
      <nav className="nav">
        <div className={s.item}>
          <div>
            <a href="/profile">Profile</a>
          </div>
          <div className={`${s.item} ${s.item}`}>
            <a href="/dialogs">Dialogs</a>
          </div>
          <div className={s.item}>
            <a>News</a>
          </div>
          <div className={s.item}>
            <a>Music</a>
          </div>
          <div className={s.item}> 
            <a>Settings</a>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;