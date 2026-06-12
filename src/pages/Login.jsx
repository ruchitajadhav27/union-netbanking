import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import digitalBank from "../assets/LoginImages/digital-bank.jpg";
import liRed from "../assets/LoginImages/li-red-bg.png";
import loginSelect from "../assets/LoginImages/login_select.gif";
import logoDark from "../assets/LoginImages/logo-DarkBg.png";
import resetImg from "../assets/LoginImages/reset.jpg";
import tollFreeImg from "../assets/LoginImages/toll-free.png";
import uiIcons from "../assets/LoginImages/ui-icons_222222_256x240.png";
import unionIconBg from "../assets/LoginImages/union-icon-bg.jpg";
import unionIcon from "../assets/LoginImages/union-icon.png";
import widgetLoading from "../assets/LoginImages/widget-loading.gif";

const Login = () => {
  const navigate = useNavigate();
  const banner = digitalBank;
  const [captcha, setCaptcha] = React.useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = React.useState("");

  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserCaptcha("");
  };
  return (
    <div
      className="min-h-screen bg-[#f8f8f8]"
      style={{
        backgroundImage: `url(${unionIconBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      {/* Header */}
      <div className="bg-[#ffffff] h-[90px] flex items-center justify-between px-40">
        <div>
          <img
            src={logo}
            alt="Union Bank"
            className="h-14 object-contain"
          />
        </div>

        <div className="text-center">
          <p className="text-black text-sm mb-0.1">
            All-India Toll Free Number
          </p>

<div className="flex gap-3">
    <div>
        <img src={tollFreeImg} alt="toll-free" className="h-6 object-contain" />
    </div>
  {[
    
    "1800 222 243",
    "1800 425 15 15",
    "1800 208 2244",
    "1800 22 22 44",
  ].map((num) => (
    <div
      key={num}
      className="bg-[#005ca9] text-white px-4 py-1 rounded text-sm font-medium"
    >
      {num}
    </div>
  ))}
</div>
        </div>
      </div>


      <div className="flex h-[30px] items-center">

  <div className="w-[45%] bg-[#e51b24] text-white flex items-center justify-center text-[17px] uppercase">
    INTERNET BANKING LOGIN
  </div>

  <div className="w-[3.4%] flex items-center justify-center bg-white">
    <img src={unionIcon} alt="divider" className="h-[45px] object-contain px-1" />
  </div>

  <div className="w-[90%] bg-[#005ca9] text-white flex items-center justify-center text-[17px] uppercase">
    ALL YOUR BANKING FROM A SINGLE SECURE LOGIN
  </div>

</div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto mt-5 flex px-25 items-start">

        {/* Login Panel */}
        <div className="w-[32%] bg-[#005ca9] text-white p-4 min-h-[420px]">

          <div className="mb-2">
            <label className="block mb-1 text-base">
              User ID<span className="text-red-400">*</span>
            </label>

            <input
              type="text"
              className="w-full bg-transparent border-b border-white outline-none py-0.5"
            />            
          </div>

<div className="mb-2">
  <label className="block mb-1 text-sm">
    Password<span className="text-red-400">*</span>
  </label>

  <input
    type="password"
    className="w-full bg-transparent border-b border-white outline-none py-0.5"
  />
</div>

<div className="mb-2">
  <label className="block mb-1 text-sm">
    Captcha Code<span className="text-red-400">*</span>
  </label>

  <div className="flex gap-2 mb-2">
    <div className="bg-white text-[#6f0000] h-9 w-[220px] flex items-center px-3 text-2xl font-bold tracking-widest">
      {captcha}
    </div>

    <button 
      onClick={refreshCaptcha}
      className="bg-white text-blue-700 px-2 text-lg hover:bg-gray-100 flex items-center justify-center rounded"
    >
      <img src={resetImg} alt="refresh" className="h-5 object-contain" />
    </button>
  </div>

  <input
    type="text"
    // placeholder="Enter Captcha Code Here"
    value={userCaptcha}
    onChange={(e) => setUserCaptcha(e.target.value)}
    className="w-full bg-transparent border-b-2 border-white outline-none py-2 text-white placeholder-gray-300 font-medium"
  />
</div>
    <div className="border-t border-white pt-3">
  <div className="flex gap-4 items-start">
    <button 
      onClick={() => navigate("/dashboard")}
      className="bg-white text-[#005ca9] px-6 py-2 rounded font-semibold text-sm hover:bg-gray-100"
    >
      LOGIN
    </button>

    <div className="text-center flex flex-col gap-1 text-[11px]">
                <a href="/">New User? Register Here</a>

                <a href="/">Forgot/Create Passwords?</a>

                <a href="/">Enable Disable Login Password Via OTP</a>

                <a href="/">Know Your User ID</a>
              </div>
            </div>
          </div>

      <div className="mt-4 flex items-center gap-2">
  <span className="font-semibold text-base">
    Start In
  </span>

  <select className="text-black w-[200px] h-8 px-2 text-sm">
    <option>Dashboard</option>
  </select>
</div>
        </div>

        {/* Banner Area */}
        <div className="w-[68%] flex items-center justify-center">
          <img src={banner} alt="banner" className="w-full h-[420px] object-cover" />
        </div>
      </div>
{/* Alert Section */}
<div className="max-w-[1140px] mx-auto mt-6 pb-6 px-4">
  <h2 className="text-red-600 text-[18px] font-bold mb-5">
    Customer Alert !!!!! [Beware of phishing]
  </h2>

  <ul className="space-y-3 text-[14px] font-semibold text-black">
    <li className="flex items-start gap-3">
      <span className="text-red-600 text-sm mt-1">▶</span>
      <span>
        Do not respond to fraudulent communications asking your
        confidentials like A/c No, User Id,<br />
        Password, Card No,etc
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-red-600 text-sm mt-1">▶</span>
      <span>
        Fraudulent e-mails contain links of look-alike websites to
        mislead into entering sensitive <br />
        financial data
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-red-600 text-sm mt-1">▶</span>
      <span>
        Bank will never send such communications to customers asking
        for their personal or <br />
        confidential information
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-red-600 text-sm mt-1">▶</span>
      <span>
        Always visit Bank's site instead of clicking on the links
        provided in emails or third party <br />
        websites
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-red-600 text-sm mt-1">▶</span>
      <span>
        Do not respond to pop-up windows asking for your confidential
        information
      </span>
    </li>
  </ul>
</div>
    </div>
  );
};

export default Login;