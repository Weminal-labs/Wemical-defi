"use client";
import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import localFont from "next/font/local";
import SideNav from "../SideNav";

const btBeauSans = localFont({
  src: [
    {
      path: "@/../../../../public/font/bt-beau-sans/BT-BeauSans-Light-BF64d4595396c6d.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "@/../../../../public/font/bt-beau-sans/BT-BeauSans-Regular-BF64d45952e54c1.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "@/../../../../public/font/bt-beau-sans/BT-BeauSans-Medium-BF64d4595383d81.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "@/../../../../public/font/bt-beau-sans/BT-BeauSans-Bold-BF64d45953acd04.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "@/../../../../public/font/bt-beau-sans/BT-BeauSans-ExtraBold-BF64d45953a17ee.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <body className={btBeauSans.className}>
      <NextUIProvider>
        <div className="flex">
          <SideNav/>
          <main className=" bg-black flex-1 min-h-screen">
            <div className="w-full h-full flex md:ml-80">{children}</div>
          </main>
        </div>
      </NextUIProvider>
    </body>
  );
};

export default Layout;
