import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import CompanionCard from "../../../shared/components/ui/CompanionCard";
import Button from "../../../shared/components/ui/Button";
import { assets } from "../../../assets/assets";

export default function ExploreCompanions() {
  const [activeFilter, setActiveFilter] = useState("Licensed");

  const filters = ["Licensed", "Local"];

  // Mock data adapted for CompanionCard
  const companions = [
    {
      id: 1,
      name: "Ahmed Ali",
      image: assets.man,
      rating: 4.9,
      reviews: 120,
      price: 20,
      description: "History buff, loves showing ancient Egypt. Let's explore together.",
      languages: ["English", "Arabic"],
    },
    {
      id: 2,
      name: "Sara Mohamed",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      reviews: 95,
      price: 25,
      description: "Cairo born and raised, food tour expert. I will show you the best local food.",
      languages: ["English", "Spanish"],
    },
    {
      id: 3,
      name: "Mahmoud Hassan",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
      rating: 4.7,
      reviews: 78,
      price: 18,
      description: "Alexandria native. Let's explore the Mediterranean pearl together.",
      languages: ["English", "French", "Arabic"],
    },
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 w-full">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#003366]">
              Explore companions
            </h2>
            <p className="text-gray-500 mt-2 text-lg">
              Discover local experts and licensed guides for your next
              adventure.
            </p>
          </div>
          <div className="flex-1 max-w-md text-gray-500 text-sm md:text-base">
            All-inclusive vacations and flights to the Caribbean, Indonesian,
            and more than 1,300 destinations worldwide. Let's explore now.
          </div>
        </div>

        {/* Filters Area */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-2">
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "primary" : "outline"}
                size={"sm"}
                className={"rounded-full"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {companions.map((comp) => (
            <CompanionCard
              className="basis-auto! max-w-full! m-0"
              key={comp.id}
              name={comp.name}
              image={comp.image}
              rating={comp.rating}
              reviews={comp.reviews}
              price={comp.price}
              description={comp.description}
              languages={comp.languages}
            />
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 font-medium border-gray-300 text-gray-700"
          >
            Show more
          </Button>
        </div>
      </div>
    </section>
  );
}
