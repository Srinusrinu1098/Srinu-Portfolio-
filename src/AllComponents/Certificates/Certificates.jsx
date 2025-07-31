import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { ImageSwiper } from "@/components/ui/ImageSwiper";
import { ImageSwiper1 } from "@/components/ui/imageswiper1";

function Certificates() {
  const cardData = [
    {
      id: 1,
      imageUrl: "/html.png",
      title: "HTNL CSS BOOTSTRAP",
    },
    {
      id: 2,
      imageUrl: "/bootstrap.png",
      title: "BOOTSTRAP FLEXBOX",
    },
    {
      id: 3,
      imageUrl: "/javascript.png",
      title: "JAVASCRIPT",
    },
    {
      id: 4,
      imageUrl: "/python.png",
      title: "Python",
    },
    {
      id: 5,
      imageUrl: "/git.png",
      title: "GIT GITHUB",
    },
    {
      id: 6,
      imageUrl: "/sql.png",
      title: "SQL",
    },
    {
      id: 7,
      imageUrl: "/node.png",
      title: "NODE JS",
    },
    {
      id: 8,
      imageUrl: "/flexbox.png",
      title: "FLEXBOX",
    },
    {
      id: 9,
      imageUrl: "/react.png",
      title: "REACT JS",
    },
  ];
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-tr from-gray-800 via-gray-300 to-gray-800

 text-white pb-44"
    >
      <div className="flex justify-center shadow-2xl md:justify-end p-2 sm:p-4">
        <MenuBar />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 m-10">
        <p className="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-md tracking-wide mb-8">
          Achievements Earned Through Passion and Hard Work
        </p>

        <ImageSwiper cards={cardData} className="hidden lg:block" />
        <ImageSwiper1 cards={cardData} className="block lg:hidden" />
      </div>
    </div>
  );
}

export default Certificates;
