"use client";
import AnnouncementBar from "@/components/AnnouncementBar";
import FilterInfoRow from "@/components/Category/FilterInfoRow";
import MainPage from "@/components/Category/MainPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Announcement } from "@mui/icons-material";
import React from "react";

export default function CategoryPage() {
  return (
    <div>
      <Header />
      <AnnouncementBar />
      <FilterInfoRow />
      <MainPage />
      <Footer />
    </div>
  );
}
