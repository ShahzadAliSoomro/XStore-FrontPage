import React from "react";
import Image from "next/image";
import { data } from "autoprefixer";
import CardData from "./card/CardData";
import CardData2 from "./card/CardData2";
import Section2 from "./card/Section2";

export default function HeroSec() {
  return (
    <div className="mx-auto max-w-screen-2xl p-10">
      <div className="w-full flex gap-5">
        <div className="w-full h-full lg:w-5/12 relative">
          <div className="flex justify-center items-center">
            <div className="overflow-auto">
              <Image
                src="/images/1.jpg"
                alt=""
                className="w-full h-[830px] overflow-x-scroll"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex flex-col items-center space-y-4 justify-center absolute ">
              <h2 className="text-black text-3xl font-medium">
                Introducing The New <br /> Surface Furniture.
              </h2>
              <p className="text-gray-500 text-sm">
                Starting at $59.99 See what else in new from Decor.
              </p>
              <h4 className="text-red-500 font-bold text-lg">Start Shopping</h4>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 ">
          <h1 className="text-black text-2xl font-bold">
            Today's Popular Picks
          </h1>
          <div className="space-y-10">
            <CardData />
            <div className="w-full border bg-[#FAFBFB] flex p-4">
              <div className="">
                <Image
                  src="/images/6.jpg"
                  className="h-40 w-full"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="flex flex-col justify-center space-y-7">
                <h2 className="text-black text-4xl">Kitchenaid Trolly</h2>
                <p className="text-gray-400 text-base">
                  Flexible financing on storewide $299.
                </p>
                <h4 className="text-red-400">Explore Now</h4>
              </div>
            </div>
            <CardData2 />
            
          </div>
          
        </div>
        
      </div>
      
      <Section2 />
      
    </div>
  );
}
