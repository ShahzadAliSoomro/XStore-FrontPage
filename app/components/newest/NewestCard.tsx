import React from 'react'
import Image from 'next/image'

const NewData = [
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
      {
        id: 5,
        image: "/images/7.jpg",
        title: "Groceries",
        mtitle: "Wooden Classica...",
        price: "$405.00",
      },
      {
        id: 6,
        image: "/images/8.jpg",
        title: "Accessories",
        mtitle: "Air Fryer with...",
        price: "$300.00",
      },
      {
        id: 7,
        image: "/images/9.jpg",
        title: "Accessories",
        mtitle: "Classical Chair...",
        price: "$905.00",
      },
      {
        id: 8,
        image: "/images/10.jpg",
        title: "Accessories",
        mtitle: "Stainless Steel...",
        price: "$705.00",
      },
      {
        id: 9,
        image: "/images/13.jpg",
        title: "Groceries",
        mtitle: "Wooden Classica...",
        price: "$405.00",
      },
      {
        id: 10,
        image: "/images/15.jpg",
        title: "Accessories",
        mtitle: "Air Fryer with...",
        price: "$300.00",
      },
      {
        id: 11,
        image: "/images/17.jpg",
        title: "Accessories",
        mtitle: "Classical Chair...",
        price: "$905.00",
      },
      {
        id: 12,
        image: "/images/5.jpg",
        title: "Accessories",
        mtitle: "Stainless Steel...",
        price: "$705.00",
      },
]

export default function NewestCard() {
  return (
    <div className='p-5 grid'>
      <div className='grid grid-cols'>
      <div className="grid grid-cols-4 gap-14">
            {NewData.map((data) => (
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
    </div>
  )
}
