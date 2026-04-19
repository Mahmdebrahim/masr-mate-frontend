import React from 'react'

export default function CardCompanion({
    text = "",
    number = "",
    Icon = null,
}) {
  return (
                <div className="bg-white rounded-2xl shadow-md p-6 ">
                    {/* Icon */}
                {Icon && <Icon className="my-1 text-amber-500 w-8 h-8" />}
                <p className="text-blue-900 text-3xl font-bold">{number}</p>
                <p className="text-gray-500 font-semibold text-md">{text}</p>
            </div>
  )
}
