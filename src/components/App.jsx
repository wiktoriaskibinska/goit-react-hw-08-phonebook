import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import Layout from 'pages/Layout/Layout.jsx';
import Contacts from 'pages/Contacts/Contacts';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import { useEffect } from 'react';
import { refreshUser } from 'myredux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
const Home = lazy(() => import('pages/Home/Home.jsx'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<PrivateRoute Component={<Login />} redirecTo="/contacts" />}
        />
        <Route
          path="register"
          element={
            <PrivateRoute Component={<Register />} redirecTo="/contacts" />
          }
        />

        <Route
          path="contacts"
          element={
            <ProtectedRoute Component={<Contacts />} redirecTo="/login" />
          }
        />
      </Route>
    </Routes>
  ) : (
    <Loader />
  );
};
