import React from 'react'
import { assets } from '../../../assets/assets'
export default function () {
  return (
    <div
      className="max-w-7xl mx-auto h-100 relative flex flex-col justify-center overflow-hidden  bg-no-repeat bg-cover bg-center"
    >
      <img src={assets.banner2} className='rounded-3xl' alt="banner" />
    </div>
  );
}
