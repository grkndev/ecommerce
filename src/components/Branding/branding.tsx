import React from "react";

export default function Branding() {
  return (
    <div
      style={{
        backgroundImage: `url(/BRANDING.png)`,
      }}
      className="w-full flex justify-between text-white p-6 bg-cover resize-x"
    >
      <p className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl flex flex-col sm:flex-row items-center text-center">
        <span>ALWAYS&nbsp;</span>BE KING
      </p>
      <p className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl flex flex-col sm:flex-row items-center text-center">
        <span>BELIVE&nbsp;</span>YOUR CULTURE
      </p>
      <p className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl flex flex-col sm:flex-row items-center text-center">
        <span>ALWAYS&nbsp;</span>BE QUEEN
      </p>
    </div>
  );
}
