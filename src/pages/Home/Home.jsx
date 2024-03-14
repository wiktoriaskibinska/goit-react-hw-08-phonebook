import React from 'react';
import css from './Home.module.css';
import { useAuth } from 'hooks/useAuth';

const Home = () => {
  const { isLoggedIn, user } = useAuth();
  console.log(user);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        {!isLoggedIn ? (
          <p>
            Welcome to Phonebook
            <br /> You can either sign in or register!
          </p>
        ) : (
          <p>Hello, {user.name}</p>
        )}
      </h1>
    </div>
  );
};
export default Home;
