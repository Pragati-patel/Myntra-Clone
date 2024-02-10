import React from "react";
import styles from "./styles.module.css";
import { MainBanner } from "@/assets/ImagesLink";

export default function HeroBanner() {
  return (
    <div className={styles.wrraper}>
      <img src={MainBanner} alt="main-banner" className="w-full h-full" />
    </div>
  );
}
