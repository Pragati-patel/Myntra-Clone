import React, { useState } from "react";
import styles from "./styles.module.css";
import { Check, CheckBox } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ProductCard from "../ProductCard";
import { useRouter } from "next/navigation";
export default function MainPage() {
  const router = useRouter();
  const products = [
    1,
    2,
    3,
    4,
    5,
    5,
    6,
    6,
    4,
    ,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    2,
    3,
    4,
    5,
    6,
    6,
    ,
    6,
    4,
    35,
    45,
    56,
    56,
    46,
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 13;
  const Categories = [
    "Heels",
    "Flats",
    "Casual Shoes",
    "Boots",
    "Sports Shoes",
    "Flip Flops",
    "Sports Sandals",
    "Sandals",
  ];
  const Brand = [
    "DressBerry",
    "ELLE",
    "Inc 5",
    "Carlton London",
    "Roadster",
    "VALIOSAA",
    "Puma",
    "The Desi Dulhan",
  ];
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = products.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div class="flex flex-col space-y-2 p-[20px] ">
          <p className={styles.heading}>Categories</p>
          {Categories?.map((item, index) => {
            return (
              <label class="flex items-center" key={index.toString}>
                <input type="checkbox" className={styles.radio_btn} />
                {/* <FormControlLabel
                    control={<Checkbox sx={{padding:0}}/>}
                    className="m-0"
                  /> */}
                <span className={styles.item}>{item}</span>
              </label>
            );
          })}
        </div>
        <div className={styles.divider}></div>
        <div class="flex flex-col space-y-2 p-[20px] ">
          <p className={styles.heading}>BRAND</p>
          {Brand?.map((item, index) => {
            return (
              <label class="flex items-center" key={index.toString}>
                <input type="checkbox" className={styles.radio_btn} />
                <span className={styles.item}>{item}</span>
              </label>
            );
          })}
        </div>
        <div class="flex flex-col space-y-2 p-[20px] ">
          <p className={styles.heading}>DISCOUNT RANGE</p>
          {Brand?.map((item, index) => {
            return (
              <label class="flex items-center" key={index.toString}>
                <input type="checkbox" className={styles.radio_btn} />
                <span className={styles.item}>{item}</span>
              </label>
            );
          })}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.card_wrapper}>
          {currentCards.map((product, index) => {
            return (
              <div key={index} onClick={() => router.push("/product-detail")}>
                <ProductCard product={product} index={index} />
              </div>
            );
          })}
        </div>
        <div className={`${styles.divider} mb-8 mt-16`}></div>
        <Stack spacing={2} className="mb-16 w-full justify-end">
          <Pagination
            count={Math.ceil(products.length / cardsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    </div>
  );
}
