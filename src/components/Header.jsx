import React from "react";

function Header() {
  return (
    <nav id="header-flexbox">
      <h3 class="logo">Blahg</h3>
      <a class="nav-link" href="index.ejs">
        Home
      </a>
      <a class="nav-link" href="/about.html">
        About
      </a>
      <a class="nav-link" href="/contact.html">
        Contact Us
      </a>
    </nav>
  );
}

export default Header;
