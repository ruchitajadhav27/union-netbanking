import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const AccountSummary = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Accounts");
  const [showActions, setShowActions] = useState(false);

  return (
    <DashboardLayout>
      {/* Breadcrumb — stretches full width breaking out of layout padding */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "5px 60px", margin: "0 -60px",
        borderBottom: "1px solid #ddd", background: "#f5f5f5"
      }}>
        <div style={{ fontSize: "13px" }}>
          <span style={{ color: "#0645ad", cursor: "pointer" }} onClick={() => navigate("/dashboard")}>
            Accounts: Balance &amp; Transaction Info
          </span>
          <span style={{ color: "#555", margin: "0 3px" }}>&gt;</span>
          <strong style={{ color: "#1a237e", fontWeight: "700" }}>Accounts Summary</strong>
          <span style={{ color: "#555", margin: "0 3px" }}>&gt;</span>
          <span style={{ color: "#0645ad", cursor: "pointer" }}>Account Summary</span>
        </div>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#555", padding: 0 }}>
          <svg width="30" height="30" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a1 1 0 001 1h8a1 1 0 001-1v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1zm2 0h6v3H7V4zm-1 9v2h8v-2H6zm9-4a1 1 0 11-2 0 1 1 0 012 0zM5 9H4v3h1V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Page body */}
      <div style={{ display: "flex", gap: "16px", paddingTop: "20px", paddingBottom: "24px" }}>

        {/* ── Left main panel ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{ fontSize: "19px", fontWeight: "400", color: "#222", margin: "0 0 8px 0" }}>Account Summary</h2>

          {/* Tabs */}
          <div style={{ display: "flex", marginBottom: 0 }}>
            {["Accounts", "Account Groups"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "4px 10px",
                  fontSize: "12px",
                  fontWeight: "400",
                  background: activeTab === tab ? "#2d4a6e" : "#fff",
                  color: activeTab === tab ? "#fff" : "#333",
                  border: "1px solid #bbb",
                  marginRight: "-1px",
                  cursor: "pointer",
                  position: "relative",
                  zIndex: activeTab === tab ? 1 : 0,
                  letterSpacing: "0px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* White content box */}
          <div style={{ border: "1px solid #ccc", background: "#fff", width: "95%" }}>

            {/* Search row */}
            <div style={{ padding: "7px 8px", borderBottom: "1px solid #ddd" }}>
              <button style={{
                display: "inline-flex", alignItems: "center", gap: "4px",
                padding: "3px 8px",
                border: "1px solid #0645ad",
                background: "#fff", color: "#0645ad",
                fontSize: "12px", cursor: "pointer"
              }}>
                Search
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* List label */}
            <div style={{ padding: "6px 10px", fontSize: "16px", color: "#333", borderBottom: "1px solid #ddd" }}>
              Accounts Summary List
            </div>

            {/* Table */}
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #ccc",backgroundColor: "#f2f2f2" }}>
                  <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: "400", color: "#444", borderRight: "1px dashed #bbb", width: "26%" }}>
                    Account Number<br />
                    <span style={{ color: "#aaa", fontWeight: "400" }}>Account Nickname</span>
                  </th>
                  <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: "400", color: "#444", borderRight: "1px dashed #bbb", width: "13%" }}>Account Type</th>
                  <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: "400", color: "#444", borderRight: "1px dashed #bbb", width: "11%" }}>Status</th>
                  <th style={{ textAlign: "right", padding: "4px 25px", fontWeight: "400", color: "#444", borderRight: "1px dashed #bbb" }}>Balance</th>
                  <th style={{ width: "85px" }}></th>
                </tr>
              </thead>

              <tbody>
                <tr style={{ borderBottom: "1px solid #e8e8e8" }}>
                  <td style={{ padding: "7px 10px", borderRight: "none", verticalAlign: "top" }}>
                    <div style={{ color: "#0645ad", cursor: "pointer", textDecoration: "underline" }} onClick={() => navigate("/account-details")}>621702010002985</div>
                    <div style={{ color: "#999", fontSize: "12px", marginTop: "2px" }}>PRASAD PRADIP WANKHADE</div>
                  </td>
                  <td style={{ padding: "7px 10px", borderRight: "none", verticalAlign: "top", color: "#333" }}>Savings</td>
                  <td style={{ padding: "7px 10px", borderRight: "none", verticalAlign: "top", color: "#333" }}>Active</td>
                  <td style={{ padding: "7px 10px", borderRight: "none", verticalAlign: "top", textAlign: "right" }}>
                    <div>Total:&nbsp;<span style={{ color: "#777" }}>INR</span>&nbsp;<span style={{ color: "#5a9e00", fontWeight: "600" }}>5,012.40</span></div>
                    <div style={{ marginTop: "2px" }}>Available:&nbsp;<span style={{ color: "#777" }}>INR</span>&nbsp;<span style={{ color: "#5a9e00", fontWeight: "600" }}>5,012.40</span></div>
                  </td>
                  <td style={{ padding: "7px 10px", verticalAlign: "top", position: "relative" }}>
                    <button
                      onClick={() => setShowActions(!showActions)}
                      style={{ background: "none", border: "none", color: "#0645ad", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "2px", padding: 0 }}
                    >
                      Actions <span style={{ fontSize: "9px" }}>▼</span>
                    </button>
                    {showActions && (
                      <div style={{ position: "absolute", right: 0, top: "26px", background: "#fff", border: "1px solid #ccc", boxShadow: "0 2px 6px rgba(0,0,0,0.15)", zIndex: 10, minWidth: "155px" }}>
                        {["View Statement", "Fund Transfer", "Account Details"].map((a) => (
                          <div key={a}
                            style={{ padding: "6px 12px", fontSize: "12px", color: "#0645ad", cursor: "pointer", borderBottom: "1px solid #eee" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#f5f5f5"}
                            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                            onClick={() => { setShowActions(false); if (a === "Account Details") navigate("/account-details"); }}
                          >{a}</div>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Download row */}
            <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "7px 10px", borderTop: "1px solid #ddd" }}>
              <svg width="13" height="13" fill="#555" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <span style={{ fontSize: "13px", color: "#333" }}>Download Details As</span>
              <select style={{ border: "1px solid #bbb", fontSize: "13px", padding: "2px 4px", background: "#fff" }}>
                <option>PDF</option>
                <option>Excel</option>
              </select>
              <button style={{
                background: "#7a9e3b", border: "none", color: "#fff",
                width: "28px", height: "24px", fontSize: "15px", fontWeight: "bold",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
              }}>→</button>
            </div>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div style={{ width: "200px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7px", marginTop: "63px"}}>

          {/* Favorites card */}
          <div style={{ background: "#fff", border: "1px solid #ccc", padding: "5px 10px" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#656565", marginBottom: "5px" }}>Favorites</div>
            <div style={{ fontSize: "12px", color: "#999", marginBottom: "10px" }}>Select your favorite activity</div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <select style={{ width: "100%", border: "1px solid #bbb", fontSize: "12px", padding: "3px 5px", background: "#fff" }}>
                <option>Select</option>
              </select>
            </div>
            <div style={{ borderTop: "1px solid #eee", paddingTop: "8px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#0645ad", cursor: "pointer" }}>
                <span style={{ color: "#bbb", fontSize: "14px" }}>☆</span>
                Add to Favorites
              </span>
            </div>
          </div>

          {/* Navigate to card */}
          <div style={{ background: "#fff", border: "1px solid #ccc", padding: "5px 10px", minHeight: "150px" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#656565" }}>Navigate to...</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AccountSummary;
