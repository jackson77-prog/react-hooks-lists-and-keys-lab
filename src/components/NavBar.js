// NavBar.js
import React from 'react';

function NavBar() {
  // Array of strings representing each link
  const links = ["home", "about", "projects"];

  return (
    <div className="navbar">
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>{link}</a>
      ))}
    </div>
  );
}

export default NavBar;
