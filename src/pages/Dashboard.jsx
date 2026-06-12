import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Pending Actions");

  return (
    <DashboardLayout>
      <div style={{ padding: "12px 0 0 0" }}>
        {/* Title row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <h1 style={{ fontSize: "18px", fontWeight: "400", color: "#333", margin: 0 }}>Dashboard</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}>
            <span style={{ color: "#0645ad", cursor: "pointer" }}>Personalize Dashboard</span>
            <span style={{ color: "#aaa" }}>|</span>
            <span style={{ color: "#0645ad", cursor: "pointer" }}>Restore Dashboard</span>
            <span style={{ color: "#aaa" }}>|</span>
          </div>
        </div>

        {/* Notifications widget */}
        <div style={{ width: "370px", background: "#fff", border: "1px solid #ccc", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 10px", borderBottom: "1px solid #ddd", background: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="15" height="15" fill="#555" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#333" }}>Notifications</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="14" height="14" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24" style={{ cursor: "pointer" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span style={{ fontSize: "13px", color: "#888", cursor: "pointer", lineHeight: 1 }}>×</span>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
            {["Password", "Pending Actions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: "7px 0",
                  fontSize: "13px",
                  fontWeight: activeTab === tab ? "600" : "400",
                  background: activeTab === tab ? "#2d4a6e" : "#fff",
                  color: activeTab === tab ? "#fff" : "#555",
                  border: "none",
                  borderRight: tab === "Password" ? "1px solid #ddd" : "none",
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ padding: "14px 16px 20px 16px" }}>
            {activeTab === "Password" ? (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                  <p style={{ fontSize: "13px", color: "#444", margin: 0, lineHeight: "1.4" }}>
                    Transaction password<br />expiry day(s):
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ fontSize: "13px", color: "#444" }}>Not Applicable</span>
                    <span style={{
                      width: "16px", height: "16px", borderRadius: "50%",
                      background: "#2196f3", color: "#fff",
                      fontSize: "10px", fontWeight: "bold",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer", flexShrink: 0
                    }}>i</span>
                  </div>
                </div>
                <p style={{ fontSize: "13px", color: "#444", margin: "0 0 4px 0" }}>Your Login Password Expires in</p>
                <p style={{ fontSize: "13px", color: "#c0392b", fontWeight: "600", margin: "0 0 16px 0" }}>
                  692 days on 04/05/2028 12:00:00 AM IST
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button style={{
                    background: "#7a9e3b",
                    color: "#fff",
                    border: "none",
                    padding: "7px 20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    minWidth: "140px"
                  }}>
                    Change Password
                  </button>
                </div>
              </>
            ) : (
              <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>No pending actions.</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
