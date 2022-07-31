import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import WhiteLogo from "../../../public/assets/images/vnuk-white.png";

const AppFooter: FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex w-full flex-col pt-12 pb-8 px-12 bg-[#000] shadow-2xl">
        <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-center">
          <div className="p-5">
            <ul>
              <div className="flex justify-center items-center w-48">
                <Image
                  src={WhiteLogo}
                  // check if the image is loaded before rendering
                  onClick={() => router.reload()}
                />
              </div>
            </ul>
          </div>
          <div className="p-5">
            <ul className="flex flex-col justify-around items-start">
              <li className="text-white text-base pb-6 font-semibold hover:text-vnuk-red cursor-pointer">
                HOME
              </li>
              <li className="text-white text-base pb-6 font-semibold hover:text-vnuk-red cursor-pointer">
                CODING
              </li>
              <li className="text-white text-base pb-6 font-semibold hover:text-vnuk-red cursor-pointer">
                MINI STORY
              </li>
              <li className="text-white text-base pb-6 font-semibold hover:text-vnuk-red cursor-pointer">
                ABOUT
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <li className="flex flex-row items-center pb-6 font-semibold cursor-pointer">
                <IconContext.Provider value={{ color: "#4267B2" }}>
                  <FaFacebook className="text-4xl cursor-pointer" />
                </IconContext.Provider>
                <span className="text-white text-base font-semibold mx-4 hover:text-blue-400">
                  FACEBOOK
                </span>
              </li>
              <li className="flex flex-row items-center pb-6 font-semibold cursor-pointer">
                <IconContext.Provider value={{ color: "#E1306C" }}>
                  <FaInstagram className="text-4xl cursor-pointer" />
                </IconContext.Provider>
                <span className="text-white text-base font-semibold mx-4 hover:text-pink-400">
                  INSTAGRAM
                </span>
              </li>
              <li className="flex flex-row items-center pb-6 font-semibold cursor-pointer">
                <IconContext.Provider value={{ color: "#FF0000" }}>
                  <FaYoutube className="text-4xl cursor-pointer" />
                </IconContext.Provider>
                <span className="text-white text-base font-semibold mx-4 hover:text-red-400">
                  YOUTUBE
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start items-center text-center">
          <h1 className=" text-white font-semibold">
            © 2022 VNUK All rights reserved.
          </h1>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
