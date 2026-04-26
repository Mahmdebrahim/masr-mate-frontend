import { Star, LanguagesIcon, BadgeCheck, MapPin, Users,ShieldCheck    } from "lucide-react";
import Button from '../../../shared/components/ui/Button.jsx'
import {assets} from '../../../../src/assets/assets.js'
import { useLocation } from "react-router-dom";


export default function PaymentCompanionCard({
  name,
  imageBackground,
  imageCompanion,
  place,
  rating,
  reviews,
  price,
  description,
  languages = [],
  className = "",
}) {
  const location  = useLocation();
  const cleanPath = location.pathname.slice(1);
  console.log(cleanPath);
  
  return (
    <div className=" flex flex-wrap items-center justify-center gap-4 ">
      <div className={`flex-1 basis-62.5 max-w-md bg-white shadow-md rounded-3xl pb-4 overflow-hidden border-0 border-gray-200 ${className}`}>
        {/* Backround */}
        <div className="relative">
        <img
          className="w-full h-32 object-cover object-top"
          src={assets.piramed}
          alt={name}
        />
        <div className=" flex items-center gap-2 absolute bottom-2 left-2">
        {/* comPhoto */}
          <div className=" p-1 bg-white rounded-full shadow-md flex items-center justify-center">
            <img 
            className="w-16 h-16 rounded-full object-cover block"
            src={assets.man} 
            alt={name} 
            />
          </div>
        {/* Information Companion */}
          <div className="text-white">
            <h1 className="text-2xl font-semibold">Mahmoud Abdelsalam</h1>
            <div className="flex items-center text-[#C5A059]">
              <Star size={16} />
              <p className="mx-1 ">4.8</p>
              <p className="text-gray-300">(128 reviews)</p>
            </div>
          </div>
        {/* END Information Companion */}

        </div>
        {/* END Companion Photo */}

        </div>
        {/*END Backround */}

        {/* Booking Details */}

        <div className="flex flex-col p-4">
          <div className="border-b border-gray-300 ">
            <div className="flex ">
              <div className="w-full flex justify-between items-center gap-1">
                <h2 className="text-sm text-gray-400 font-semibold">Booking Details</h2>
                <div className="px-2 h-5 flex items-center rounded-md bg-gray-300 text-black">
                <p className="text-sm font-semibold">5 Hours</p>
              </div>
              
              </div>
              
            </div>
            <div>
              <p className="text-md text-blue-900 text-2xl font-bold mb-4 ">Historic Alexandria Tour</p>
            </div>
            </div>
            
        {/* Place and People */}

            <div className="border-b border-gray-300 ">
            <div className="flex  my-3">
              <div className="w-full flex justify-between items-center gap-1">
                <div className="flex items-center justify-between gap-1">
                <MapPin className="text-blue-900" size={18}/>
                <h2 className="text-md text-black font-semibold">Alexandria</h2>
                </div>
                <div className="flex items-center justify-between gap-1">
                <Users  className="text-blue-900" size={18}/>
                <h2 className="text-md text-black font-semibold">3 People</h2>
                </div>
              
              </div>
              
            </div>

            </div>

        {/* Fees */}

            <div className="border-b border-gray-300 ">
            <div className="flex flex-col gap-y-2 my-3">
              <div className="w-full flex justify-between items-center gap-1">
                <div className="flex  items-center justify-between gap-1">
                <p className="text-md text-gray-500 ">Guide Fee($15/hr x 5)</p>
                </div>
                <div className="flex  items-center justify-between gap-1">
                <p className="text-md text-black font-semibold">$75.00</p>
                </div>
              
              </div>

                <div className="w-full flex justify-between items-center gap-1">
                <div className="flex  items-center justify-between gap-1">
                <p className="text-md text-gray-500 ">Service Fee</p>
                </div>
                <div className="flex  items-center justify-between gap-1">
                <p className="text-md text-black font-semibold">$5.00</p>
                </div>
              
              </div>
              
            </div>

            </div>

        {/* Total Price */}

            <div className="flex justify-between text-2xl font-bold text-blue-900 my-4">
              <h5>Total Amount</h5>
              <p className="text-3xl">$80.00</p>
            </div>

          {cleanPath == "CofirmedPayment" &&
                    <div className="flex  items-center px-4 py-3 gap-2 mt-2 bg-[#F8FAFC] rounded-2xl">
            <div className="flex justify-center items-center w-12 h-10 rounded-xl bg-[#003366]/20">
              <ShieldCheck color="#003366" />
            </div>
            <p className="text-[#64748B] text-sm">This booking is protected by EgyptGuide's Secure Travel Gurarante</p>
          </div> 
          }
        </div>
        
      </div>
    </div>
  );
}
