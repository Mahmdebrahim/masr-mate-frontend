import React from 'react'
import { Check, Compass,Eye,Pencil,MessageSquare,ShieldCheck,CircleQuestionMark    } from 'lucide-react';
import Button from '../../../shared/components/ui/Button';
import PaymentCompanionCard from '../../companionDashboard/Components/PaymentCompanionCard';

export default function ConfirmedPayment() {
  return (
    <div className=' bg-[#F5F7F8]'>
    <div>
        {/* Confirmed Payment */}
      <div className='my-16 flex flex-col items-center justify-center'>
        <div className='w-18 h-18 rounded-full bg-[#2D6A4F]/20 flex items-center justify-center'>
        <div className='w-14 h-14 rounded-full bg-[#2D6A4F]/40 flex items-center justify-center'>
        <div className='w-8 h-8 border-3 border-[#2D6A4F] rounded-full flex items-center justify-center'>
            <Check color='#2D6A4F' strokeWidth={3}/>
        </div>

        </div>

        </div>

        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold my-4'>Booking Confirmed !</h1>
            <p className='text-[#475569] text-center text-md font-semibold'>
                Your Jounery With <span className='text-[#003366]'>Mahmoud Abdelsalam</span> is officially on the Calender. A Confirmation <br /> email has been sent to your inbox With all the details. </p>
        </div>

        <div className=' h-8 py-4.5 px-6 my-4 rounded-3xl border border-[#003366]/20 bg-[#003366]/10 flex items-center gap-2'>
            <p className='text-[#003366]/60 font-semibold'>Booking Reference :</p>
            <p className='text-[#003366] font-bold'>#EG-882934</p>
        </div>

      </div>
    </div>

    <div className='grid grid-cols-7 '>
        {/* Whats New ? */}

        <div className=' col-span-4  p-4'>
            <div className='w-fit mx-auto px-8 py-6  rounded-2xl bg-white shadow-md'>
                <div className='flex items-center gap-1'>
                <Compass color='#C5A059' size={22} className='translate-y-0.5' />
                <h1 className='text-2xl font-bold'>What's Next ?</h1>
                </div>

                <div className='flex items-center '>
                    <div className='w-8 h-8 rounded-full bg-[#003366] flex justify-center items-center my-8'>
                        <p className='text-lg text-center text-white'>1</p>
                        
                    </div>
                    <div className='ml-3'>
                        <h3 className='font-semibold text-lg'>Message your Companion</h3>
                        <p>Coordinate meeting points and finalize specific interests for alexandria tour.</p>

                    </div>
                </div>

                <div className='flex items-center '>
                    <div className='w-8 h-8 rounded-full bg-[#003366] flex justify-center items-center my-8'>
                        <p className='text-lg text-center text-white'>2</p>
                        
                    </div>
                    <div className='ml-3'>
                        <h3 className='font-semibold text-lg'>Check your Dashboard</h3>
                        <p>View real-time updates and digital tickets in your 'Tips' Section.</p>

                    </div>
                </div>

                <div className='flex items-center '>
                    <div className='w-8 h-8 rounded-full bg-[#003366] flex justify-center items-center my-8'>
                        <p className='text-lg text-center text-white'>3</p>
                        
                    </div>
                    <div className='ml-3'>
                        <h3 className='font-semibold text-lg'>Get ready for adventure</h3>
                        <p>Pack comfortable Walking shoes and get ready for an authentic Egyption experience!</p>

                    </div>
                </div>
        {/* Buttons */}
            <div className='flex justify-between items-center my-4 gap-4'>
                <Button
                    variant = "primary"
                    size = "md"
                    icon = {Compass}
                    fullWidth = {true}
                    className = "mx-2"
                    className="shadow-md"
                >Go to Trip</Button>

                <Button
                    variant = "secondary"
                    size = "md"
                    icon = {MessageSquare }
                    fullWidth = {true}
                    className="shadow-md"
                >Message Mahmoud</Button>
            </div>
            </div>
            <div className='flex px-24 mt-4 gap-6'>
                <div className='flex justify-center items-center  gap-1 text-[#64748B]'>
                    <ShieldCheck size={18} />
                    <p>Cancellation Policy</p>
                </div>
                <div className='flex justify-center items-center  gap-1 text-[#64748B]'>
                    <CircleQuestionMark size={18} />
                    <p>Need Help ?</p>
                </div>
            </div>
        </div>

        {/* Companion Card */}
        
        <div className=' col-span-3 p-4 '>
            <PaymentCompanionCard />
            
        </div>

    </div>
    </div>
  )
}
