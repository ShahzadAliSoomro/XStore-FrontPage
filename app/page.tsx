import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'

export default function Home() {
  return (
    
   <div className='bg-[#FFFFFF] '>
    <Navbar />
    <HeroSec />
   </div> 
  )
}
