import React from "react";
import styles from "./styles.module.css";
import { TopBanner } from "@/assets/ImagesLink";

export default function AnnouncementBar() {
  return (
    <>
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
      {/* <img
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/7b00a2f0-2c8f-47f8-938d-85617a3e75e91706788625897-FLAT-400-Off-on-1st-Purchase-Strip-----3.jpg"
        className="mt-4" alt="top-banner"
      /> */}
    </>
  );
}
export const Banner = () => {
  return <img src={TopBanner} className="mt-4" alt="top-banner" />;
};
