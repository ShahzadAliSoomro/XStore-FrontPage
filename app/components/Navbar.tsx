import React from "react";
import { BsSearch, BsSuitHeart } from "react-icons/bs";
import { WiTime9 } from "react-icons/wi";
import { RxCountdownTimer } from "react-icons/rx";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { MdVerticalDistribute } from "react-icons/md";
import { RiArrowDropDownLine, RiFacebookLine } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";
import { BiLogoTwitter, BiLogoWhatsapp } from "react-icons/bi";
import { SlSocialInstagram } from "react-icons/sl";
import { IoIosMusicalNote } from "react-icons/io";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white  border-gray-200 dark:bg-[#C84E22]">
        <div className="flex justify-between flex-wrap space-x-5 items-center mx-auto max-w-screen-2xl p-4">
          <h2 className="text-4xl font-bold">XSTORE.</h2>
          <div className="flex items-center justify-between relative">
            <input
              type="text"
              placeholder="what are you looking for..."
              className="p-2 rounded-full w-full lg:w-96 text-black"
            />
            <BsSearch className="text-slate-400 w-5 h-5 absolute left-[340px]" />
          </div>
          <div className="flex items-center space-x-4">
            <WiTime9 className="text-xl w-9 h-9" />
            <p className="mr-6 text-lg font-bold text-gray-500 dark:text-white hover:underline">
              Track Order
            </p>
            <RxCountdownTimer className="text-xl w-8 h-8" />
            <BsSuitHeart className="text-xl w-8 h-8" />
            <AiOutlineShopping className="text-xl w-8 h-8" />
            <a href="#" className="text-sm text-white hover:underline">
              $0.00
            </a>
          </div>
        </div>
      </nav>

      {/* // second Navbar Start */}

      <nav className="bg-gray-50 dark:bg-[#E95D2A]">
        <div className="max-w-screen-2xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              <MdVerticalDistribute className="w-6 h-6" />
              <p className="text-base">All Departments</p>
              <RiArrowDropDownLine className="text-lg w-8 h-8" />
            </div>
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-base">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Demon
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Elements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300  hover:underline ">
                  |
                </a>
              </li>
              <div className="flex space-x-1">
                <AiOutlineUser className="w-6 h-6" />
                <p className="text-base">Log in / Sign up</p>
              </div>
            </ul>
            <div className="flex ">
              <p className="text-base">English </p>
              <RiArrowDropDownLine className="text-lg w-8 h-8" />
              <p className="text-gray-300">|</p>
              <p className="text-base">USD</p>
              <RiArrowDropDownLine className="text-lg w-8 h-8" />
            </div>
          </div>
        </div>
      </nav>
      {/* // second Navbar End */}

      {/* // third Navbar Start */}

      <nav className="bg-gray-50 dark:bg-[#FFFFFF] shadow-lg">
        <div className="max-w-screen-2xl px-4 py-3 mx-auto">
          <div className="flex items-center text-gray-600 justify-between">
            <div className="flex space-x-2 ">
              <RiFacebookLine className="w-5 h-5" />
              <TfiYoutube className=" w-4 h-4" />
              <BiLogoTwitter className=" w-5 h-5" />
              <SlSocialInstagram className=" w-4 h-4" />
              <BiLogoWhatsapp className=" w-5 h-5" />
              <IoIosMusicalNote className=" w-5 h-5" />
            </div>
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <div className="flex">
                <p className="">TV & Monitor </p>
                <RiArrowDropDownLine className="text-lg w-8 h-8" />
              </div>
              <div className="flex">
                <p className="">Electronics</p>
                <RiArrowDropDownLine className="text-lg w-8 h-8" />
              </div>
              <div className="flex">
                <p className="">Cameras</p>
                <RiArrowDropDownLine className="text-lg w-8 h-8" />
              </div>
              <div className="flex">
                <p className="">Apparels</p>
                <RiArrowDropDownLine className="text-lg w-8 h-8" />
              </div>
              <div className="flex">
                <p className="">Apparels</p>
                <RiArrowDropDownLine className="text-lg w-8 h-8" />
              </div>
              <div className="flex">
                <p className="">Sale</p>
                <RiArrowDropDownLine className="text-lg w-8 h-8" />
              </div>
              <div className="flex">
                <p className="">Furniture</p>
                <RiArrowDropDownLine className="text-lg w-8 h-8" />
              </div>
            </ul>

            <div className="border border-green-600 p-2">
              <p className="text-green-500">Sale! 30% OFF!</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
