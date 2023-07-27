import React from "react";
import Image from "next/image";

export default function NewArrivals() {
  return (
    <div className="mx-auto max-w-screen-2xl p-5">
      <div className="flex justify-center items-center">
        <h2 className="text-black text-2xl font-bold">
          Newest Arrivals Of This Month
        </h2>
      </div>
      <div className="w-full mx-auto border ">
        <div className="w-full border lg:w-5/12">
            <div className="relative flex justify-center items-center">
            <div className="p-5">
                <Image src="/images/20.jpg" alt="" width={1000} height={1000}/>
            </div>
            <div className="absolute flex flex-col space-y-4 pr-32">
            <h1 className="text-black font-bold text-2xl w-52 ">
                Exclusive Offer On Gearbox
              </h1>
              <p className="text-gray-500 text-sm w-52">
                Flexible financing on storewide purchase $299 and up.
              </p>
              <h3 className="text-red-500 font-bold text-xl">Explore Now</h3>
            </div>
        </div>
        <div className="flex items-center justify-center gap-20 p-5">
            <div className="space-y-2">
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            
              
            </div>

            <div className="space-y-2 ">
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            <p className="text-gray-500 text-base hover:text-red-600 hover:border-b-2 hover:border-red-600"> > Xstore Fashion</p>
            
             
            </div>
        </div>
        </div>
        <div className="w-full lg:w-7/12"></div>
      </div>
    </div>
  );
}
