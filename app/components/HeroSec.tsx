import React from "react";
import Image from "next/image";

export default function HeroSec() {
  return (
    <div className="flex justify-between mx-auto max-w-screen-xl ">
      <div className="w-full">
        <div className="w-full lg:w-5/12">
          <div>
            <Image src="/images/1.jpg" alt="" width={500} height={500} />
          </div>
        </div>
        <div className="w-full lg:w-7/12"></div>
      </div>
    </div>
  );
}
