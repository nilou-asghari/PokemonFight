import React from "react";
import styles from "./Navbar.module.css";

import Logo from "./Logo";
import RightNav from "./RightNav";

const Navbar = () => {
  return (
    <div className={`${styles.container}`}>
      <Logo />
      <RightNav />
    </div>
  );
};

export default Navbar;
