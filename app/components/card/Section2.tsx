import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { MdOutlineChair, MdSoupKitchen } from 'react-icons/md'
import { GiConsoleController } from 'react-icons/gi'
import { LiaTshirtSolid} from 'react-icons/lia'
import { HiMiniComputerDesktop } from 'react-icons/hi2'

const CardData3 = [
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
]
export default function Section2() {
  return (
    <div className='mx-auto max-w-screen-2xl pt-20'>
        <div className='flex gap-10'>
            <div className='flex flex-col space-y-5 '>
                <h1 className='text-black text-4xl font-bold '>Find Exactly What You Need</h1>
                <p className='text-gray-500'>XStore is World's largest online marketplace connecting buyers with suppliers.</p>
            </div>
            <div className='flex flex-col bg-white shadow box-border space-y-8 p-4 items-center'>
                <BsPhone className='w-16 h-16 text-black'/>
                <h3 className='text-black'>Eletronics</h3>
            </div>
            <div className='flex flex-col box-border space-y-8   p-4 items-center'>
                <MdSoupKitchen className='w-16 h-16 text-black'/>
                <h3 className='text-black'>Kitchen</h3>
            </div>
            <div className='flex flex-col box-border space-y-8   p-4 items-center'>
                <GiConsoleController className='w-16 h-16 text-black'/>
                <h3 className='text-black'>Console</h3>
            </div>
            <div className='flex flex-col box-border space-y-8   p-4 items-center'>
                <LiaTshirtSolid className='w-16 h-16 text-black'/>
                <h3 className='text-black'>Apparels</h3>
            </div>
            <div className='flex flex-col box-border space-y-8 p-4 items-center'>
                <MdOutlineChair className='w-16 h-16 text-black'/>
                <h3 className='text-black'>Furniture</h3>
            </div>
            <div className='flex flex-col box-border space-y-8 shadow  p-4 items-center'>
                <HiMiniComputerDesktop className='w-16 h-16 text-black'/>
                <h3 className='text-black'>Computer</h3>
            </div>
            
             </div>
        </div>
  )
}
