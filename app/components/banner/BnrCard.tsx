import React from 'react';
import Image from 'next/image';

const CardDataa = [
    {
      id: 1,
      image: "/images/12.jpg",
      title: "Groceries",
      mtitle: "New Chair",
      price: "$405.00",
    },
    {
      id: 2,
      image: "/images/13.jpg",
      title: "Accessories",
      mtitle: "Stainless Steel Freing",
      price: "$300.00",
    },
    {
      id: 3,
      image: "/images/14.jpg",
      title: "Accessories",
      mtitle: "Wooden Classical Chairs",
      price: "$905.00",
    },
    {
      id: 4,
      image: "/images/15.jpg",
      title: "Accessories",
      mtitle: "Fryer with DualZone",
      price: "$705.00",
    },
    {
        id: 5,
        image: "/images/16.jpg",
        title: "Accessories",
        mtitle: "Xanna Note",
        price: "$705.00",
      },
      {
        id: 5,
        image: "/images/17.jpg",
        title: "Accessories",
        mtitle: "Computer Wire",
        price: "$705.00",
      },
  ];
export default function BnrCard() {
  return (
    <div>
        <div className="flex gap-10 p-5 justify-center items-center">
            {CardDataa.map((data) => (
              <div className="flex justify-center items-center ">
                <div className="">
                  <div className=''>
                    <Image
                      src={data.image}
                      alt=""
                      className="w-full h-full"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="grid justify-center items-center grid-col">
                    <h4 className="text-gray-500">{data.title}</h4>
                    <h3 className="text-black">{data.mtitle}</h3>
                    <p className="text-black">icon add</p>
                    <p className="text-gray-500">{data.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}
