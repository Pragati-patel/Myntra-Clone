import React, { useEffect } from "react";
import styles from "./Card.module.css";

export default function Card({ data }) {
  useEffect(() => {
    console.log("dtatattatta", data);
  }, []);
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: "linear-gradient(rgb(247 141 141), #ff3f6c)" }}
    >
      <img
        className={styles.img}
        alt="image"
        // src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg"
        src={data?.catImage}
      />
      <div className={styles.content_wrapper}>
        <p className={styles.sub_header}>{data?.catName}</p>
        <p className={styles.header}>40-80% OFF</p>
        <p className={styles.shop_btn}> Shop Now</p>
      </div>
    </div>
  );
}
