import React from 'react';
import '@/components/header/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Me</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;
