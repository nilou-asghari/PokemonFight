import styles from "./Logo.module.css";
import React from "react";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className={`${styles.logo}`} src="/logo.svg" alt="pokemon logo" />
      </Link>
    </div>
  );
};

export default Logo;
