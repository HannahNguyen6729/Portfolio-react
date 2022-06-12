import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <div>
      {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-dark bg-info">
  {/* Container wrapper */}
  <div className="container-fluid px-5">
    {/* Toggle button */}
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" >
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      {/* Navbar brand */}
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        Hannah Nguyen
      </a>
      {/* Left links */}
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
   
  </div>
  {/* Container wrapper */}
</nav>
{/* Navbar */}

    </div>
  )
}
