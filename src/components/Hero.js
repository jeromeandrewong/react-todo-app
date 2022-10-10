import React from "react";
import hero from "../herobg.png";
const Hero = () => {
  return (
    <div>
      <section className="absolute top-0 -z-10">
        <img src={hero} className="h-screen" alt="" />
      </section>
    </div>
  );
};

export default Hero;
