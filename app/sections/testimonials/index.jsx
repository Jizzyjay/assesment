"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import lady from '../../assets/lady3.svg';
import guy from '../../assets/guy2.svg';
import guy2 from '../../assets/guy3.svg';
import quote from '../../assets/quote.svg'

const testimonials = [
  {
    id: 1,
    quote:
      "Ajarra transformed our annual conference planning process. The vendor connections saved us countless hours of research and negotiations.",
    name: "Sarah Johnson",
    position: "Event Director, TechCorp",
    avatar: lady,
  },
  {
    id: 2,
    quote:
      "The end-to-end event management services exceeded our expectations. Every detail was handled professionally.",
    name: "Daniel Isaac",
    position: "Marketing Manager, Global Retail",
    avatar: guy,
  },
  {
    id: 3,
    quote:
      "Outstanding coordination and flawless execution. Our product launch was a complete success thanks to their expertise.",
    name: "Michael Chen",
    position: "Product Manager, StartupXYZ",
    avatar: guy2,
  },
  {
    id: 4,
    quote:
      "Ajarra transformed our annual conference planning process. The vendor connections saved us countless hours of research and negotiations.",
    name: "Sarah Johnson",
    position: "Event Director, TechCorp",
    avatar: lady,
  },
  {
    id: 5,
    quote:
      "The end-to-end event management services exceeded our expectations. Every detail was handled professionally.",
    name: "Daniel Isaac",
    position: "Marketing Manager, Global Retail",
    avatar: guy,
  },
  {
    id: 6,
    quote:
      "Outstanding coordination and flawless execution. Our product launch was a complete success thanks to their expertise.",
    name: "Michael Chen",
    position: "Product Manager, StartupXYZ",
    avatar: guy2,
  },
];

const index = () => {
  return (
    <div className="my-8 overflow-hidden">
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-[20px] md: text-[24px] lg:text-[32px] font-bold text-black mb-4">
          Over 1000+ people trust us
        </h1>
        <p className="text-2xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Don&apos;t just take our word for it. Here&apos;s what businesses and{" "}
          <br />
          vendors have to say about Ajarra.
        </p>
      </div>

      <div className="flex gap-1 animate-scroll-slow py-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="relative min-w-[560px] flex items-center justify-center"
          >
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={200}
              height={200}
              draggable={false}
              className="relative top-0 left-15 z-100 w-38 h-38 rounded-full object-cover border-2 border-[#F9F4F1]"
            />

            <div className="relative w-[420px] flex flex-col items-start justify-center flex-shrink-0 bg-[#F9F4F1] rounded-[48px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 pl-24 mx-4 ">
              <Image
                src={quote}
                alt={quote}
                width={20}
                height={20}
                draggable={false}
                className="absolute top-7 left-18"
              />
              {/* Quote */}
              <div className="w-[286px] mb-6">
                <p className="text-base font-light text-[#424142] leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>

              {/* Profile Section */}
              <div className="flex items-center space-x-4">
                <div className="flex-1 gap-1">
                  <p className="text-sm font-bold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="font-light text-[#424142] text-xs">
                    {testimonial.position}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-[#F1C644] fill-[#F1C644] mr-0.5"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-slow {
          animation: scroll-slow 60s linear infinite;
        }

        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default index;
