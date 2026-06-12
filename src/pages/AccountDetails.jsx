import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const transactions = [
  { id: "T71804543", date: "12-06-2026", time: "14:52:14", remarks: "UPIAB/648912243176/CR/AJAY AKA/SBIN/7083107676@yb", utr: "-", amount: "135.00( Cr)", balance: "4,842.40", credit: true },
  { id: "T71799052", date: "12-06-2026", time: "14:52:04", remarks: "UPIAR/062431296995/DR/BALAJI E/YESB/Q258157019@yb", utr: "-", amount: "540.00( Dr)", balance: "4,707.40", credit: false },
  { id: "T71777732", date: "12-06-2026", time: "14:51:52", remarks: "UPIAB/616352054283/CR/KALPESH /IBKL/kalpeshvichare", utr: "-", amount: "100.00( Cr)", balance: "5,247.40", credit: true },
  { id: "T71772207", date: "12-06-2026", time: "14:51:33", remarks: "UPIAB/652907105075/CR/MOHIT DE/KKBK/8208032718@kot", utr: "-", amount: "135.00( Cr)", balance: "5,147.40", credit: true },
  { id: "T28173669", date: "11-06-2026", time: "20:54:28", remarks: "UPIAR/506742686595/DR/Rajlaxmi/YESB/paytm.s20grk3@", utr: "-", amount: "220.00( Dr)", balance: "5,012.40", credit: false },
];

const row = (label, value, labelW = "170px") => (
  <div style={{ display: "flex", padding: "5px 14px", fontSize: "13px", alignItems: "flex-start" }}>
    <div style={{ width: labelW, textAlign: "right", color: "#555", flexShrink: 0, paddingRight: "6px" }}>{label}</div>
    <div style={{ color: "#222", fontWeight: "700" }}>{value}</div>
  </div>
);

const AccountDetails = () => {
  const navigate = useNavigate();
  const [showStatement, setShowStatement] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setShowStatement(false);
      }
    };
    if (showStatement) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showStatement]);

  return (
    <DashboardLayout>
      <style>{`
        @keyframes dropdownOpen {
          from { transform: translateX(-100%); opacity: 0.5; }
          to   { transform: translateX(0);     opacity: 1;   }
        }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 60px", margin: "0 -60px", borderBottom: "1px solid #ddd", background: "#f5f5f5" }}>
        <div style={{ fontSize: "13px" }}>
          <span style={{ color: "#0645ad", cursor: "pointer" }} onClick={() => navigate("/dashboard")}>Accounts: Balance &amp; Transaction Info</span>
          <span style={{ color: "#555", margin: "0 3px" }}>&gt;</span>
          <span style={{ color: "#0645ad", cursor: "pointer" }} onClick={() => navigate("/account-summary")}>Accounts Summary</span>
          <span style={{ color: "#555", margin: "0 3px" }}>&gt;</span>
          <strong style={{ color: "#1a237e" }}>Account Details</strong>
        </div>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#555", padding: 0 }}>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a1 1 0 001 1h8a1 1 0 001-1v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1zm2 0h6v3H7V4zm-1 9v2h8v-2H6zm9-4a1 1 0 11-2 0 1 1 0 012 0zM5 9H4v3h1V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div style={{ display: "flex", gap: "16px", paddingTop: "20px", paddingBottom: "40px" }}>

        {/* Left panel */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{ fontSize: "19px", fontWeight: "400", color: "#222", margin: "0 0 14px 0" }}>Account Details</h2>

          <div style={{ border: "1px solid #ccc", background: "#fff" }}>

            {/* Back */}
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "8px 10px", borderBottom: "1px solid #ddd" }}>
              <button onClick={() => navigate("/account-summary")} style={{ border: "1px solid #bbb", background: "#f5f5f5", padding: "4px 18px", fontSize: "13px", cursor: "pointer", color: "#333" }}>Back</button>
            </div>

            {/* General Details */}
            <div style={{ padding: "5px 10px", fontSize: "13px", color: "#0645ad", borderBottom: "1px solid #ddd" }}>General Details</div>
            <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
              <div style={{ flex: 1, borderRight: "1px dashed #ccc", padding: "8px 0" }}>
                {row("Number:", "621702010002985")}
                {row("Name:", "PRASAD PRADIP WANKHADE")}
                {row("AddressLine1:", "PLOT NO 6 CHAKRAPANI COLONY")}
                {row("AddressLine3:", "")}
                {row("State:", "MAHARASHTRA")}
                {row("Zip:", "444604")}
                {row("Mobile:", "918482979731")}
                {row("Type:", "Savings")}
                {row("Currency:", "INR")}
                {row("MICR Code:", "444026105")}
                {row("CKYC Number:", "50073220959743")}
              </div>
              <div style={{ flex: 1, padding: "8px 0" }}>
                {row("Nickname:", "PRASAD PRADIP WANKHADE", "180px")}
                {row("Branch:", "SHEGAON NAKA", "180px")}
                <div style={{ display: "flex", padding: "5px 14px", fontSize: "13px", alignItems: "flex-start" }}>
                  <div style={{ width: "180px", textAlign: "right", color: "#555", flexShrink: 0, paddingRight: "6px" }}>AddressLine2:</div>
                  <div style={{ color: "#222", fontWeight: "700" }}>NEAR HARSHRAJ COLONY V M V ROAD<br />AMRAVATI</div>
                </div>
                {row("City:", "AMRAVATI", "180px")}
                {row("Country:", "INDIA", "180px")}
                {row("Phone:", "8482979731", "180px")}
                {row("Email:", "yash8482979731@gmail.com", "180px")}
                {row("Category:", "SBGEN", "180px")}
                {row("Open Date:", "27/09/2012", "180px")}
                {row("IFSC Code:", "UBIN0562173", "180px")}
              </div>
            </div>

            {/* Balance Details */}
            <div style={{ padding: "5px 10px", fontSize: "13px", color: "#0645ad", borderBottom: "1px solid #ddd" }}>Balance Details</div>
            <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
              <div style={{ flex: 1, borderRight: "1px dashed #ccc", padding: "8px 0" }}>
                {row("Status As On Date:", "12/06/2026", "190px")}
                <div style={{ display: "flex", padding: "5px 14px", fontSize: "13px" }}>
                  <div style={{ width: "190px", textAlign: "right", color: "#555", flexShrink: 0, paddingRight: "6px" }}>Available Balance:</div>
                  <div style={{ color: "#0645ad", fontWeight: "700" }}>INR 4,842.40 (Cr)</div>
                </div>
                {row("Primary Account:", "Y", "190px")}
              </div>
              <div style={{ flex: 1, padding: "8px 0" }}>
                {row("Status:", "Active Account", "230px")}
                <div style={{ display: "flex", padding: "5px 14px", fontSize: "13px" }}>
                  <div style={{ width: "230px", textAlign: "right", color: "#555", flexShrink: 0, paddingRight: "6px" }}>Effective Available Balance:</div>
                  <div style={{ color: "#0645ad", fontWeight: "700" }}>INR 4,842.40 (Cr)</div>
                </div>
                {row("Lien Balance:", "INR 0.00", "230px")}
              </div>
            </div>

            {/* More Details */}
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "8px 10px", borderBottom: "1px solid #ddd" }}>
              <button style={{ border: "1px solid #bbb", background: "#f5f5f5", padding: "4px 12px", fontSize: "13px", cursor: "pointer", color: "#333" }}>+ More Details</button>
            </div>

            {/* View Statement */}
            <div style={{ borderBottom: "1px solid #ddd", position: "relative" }} ref={panelRef}>
              {showStatement && (
                <>
                  <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 98 }} onClick={() => setShowStatement(false)} />
                  <div style={{ position: "absolute", bottom: "100%", left: 0, width: "420px", overflow: "hidden", zIndex: 99 }}>
                    <div style={{
                      width: "420px", maxHeight: "430px",
                      background: "#e8e8e8", border: "2px solid #4a90d9", borderBottom: "none",
                      overflowY: "auto",
                      padding: "10px 12px", fontSize: "13px", boxSizing: "border-box",
                      animation: "dropdownOpen 0.4s cubic-bezier(0.0, 0.0, 0.2, 1)",
                    }}>
                      <div style={{ color: "#333", marginBottom: "8px" }}>Saved Criteria Templates</div>
                      <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                        <select style={{ border: "1px solid #bbb", fontSize: "13px", padding: "3px 6px", background: "#fff", width: "175px" }}><option>Select</option></select>
                        <button style={{ background: "#7a9e3b", border: "none", color: "#fff", width: "30px", height: "26px", fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>&#8594;</button>
                      </div>
                      <div style={{ display: "flex", gap: "16px", marginBottom: "8px" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                            <input type="radio" name="dateType" defaultChecked style={{ accentColor: "#0645ad" }} />
                            <span style={{ color: "#0645ad", fontSize: "13px" }}>Date From (dd/MM/yyyy)</span>
                          </div>
                          <input type="date" defaultValue="2026-06-06" style={{ border: "1px solid #bbb", fontSize: "12px", padding: "3px 5px", background: "#fff", width: "140px" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#333", marginBottom: "4px" }}>Date To (dd/MM/yyyy)</div>
                          <input type="date" defaultValue="2026-06-12" style={{ border: "1px solid #bbb", fontSize: "12px", padding: "3px 5px", background: "#fff", width: "140px" }} />
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "16px", marginBottom: "10px" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                            <input type="radio" name="dateType" style={{ accentColor: "#0645ad" }} />
                            <span style={{ fontSize: "13px", color: "#333" }}>Transactions for</span>
                          </div>
                          <select style={{ border: "1px solid #bbb", fontSize: "13px", padding: "3px 5px", background: "#fff", width: "110px" }}>
                            <option>Select</option><option>7 Days</option><option>Last 1 Month</option><option>Last 2 Months</option><option>Today</option>
                          </select>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#333", marginBottom: "4px" }}>Sorting Order</div>
                          <select style={{ border: "1px solid #bbb", fontSize: "13px", padding: "3px 5px", background: "#fff", width: "130px" }}>
                            <option>Oldest First</option><option>Newest/Latest First</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <div style={{ fontSize: "13px", color: "#0645ad", marginBottom: "4px" }}>Amount Type</div>
                        <select style={{ border: "1px solid #bbb", fontSize: "13px", padding: "3px 5px", background: "#fff", width: "80px" }}>
                          <option>All</option><option>Credit</option><option>Debit</option>
                        </select>
                      </div>
                      <div style={{ display: "flex", gap: "16px", marginBottom: "10px" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#333", marginBottom: "4px" }}>Amount From</div>
                          <input style={{ border: "1px solid #bbb", fontSize: "13px", padding: "4px 6px", width: "100%", background: "#fff", boxSizing: "border-box" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#333", marginBottom: "4px" }}>Amount To</div>
                          <input style={{ border: "1px solid #bbb", fontSize: "13px", padding: "4px 6px", width: "100%", background: "#fff", boxSizing: "border-box" }} />
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#0645ad", marginBottom: "4px" }}>Instrument ID From</div>
                          <input style={{ border: "1px solid #bbb", fontSize: "13px", padding: "4px 6px", width: "100%", background: "#fff", boxSizing: "border-box" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#0645ad", marginBottom: "4px" }}>Instrument ID To</div>
                          <input style={{ border: "1px solid #bbb", fontSize: "13px", padding: "4px 6px", width: "100%", background: "#fff", boxSizing: "border-box" }} />
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                        <button style={{ border: "1px solid #bbb", background: "#f0f0f0", padding: "5px 16px", fontSize: "13px", cursor: "pointer", color: "#333" }}>Clear</button>
                        <button style={{ background: "#7a9e3b", border: "none", color: "#fff", padding: "5px 18px", fontSize: "13px", cursor: "pointer", fontWeight: "600" }}>Search</button>
                      </div>
                      <div style={{ borderTop: "1px solid #bbb", paddingTop: "10px" }}>
                        <div style={{ fontSize: "13px", color: "#333", marginBottom: "6px" }}>Template Actions</div>
                        <div style={{ display: "flex", gap: "6px" }}>
                          <select style={{ border: "1px solid #bbb", fontSize: "13px", padding: "3px 6px", background: "#fff", width: "175px" }}>
                            <option>Select</option><option>Save Template</option><option>Delete Template</option>
                          </select>
                          <button style={{ background: "#7a9e3b", border: "none", color: "#fff", width: "30px", height: "26px", fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>&#8594;</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div style={{ padding: "8px 10px" }}>
                <button onClick={() => setShowStatement(!showStatement)}
                  style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "4px 10px", border: "1px solid #0645ad", background: "#fff", color: "#0645ad", fontSize: "13px", cursor: "pointer" }}>
                  View Statement
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Transaction Table */}
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f9f9f9", borderBottom: "1px solid #ccc" }}>
                  <th style={{ textAlign: "left", padding: "7px 10px", fontWeight: "400", color: "#444", borderRight: "1px dashed #ccc", whiteSpace: "nowrap" }}>Tran Id</th>
                  <th style={{ textAlign: "left", padding: "7px 10px", fontWeight: "400", color: "#444", borderRight: "1px dashed #ccc", whiteSpace: "nowrap" }}>Date</th>
                  <th style={{ textAlign: "left", padding: "7px 10px", fontWeight: "400", color: "#444", borderRight: "1px dashed #ccc" }}>Remarks</th>
                  <th style={{ textAlign: "left", padding: "7px 10px", fontWeight: "400", color: "#444", borderRight: "1px dashed #ccc", whiteSpace: "nowrap" }}>Instrument ID</th>
                  <th style={{ textAlign: "left", padding: "7px 10px", fontWeight: "400", color: "#444", borderRight: "1px dashed #ccc", whiteSpace: "nowrap" }}>UTR Number</th>
                  <th style={{ textAlign: "right", padding: "7px 10px", fontWeight: "400", color: "#444", borderRight: "1px dashed #ccc", whiteSpace: "nowrap" }}>Amount (INR)</th>
                  <th style={{ textAlign: "right", padding: "7px 10px", fontWeight: "400", color: "#444", whiteSpace: "nowrap" }}>Balance<br />(INR)</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#333", verticalAlign: "top", whiteSpace: "nowrap" }}>{t.id}</td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#333", verticalAlign: "top", whiteSpace: "nowrap" }}>{t.date}<br />{t.time}</td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#0645ad", verticalAlign: "top", cursor: "pointer" }}>{t.remarks}</td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#333", verticalAlign: "top" }}></td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#333", verticalAlign: "top" }}>{t.utr}</td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: t.credit ? "#5a9e00" : "#333", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>{t.amount}</td>
                    <td style={{ padding: "10px", color: "#5a9e00", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>{t.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderTop: "1px solid #ddd", fontSize: "13px", color: "#444" }}>
              <span>Viewing 1 to 5 of 38</span>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span>Page</span>
                <input defaultValue="1" style={{ width: "32px", border: "1px solid #bbb", textAlign: "center", fontSize: "13px", padding: "2px 4px" }} />
                <button style={{ border: "1px solid #bbb", background: "#f5f5f5", padding: "3px 8px", cursor: "pointer", fontSize: "13px" }}>&#8594;</button>
                <button style={{ border: "1px solid #bbb", background: "#f5f5f5", padding: "3px 8px", cursor: "pointer", fontSize: "13px" }}>&#9668;</button>
                <button style={{ border: "1px solid #bbb", background: "#f5f5f5", padding: "3px 8px", cursor: "pointer", fontSize: "13px" }}>&#9658;</button>
              </div>
            </div>

            {/* Download */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderTop: "1px solid #ddd" }}>
              <span style={{ fontSize: "13px", color: "#333" }}>Download As</span>
              <select style={{ border: "1px solid #bbb", fontSize: "13px", padding: "2px 4px", background: "#fff" }}>
                <option>Select</option>
                <option>PDF</option>
                <option>Excel</option>
              </select>
              <button style={{ background: "#7a9e3b", border: "none", color: "#fff", width: "28px", height: "24px", fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>&#8594;</button>
              <span style={{ fontSize: "13px", color: "#555" }}>No More Records Available.</span>
            </div>

          </div>
        </div>

        {/* Right panel */}
        <div style={{ width: "200px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", marginTop: "46px" }}>
          <div style={{ background: "#fff", border: "1px solid #ccc", padding: "12px 14px" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#222", marginBottom: "5px" }}>Favorites</div>
            <div style={{ fontSize: "12px", color: "#999", marginBottom: "10px" }}>Select your favorite activity</div>
            <select style={{ width: "100%", border: "1px solid #bbb", fontSize: "12px", padding: "3px 5px", background: "#fff", marginBottom: "10px" }}>
              <option>Select</option>
            </select>
            <div style={{ borderTop: "1px solid #eee", paddingTop: "8px", display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#0645ad", cursor: "pointer" }}>
              <span style={{ color: "#bbb", fontSize: "14px" }}>&#9734;</span> Add to Favorites
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #ccc", padding: "12px 14px", minHeight: "100px" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#222" }}>Navigate to...</div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default AccountDetails;
