import React from "react";

function Header() {
  return (
    <nav id="header">
      <div class="logo-box">
        <h3 class="logo">Blahg</h3>
      </div>
      <div class="header-btn-box">
        <a class="nav-link" href="index.ejs">
          Home
        </a>
        <a class="nav-link" href="/about.html">
          About
        </a>
        <a class="nav-link" href="/contact.html">
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Header;
