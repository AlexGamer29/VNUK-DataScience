import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from "../public/assets/images/vnuk-official.png";

function Footer() {
    const router = useRouter();
    return (
        <>
            <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
                <div className="p-5 ">
                    <ul>
                        <div className="flex justify-center items-center w-48">
                            <Image
                                src={Logo}
                                // check if the image is loaded before rendering
                                onClick={() => router.reload("/")}
                            />
                        </div>
                        <div className="flex gap-6 pb-5">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                        </div>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        {/* <p className="text-gray-800 font-bold text-2xl pb-4">Product</p> */}
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Home
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Coding
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Mini Story
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            About
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
                <h1 className=" text-gray-800 font-semibold">
                    © 2021-2022 All rights reserved | VNUK
                </h1>
            </div>
        </>
    )
}

export default Footer;