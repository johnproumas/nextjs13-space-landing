import Image from 'next/image';

import profilePicture from '../public/profile-picture.png';
import mainBanner from '../public/main-banner.jpg';

// import { HiOutlineSquaresPlus } from 'react-icons/hi2';
import { TbTriangleSquareCircle } from 'react-icons/tb';
import { BsCircleSquare } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { HiLightningBolt, HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { BiBuildingHouse } from 'react-icons/bi';

export default function Home() {
  return (
    <main id='main-story' className='h-screen flex flex-col justify-between items-center bg-zinc-900'>
      <header id="header" className='flex items-center justify-between gap-6 px-4 py-4 relative z-10'>
        <div className='flex flex-row content-center items-center'>
          <TbTriangleSquareCircle size={30} className='text-slate-200' strokeWidth={1.5} />
          <BsCircleSquare size={23} className='text-slate-200 ml-4 mr-2 double-circles' />
          <span className='text-slate-200'>Mr. Tour</span>
        </div>
        <nav className='flex justify-end grow'>
          <ul className='flex text-slate-200 gap-3 lg:gap-7 transition-all ease-in'>
            <li>Home</li>
            <li>About</li>
            <li>Destinations</li>
            <li>Tours</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div className='lg:mx-5'>
          <ul className='flex gap-3'>
            <li><AiOutlineBell size={23} className='text-slate-200' /></li>
            <li><HiOutlineLocationMarker size={23} className='text-slate-200' /></li>
          </ul>
        </div>
        <div className='flex items-center'>
          <div id="box-container" className='flex items-center gap-5 bg-orange-400 py-1 px-1 pl-3 mr-3 rounded-xl'>
            <AiOutlineStar size={20} className='text-slate-200' />
            <div className='bg-zinc-900 px-3 py-2 rounded-xl'>
              <HiLightningBolt size={15} className='text-slate-200 border border-slate-200 rounded-full p-0.5 w-5 h-5' />
            </div>
          </div>
          <div id="my-account" className='flex items-center cursor-pointer'>
            <Image src={profilePicture} alt='test' width={30} height={30} />
            <RiArrowDownSLine size={20} className='text-slate-400' />
          </div>
        </div>
      </header>

      <section id="middle" className='flex flex-col items-center justify-center px-4 text-center relative z-10'>
        <h1 className='max-w-3xl text-slate-200 text-4xl md:text-8xl transition-all ease-in'>Discover <span className='font-bold'>the best lovely places</span></h1>

        <div className='max-w-5xl flex gap-10 mt-10'>
          <div className='flex items-center gap-3 basis-1/4'>
            <div className='bg-slate-200 rounded p-2'>
              <BiBuildingHouse size={25} className=' text-orange-400' />
            </div>
            <div className='text-left text-slate-200'>
              <div className='text-2xl font-semibold leading-tight'>725+</div>
              <div className='text-xs font-extralight'>Happy Customers</div>
            </div>
          </div>

          <div className='flex items-center gap-3 basis-1/4'>
            <div className='bg-slate-200 rounded p-2'>
              <BiBuildingHouse size={25} className=' text-orange-400' />
            </div>
            <div className='text-left text-slate-200'>
              <div className='text-2xl font-semibold leading-tight'>725+</div>
              <div className='text-xs font-extralight'>Happy Customers</div>
            </div>
          </div>

          <div className='flex items-center gap-3 basis-1/4'>
            <div className='bg-slate-200 rounded p-2'>
              <BiBuildingHouse size={25} className=' text-orange-400' />
            </div>
            <div className='text-left text-slate-200'>
              <div className='text-2xl font-semibold leading-tight'>725+</div>
              <div className='text-xs font-extralight'>Happy Customers</div>
            </div>
          </div>

          <div id='custom-border-left' className='flex basis-1/4 text-left text-slate-200 relative pl-4'>
            <p>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.
            </p>
          </div>
        </div>
      </section>

      <section id="bottom" className='px-4 pb-4 z-10'>
        <div className='grid grid-cols-4 h-44'>
          <div className='flex justify-center items-center bg-[#313EF7] text-slate-200 rounded-l-xl p-4'>
            <h2 className='font-medium text-xl'>Top values for yoy</h2>
          </div>

          <div className='flex flex-col justify-end bg-orange-400 text-slate-200 p-4'>
            <h2 className='font-medium text-xl pb-2'>Top values for you</h2>
            <p className='text-sm'>We make quality-driven, ethical and mindful pet products.</p>
          </div>

          <div className='flex flex-col justify-end bg-[#E4DFFC] text-[#313EF7] p-4'>
            <h2 className='font-medium text-xl pb-2'>Top values for you</h2>
            <p className='text-sm'>We make quality-driven, ethical and mindful pet products.</p>
          </div>

          <div className='flex flex-col justify-end bg-[#196E86] text-slate-200 rounded-r-xl p-4'>
            <h2 className='font-medium text-xl pb-2'>Top values for you</h2>
            <p className='text-sm'>We make quality-driven, ethical and mindful pet products.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
