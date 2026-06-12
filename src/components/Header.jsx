import React from "react";
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/logo1.png";
import toll from "../assets/images/toll-free.png";

export default function Header() {
  return (
    <header className="w-full bg-white select-none">
      <div className="max-w-[1200px] mx-auto px-4 pt-10 pb-8 flex justify-between">

        {/* LEFT */}
        <div className="flex items-start gap-19">

          <img
            src={logo}
            alt="Union Bank"
            className="h-[54px] object-contain mt-2"
          />

          <img
            src={logo1}
            alt="Azadi"
            className="h-[54px] object-contain mt-0"
          />

        </div>

        {/* RIGHT */}
        <div className="flex items-start gap-10">

          {/* LANGUAGE */}
          <div className="flex items-center mt-[28px]">

            <span className="text-[13px] text-black mr-1">
              Language:
            </span>

            <select className="h-[20px] border border-gray-500 text-[13px] px-1 bg-white">
              <option>Choose Language</option>
              <option>English</option>
              <option>हिंदी</option>
            </select>

          </div>

          {/* TOLL FREE */}
          <div className="flex flex-col">

            <h2 className="text-[18px] font-normal mb-3 text-black text-center">
              All-India Toll Free Number
            </h2>

            <div className="flex items-center">

              <img
                src={toll}
                alt="Toll Free"
                className="w-[24px] h-[24px] mr-3"
              />

              <div className="bg-[#005da4] rounded-[2px] overflow-hidden">

                <div className="text-white font-bold text-[13px] px-4 py-[2px] whitespace-nowrap">
                  1800 222 243 / 1800 425 15 15
                </div>

                <div className="text-white font-bold text-[13px] px-4 py-[2px] whitespace-nowrap">
                  1800 208 2244 / 1800 22 22 44
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}