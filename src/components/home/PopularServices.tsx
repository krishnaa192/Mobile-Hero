"use client";
import ServiceCard from '@/components/common/ServiceCard'

const ServiceSection = () => {

  const services = Array.from({ length: 18 }, (_, index) => ({
    image: `https://placehold.co/600x400?text=Service+${index + 1}`,
    title: [
      "Electrical Help",
      "Plumbing Help",
      "Carpentry",
      "Cleaning",
      "Painting",
      "Delivery",
      "Driving Instructor",
      "Gardening",
      "Appliance Repair",
      "IT & Computer Help",
      "Fitness Trainer",
      "Massage Therapy",
      "Event Services",
      "Pet Care",
      "Handyman",
      "Home Organizing",
      "Car Wash",
      "Senior Care",
    ][index],

    subtitle: [
      "Installation, repairs & maintenance",
      "Repairs, installation & maintenance",
      "Furniture, fixtures & custom work",
      "Home, office & deep cleaning",
      "Interior & exterior painting",
      "Fast & reliable delivery",
      "Learn safely from certified instructors",
      "Lawn care, trimming & landscaping",
      "Washing machines, fridges & more",
      "Repairs, setup & tech support",
      "Personal training at your place",
      "Relaxation & therapeutic care",
      "On-site setup & support",
      "Walking, grooming & sitting",
      "General repairs & installations",
      "Declutter, organize & optimize",
      "Interior & exterior cleaning",
      "Companion care & assistance",
    ][index],
  }));

  return (
    <section className="bg-[#f8f8f8] py-24">

 <div className="w-full px-6 lg:px-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">

          <div>
            <p className="text-[#386641] font-semibold tracking-[4px] uppercase text-sm mb-4">
              Popular Services
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold text-[#0b132b] leading-tight mb-5">
              Explore popular services
            </h2>

            <p className="text-gray-500 text-lg max-w-2xl">
              Professional help for everything on your to-do list.
            </p>
          </div>

          <button className="w-fit flex items-center gap-3 border border-gray-300 bg-white px-7 py-4 rounded-2xl text-[#386641] font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            View all services

            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>

          </button>
        </div>

        {/* Services Grid */}
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              subtitle={service.subtitle}
              navigation={() => console.log(service.title)}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;