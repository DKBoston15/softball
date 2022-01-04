import React from "react";
import Footer from "../components/Footer";
import Gallery from "react-photo-gallery-react17";

export default function GalleryPage() {
  const photos = [
    {
      src: "images/PinkTeam.jpeg",
      width: 8,
      height: 4,
    },
    {
      src: "images/WhiteTeam.jpeg",
      width: 8,
      height: 4,
    },
    {
      src: "images/WhiteTeam2.jpeg",
      width: 8,
      height: 4,
    },
    {
      src: "images/YellowTeam.jpeg",
      width: 8,
      height: 4,
    },
    {
      src: "images/YellowTeam2.jpg",
      width: 6,
      height: 3,
    },
    {
      src: "images/YellowField.jpeg",
      width: 8,
      height: 4,
    },
    {
      src: "images/YellowField2.jpeg",
      width: 6,
      height: 4,
    },
    {
      src: "images/YellowField3.jpg",
      width: 8,
      height: 2,
    },
    {
      src: "images/YellowPair.jpeg",
      width: 10,
      height: 4,
    },
  ];
  return (
    <div className="min-w-full min-h-[90vh] h-90vh">
      <div className="p-12 pt-32 flex justify-center min-w-full w-full flex-col items-center">
        <h1 className="font-bold text-5xl mb-8 mt-10 text-center">Gallery</h1>
        <hr className="border-4 border-yellow my-10 w-full max-w-6xl" />
        <div class="flex flex-col lg:flex-row lg:flex-wrap -mx-5 overflow-hidden max-w-6xl lg:items-center">
          <Gallery photos={photos} />
        </div>
      </div>
      <div className="lg:mt-96 mt-8">
        <Footer />
      </div>
    </div>
  );
}
