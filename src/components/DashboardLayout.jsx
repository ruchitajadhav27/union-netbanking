import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import topNavNormal from "../assets/DashboardImages/topNavNormal.png";
import { navMenuData } from "../data/navMenuData";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const userName = "PRASAD WANKHADE";

  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({ left: 0, top: 0 });
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
        setHoveredSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTabHover = (menu, e) => {
    if (menu.submenus.length === 0) {
      setActiveMenu(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPos({ left: rect.left, top: rect.bottom });
    setActiveMenu(menu.title);
    setHoveredSubmenu(menu.submenus[0]?.label || null);
  };

  const handleItemClick = (item) => {
    setActiveMenu(null);
    setHoveredSubmenu(null);
    if (item === "Accounts Summary") navigate("/account-summary");
  };

  return (
    <div className="min-h-screen bg-[#efefef] overflow-hidden flex flex-col">
      {/* Header */}
      <div
        className="bg-white border-b border-gray-200 flex items-center justify-between flex-shrink-0"
        style={{ minHeight: "80px", padding: "16px 60px" }}
      >
        <img
          src={logo}
          alt="Union Bank"
          style={{ height: "50px", objectFit: "contain" }}
        />
        <div
          className="flex items-center"
          style={{ gap: "6px", fontSize: "11px" }}
        >
          <span style={{ fontWeight: "700", color: "#000000" }}>Welcome M/s</span>
          <span style={{ fontWeight: "700", color: "#111" }}>{userName}</span>
          <span style={{ color: "#666", fontSize: "10px" }}>▼</span>
          <button
            style={{
              border: "1px solid #bbb",
              background: "#f8f8f8",
              borderRadius: "3px",
              padding: "4px 7px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={topNavNormal}
              alt="Settings"
              style={{ width: "20px", height: "20px" }}
            />

          </button>
          <span style={{ color: "#666", fontSize: "10px" }}>▼ |</span>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#cc0000",
              color: "#fff",
              border: "2px solid #cc0000",
              padding: "4px 14px",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              borderRadius: "6px", // Slight curve
              marginLeft: "2px",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-red-600 text-white flex-shrink-0" ref={menuRef}>
        <div className="flex" style={{ padding: "0 60px" }}>
          {navMenuData.map((menu) => (
            <button
              key={menu.title}
              className={`whitespace-nowrap hover:bg-red-700 ${activeMenu === menu.title ? "bg-red-800" : ""}`}
              style={{
                padding: "7px 10px",
                fontSize: "12.3px",
                color: "#fff",
                background:
                  activeMenu === menu.title ? "#a80000" : "transparent",
                border: "none",
                cursor: "pointer",
                fontWeight: "400",
              }}
              onMouseEnter={(e) => handleTabHover(menu, e)}
            >
              {menu.title}
            </button>
          ))}
        </div>

        {activeMenu &&
          (() => {
            const menu = navMenuData.find((m) => m.title === activeMenu);
            if (!menu || menu.submenus.length === 0) return null;
            return (
              <div
                className="fixed bg-white text-gray-800 shadow-xl border border-gray-200 flex z-[9999]"
                style={{
                  left: dropdownPos.left,
                  top: dropdownPos.top,
                  minHeight: 200,
                }}
                onMouseLeave={() => {
                  setActiveMenu(null);
                  setHoveredSubmenu(null);
                }}
              >
                <div className="bg-white border-r border-gray-200 min-w-[230px] py-1">
                  {menu.submenus.map((sub) => (
                    <div
                      key={sub.label}
                      className={`flex items-center justify-between px-4 py-[9px] cursor-pointer text-[13px] font-bold hover:bg-gray-100 ${hoveredSubmenu === sub.label ? "bg-gray-100" : ""}`}
                      onMouseEnter={() => setHoveredSubmenu(sub.label)}
                    >
                      <span>{sub.label}</span>
                      <svg
                        className="w-3 h-3 ml-3 text-gray-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="bg-[#f0f0f0] min-w-[320px] py-3 px-2">
                  {(
                    menu.submenus.find((s) => s.label === hoveredSubmenu)
                      ?.items ?? []
                  ).map((item) => (
                    <div
                      key={item}
                      className="flex items-start px-3 py-[7px] text-[13px] text-[#0645ad] hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleItemClick(item)}
                    >
                      <svg
                        className="w-3 h-3 mt-[3px] mr-2 text-[#555] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
      </div>

      {/* Page Content */}
      <div className="flex-1 overflow-auto" style={{ padding: "0 60px" }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
