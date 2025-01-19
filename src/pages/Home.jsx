import React from 'react';
import chain from '../img/chain1.png'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-[#EDE8E3] grid justify-center justify-items-center max-sm:pt-5 ">
      <div className='flex justify-stretch items-center max-sm:grid max-sm:justify-stretch max-sm:items-center ' >
        <div className=' sm:pt-40 max-sm:pl-5 ' ><img src={chain} alt="chain" className=' w-[270px] h-[270px] max-sm:w-[180px] max-sm:h-[180px] ' /></div>
        <div className='sm:pl-40 md:pt-40  grid justify-center justify-items-center  ' >
            <h2 className=' font-sans font-semibold text-6xl text-black max-sm:text-[40px] leading-normal ' >
              The
            </h2>
            <h2 className=' font-sans font-semibold text-6xl text-black max-sm:text-[40px] leading-normal ' >
              Watching Glass
            </h2>
            <h4 className=' font-sans font-semibold text-4xl text-[#3D3D3D] max-sm:text-2xl leading-normal ' >
              Your Path, Clearly Seen
            </h4>
        </div>
      </div>
      <div className='sm:pb-40 max-sm:pr-5 ' >
        <Link to='/Web1' >
          <button className='bg-[#31CD63] text-white w-[335px] h-[60px] font-sans font-semibold text-base rounded-lg ' >READ MY FUTURE!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;