import React from "react";
import { Logo } from "./Logo";

function Header() {
  return (
    <div style={{ display: "flex" }}>
      <Logo />
      <h1>Header Component</h1>
    </div>
  );
}

export default Header;
