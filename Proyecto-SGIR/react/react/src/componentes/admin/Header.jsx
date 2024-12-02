// src/components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <a href="/">
    <img src="../src/assets/logo.png" alt="Logo Empresa" className="logo" />
    </a>
    <h1 className="company-name">Caminantes por Colombia</h1>
  </header>
);

export default Header;
