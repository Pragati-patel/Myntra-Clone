"use client";
import AnnouncementBar from "@/components/AnnouncementBar";
import ShopByCategory from "@/components/Category/ShopByCategory";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <AnnouncementBar />
      <HeroBanner />
      <ShopByCategory />
    </div>
  );
}
