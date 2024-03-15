import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { logout } from 'myredux/auth/operations';
import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userNav}>
      <p className={css.username}>{user.name}</p>
      <button onClick={handleLogout} className={css.logout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
