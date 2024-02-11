import React from "react";
import styles from "./styles.module.css";
import { FaChevronRight } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";

export default function Product() {
  return (
    <div className={`${styles.wrapper} pb-8`}>
      <div className={styles.left}>
        <div className={styles.img_wrapper}>
          <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21768048/2023/1/31/8fb1b671-223d-4bf2-8c95-aebc5d14686b1675143103877ShezoneWomenBeigeColourblockedSneakers1.jpg"
            alt="image"
            className={styles.image_product}
          />
          <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21768048/2023/1/31/4ed414a1-b3d0-4493-b0c9-2e1c10959a9f1675143103863ShezoneWomenBeigeColourblockedSneakers2.jpg"
            alt="image2 "
            className={styles.image_product}
          />
        </div>
        <div className={`${styles.img_wrapper} my-4`}>
          <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21768048/2023/1/31/8fb1b671-223d-4bf2-8c95-aebc5d14686b1675143103877ShezoneWomenBeigeColourblockedSneakers1.jpg"
            alt="image"
            className={styles.image_product}
          />
          <img
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21768048/2023/1/31/4ed414a1-b3d0-4493-b0c9-2e1c10959a9f1675143103863ShezoneWomenBeigeColourblockedSneakers2.jpg"
            alt="image2 "
            className={styles.image_product}
          />
        </div>
      </div>
      <div className={styles.right}>
        <RightProductDetail />
      </div>
    </div>
  );
}

export const RightProductDetail = () => {
  return (
    <div className={styles.right_wrapper}>
      <p className={styles.heading}>Shezone</p>
      <p className={styles.subheading}>
        Women Colourblocked Heeled Lightweight Sneakers
      </p>
      <p className={styles.divider}></p>
      <p className={`${styles.info_line} !pb-0`}>
        ₹799 <span className="text-282c3f font-normal px-2">MRP ₹199</span>{" "}
        <span className={styles.pink_text}>(60% OFF) </span>
      </p>
      <p className={styles.pdp_vatInfo}>inclusive of all taxes</p>

      <div className={styles.size_row}>
        <p className={styles.size_heading}>SELECT SIZE (UK Size)</p>
        <p className={`${styles.pink_text_small} ml-8`}>
          SIZE CHART <FaChevronRight color={"#ff3e6c"} />
        </p>
      </div>

      <div className={styles.size_circle_wrapper}>
        {[3, 4, 5, 6, 7, 8]?.map((item, index) => {
          return (
            <div key={index.toString()} className={styles.size_circle}>
              {item}
            </div>
          );
        })}
      </div>

      <div className={styles.btn_wrapper}>
        <button className={styles.add_to_bag_btn}>
          <HiShoppingBag color={"#fff"} size={25} />
          ADD TO BAG
        </button>
        <button className={styles.wishlist_btn}>
          <CiHeart color={"#282c3f"} size={25} />
          WISHLIST
        </button>
      </div>
      <p className={`${styles.divider} !my-6`}></p>
      <div className={styles.delivery_wrapper}>
        <p className={styles.deli_heading}>Delivery Options </p>
        <p className={styles.deli_text}>100% Original Products</p>
        <p className={styles.deli_text}>Pay on delivery might be available</p>
        <p className={styles.deli_text}>Easy 14 days returns and exchanges</p>
        <p className={styles.deli_text}>Try & Buy might be available</p>
      </div>
      <p className={`${styles.divider} !my-6`}></p>
      <div className={styles.delivery_wrapper}>
        <p className={styles.deli_heading}>PRODUCT DETAILS </p>
        <p className={styles.deli_text}>
          A pair of round toe beige & white colourblocked sneakers,has regular
          styling
        </p>
        <p className={styles.deli_text}>Lace-ups detail</p>
        <p className={styles.deli_text}>Synthetic leather upper</p>
        <p className={styles.deli_text}>Cushioned footbed</p>
        <p className={styles.deli_text}>Textured and patterned outsole</p>
        <p className={styles.deli_text}>Warranty: 30 days</p>
        <p className={styles.deli_text}>
          Warranty provided by brand/manufacturer
        </p>
      </div>
    </div>
  );
};
