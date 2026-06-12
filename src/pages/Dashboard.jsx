import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = "PRASAD WANKHADE";

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Union Bank" className="h-12 object-contain" />
          
        </div>

          

        <div className="flex items-center gap-4">
            <div>
            <p className="text-sm text-gray-600">Welcome M/s</p>
            <p className="text-lg font-bold text-black">{userName}</p>
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-red-600 text-white py-1 px-0.5">
        <div className="flex gap-5 overflow-x-auto text-sm">
          <button className="hover:text-gray-200 whitespace-nowrap">Dashboard</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Accounts</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Transactions</button>
          <button className="hover:text-gray-200 whitespace-nowrap">ASBA</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Demat</button>
          <button className="hover:text-gray-200 whitespace-nowrap">General Services</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Bill Presentment</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Online Deposits</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Invest and Insure</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Card Services</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Offer</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Personalize Limits</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Password Management</button>
          <button className="hover:text-gray-200 whitespace-nowrap">Feedback</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

        <div className="flex gap-6">
          {/* Notifications Panel */}
          <div className="w-90 bg-white rounded shadow-sm">
            <div className="border-b border-gray-200">
              <div className="flex gap-4 p-4">
                <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">
                  Notifications
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>

              <div className="flex border-t border-gray-200">
                <button className="flex-1 text-center py-3 bg-blue-50 text-blue-600 font-semibold text-sm hover:bg-blue-100">
                  Password
                </button>
                <button className="flex-1 text-center py-3 text-gray-600 font-semibold text-sm hover:bg-gray-50">
                  Pending Actions
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Transaction password expiry day(s):</p>
                <p className="text-sm text-gray-600 mb-3">Not Applicable</p>
                <button className="text-blue-600 hover:text-blue-800 text-xs font-semibold">
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                  More Info
                </button>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Your Login Password Expires in</p>
                <p className="text-red-600 font-bold text-sm mb-3">693 days on 04/05/2028 12:00:00 AM IST</p>
                <button className="w-full bg-green-500 text-white py-2 rounded font-semibold text-sm hover:bg-green-600">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Main Dashboard Content */}
          {/* <div className="flex-1 bg-white rounded shadow-sm p-6">
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">Welcome to your Union Bank Dashboard</p>
              <p className="text-sm mt-2">Select an option from the menu above to get started</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
