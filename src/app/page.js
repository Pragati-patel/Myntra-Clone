"use client";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <AnnouncementBar />
      <HeroBanner />
    </div>
  );
}
