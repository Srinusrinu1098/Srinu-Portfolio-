import GooeyNav from "@/components/navMenu";
import { FolderIcon, HomeIcon, MailIcon, StoreIcon } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

function MenuBar() {
  const location = useLocation();

  const items = [
    { label: "Home", href: "/", icon: <HomeIcon /> },
    { label: "About me", href: "/my-story", icon: <StoreIcon /> },
    { label: "Certificates", href: "/certificates", icon: <FolderIcon /> },
    { label: "Contact", href: "/contact", icon: <MailIcon /> },
  ];

  const activeIndex = items.findIndex(
    (item) => item.href === location.pathname
  );

  return (
    <div>
      <GooeyNav
        items={items}
        particleCount={100}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={activeIndex >= 0 ? activeIndex : 0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}

export default MenuBar;
