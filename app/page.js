import React from "react";
import Transform from "./sections/transform";
import Faq from "./sections/faq";
import Hero from "./sections/hero";
import TextCarousal from "./components/TextCarousal";
import Solution from "./sections/solution";
import Works from "./sections/works";
import Testimonials from "./sections/testimonials";

const page = () => {
  return (
    <div>
      <Hero />
      <TextCarousal />
      <Solution />
      <Works />
      <Testimonials />
      <Transform />
      <Faq />
    </div>
  );
};

export default page;
