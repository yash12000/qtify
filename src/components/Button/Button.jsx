import React from "react";
import styles from "./Button.module.css";

function Button({ feedback }) {
  return <button className={styles.button}>{feedback}</button>;
}

export default Button;