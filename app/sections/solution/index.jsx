import React from "react";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/app/components/Button";
import group from "../../assets/Group.svg";
import bg from "../../assets/bg.svg";

const index = () => {
  return (
    <div className="bg-white min-h-screen overflow-hidden py-6 px-6 md:px-[30px] lg:px-[60px] xl:px-[90px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-[32px] font-bold text-black mb-4">
            Comprehensive Event Solutions
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From full-service event management to connecting you with the
            perfect <br /> vendors, we&apos;ve got all your event needs covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 mb-4 pb-4 border-b border-[#D2D2D2]">
              <h2 className="text-2xl font-bold text-black">
                Events that fit your budget
              </h2>
              <p className="text-base text-[#424142] font-light leading-relaxed">
                Share your event details, requirements, and budget through our
                intuitive platform
              </p>
            </div>

            <div className="space-y-4 mb-4 pb-4 border-b border-[#D2D2D2]">
              <h2 className="text-2xl font-bold text-black">
                Professional Coordination.
              </h2>
              <p className="text-base text-[#424142] font-light leading-relaxed">
                Our system matches you with the perfect vendors based on your
                specific needs.
              </p>
            </div>

            <div className="space-y-4 mb-4">
              <h2 className="text-2xl font-bold text-black">
                Access to exclusive vendor network.
              </h2>
              <p className="text-base text-[#424142] font-light leading-relaxed">
                Compare vendor profiles, reviews, and portfolios to make
                informed decisions.
              </p>
            </div>

            <div className="pt-6 flex">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                <Button className="xl:w-[160px] 2xl:w-[175px] h-[56px] text-base xl:text-sm 2xl:text-base font-semibold text-gray-900 bg-[#D9B8A3] hover:text-white hover:bg-primary  px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                  Get Started{" "}
                  <span className="w-8 h-8 2xl:w-8 2xl:h-8 flex items-center justify-center bg-white rounded-full">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <Image
              src={group}
              alt="Group"
              width={600}
              height={500}
              draggable={false}
              className="relative z-100"
            />
            <Image
              src={bg}
              alt="Bg"
              width={700}
              height={500}
              draggable={false}
              className="absolute -top-40 -right-25 z-10 2xl:-right-10 2xl:-top-20"
            />
            <Image
              src={bg}
              alt="Bg"
              width={700}
              height={500}
              draggable={false}
              className="absolute -bottom-40 -left-25 z-10 2xl:-left-10 2xl:-bottom-45"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
