import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <ul className="nav">
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </div>
);

export default Navigation;
