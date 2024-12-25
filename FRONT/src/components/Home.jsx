import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main page of the application. Feel free to explore!</p>

      <Link to="/register"> Register</Link>
      <Link to="/login"> Login</Link>
      <Link to="/listUsers"> List Users</Link>
    </div>
  );
};

export default Home;
