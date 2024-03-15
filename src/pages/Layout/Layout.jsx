import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';
const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <header className={css.header}>
        <div className={css.icon}></div>
        <nav className={css.navigation}>
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

          {!isLoggedIn ? (
            <>
              <NavLink
                className={css.navLink}
                style={({ isActive }) => ({
                  color: isActive ? 'white' : 'black',
                  background: isActive ? 'pink' : 'transparent',
                })}
                to="register"
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
            </>
          ) : (
            <>
              <NavLink
                className={css.navLink}
                style={({ isActive }) => ({
                  color: isActive ? 'white' : 'black',
                  background: isActive ? 'pink' : 'transparent',
                })}
                to="contacts"
              >
                Contacts
              </NavLink>
              <UserMenu />
            </>
          )}
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
