import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import GlobalCard from './components/globalcard/GlobalCard'
import NewArrivals from './components/newest/NewArrivals'

export default function Home() {
  return (
    
   <div className='bg-[#FFFFFF] '>
    <Navbar />
    <HeroSec />
    <GlobalCard />
    <div>
      <NewArrivals />
    </div>
    
   </div> 
  )
}
