import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/orders">DB for PERFECT SKIN</Link></li>
        <li><Link to="/orders">Order Management</Link></li>
        <li><Link to="/delivery">Delivery Tracking</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
