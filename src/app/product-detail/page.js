"use client";
import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Product from "@/components/ProductDetail";

export default function ProductDetailPage() {
  return (
    <div>
      <Header />
      <AnnouncementBar />
      <div className="text-14 font-Assistant font-normal text-282c3f p-[30px]">
        Home / Footware / Women
      </div>
      <Product />
      <Footer />
    </div>
  );
}
