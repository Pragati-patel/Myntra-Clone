import React from "react";
import styles from "./styles.module.css";
import {
  BottomContent,
  CustomerPolicies,
  OnlineShopping,
  UsefulLinks,
} from "./Data";
import {
  AppStore,
  FooterOriginalTag,
  FooterReturnWindow,
  GooglePlay,
  SocialIcns,
} from "@/assets/ImagesLink";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top_wrapper}>
        <div className={styles.first_col}>
          <p className={styles.heading}> ONLINE SHOPPING </p>
          <div className="flex flex-col my-4">
            {OnlineShopping?.map((data, index) => {
              return (
                <p className={styles.item} key={index.toString()}>
                  {data?.item}
                </p>
              );
            })}
          </div>
          <p className={`${styles.heading} my-4`}> USEFUL LINKS </p>
          <div className="flex flex-col">
            {UsefulLinks?.map((data, index) => {
              return (
                <p className={styles.item} key={index.toString()}>
                  {data?.item}
                </p>
              );
            })}
          </div>
        </div>

        <div className={styles.second_col}>
          <p className={styles.heading}> CUSTOMER POLICIES </p>
          <div className="flex flex-col my-4">
            {CustomerPolicies?.map((data, index) => {
              return (
                <p className={styles.item} key={index.toString()}>
                  {data?.item}
                </p>
              );
            })}
          </div>
        </div>

        <div className={styles.third_col}>
          <p className={styles.heading}> EXPERIENCE MYNTRA APP ON MOBILE </p>
          <div className="flex py-[25px] gap-[10px]">
            <img src={GooglePlay} alt="google-play" width={140} height={42} />
            <img src={AppStore} alt="app-store" width={140} height={42} />
          </div>
          <div className={styles.social_wrapper}>
            <p className={styles.heading}> KEEP IN TOUCH </p>
            <div className="flex gap-[15px] my-4">
              {SocialIcns?.map((icon, index) => {
                return (
                  <img
                    src={icon.icon}
                    key={index.toString()}
                    alt={index}
                    className="w-[20px]"
                  />
                );
              })}
            </div>

            <div></div>
          </div>
        </div>

        <div className={styles.fourth_col}>
          <div className="flex gap-2">
            <img
              src={FooterOriginalTag}
              alt="footer-original"
              className="!w-[48px] !h-[40px]"
            />
            <p className={styles.normal_text}>
              <span className={styles.bold_text}>100% ORIGINAL </span> guarantee
              for all products at myntra.com{" "}
            </p>
            {/* <img src={FooterReturnWindow}/> */}
          </div>
          <div className="flex gap-2 mt-8">
            <img
              src={FooterReturnWindow}
              alt="footer-return-window"
              className="!w-[48px] !h-[40px]"
            />
            <p className={styles.normal_text}>
              <span className={styles.bold_text}>Return within 14days </span> of
              receiving your order
            </p>
          </div>
        </div>
      </div>
      <FooterContentSection />
    </div>
  );
}

const FooterContentSection = () => {
  return (
    <div className="w-full">
      <div className={styles.divider_with_text}>
        {" "}
        POPULAR SEARCHES <p className={styles.divider_text}></p>
      </div>
      <div className={styles.bottom_text}>
        Makeup | Dresses For Girls | T-Shirts | Sandals |Headphones | Babydolls
        | Blazers For Men | Handbags |Ladies Watches | Bags |Sport Shoes| Reebok
        Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack
        Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer
        Blouse | Gowns | Rings| Cricket| Shoes Forever 21 | Eye Makeup | Photo
        Frames| Punjabi Suits |Bikini | Myntra Fashion Show| Lipstick |Saree
        |Watches| Dresses | Lehenga| Nike Shoes | Goggles | Bras | Suit |
        Chinos| Shoes | Adidas |Shoes | Woodland Shoes | Jewellery | Designers|
        Sarees
      </div>
      <div className={styles.divider_with_text}>
        <p className={styles.divider_text}></p>
      </div>
      <div className={styles.bottom_text}>
        {BottomContent?.map((item, index) => {
          return (
            <div key={index.toString()} className="mb-8">
              <p className={styles.heading}>{item.heading}</p>
              <p className={styles.normal_text}>{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.divider_with_text}>
        <p className={styles.divider_text}></p>
      </div>
    </div>
  );
};
