import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.icon}></div>
        <nav>
          <NavLink
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              background: isActive ? 'pink' : 'transparent',
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              background: isActive ? 'pink' : 'transparent',
            })}
          >
            Register
          </NavLink>
          <NavLink
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              background: isActive ? 'pink' : 'transparent',
            })}
            to="login"
          >
            Log In
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default Layout;
