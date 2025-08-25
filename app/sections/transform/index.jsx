import React from "react";
import apple from "../../assets/Apple.svg";
import play from "../../assets/Playstore.svg";
import Button from "@/app/components/Button";
import Image from "next/image";
import hand from "../../assets/hand.svg";

const index = () => {
  return (
    <div className="bg-[#CDBEBA] px-[74px] flex flex-row items-center justify-center">
      <div className="max-w-[400px] xl:max-w-[480px] py-[32px] flex flex-col gap-6">
        <h3 className="text-[30px] lg:text-[40px] text-black font-bold">
          Ready to Transform Your Event Experience?
        </h3>
        <p className="text-[20px] lg:text-[24px] font-normal text-black">
          Join thousands of businesses and vendors on our platform and take your
          events to the next level. Download AJARRA on Google Play or the App
          Store.
        </p>

        <div className="w-full flex flex-row items-center justify-start gap-6">
          <Button className="flex flex-row items-center bg-black border border-[#A6A6A6] cursor-pointer text-white py-[6px] px-[12px] rounded-full">
            <Image
              src={apple}
              alt="Apple"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            <p className="text-[14px] font-normal">
              Download on the
              <br />
              <span className="align-middle text-base font-bold">
                App Store
              </span>
            </p>
          </Button>

          <Button className="flex flex-row items-center bg-black border border-[#A6A6A6] cursor-pointer text-white py-[6px] px-[12px] rounded-full">
            <Image
              src={play}
              alt="Play"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            <p className="text-[14px] font-normal">
              GET IT ON
              <br />
              <span className="align-middle text-base font-bold">
                Play Store
              </span>
            </p>
          </Button>
        </div>
      </div>

      <div className="h-full">
        <Image src={hand} height={1500} width={800} className="" />
      </div>
    </div>
  );
};

export default index;
