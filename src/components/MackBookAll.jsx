import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="dark:bg-[#0B0B0F] w-full m-0 p-0 overflow-hidden">
      <MacbookScroll
        title={
          <span>
            This represent my story <br /> Im focused ❤️.
          </span>
        }
        badge={
          <a
            href="https://instagram.com/srinu_el_loco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge className="h-10 w-10 transform -rotate-12" />
          </a>
        }
        src={`/instalogo.png`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }) => {
  return (
    <div>
      <p className="text-gray-500 animate-bounce">Click 👇 Here</p>
      <img src={`/instalogo.png`} alt="logo" className="w-20" />
    </div>
  );
};
