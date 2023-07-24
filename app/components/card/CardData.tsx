"use client";
import React from 'react'
import Image from 'next/image';
import { CheckOut } from '../CheckOut';

const CardDataa = [
    {
      id: 1,
      image: "/images/2.jpg",
      title: "Groceries",
      mtitle: "Wooden Classica...",
      price: "$405.00",
    },
    {
      id: 2,
      image: "/images/3.jpg",
      title: "Accessories",
      mtitle: "Air Fryer with...",
      price: "$300.00",
    },
    {
      id: 3,
      image: "/images/4.jpg",
      title: "Accessories",
      mtitle: "Classical Chair...",
      price: "$905.00",
    },
    {
      id: 4,
      image: "/images/5.jpg",
      title: "Accessories",
      mtitle: "Stainless Steel...",
      price: "$705.00",
    },
  ];
export default function CardData() {
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
                    <p className="text-gray-500">{data.price}</p>
                    <button className='text-black border rounded-full bg-green-400'
                    onClick={(()=>{
                      CheckOut({
                        lineItems: [{price:"price_1NXMyALYXKEUBii0EhgLyv0o",quantity:1}]
                      })
                    })}
                
                  >Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}
