import React from "react";
import { FcGlobe } from "react-icons/fc";
export default function NavBar() {
  return (
    <nav>
      <FcGlobe className="globe" />
      <a className="navbar-brand" href="/">
        Travel Journal
      </a>
    </nav>
  );
}
