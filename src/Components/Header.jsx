import React from "react";
import { Logo } from "./Logo";

function Header({ title }) {
  return (
    <div style={{ display: "flex" }}>
      <Logo />
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
