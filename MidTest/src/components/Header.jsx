// Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">Anonime</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/list">List anime</a>
            </li>
          </ul>
          <form className="d-flex ms-3">
            <input
              className="form-control me-2 bg-secondary text-light"
              type="search"
              placeholder="Search anime or movie"
              aria-label="Search"
              style={{ borderRadius: '20px' }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
