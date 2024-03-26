import React from "react";
import styles from "./RightNav.module.css";

import { Link } from "react-router-dom";

const RightNav = () => {
  return (
    <nav className={styles.rightNav}>
      <Link className={styles.AnchorTag} to="/">
        Home
      </Link>
    </nav>
  );
};

export default RightNav;
