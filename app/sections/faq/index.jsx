"use client";

import { useState } from "react";
import open from "../../assets/open.svg";
import cancel from "../../assets/cancel.svg";
import Image from "next/image";

const Index = () => {
  const [openItems, setOpenItems] = useState(new Set());

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

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-white max-w-4xl mx-auto px-6 md:px-8 lg:px-0 pt-8 pb-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600">
          Get answers to common questions about Ajara event marketplace.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openItems.has(item.id);

          return (
            <div
              key={item.id}
              className={`bg-[#F3E9E2] transition-[border-radius] duration-500 overflow-hidden
              ${isOpen ? "rounded-lg" : "rounded-full"}`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-3 text-left flex justify-between items-center cursor-pointer"
                aria-expanded={isOpen}
              >
                <p className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold text-[#424142] pr-2">
                  {item.question}
                </p>
                <div className="flex-shrink-0">
                  {isOpen ? (
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

              {isOpen && (
                <div className="px-6 pb-4">
                    <p className="text-[#424142] text-base font-[300] leading-relaxed">
                      {item.answer}
                    </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
