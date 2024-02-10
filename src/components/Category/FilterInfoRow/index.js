import { useParams } from "next/navigation";
import React from "react";
import styles from "./styles.module.css";

export default function FilterInfoRow() {
  const params = useParams();
  return (
    <div className={styles.wrapper}>
      <div className="flex flex-col">
        <p className={styles.breadcrumbs}>Home/{params?.category}</p>
        <p className={styles.text}>
          Footwear New - <span className="text-[#878b94]">35501 items</span>
        </p>
      </div>
    </div>
  );
}
