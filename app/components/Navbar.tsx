import React from "react";
import { BsSearch, BsSuitHeart } from "react-icons/bs";
import { WiTime9 } from "react-icons/wi";
import { RxCountdownTimer } from "react-icons/rx";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { MdVerticalDistribute } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white  border-gray-200 dark:bg-[#C84E22]">
        <div className="flex justify-between flex-wrap space-x-5 items-center mx-auto max-w-screen-xl p-4">
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
      <nav className="bg-gray-50 dark:bg-[#E95D2A]">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-lg">
              <div className="flex space-x-1">
                <MdVerticalDistribute className="w-6 h-6" />
                <p className="text-lg">All Departments</p>
                <RiArrowDropDownLine className="text-lg w-8 h-8" />
              </div>
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
                <p className="text-lg">Log in / Sign up</p>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
