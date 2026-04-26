import React from 'react'
import { useForm , Controller} from "react-hook-form";
import { User, CreditCard,ShieldCheck, CalendarCheck  } from "lucide-react";
import { Form, Input, Select, Button } from "antd";
import CustomButton from '../../../shared/components/ui/Button.jsx'
import PaymentCompanionCard from '../../companionDashboard/Components/PaymentCompanionCard.jsx';


const { TextArea } = Input;


export default function Payment() {
    const{register , handleSubmit , control , formState: { errors }} = useForm();
    const onSubmit = (data) => {
    console.log("User Data:", data);
  };
  return (
    <div className='p-8 bg-[#F5F7F8]'>
        {/* ==============Header=============== */}

        <h1 className='text-4xl font-bold text-[#020a1e] my-4'>Secure Checkout</h1>

      <div className='grid grid-cols-3'>
        
        {/* ==============Information user=============== */}

        <div className="col-span-2  ">
            <div className='bg-white w-full max-w-4xl rounded-xl shadow p-6'>
                {/* Title */}
                <h2 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                <span><User /></span> Personal Information
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form layout="vertical">
                        {/* Row 1 */}
                            <div className='flex gap-6'>
                        {/* Full Name */}
                        <Form.Item label="Full Name" className='flex-1'>
                            <Input
                            placeholder="John Doe"
                            {...register("fullName", { required: true })}
                            />
                        </Form.Item>

                        {/* Email */}
                        <Form.Item label="Email" className='flex-1'>
                            <Input
                            placeholder="john@example.com"
                            {...register("email", { required: true })}
                            />
                        </Form.Item>
                        </div>

                        {/* Row 2 */}
                            <div className='flex gap-6'>
                        {/* Phone */}
                        <Form.Item label="Phone Number" className='flex-1 font-semibold'>
                            <Input
                            
                            placeholder="+20 1xxxxxxxxx"
                            {...register("phone", { required: true })}
                            />
                        </Form.Item>

                        {/* Country (Controller) */}
                        <Form.Item label="Country" className='flex-1'>
                            <Controller
                            name="country"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                {...field}
                                placeholder="Select country"
                                onChange={(value) => field.onChange(value)}
                                >
                                <Select.Option value="eg">Egypt</Select.Option>
                                <Select.Option value="us">United States</Select.Option>
                                <Select.Option value="uk">United Kingdom</Select.Option>
                                <Select.Option value="ca">Canada</Select.Option>
                                </Select>
                            )}
                            />
                        </Form.Item>
                        </div>

                        {/* Special Request (Controller) */}
                        <Form.Item label="Special Request (optional)">
                            <Controller
                            name="specialRequest"
                            control={control}
                            render={({ field }) => (
                                <TextArea
                                {...field}
                                rows={4}
                                placeholder="Any special instructions..."
                                />
                            )}
                            />
                        </Form.Item>

                        </Form>
                    </form>
                </div>

            </div>

        {/* ============== Information card=============== */}

            <div className='bg-white w-full max-w-4xl rounded-xl shadow p-6 mt-6'>
                {/* Title */}
                <h2 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                <span><CreditCard   /></span> Payment Method
                </h2>
                

                        <Form layout="vertical">
                        {/* Row 1 */}
                            <div className='flex gap-6'>
                        {/* Card Number */}
                        <Form.Item label="Card Number" className='flex-1'>
                            <Input
                            placeholder="0000 0000 0000 0000"
                            {...register("fullName", { required: true })}
                            />
                        </Form.Item>

                        {/* Name on Card */}
                        <Form.Item label="Name on Card" className='flex-1'>
                            <Input
                            placeholder="john Doe"
                            {...register("email", { required: true })}
                            />
                        </Form.Item>
                        </div>
                        {/* Row 2 */}
                            <div className='flex gap-6'>
                        {/* Expire Date */}
                        <Form.Item label="Expire Date" className='flex-1'>
                            <Input
                            placeholder="MM/YY"
                            {...register("fullName", { required: true })}
                            />
                        </Form.Item>

                        {/* CVV */}
                        <Form.Item label="CVV" className='flex-1'>
                            <Input
                            placeholder="***"
                            {...register("email", { required: true })}
                            />
                        </Form.Item>
                        </div>

                        </Form>

            </div>
            
                <CustomButton
                    onClick={handleSubmit(onSubmit)}
                    variant = "primary"
                    size = "md"
                    icon = {ShieldCheck}
                    className='w-full max-w-4xl my-4'
                    fullWidth = {true}
                >Confirm Booking</CustomButton>
                

        {/* ==============End Information card=============== */}
        
        </div>
        {/* ==============End Information user=============== */}

        {/* ==============Information Companion=============== */}
        
        <div className=" col-span-1">
            <div className='sticky top-0'>
            <PaymentCompanionCard />
            <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='flex-1 basis-62.5 max-w-md mt-4 bg-[#D1FAE5] p-4 rounded-xl pb-4 overflow-hidden border border-green-200 shadow-md'>
                <div className='flex gap-2'>
                    <CalendarCheck className='text-green-700' size={24}/>
                    <h2 className='text-[#065F46] font-bold'>24 hour Cancellation policy</h2>
                </div>
                <p className='ml-8 font-semibold'>Cancle before 24 hours of the trip for a full refund. No Questions asked</p>
            </div>
            </div>
            <div className='text-gray-400 mt-4'>
                <div className='flex justify-center items-center gap-2 text-sm font-semibold '>
                    <ShieldCheck size={18}/>
                    <p>SSL Secure 256 - Bit Encryption</p>
                </div>
                <p className='text-center text-sm'>By Clicking 'Confirm Booking' you Agree to Masr Mate's Terms of Service and Privacy Policy</p>

            </div>
            </div>
        </div>

        {/* ==============End Information Companion=============== */}
      </div>
    </div>
  )
}
