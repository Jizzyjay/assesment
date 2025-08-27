import React from "react";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/app/components/Button";
import heroImage from "../../assets/Hero image.svg";
import heroImage1 from "../../assets/1.svg";
import heroImage2 from "../../assets/2.svg";
import heroImage3 from "../../assets/3.svg";
import guy from "../../assets/guy.svg";
import girl from "../../assets/girl.png";

const HeroComponent = () => {
  return (
    <div className="w-full px-6 md:px-[30px] lg:px-[60px] xl:px-[90px] py-8 bg-white">
      <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="md:w-[30%]">
          <div className="space-y-4 mb-8">
            <h1 className="md:text-3xl xl:text-[45px] 2xl:text-5xl font-bold text-gray-900 leading-tight">
  Seamless
  <br className="hidden md:block pl-2" />
  Event
  <br className="hidden pr-2 md:block " />
  Management
  <br className="hidden pr-2 md:block" />
  & Vendor
  <br className="hidden pr-2 md:block" />
  Connections
</h1>

            <p className="text-base 2xl:text-xl text-[#424142] xl:max-w-[300px] 2xl:max-w-[363px] leading-relaxed">
              Your one-stop platform for planning events and finding premium
              vendors. Streamline your event planning process from start to
              finish.
            </p>
          </div>

          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
              <Button className="xl:w-[160px] 2xl:w-[175px] h-[56px] text-base xl:text-sm 2xl:text-base font-semibold text-gray-900 bg-[#D9B8A3] hover:text-white hover:bg-primary  px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                Get Started{" "}
                <span className="w-8 h-8 2xl:w-8 2xl:h-8 flex items-center justify-center bg-white rounded-full">
                  <ArrowRight className="w-5 h-5 text-black" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="inline-block"
            >
              <Button className="xl:w-[160px] 2xl:w-[175px] h-[56px] text-base xl:text-sm 2xl:text-base font-semibold text-gray-900 bg-[#F9f4f1] hover:text-white hover:bg-primary  px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
                Get The App
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="md:w-[60%] 2xl:w-[50%] relative flex items-center justify-center">
          <div className="w-full relative flex items-center justify-center">
            <div className="w-full max-w-[450px] max-h-[610px] relative border border-primary/90 rounded-t-full p-7 shadow-lg">
              <Image
                src={heroImage}
                alt="hero"
                width={440}
                height={610}
                draggable={false}
                className="xl:w-[400px] 2xl:w-[440px]"
              />

              <div
                className="absolute top-[53%] -left-18 flex gap-1.5 items-center justify-center px-4 py-5.5 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg max-w-xs border border-white/20"
              >
                <Image
                  src={guy}
                  alt="guy"
                  width={48}
                  height={48}
                  draggable={false}
                  className="xl:w-9 xl:h-9 2xl:w-12 2xl:h-12"
                />
                <p className="w-[150px] text-gray-800 xl:text-xs 2xl:text-sm font-normal">
                  Event planning just got less stressful.
                </p>
              </div>
              <div
                className="absolute top-[23%] -right-14 flex gap-1.5 items-center justify-center px-4 py-5.5 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg max-w-xs border border-white/20"
              >
                <Image
                  src={girl}
                  alt="girl"
                  width={48}
                  height={48}
                  draggable={false}
                  className="xl:w-9 xl:h-9 2xl:w-12 2xl:h-12"
                />
                <p className="w-[150px] text-gray-800 xl:text-xs 2xl:text-sm font-normal">
                  As a vendor, I can easily get clients and manage my bookings
                  effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[20%] hidden md:flex flex-col gap-6">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: [1, 1.2, 0.95, 1],
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
          >
            <Image
              src={heroImage2}
              alt="couple"
              width={200}
              height={262}
              draggable={false}
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: [1, 1.2, 0.95, 1],
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
          >
            <Image
              src={heroImage1}
              alt="balloons"
              width={200}
              height={262}
              draggable={false}
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: [1, 1.2, 0.95, 1],
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
          >
            <Image
              src={heroImage3}
              alt="decoration"
              width={200}
              height={262}
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
