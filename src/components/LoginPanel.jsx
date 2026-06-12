import React from "react";

const links = [
  { text: "Know Your User-ID",             red: false },
  { text: "Retail User Login",              red: true  },
  { text: "Corporate User Login",           red: true  },
  { text: "Self User Creation",             red: false },
  { text: "Forgot/Create Password",         red: false },
  { text: "Password Creation Process",      red: false },
  { text: "Register For Mobile Banking",    red: false },
];

export default function LoginPanel() {
  return (
    <div className="flex flex-col select-none" style={{ width: "270px", minHeight: "460px" }}>
      {links.map((link, i) => (
        <a
          key={i}
          href="#"
          className={`flex flex-1 items-center justify-between px-5 text-white text-[14px] font-semibold border-b border-white/20 transition-colors duration-150 ${
            link.red
              ? "bg-[#cc2229] hover:bg-[#1a7bc4]"
              : "bg-[#1a7bc4] hover:bg-[#cc2229]"
          }`}
          style={{ minHeight: "65px" }}
        >
          <span>{link.text}</span>
          <span className="text-[16px] opacity-80">»</span>
        </a>
      ))}
    </div>
  );
}
