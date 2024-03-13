import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from 'pages/Layout/Layout.jsx';
import { fetchContacts } from 'myredux/operations';
import axios from 'axios';
axios.defaults.baseURL = `https://65ea1b39c9bf92ae3d3b1792.mockapi.io/`;

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
