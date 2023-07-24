import React from 'react'
import Image from 'next/image'

export default function BnrShopping() {
  return (
    <div className='mx-auto max-w-screen-2xl pt-20'>
        <div className=''>
            <div className='flex justify-center'>
                <h2 className='text-black text-2xl font-bold'>Don't miss out on these offers!</h2>
            </div>
            <div className='border border-orange-600 '>
                <div className='p-5'>
                    <div className=''>
                        <div>
                            <Image src="" width={500} height={500} alt='banner'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
