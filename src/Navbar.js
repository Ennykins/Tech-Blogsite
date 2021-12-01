import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Tech Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
