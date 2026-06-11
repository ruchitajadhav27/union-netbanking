import React, { useState, useRef, useEffect } from "react";
import { menuData } from "../data/menuData";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setActiveMenu(null);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="w-full bg-[#e8131a] relative z-50" ref={navRef}>
      <div className="max-w-[1200px] mx-auto px-4 flex">
        {menuData.map((menu, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setActiveMenu(idx)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              className={`text-white text-[15px] font-normal px-4 py-[17px] whitespace-nowrap border-r border-white/30 transition-colors duration-100 ${
                activeMenu === idx ? "bg-[#1a7bc4]" : "hover:bg-[#1a7bc4]"
              }`}
            >
              {menu.title}
            </button>

            {activeMenu === idx && menu.items.length > 0 && (
              <div
                className="absolute left-0 top-full z-50 shadow-lg"
                style={{ background: "#1a7bc4" }}
                onMouseEnter={() => setActiveMenu(idx)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${menu.cols}, auto)`,
                    padding: "8px 0",
                  }}
                >
                  {menu.items.map((item, i) =>
                    item === "" ? (
                      <div key={i} />
                    ) : (
                      <a
                        key={i}
                        href="#"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "9px",
                          padding: "6px 20px",
                          textDecoration: "none",
                          color: "#ffffff",
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
                        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                      >
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "17px",
                          height: "17px",
                          borderRadius: "50%",
                          border: "2px solid #ffffff",
                          flexShrink: 0,
                          fontSize: "8px",
                          color: "#ffffff",
                          fontWeight: "bold",
                          lineHeight: 1,
                        }}>
                          &#10095;
                        </span>
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
