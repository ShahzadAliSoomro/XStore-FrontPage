import React from 'react'
import Image from 'next/image'
import BnrCard from './BnrCard'

export default function BnrShopping() {
  return (
    <div className='mx-auto max-w-screen-2xl pt-20'>
        <div className=''>
            <div className='flex justify-center items-center flex-col space-y-3'>
                <h2 className='text-black text-2xl font-bold'>Don't miss out on these offers!</h2>
                <div className='flex flex-cols-4 justify-center text-lg font-medium '>
                    <div className='border p-3 '>
                        <p className='text-red-400 '> `Electronic (12)`</p>
                    </div>
                    <div className='border p-3 bg-gray-50'>
                        <p className='text-black'> `Fashion (9)`</p>
                    </div>
                    <div className='border p-3 bg-gray-50'>
                        <p className='text-black'> `Furniture (15)`</p>
                    </div>
                    <div className='border p-3 bg-gray-50'>
                        <p className='text-black'> `Groceries (3)`</p>
                    </div>
                </div>
            </div>
            <div className='border border-orange-600 '>
                <div className='p-5'>
                    <div className='flex relative justify-end'>
                        <div className='w-full'>
                            <Image src="/images/1.jpg" width={1500} height={1500} alt='banner' className='h-52 w-full'/>
                        </div>
                        <div className='flex flex-col absolute space-y-5 p-5 justify-end'>
                            <h1 className='text-black font-bold text-4xl w-96 '>Save upto 50% flate on Eletronic items</h1>
                            <p className='text-gray-500 text-sm'>Save up to $100 on select washing machine only.</p>
                            <h3 className='text-red-500 font-bold text-xl'>Start Shopping</h3>
                        </div>
                    </div>
                </div>
                <BnrCard />
            </div>
        </div>

    </div>
  )
}
