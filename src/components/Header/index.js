import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.Header}>
      <div>logo home button</div>
      <button>Log Out</button>
    </nav>
  );
}

export default Header;
