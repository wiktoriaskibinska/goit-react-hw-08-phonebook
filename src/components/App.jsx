import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import Layout from 'pages/Layout/Layout.jsx';
import Contacts from 'pages/Contacts/Contacts';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
const Home = lazy(() => import('pages/Home/Home.jsx'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
export const App = () => {
  return (
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
  );
};
