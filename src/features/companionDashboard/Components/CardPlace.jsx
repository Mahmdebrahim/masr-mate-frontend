import { Star, LanguagesIcon, BadgeCheck } from "lucide-react";
import Button from "./Button";

export default function CompanionCard({
  name,
  image,
  rating,
  reviews,
  price,
  description,
  languages = [],
  className = "",
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div
        className={`flex-1 basis-62.5 max-w-xs bg-white rounded-2xl pb-4 overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300 ${className}`}
      >
        <img
          className="w-full h-52 object-cover object-top"
          src={image}
          alt={name}
        />

        <div className="flex flex-col p-4">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <h2 className="text-lg">{name}</h2>
              </div>
            </div>
          </div>
          <div>
            <p className="text-left text-gray-500 my-4">{description}</p>
          </div>
          <div className="text-gray-500 font-semibold">
          </div>
            <div className="flex justify-between ">
            <div>
          <Button variant={"ghost"} widthFull={true} className="mt-4">
            View Profile
          </Button>
          </div>
          <div>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
