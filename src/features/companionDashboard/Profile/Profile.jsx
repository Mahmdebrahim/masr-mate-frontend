import React from 'react'
import {assets} from '../../../../src/assets/assets.js'
import Button from '../../../shared/components/ui/Button.jsx'

import { Eye, Pencil, TimerReset, Flag, MapPin, Star} from "lucide-react";
import CardCompanion from '../Components/cardCompanion.jsx';

export default function Profile() {
  return (
    <div className='p-2'>
      <div className='w-full relative rounded-2xl aspect-16/4 '>
        <img className='w-full h-full rounded-2xl object-cover' src={assets.piramed} alt="" />
        <div className='w-full flex items-end absolute -bottom-17 pl-16  rounded-2xl '>
            <img className='w-35 h-35 bg-white p-1 rounded-2xl object-cover' src={assets.man} alt="" />
            <div className='flex justify-between w-full'>
            <div className=''>
            <div className='relative -top-1  ml-2 text-3xl  font-bold'>
            <h1 className=''>Mahmoud Abdelsalam</h1>
            </div>

            <div className='flex  mt-1 -translate-y-1'>
                <div className='p-1 text-sm w-full bg-blue-500 rounded-4xl mr-2 ml-2 shadow-[0_8px_15px_-5px_rgba(0,0,0,0.3)] '>
                    <p className='text-white font-semibold text-center leading-5'>Verifed Companion</p>
                </div>
                <div className='p-1 text-sm  w-full bg-[#C5A059] rounded-4xl shadow-[0_8px_15px_-5px_rgba(0,0,0,0.3)] '> 
                    <p className='text-blue-900 font-semibold text-center leading-5'>Licensed Guide</p>
                </div>
            </div>
            </div>


            <div className='mt-2'>
                <Button
                    variant = "secondary"
                    size = "md"
                    icon = {Eye}
                    className = "mx-2"
                >View Public Profile</Button>

                <Button
                    variant = "primary"
                    size = "md"
                    icon = {Pencil}
                >Edit Profile Info</Button>
            </div>
            </div>
                
        </div>
      </div>
      <div className='mt-26'>
        <div className='grid grid-cols-3 md:grid-cols-3 gap-8'>
            <div className='grid grid-cols-2 col-span-1 gap-4'>
                <CardCompanion
                text="Years Experience"
                number="5+"
                Icon={TimerReset}
                />

                <CardCompanion
                text="Trips Done"
                number="250+"
                Icon={Flag }
                />

                <CardCompanion
                text="Local Expert"
                number="100%"
                Icon={MapPin}
                />

                <CardCompanion
                text="User Reviews"
                number="580"
                Icon={Star}
                />



            </div>
            <div className='grid grid-cols-1 col-span-2 gap-4'>
                <div className='bg-white rounded-2xl shadow-md p-6 w-full'>
                    <h2 className='font-bold text-blue-900 text-3xl my-5'>About Me</h2>
                    <p className='text-gray-500 text-lg'>I am a Front-End Developer passionate about 
                        building clean, simple, and user-friendly web interfaces using React and Tailwind
                        CSS. I focus on writing reusable, maintainable code while paying attention to design
                        details and performance. I am continuously improving my skills and staying up to
                        date with modern web technologies to deliver better and more efficient projects.
                    </p>
                    <div className='flex items-center bg-gray-300 border-l-6 mt-5 h-10 rounded-r-lg border-amber-500'>
                        <p className='text-blue-900 text-lg font-semibold ml-2'>"Every Stone In Cairo tells a story, and i am here to help you hear it."</p>
                    </div>
                </div>
        </div>
        </div>
        <div className='mt-10 grid grid-cols-3 pr-12'>
            <div className='bg-white rounded-2xl shadow-md p-6 '>
                <h3 className='text-blue-900 font-bold'>Skils & Languages</h3>
                <div className='mt-3 '>
                    <p className='text-gray-500 font-bold'>Languages</p>
                    <div className='flex flex-wrap gap-2 mt-3'>

                    <div className='bg-stone-100 rounded-full px-3 py-0.5 flex items-center'>
                        <p className='text-center font-semibold text-blue-900'>English (Fluent)</p>
                    </div>

                    <div className='bg-stone-100 rounded-full px-3 py-0.5 flex items-center'>
                        <p className='text-center font-semibold text-blue-900'>Arabic (Native)</p>
                    </div>

                    <div className='bg-stone-100 rounded-full px-3 py-0.5 flex items-center'>
                        <p className='text-center font-semibold text-blue-900'>French (Intermediate)</p>
                    </div>

                    </div>
                    
                </div>

                <div className='mt-3 '>
                    <p className='text-gray-500 font-bold'>Expertise</p>
                    <div className='flex flex-wrap gap-2 mt-3'>
                    <div className='bg-slate-100 rounded-full px-3 py-0.5 flex items-center'>
                        <p className='text-center font-semibold text-blue-900'>Archeology</p>
                    </div>
                    <div className='bg-slate-100 rounded-full px-3 py-0.5 flex items-center'>
                        <p className='text-center font-semibold text-blue-900'>Street Photography</p>
                    </div>
                    <div className='bg-slate-100 rounded-full px-3 py-0.5 flex items-center'>
                        <p className='text-center font-semibold text-blue-900'>Gastronomy</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}
