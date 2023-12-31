import React from 'react'
import Image from 'next/image';

const CardDataa = [
    {
      id: 1,
      image: "/images/10.jpg",
      title: "Groceries",
      mtitle: "Wooden Classica...",
      price: "$405.00",
    },
    {
      id: 2,
      image: "/images/7.jpg",
      title: "Accessories",
      mtitle: "Air Fryer with...",
      price: "$300.00",
    },
    {
      id: 3,
      image: "/images/8.jpg",
      title: "Accessories",
      mtitle: "Classical Chair...",
      price: "$905.00",
    },
    {
      id: 4,
      image: "/images/9.jpg",
      title: "Accessories",
      mtitle: "Stainless Steel...",
      price: "$705.00",
    },
  ];
export default function CardData2() {
  return (
    <div>
        <div className="flex gap-14">
            {CardDataa.map((data) => (
              <div className="flex  ">
                <div className=" ">
                  <div>
                    <Image
                      src={data.image}
                      alt=""
                      className="w-full h-full"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="grid justify-center grid-col ">
                    <h4 className="text-gray-500">{data.title}</h4>
                    <h3 className="text-black">{data.mtitle}</h3>
                    <p className="text-black">icon add</p>
                    {/* <p className="text-gray-500">{data.price}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}
