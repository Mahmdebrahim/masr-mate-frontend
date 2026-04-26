import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Donald Jackman",
      role: "Solo Traveler from UK",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      content:
        "Masr Mate made my trip unforgettable! Finding a friendly local companion who knows the history made all the difference.",
      rating: 5,
    },
    {
      id: 2,
      name: "Richard Nelson",
      role: "Photographer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      content:
        "Clean, easy to use, and secure. I felt safe and truly connected to the local culture thanks to my verified guide.",
      rating: 5,
    },
    {
      id: 3,
      name: "James Washington",
      role: "History Enthusiast",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      content:
        "This platform is incredible. It connects you with genuine locals. My companion felt like a friend showing me around their city.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#F3F6F8]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            Travelers' Experiences
          </h2>
          <p className="text-sm md:text-base text-gray-500 mb-6 max-w-2xl mx-auto">
            We have collected some testimonials from our users who explored
            Egypt with our reliable companions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col border border-gray-100 p-8 rounded-2xl bg-white shadow-xs hover:shadow-md transition-shadow"
            >
              <Quote className="text-[#003366] w-10 h-10 mb-5 opacity-20" />

              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#E6B34B] fill-[#E6B34B]"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-8 grow leading-relaxed text-[15px]">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-gray-900 font-bold text-base">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
