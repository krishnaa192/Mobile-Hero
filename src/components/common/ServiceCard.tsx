
import Image from "next/image";


import { Service } from '@/types/Service';

type ServiceCardProps = Service & {
  navigation?: () => void;
};

export default function ServiceCard({
  image,
  title,
  subtitle,
  navigation,
}:ServiceCardProps) {
  return (
   <div className="w-full">
   <div
  className="
    h-full
    rounded-2xl
    overflow-hidden
    bg-white
    shadow-lg
    shadow-black/30
    hover:bg-zinc-100
    hover:shadow-2xl
    hover:shadow-indigo-300/40
    hover:-translate-y-2
    transition-all
    duration-300
    cursor-pointer
  "
>
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={title}
        />

        <div className="p-6">

          <p className="tracking-widest text-[16px] font-medium text-black mb-2 ">
          
               {title}
          </p>

          <div className="flex items-center gap-2 justify-between">

            <p className="text-gray-400 text-[16px]  leading-relaxed">
            {subtitle}
            </p>

            <button className="text-white  rounded-full  p-2 inline-flex items-cente bg-[#386641]" onClick={navigation}>

             

              <svg
                className="w-4 h-4 ml-1"
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
        </div>
      </div>
    </div>
  );
}