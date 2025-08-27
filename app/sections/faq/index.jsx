"use client";

import React, { useState } from "react";
import open from "../../assets/open.svg";
import cancel from "../../assets/cancel.svg";
import Image from "next/image";

const FAQ = () => {
  const [openItems, setOpenItems] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What types of events do you handle?",
      answer:
        "We specialize in delivering exceptional services for all events — from conferences and product launches to team-building experiences, weddings, birthdays, and other celebrations. Whether it's an intimate gathering of 10 or a large-scale event with over 10,000 attendees, we handle it with precision and creativity.",
    },
    {
      id: 2,
      question: "Is there customer support available?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 day delivery. International shipping times vary by location.",
    },
    {
      id: 3,
      question: "How do you handle event changes or cancellations?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination. International orders may be subject to customs fees and import duties.",
    },
    {
      id: 4,
      question: "How do I get matched with events?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can use this number on our website or the carrier's site to monitor your package's progress.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItems(openItems === index ? -1 : index);
  };

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[32px] font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about Ajarra event maarket place.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#F3E9E2] overflow-hidden ${
                openItems === index
                  ? "bg-[#FBF8F6] rounded-lg"
                  : "bg-[#F3E9E2] rounded-full"
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between cursor-pointer py-6 px-8 text-left group transition-colors duration-200"
              >
                <p className="text-[20px] md:text-[24px] font-mulish-sans font-semibold text-[#424142] pr-4">
                  {faq.question}
                </p>
                <div className="flex-shrink-0">
                  {openItems === index ? (
                    <Image
                      src={cancel}
                      alt="close"
                      height={25}
                      width={25}
                      className="cursor-pointer"
                    />
                  ) : (
                    <Image
                      src={open}
                      alt="open"
                      height={25}
                      width={25}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </button>

              <div
                className={`ease-in ${
                  openItems === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                style={{
                  overflow: "hidden",
                }}
              >
                <div className="px-8 pb-6">
                  <p className="text-base font-light text-[#424142] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
