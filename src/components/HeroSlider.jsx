import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "swiper/css";

import s1 from "../assets/images/slider1.jpg";
import s2 from "../assets/images/slider2.jpg";
import s3 from "../assets/images/slider3.jpg";
import s4 from "../assets/images/slider4.jpg";
import s5 from "../assets/images/slider5.jpg";
import s6 from "../assets/images/slider6.jpg";
import s7 from "../assets/images/slider7.jpg";
import s8 from "../assets/images/slider8.png";

const slides = [s1, s2, s3, s4, s5, s6, s7, s8];

const links = [
  { text: "Know Your User-ID",          red: false, to: "#" },
  { text: "Retail User Login",           red: true,  to: "/login" },
  { text: "Corporate User Login",        red: true,  to: "/login" },
  { text: "Self User Creation",          red: false, to: "#" },
  { text: "Forgot/Create Password",      red: false, to: "#" },
  { text: "Password Creation Process",   red: false, to: "#" },
  { text: "Register For Mobile Banking", red: false, to: "#" },
];

const SLIDER_H = 270;
const PANEL_H  = 370;

export default function HeroSlider() {
  const swiperRef = useRef(null);

  const btn = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    background: "#cc2229",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    color: "#ffffff",
    fontSize: "11px",
    fontWeight: "900",
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex items-start gap-8">

        {/* SLIDER */}
        <div className="min-w-0 relative" style={{ width: "860px", height: SLIDER_H, paddingTop: "1.5px" }}>

          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            loop
            style={{ height: SLIDER_H }}
          >
            {slides.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt=""
                  style={{ width: "100%", height: SLIDER_H, objectFit: "cover", display: "block" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PREV */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            style={{ ...btn, left: "8px" }}
          >
            &#10094;
          </button>

          {/* NEXT */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            style={{ ...btn, right: "8px" }}
          >
            &#10095;
          </button>

        </div>

        {/* LOGIN PANEL */}
        <div className="shrink-0 flex flex-col select-none" style={{ width: "270px", height: PANEL_H }}>
          {links.map((link, i) => {
            const Component = link.to === "#" ? "a" : Link;
            const props = link.to === "#" ? { href: "#" } : { to: link.to };
            return (
              <Component
                key={i}
                {...props}
                className={`flex flex-1 items-center px-5 text-white text-[14px] font-semibold border-b border-white/20 transition-colors duration-150 ${
                  link.red
                    ? "bg-[#e8131a] hover:bg-[#1a7bc4]"
                    : "bg-[#1a7bc4] hover:bg-[#e8131a]"
                }`}
              >
                <span>{link.text}</span>
              </Component>
            );
          })}
        </div>

      </div>
    </div>
  );
}
