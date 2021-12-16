import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import QuoteSection from "../components/QuoteSection";
import WideBanner from "../components/WideBanner";

export default function Home() {
  return (
    <div className="min-w-full min-h-screen">
      <Hero />
      <WideBanner />
      <QuoteSection />
      <Footer />
    </div>
  );
}
