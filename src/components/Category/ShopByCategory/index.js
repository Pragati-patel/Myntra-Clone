// import React from 'react'
// import styles from './styles.module.css'
// import { ShopByCategoryImg } from '@/assets/ImagesLink'
// import Card from './Card'

// export default function ShopByCategory() {
//     const Cards=[1,2,3,4,5,6,1,2,3,4,5,6,2,4,4,63]
//   return (
//     <div className={styles.wrapper}>
//         <div><img src={ShopByCategoryImg} alt='Shop By Category' className='w-full h-full'/></div>
//         <div className='px-[60px] w-full grid grid-cols-6 gap-8'>
//             {Cards?.map((item,index)=>{
//                 return <div className='' key={index.toString()}><Card/></div>
//             })}

//         </div>
//     </div>
//   )
// }

import React from "react";
import styles from "./styles.module.css";
import { CTABannerImg, ShopByCategoryImg } from "@/assets/ImagesLink";
import Card from "./Card";

export default function ShopByCategory() {
  const Cards = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 2, 4, 4, 63];

  // Calculate the number of columns needed for the grid
  const numColumns = 6;
  const numRows = Math.ceil(Cards.length / numColumns);

  // Calculate the number of cards in the last row
  const numCardsInLastRow = Cards.length % numColumns || numColumns;

  return (
    <div className={styles.wrapper}>
      <div>
        <img
          src={ShopByCategoryImg}
          alt="Shop By Category"
          className="w-full h-full"
        />
      </div>
      <div
        className="px-[60px] w-full grid grid-cols-6 gap-8"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {Array.from({ length: numRows }, (_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center">
            {Array.from(
              {
                length:
                  rowIndex === numRows - 1 ? numCardsInLastRow : numColumns,
              },
              (_, colIndex) => (
                <div key={colIndex.toString()} className="mr-8">
                  {" "}
                  {/* Add margin to each card */}
                  <Card />
                </div>
              ),
            )}
          </div>
        ))}
      </div>

      <CTABanner />
    </div>
  );
}

const CTABanner = () => {
  return (
    <div>
      <img src={CTABannerImg} alt="CTA Banner" className="w-full h-full" />
    </div>
  );
};
