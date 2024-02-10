"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra",
//   description:
//     "Online Shopping Site for Fashion & Lifestyle in India. India's Fashion Expert brings you a variety of footwear, Clothing, Accessories and lifestyle products for women & men. Best Online Fashion Store *COD *Easy returns and exchanges.",
//   icons: {
//     icon: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra
        </title>
        <meta
          name="description"
          content="Online Shopping Site for Fashion & Lifestyle in India. India's Fashion Expert brings you a variety of footwear, Clothing, Accessories and lifestyle products for women & men. Best Online Fashion Store *COD *Easy returns and exchanges."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
