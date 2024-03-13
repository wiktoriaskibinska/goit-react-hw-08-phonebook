import React from 'react';
import css from './Home.module.css';
const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to Phonebook
        <br />
        You can either sign in or register
      </h1>
    </div>
  );
};
export default Home;
