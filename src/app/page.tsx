import Header from "@/components/layouts/Header";
import localFont from "next/font/local";
import WrapperContent from "@/components/WrapperContent";
import { Link, Image } from "@nextui-org/react";
import { IoIosArrowRoundForward } from "react-icons/io";

const btBeauSans = localFont({
  src: [
    {
      path: "@/../../../public/font/bt-beau-sans/BT-BeauSans-Light-BF64d4595396c6d.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "@/../../../public/font/bt-beau-sans/BT-BeauSans-Regular-BF64d45952e54c1.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "@/../../../public/font/bt-beau-sans/BT-BeauSans-Medium-BF64d4595383d81.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "@/../../../public/font/bt-beau-sans/BT-BeauSans-Bold-BF64d45953acd04.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "@/../../../public/font/bt-beau-sans/BT-BeauSans-ExtraBold-BF64d45953a17ee.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

const Specify = localFont({
  src: [
    {
      path: "@/../../../public/font/specify-personal/SpecifyPERSONAL-ExExpThin.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "@/../../../public/font/specify-personal/SpecifyPERSONAL-ExExpLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "@/../../../public/font/specify-personal/SpecifyPERSONAL-ExExpMedium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "@/../../../public/font/specify-personal/SpecifyPERSONAL-ExExpBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "@/../../../public/font/specify-personal/SpecifyPERSONAL-ExExpBlack.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function Home() {
  return (
    <body className={btBeauSans.className}>
      <main className="min-h-screen bg-black bg-homePage bg-no-repeat bg-center bg-cover">
        <Header />
        <WrapperContent className="h-screen">
          <div className="flex justify-between items-center h-full w-full text-white">
            <div className="">
              <h1 className={`${Specify.className} text-5xl font-bold text-white uppercase`}>DEAR suians</h1>
              <p className="font-light text-[#CFCFCF] text-lg mt-5">let&apos;s create some cooking recipe with wemical</p>
              <Link className="uppercase text-white mt-16 text-lg" href="/explore/recipe">Click to explore<IoIosArrowRoundForward className="text-4xl"/></Link>
            </div>
            <div>
              <Image src="/imgs/pill.png" alt="img"/>
            </div>
          </div>
        </WrapperContent>
      </main>
    </body>
  );
}
