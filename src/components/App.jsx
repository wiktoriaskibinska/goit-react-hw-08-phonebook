import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from 'pages/Layout/Layout.jsx';
import Contacts from 'pages/Contacts/Contacts';
import { fetchContacts } from 'myredux/operations';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
axios.defaults.baseURL = `https://65ea1b39c9bf92ae3d3b1792.mockapi.io/`;

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
export const App = () => {
  const dispatch = useDispatch();

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
