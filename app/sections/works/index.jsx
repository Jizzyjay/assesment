import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import dot from "../../assets/dot.svg";
import pattern from "../../assets/pattern.svg";
import newlyWeds from "../../assets/newlyWed.png";
import lady from "../../assets/lady2.png";
import Button from "@/app/components/Button";

const WorkPlan = () => {
  return (
    <div className="bg-[#F9F4F1] min-h-screen overflow-hidden py-6 px-6 md:px-[30px] lg:px-[60px] xl:px-[90px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-[32px] font-bold text-black mb-4">
            How It Works
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A simple, streamlined process for both event planners and vendors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10 lg:mb-20">
          <div className="relative">
            <div className="w-full max-w-[450px] max-h-[730px] relative">
              <Image
                src={newlyWeds}
                alt=""
                width={500}
                height={730}
                draggable={false}
                className="relative z-100 mx-auto"
              />
              <Image
                src={pattern}
                alt=""
                width={224}
                height={224}
                draggable={false}
                className="absolute top-2 -left-0 z-10"
              />
              <Image
                src={pattern}
                alt=""
                width={224}
                height={224}
                draggable={false}
                className="absolute bottom-2 -right-3 z-10"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-[35px] font-bold text-black text-center">
              For Event Planners
            </h1>
            <div className="">
              <div className="max-w-4xl mx-auto">
                <div className="">
                  <div className="flex gap-3 items-start ">
                    <Image src={dot} alt="dot" width={40} height={40} />
                    <div className="space-y-2 mb-4 pb-4 border-b border-[#D2D2D2]">
                      <h2 className="text-[20px] font-bold text-black">
                        Define Your Event
                      </h2>
                      <p className="text-sm text-[#424142] font-light leading-relaxed">
                        Share your event details, requirements, and budget
                        through our intuitive platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start ">
                    <Image src={dot} alt="dot" width={40} height={40} />
                    <div className="space-y-2 mb-4 pb-4 border-b border-[#D2D2D2]">
                      <h2 className="text-[20px] font-bold text-black">
                        Get Matched
                      </h2>
                      <p className="text-sm text-[#424142] font-light leading-relaxed">
                        Our system matches you with the perfect vendors based on
                        your specific needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start ">
                    <Image src={dot} alt="dot" width={40} height={40} />
                    <div className="space-y-2 mb-4 pb-4 border-b border-[#D2D2D2]">
                      <h2 className="text-[20px] font-bold text-black">
                        Review & Select
                      </h2>
                      <p className="text-sm text-[#424142] font-light leading-relaxed">
                        Compare vendor profiles, reviews, and portfolios to make
                        informed decisions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start ">
                    <Image src={dot} alt="dot" width={40} height={40} />
                    <div className="space-y-2 mb-4 pb-4">
                      <h2 className="text-[20px] font-bold text-black">
                        Coordinate & Execute
                      </h2>
                      <p className="text-sm text-[#424142] font-light leading-relaxed">
                        Manage all communications and logistics through our
                        centralized platform.
                      </p>
                      {/* Plan Button */}
                      <div className="pt-2 flex">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 1 }}
                        >
                          <Button className="xl:w-[160px] 2xl:w-[175px] h-[56px] text-base xl:text-sm 2xl:text-base font-semibold text-white bg-[#5E2D1F] px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                            Plan Your Event
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-[35px] font-bold text-black text-center">
              For Event Vendors
            </h1>
            <div className="">
              <div className="max-w-4xl mx-auto">
                <div className="">
                  <div className="flex gap-3 items-start ">
                    <Image src={dot} alt="dot" width={40} height={40} />
                    <div className="space-y-2 mb-4 pb-4 border-b border-[#D2D2D2]">
                      <h2 className="text-[20px] font-bold text-black">
                        Create Your Profile
                      </h2>
                      <p className="text-sm text-[#424142] font-light leading-relaxed">
                        Showcase your services, portfolio, and pricing to
                        attract the right clients.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start ">
                    <Image src={dot} alt="dot" width={40} height={40} />
                    <div className="space-y-2 mb-4 pb-4 border-b border-[#D2D2D2]">
                      <h2 className="text-[20px] font-bold text-black">
                        Get Discovered
                      </h2>
                      <p className="text-sm text-[#424142] font-light leading-relaxed">
                        Our algorithm matches you with events that align with
                        your expertise and availability.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start ">
                    <Image src={dot} alt="dot" width={40} height={40} />
                    <div className="space-y-2 mb-4 pb-4 border-b border-[#D2D2D2]">
                      <h2 className="text-[20px] font-bold text-black">
                        Receive Inquiries
                      </h2>
                      <p className="text-sm text-[#424142] font-light leading-relaxed">
                        Get notified when event planners are interested in your
                        services.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start ">
                    <Image src={dot} alt="dot" width={40} height={40} />
                    <div className="space-y-2 mb-4 pb-4">
                      <h2 className="text-[20px] font-bold text-black">
                        Deliver Excellence
                      </h2>
                      <p className="text-sm text-[#424142] font-light leading-relaxed">
                        Provide outstanding service and build your reputation on
                        our platform.
                      </p>
                      <div className="pt-2 flex">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 1 }}
                        >
                          <Button className="xl:w-[160px] 2xl:w-[175px] h-[56px] text-base xl:text-sm 2xl:text-base font-semibold text-white bg-[#5E2D1F]  px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                            Become a Vendor
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-[450px] max-h-[730px] relative">
              <Image
                src={lady}
                alt=""
                width={500}
                height={730}
                draggable={false}
                className="relative z-100"
              />
              <Image
                src={pattern}
                alt=""
                width={224}
                height={224}
                draggable={false}
                className="absolute top-2 -right-0 z-10"
              />
              <Image
                src={pattern}
                alt=""
                width={224}
                height={224}
                draggable={false}
                className="absolute bottom-2 -left-0 z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPlan;
