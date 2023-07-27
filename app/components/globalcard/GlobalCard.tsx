import React from "react";
import Image from "next/image";

export default function GlobalCard() {
  return (
    <div className="mx-auto max-w-screen-2xl p-5">
      <div className="flex justify-center items-center flex-col space-y-3">
        <h2 className="text-black text-2xl font-bold">
          Global Ofiginal Sources
        </h2>
        <div className="grid grid-cols-2 gap-5 p-5 ">
          <div className="border p-3 relative flex justify-end items-center">
            <div className="w-full ">
              <Image
                src="/images/18.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full "
              />
            </div>
            <div className="flex flex-col absolute space-y-5 p-5 justify-end">
              <h1 className="text-black font-bold text-2xl w-52 ">
                Non-Sticky Vessel Save Up To 50%
              </h1>
              <p className="text-gray-500 text-sm w-52">
                Flexible financing on storewide purchase $299 and up.
              </p>
              <h3 className="text-red-500 font-bold text-xl">Explore Now</h3>
            </div>
          </div>
          <div className="border p-3 relative flex justify-end items-center">
            <div className="w-full h-full">
              <Image
                src="/images/19.jpg"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col absolute space-y-5 p-5 justify-end">
              <h1 className="text-black font-bold text-2xl w-52 ">
                Handyman Tool On Free Shipping
              </h1>
              <p className="text-gray-500 text-sm w-52">
                Flexible financing on storewide purchase $299 and up.
              </p>
              <h3 className="text-red-500 font-bold text-xl">Discover More</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
