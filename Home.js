// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>TV Shows</h1>
      <Link to="/shows">Browse Shows</Link>
    </div>
  );
};

export default Home;
