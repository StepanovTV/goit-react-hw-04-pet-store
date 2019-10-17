import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import logo from '../../img/loogo60_186.png';

const Navigation = () => {
  return (
    <div className="container">
      <nav className={css.nav}>
        <a href="/" title="logo" className={css.navlogo}>
          <img src={logo} alt="logo" className="" />
        </a>
        <ul className={css.navlist}>
          <li className={css.navItem}>
            <NavLink
              to="/"
              exact
              className={css.link}
              activeClassName={css.active}
            >
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/about"
              className={css.link}
              activeClassName={css.active}
            >
              About
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/pets"
              className={css.link}
              activeClassName={css.active}
            >
              Pets
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
