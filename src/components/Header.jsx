import React from "react";

function Header() {
  return (
    <nav id="header-flexbox">
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
