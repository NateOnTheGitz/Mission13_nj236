import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <Link className="navbar-brand" to="/podcast">
        Podcast
      </Link>
      <Link className="navbar-brand" to="/list">
        Movie List
      </Link>
    </nav>
  );
}

export default Navbar;
