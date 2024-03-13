import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from 'pages/Home/Home.jsx';
import Layout from 'pages/Layout/Layout.jsx';
import { fetchContacts } from 'myredux/operations';
import axios from 'axios';
axios.defaults.baseURL = `https://65ea1b39c9bf92ae3d3b1792.mockapi.io/`;

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
