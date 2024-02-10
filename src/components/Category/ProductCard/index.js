import React from "react";
import styles from "./styles.module.css";

export default function ProductCard({ index }) {
  return (
    <div className={styles.wrapper}>
      <img
        src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg"
        alt="prduct-card-image"
        className={styles.img}
      />
      <div className="p-3">
        <p className={styles.heading}>{index}HRX by Hrithik Roshan</p>
        <p className={styles.subheading}>Women Lightweight Sneakers</p>
        <p className={styles.heading}>Rs. 999 (Rs. 2000 OFF)</p>
      </div>
    </div>
  );
}
