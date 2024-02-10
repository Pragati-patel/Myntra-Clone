import React from "react";
import styles from "./styles.module.css";

export default function AnnouncementBar() {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: "linear-gradient(90deg, #f9f9ff, #dee8ff)" }}
    >
      <div className={styles.content}>
        <p className={styles.main_text}>SALE ENDS IN</p>
        <span className={styles.dynamic_item}>02</span>
        <span className={styles.static_item}>Days :</span>
        <span className={styles.dynamic_item}>10</span>
        <span className={styles.static_item}>H</span>
        <span className={styles.dynamic_item}>38</span>
        <span className={styles.static_item}>M :</span>
        <span className={styles.dynamic_item}>33</span>
        <span className={styles.static_item}>s</span>
      </div>
    </div>
  );
}
