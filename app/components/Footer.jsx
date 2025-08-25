import React from "react";
import Link from "next/link";
import Image from "next/image";
import tiktok from "../assets/tiktok.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import message from "../assets/message.svg";
import Logo from "../assets/footerLogo.svg";
import apple from "../assets/Apple.svg";
import play from "../assets/Playstore.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="relative bg-[#572514] text-white py-12 overflow-hidden">
      {/* Background Logo */}
      <div className="absolute top-[148px] left-[40px] md:left-[60px] xl:left-[103px] w-[350px] md:w-[650px] lg:w-[850px] xl:w-[1235px] h-[496px] pointer-events-none">
        <Image
          src={Logo}
          alt="Footer Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
          {/* Company Info */}
          <div className="flex flex-col items-start justify-start">
            <p className="lg:max-w-[220px] text-sm md:text-base font-medium mb-4">
              Ajarra has revolutionized the way businesses approach event
              planning and vendor management. We bridge the gap between event
              organizers and service providers, creating seamless connections
              that drive exceptional experiences.
            </p>
            <p className="text-sm md:text-base font-medium mb-4">
              Download AJARRA on Google Play or the App Store.
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

          {/* Quick Links */}
          <div className="flex flex-col lg:flex-row items-start justify-start gap-8 md:max-w-[500px]">
            <div className="flex flex-col gap-4 max-w-[200px]">
              <h3 className="text-base md:text-[20px] text-[#F0D0B3] font-bold">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/aboutUs">About Us</Link>
                </li>
                <li>
                  <Link href="/contactUs">Contact Us</Link>
                </li>
                <li>
                  <Link href="/service">Service</Link>
                </li>
                <li>
                  <Link href="/vendors">Vendors</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 lg:max-w-[200px]">
              <h3 className="text-base md:text-[20px] text-[#F0D0B3] font-bold">
                Terms
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms">Term of Service</Link>
                </li>
                <li>
                  <Link href="/policy">Policy</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 lg:max-w-[200px]">
              <h3 className="text-base md:text-[20px] text-[#F0D0B3] font-bold">
                Information
              </h3>
              <p className="text-sm md:text-base">
                Have a question? Give us a call. We’d love to hear from you.
              </p>
              <div className="flex items-center gap-2">
                <Image src={message} alt="message" width={17} height={17} />
                <p>admin@ajarra.com</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 lg:max-w-[220px]">
            <h3 className="text-base md:text-[20px] text-[#F0D0B3] font-bold">
              Get In Touch
            </h3>
            <p>
              Get access to exclusive deals and discounts when you sign up for
              our newsletter.
            </p>
            <div className="w-full flex flex-col gap-3">
              <p>Email Address</p>
              <input
                className="w-full bg-white text-black rounded-full border py-4 px-6"
                placeholder="Your Email"
              />
              <Button className="w-full cursor-pointer bg-[#F0D0B3] text-black py-4 px-6 rounded-full">
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-4">
              <Image src={facebook} alt="facebook" width={27} height={27} />
              <Image src={tiktok} alt="tiktok" width={27} height={27} />
              <Image src={instagram} alt="instagram" width={27} height={27} />
              <Image src={twitter} alt="twitter" width={27} height={27} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#606060] mt-8 pt-8 relative z-10">
          <p className="text-white font-light text-sm">
            © Copyright 2025, All Rights Reserved by <span>Ajarra</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
