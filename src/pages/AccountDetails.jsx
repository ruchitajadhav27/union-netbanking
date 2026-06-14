import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { jsPDF } from "jspdf";
import logoDark from "../assets/LoginImages/logo-DarkBg.png";

const PAGE_SIZE = 5;

const transactions = [
  { id: "T84624511", date: "12-06-2026", time: "18:05:00", remarks: "UPIAR/354905457755/DR/RADHIKA /YESB/Q546762152@yb", utr: "-", withdrawal: "100.00", deposit: "", balance: "1,639.50" },
  { id: "T77848690", date: "12-06-2026", time: "16:34:21", remarks: "UPIAR/235640592483/DR/Redbus I/UTIB/REDBUS2BUS@ax", utr: "-", withdrawal: "3,102.90", deposit: "", balance: "1,739.50" },
  { id: "T71804543", date: "12-06-2026", time: "14:52:14", remarks: "UPIAB/648912243176/CR/AJAY AKA/SBIN/7083107676@yb", utr: "-", withdrawal: "", deposit: "135.00", balance: "4,842.40" },
  { id: "T71799052", date: "12-06-2026", time: "14:52:04", remarks: "UPIAR/062431296995/DR/BALAJI E/YESB/Q258157019@yb", utr: "-", withdrawal: "540.00", deposit: "", balance: "4,707.40" },
  { id: "T71777732", date: "12-06-2026", time: "14:51:52", remarks: "UPIAB/616352054283/CR/KALPESH /IBKL/kalpeshvichare", utr: "-", withdrawal: "", deposit: "100.00", balance: "5,247.40" },
  { id: "T71772207", date: "12-06-2026", time: "14:51:33", remarks: "UPIAB/652907105075/CR/MOHIT DE/KKBK/8208032718@kot", utr: "-", withdrawal: "", deposit: "135.00", balance: "5,147.40" },
  { id: "T28173669", date: "11-06-2026", time: "20:54:28", remarks: "UPIAR/506742686595/DR/Rajlaxmi/YESB/paytm.s20grk3@", utr: "-", withdrawal: "220.00", deposit: "", balance: "5,012.40" },
  { id: "S85874032", date: "11-06-2026", time: "11:47:38", remarks: "UPIAR/153530435009/DR/Rajlaxmi/YESB/paytm.s20grk3@", utr: "-", withdrawal: "220.00", deposit: "", balance: "5,232.40" },
  { id: "S59592966", date: "11-06-2026", time: "22:16:05", remarks: "UPIAR/255672183831/DR/MOHIT DE/KKBK/8208032718@kot", utr: "-", withdrawal: "50.00", deposit: "", balance: "5,452.40" },
  { id: "S49607105", date: "10-06-2026", time: "20:16:36", remarks: "UPIAR/922599433815/DR/MURAD AL/YESB/paytmqr6a6u70@", utr: "-", withdrawal: "100.00", deposit: "", balance: "5,502.40" },
  { id: "S40699257", date: "10-06-2026", time: "18:57:29", remarks: "UPIAR/403825310481/DR/SHUBHAM/SBIN/wankhadeshubb", utr: "-", withdrawal: "1,000.00", deposit: "", balance: "5,602.40" },
  { id: "S35991885", date: "10-06-2026", time: "18:20:11", remarks: "UPIAR/213252321591/DR/MR SANDE/YESB/Q193392591@yb", utr: "-", withdrawal: "61.00", deposit: "", balance: "6,602.40" },
  { id: "S18394889", date: "10-06-2026", time: "13:43:29", remarks: "UPIAR/429132758743/DR/BALAJI E/YESB/Q633235161@yb", utr: "-", withdrawal: "270.00", deposit: "", balance: "6,663.40" },
  { id: "Y96286152", date: "10-06-2026", time: "08:15:31", remarks: "UPIAR/125453569983/DR/TULIKA E/YESB/Q341507467@yb", utr: "-", withdrawal: "20.00", deposit: "", balance: "6,933.40" },
  { id: "Y95293582", date: "10-06-2026", time: "07:55:35", remarks: "UPIAR/785700532564/DR/VIJAY SN/UTIB/Q112661253", utr: "-", withdrawal: "120.00", deposit: "", balance: "6,953.40" },
  { id: "Y74728945", date: "09-06-2026", time: "20:29:44", remarks: "UPIAR/170130361719/DR/VIRENDRA/YESB/Q414259378@yb", utr: "-", withdrawal: "25.00", deposit: "", balance: "7,073.40" },
  { id: "Y73909662", date: "09-06-2026", time: "20:21:32", remarks: "UPIAR/351121584817/DR/Shankar /YESB/paytm.s26svuh@", utr: "-", withdrawal: "70.00", deposit: "", balance: "7,098.40" },
  { id: "Y42774844", date: "09-06-2026", time: "13:35:55", remarks: "UPIAB/335115321801/CR/AJAY AKA/SBIN/7083107676@yb", utr: "-", withdrawal: "", deposit: "160.00", balance: "7,168.40" },
  { id: "Y42582318", date: "09-06-2026", time: "13:33:27", remarks: "UPIAR/100315822948/DR/Rajlaxmi/YESB/paytm.s20grylm@", utr: "-", withdrawal: "470.00", deposit: "", balance: "7,008.40" },
  { id: "Y22632859", date: "09-06-2026", time: "08:34:11", remarks: "UPIAR/196591544788/DR/VIRENDRA/YESB/Q414259378@yb", utr: "-", withdrawal: "25.00", deposit: "", balance: "7,478.40" },
  { id: "Y22591170", date: "09-06-2026", time: "08:33:11", remarks: "UPIAR/655521881490/DR/TULIKA E/YESB/Q341507467@yb", utr: "-", withdrawal: "20.00", deposit: "", balance: "7,503.40" },
  { id: "Y22501942", date: "09-06-2026", time: "08:31:53", remarks: "UPIAR/340376216370/DR/DADASAHE/YESB/Q160049201@yb", utr: "-", withdrawal: "100.00", deposit: "", balance: "7,523.40" },
  { id: "X99939886", date: "08-06-2026", time: "20:27:16", remarks: "UPIAR/764343648210/DR/SHREE RA/YESB/paytmqr6mg kns@", utr: "-", withdrawal: "150.00", deposit: "", balance: "7,623.40" },
  { id: "X99876036", date: "08-06-2026", time: "20:26:31", remarks: "UPIAR/616942166946/DR/MURAD AL/YESB/paytmqr72n62b@", utr: "-", withdrawal: "80.00", deposit: "", balance: "7,773.40" },
  { id: "X99530533", date: "08-06-2026", time: "20:23:15", remarks: "UPIAR/870136039792/DR/RAHMATUN/YESB/Q983741426@yb", utr: "-", withdrawal: "220.00", deposit: "", balance: "7,853.40" },
  { id: "X79465768", date: "08-06-2026", time: "16:58:00", remarks: "UPIAR/876153321972/DR/RADHIKA /YESB/Q385932740@yb", utr: "-", withdrawal: "55.00", deposit: "", balance: "8,073.40" },
  { id: "X61489232", date: "08-06-2026", time: "12:18:39", remarks: "UPIAR/235867682879/DR/ANGAD NA/YESB/paytmqr6u8tsr@", utr: "-", withdrawal: "50.00", deposit: "", balance: "8,128.40" },
  { id: "X26187730", date: "07-06-2026", time: "20:41:49", remarks: "UPIAB/881485809105/CR/MOHIT DE/KKBK/mohiltharne@yb", utr: "-", withdrawal: "", deposit: "2,000.00", balance: "8,178.40" },
  { id: "X19276731", date: "07-06-2026", time: "19:34:08", remarks: "UPIAR/802024589960/DR/VIRENDRA/YESB/Q414259378@yb", utr: "-", withdrawal: "40.00", deposit: "", balance: "6,178.40" },
  { id: "X11234567", date: "07-06-2026", time: "15:20:10", remarks: "UPIAR/700123456789/DR/AMAZON P/ICIC/amazonpay@icici", utr: "-", withdrawal: "399.00", deposit: "", balance: "6,218.40" },
  { id: "X09876543", date: "06-06-2026", time: "22:10:05", remarks: "UPIAB/699876543210/CR/SURESH P/HDFC/suresh9876@okhdfc", utr: "-", withdrawal: "", deposit: "500.00", balance: "6,617.40" },
  { id: "W98765432", date: "06-06-2026", time: "18:05:22", remarks: "UPIAR/587654321098/DR/SWIGGY I/HDFC/swiggy@hdfcbank", utr: "-", withdrawal: "215.00", deposit: "", balance: "6,117.40" },
  { id: "W87654321", date: "06-06-2026", time: "14:33:45", remarks: "UPIAB/476543210987/CR/ROHIT MN/SBIN/rohitmn@sbi", utr: "-", withdrawal: "", deposit: "750.00", balance: "6,332.40" },
  { id: "W76543210", date: "05-06-2026", time: "21:15:30", remarks: "UPIAR/365432109876/DR/ZOMATO O/KKBK/zomato@kotak", utr: "-", withdrawal: "180.00", deposit: "", balance: "5,582.40" },
  { id: "W65432109", date: "05-06-2026", time: "17:22:47", remarks: "UPIAR/254321098765/DR/PHONEPE /YESB/merchant@yesbank", utr: "-", withdrawal: "450.00", deposit: "", balance: "5,762.40" },
  { id: "W54321098", date: "05-06-2026", time: "11:44:12", remarks: "NEFT/N158260012345/CR/SALARY JUNE/CORPORATION BANK", utr: "N158260012345", withdrawal: "", deposit: "25,000.00", balance: "6,212.40" },
  { id: "W43210987", date: "04-06-2026", time: "20:30:00", remarks: "UPIAR/143210987654/DR/ELECTRIC/AXIS/ebill@axisbank", utr: "-", withdrawal: "1,240.00", deposit: "", balance: "3,676.40" },
  { id: "W32109876", date: "04-06-2026", time: "16:10:55", remarks: "UPIAB/032109876543/CR/ANITA RS/IBKL/anita.rs@indus", utr: "-", withdrawal: "", deposit: "300.00", balance: "4,916.40" },
  { id: "W21098765", date: "03-06-2026", time: "12:05:38", remarks: "UPIAR/921098765432/DR/PAYTM ML/PYTM/paytmmall@ptm", utr: "-", withdrawal: "675.00", deposit: "", balance: "4,616.40" },
  { id: "W10987654", date: "03-06-2026", time: "09:18:22", remarks: "UPIAB/810987654321/CR/VIKRAM S/PUNB/vikram123@upi", utr: "-", withdrawal: "", deposit: "1,500.00", balance: "5,291.40" },
];

const accountInfo = {
  number: "621702010002985",
  customerId: "223682465",
  name: "PRASAD PRADIP WANKHADE",
  branch: "SHEGAON NAKA",
  ifsc: "UBIN0562173",
  micr: "444026105",
  type: "Saving Account",
  currency: "INR",
  openDate: "27/09/2012",
  addr1: "PLOT NO 6 CHAKRAPANI COLONY",
  addr2: "NEAR HARSHRAJ COLONY V M V ROAD AMRAVATI",
  city: "AMRAVATI",
  state: "MAHARASHTRA",
  country: "INDIA",
  zip: "444604",
  mobile: "918482979731",
  email: "yash8482979731@gmail.com",
  availableBalance: "INR 4,842.40 (Cr)",
  effectiveBalance: "INR 4,842.40 (Cr)",
  status: "Active Account",
  asOnDate: "12/06/2026",
  ckyc: "50073220959743",
  statementFrom: "06/06/2026",
  statementTo: "12/06/2026",
  statementDate: "12/06/2026 21:39",
};

const row = (label, value, labelW = "170px") => (
  <div style={{ display: "flex", padding: "5px 14px", fontSize: "13px", alignItems: "flex-start" }}>
    <div style={{ width: labelW, textAlign: "right", color: "#555", flexShrink: 0, paddingRight: "6px" }}>{label}</div>
    <div style={{ color: "#222", fontWeight: "700" }}>{value}</div>
  </div>
);

const downloadPDF = (logoDataUrl, filteredTx, stmtFrom, stmtTo) => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const stmtDate = `${pad(now.getDate())}/${pad(now.getMonth()+1)}/${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  // A4 in mm: 210 x 297mm — correct physical size in all PDF viewers
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();   // 210mm
  const pageH = doc.internal.pageSize.getHeight();  // 297mm
  const mL = 10;   // 10mm left margin
  const mR = 10;   // 10mm right margin
  const cW = pageW - mL - mR;  // 190mm usable width

  const p = (str, x, y, bold, size, r, g, b, opts) => {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(r, g, b);
    doc.text(String(str), x, y, opts || {});
  };

  // PAGE 1 HEADER
  const addPage1Header = () => {
    if (logoDataUrl) {
      const lw = 86, lh = 11;
      doc.addImage(logoDataUrl, "PNG", (pageW - lw) / 2, 4, lw, lh);
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(15);
    doc.setTextColor(15, 50, 130);
    doc.text("Statement of Account", pageW / 2, 30, { align: "center" });
  };

  // SUBSEQUENT PAGE HEADER
  const addSubsequentHeader = () => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(31, 73, 158);
    doc.text("Statement of Account", pageW / 2, 9, { align: "center" });
  };

  // FOOTER — blue top line, generous top/bottom padding, black normal text
  const addFooter = (pageNum) => {
    const fY = pageH - 30;  // footer top line at 30mm from bottom

    // blue top line
    doc.setDrawColor(31, 73, 158);
    doc.setLineWidth(0.3);
    doc.line(mL, fY, pageW - mR, fY);

    // Page No — just below line
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0);
    doc.text(`Page No${pageNum}`, pageW / 2, fY + 3, { align: "center" });

    // line 1
    doc.setFontSize(7);
    doc.text(
      "For any queries, please get in touch with us on our 24 x 7 customer service help line no.1800 2222 44 #. Customers outside India need to dial +91 80 2530 2510.",
      pageW / 2, fY + 7.5, { align: "center", maxWidth: cW }
    );
    // line 2
    doc.text(
      "This is a system generated output and requires no signature. Customers are requested to immediately notify the Bank of any discrepancy in the statement",
      pageW / 2, fY + 10, { align: "center", maxWidth: cW }
    );
    // line 3
    doc.text(
      "TO AVAIL OUR LOAN PRODUCTS GIVE MISSED CALL AT 9619333333 OR SMS <ULOAN> TO 56161",
      pageW / 2, fY + 13.5, { align: "center", maxWidth: cW }
    );
  };

  // PAGE 1
  addPage1Header();

  const col1x = mL;
  const col2x = pageW - 75;   // further right
  const lh    = 4.5;          // very tight line height
  let   ly    = 36;
  let   ry    = 36;

  // LEFT col
  p(accountInfo.name,  col1x, ly, true,  9, 0, 0, 0); ly += lh;
  p(accountInfo.addr1, col1x, ly, false, 8, 0, 0, 0); ly += lh;
  p(accountInfo.addr2, col1x, ly, false, 8, 0, 0, 0); ly += lh + 1;

  const lbW = 24;
  [
    ["City",      accountInfo.city],
    ["State",     accountInfo.state],
    ["Country",   accountInfo.country],
    ["Zip",       accountInfo.zip],
    ["Mobile No", accountInfo.mobile],
    ["E-mail",    accountInfo.email],
  ].forEach(([lb, vl]) => {
    p(lb, col1x,        ly, true,  8, 0, 0, 0);
    p(vl, col1x + lbW,  ly, false, 8, 0, 0, 0);
    ly += lh;
  });
  ly += 1;
  p(`Statement Date : ${stmtDate}`, col1x, ly, false, 8, 0, 0, 0); ly += lh;
  p(`Records from 1 to ${filteredTx.length}.`, col1x, ly, false, 8, 0, 0, 0);
  p("No more records available.", col1x + 46, ly, false, 8, 0, 0, 0);

  // RIGHT col
  p("Union Bank of India", col2x, ry, false, 8, 0, 0, 0); ry += lh + 2;
  const rbW = 36;
  [
    ["Branch",           accountInfo.branch],
    ["Customer Id",      accountInfo.customerId],
    ["Account No",       accountInfo.number],
    ["Account Currency", accountInfo.currency],
    ["Account Type",     accountInfo.type],
    ["MICR Code",        accountInfo.micr],
    ["IFSC Code",        accountInfo.ifsc],
    ["CKYC Number",      accountInfo.ckyc],
  ].forEach(([lb, vl]) => {
    p(lb, col2x,        ry, true,  8, 0, 0, 0);
    p(vl, col2x + rbW,  ry, false, 8, 0, 0, 0);
    ry += lh;
  });
  ry += 1;
  p(`Statement Period From -${stmtFrom}  To ${stmtTo}`, col2x, ry, false, 8, 0, 0, 0);

  const tY = Math.max(ly, ry) + 6;

  // Table colors: original blue + darker grey
  const CG  = [220, 220, 220];      // original light grey
  const CB  = [152, 174, 198];      // blue rgb(152,174,198) as requested
  const CH  = [180, 180, 180];      // header grey
  const CHB = [130, 155, 180];      // header blue (darker shade of CB)
  // Column widths: keep all headers on one line, Remarks moderate
  const dateW   = 20;
  const remarkW = 36;   // reduced from 42
  const tranW   = 20;
  const utrW    = 24;   // UTR Number needs space to fit on one line
  const remaining = cW - dateW - remarkW - tranW - utrW;
  const otherW  = remaining / 4;

  const ROW_GAP   = 0.5;  // white gap between rows
  const ROW_H_MIN = 10;    // minimum row height
  const colWidths = [dateW, remarkW, tranW, utrW, otherW, otherW, otherW, otherW];
  const colX = colWidths.reduce((acc, w, i) => { acc.push(i === 0 ? mL : acc[i-1] + colWidths[i-1]); return acc; }, []);

  const drawTable = (rows, startY, pageNum) => {
    let y = startY;
    const rowH = 10;
    const pad  = 2;
    const footerTop = pageH - 32;

    // --- HEADER ---
    const headers = ["Date","Remarks","Tran Id-1","UTR Number","Instr. ID","Withdrawals","Deposits","Balance"];
    const hColors = [CG, CB, CG, CB, CG, CB, CG, CB];
    const hAlign  = ["center","left","left","center","center","right","right","right"];
    colWidths.forEach((w, i) => {
      doc.setFillColor(...hColors[i]);
      doc.rect(colX[i], y, w, 6, "F");
    });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    headers.forEach((h, i) => {
      const tx = hAlign[i] === "right" ? colX[i] + colWidths[i] - pad
               : hAlign[i] === "center" ? colX[i] + colWidths[i] / 2
               : colX[i] + pad;
      doc.text(h, tx, y + 4, { align: hAlign[i] });
    });
    y += 6 + ROW_GAP;

    // --- BODY ROWS ---
    rows.forEach((tx) => {
      // calc row height based on remarks wrap
      const remarkLines = doc.splitTextToSize(tx.remarks, remarkW - pad * 2);
      const dateLines   = [`${tx.date}`, tx.time];
      const rh = Math.max(ROW_H_MIN, Math.max(remarkLines.length, dateLines.length) * 4.2 + pad * 2);

      // page break check
      if (y + rh + ROW_GAP > footerTop) {
        addFooter(pageNum);
        doc.addPage();
        pageNum++;
        y = 14;
      }

      // draw cell backgrounds
      const bColors = [CG, CB, CG, CB, CG, CB, CG, CB];
      colWidths.forEach((w, i) => {
        doc.setFillColor(...bColors[i]);
        doc.rect(colX[i], y, w, rh, "F");
      });

      // draw text
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(0, 0, 0);
      // date
      doc.text(tx.date, colX[0] + pad, y + pad + 3.5);
      doc.text(tx.time, colX[0] + pad, y + pad + 7.5);
      // remarks (wrapped)
      remarkLines.forEach((line, li) => doc.text(line, colX[1] + pad, y + pad + 3.5 + li * 4));
      // tran id
      doc.text(tx.id, colX[2] + pad, y + pad + 3.5);
      // utr
      doc.text(tx.utr, colX[3] + colWidths[3]/2, y + pad + 3.5, { align: "center" });
      // instr id (empty)
      // withdrawals
      if (tx.withdrawal) doc.text(tx.withdrawal, colX[5] + colWidths[5] - pad, y + pad + 3.5, { align: "right" });
      // deposits
      if (tx.deposit)    doc.text(tx.deposit,    colX[6] + colWidths[6] - pad, y + pad + 3.5, { align: "right" });
      // balance
      doc.text(tx.balance, colX[7] + colWidths[7] - pad, y + pad + 3.5, { align: "right" });

      y += rh + ROW_GAP;  // white gap between rows
    });

    addFooter(pageNum);
    return pageNum;
  };

  // Draw all rows in one continuous call — internal page breaks handled inside drawTable
  let pgNum = 1;
  drawTable(filteredTx, tY, pgNum);

  doc.save(`OpTransactionHistoryUX3_PDF${accountInfo.asOnDate.replace(/\//g, "-")}.pdf`);
};

const AccountDetails = () => {
  const navigate = useNavigate();
  const [showStatement, setShowStatement] = useState(false);
  const [downloadFormat, setDownloadFormat] = useState("Select");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState("1");
  const panelRef = useRef(null);
  const logoRef  = useRef(null);

  // Filter state
  const [dateType,    setDateType]    = useState("custom");   // "custom" | "preset"
  const [dateFrom,    setDateFrom]    = useState("2026-06-06");
  const [dateTo,      setDateTo]      = useState("2026-06-12");
  const [presetDays,  setPresetDays]  = useState("Select");
  const [sortOrder,   setSortOrder]   = useState("Oldest First");
  const [amtType,     setAmtType]     = useState("All");
  const [amtFrom,     setAmtFrom]     = useState("");
  const [amtTo,       setAmtTo]       = useState("");
  const [filteredTx,  setFilteredTx]  = useState(transactions);

  // parse "DD-MM-YYYY" to Date
  const parseDate = (s) => {
    const [d, m, y] = s.split("-");
    return new Date(`${y}-${m}-${d}`);
  };

  const handleSearch = () => {
    let from, to;
    const today = new Date("2026-06-12");

    if (dateType === "preset") {
      if (presetDays === "Select" || !presetDays) {
        alert("Please select a preset period (e.g. 7 Days, Last 1 Month).");
        return;
      }
      to = new Date(today);
      if (presetDays === "Today")               from = new Date(today);
      else if (presetDays === "7 Days")         { from = new Date(today); from.setDate(from.getDate() - 6); }
      else if (presetDays === "Last 1 Month")   { from = new Date(today); from.setMonth(from.getMonth() - 1); }
      else if (presetDays === "Last 2 Months")  { from = new Date(today); from.setMonth(from.getMonth() - 2); }
      else { from = new Date(0); }
    } else {
      from = dateFrom ? new Date(dateFrom) : new Date(0);
      to   = dateTo   ? new Date(dateTo)   : new Date("9999-12-31");
    }

    // set time to midnight for accurate comparison
    from.setHours(0,0,0,0);
    to.setHours(23,59,59,999);

    let result = transactions.filter((t) => {
      const td = parseDate(t.date);
      if (td < from || td > to) return false;
      if (amtType === "Credit" && !t.deposit)    return false;
      if (amtType === "Debit"  && !t.withdrawal) return false;
      const amt = parseFloat((t.withdrawal || t.deposit || "0").replace(/,/g, ""));
      if (amtFrom && amt < parseFloat(amtFrom)) return false;
      if (amtTo   && amt > parseFloat(amtTo))   return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      const da = parseDate(a.date).getTime();
      const db = parseDate(b.date).getTime();
      return sortOrder === "Newest/Latest First" ? db - da : da - db;
    });

    setFilteredTx(result);
    setCurrentPage(1);
    setPageInput("1");
    setShowStatement(false);
  };

  const handleClear = () => {
    setDateType("custom");
    setDateFrom("2026-06-06");
    setDateTo("2026-06-12");
    setPresetDays("Select");
    setSortOrder("Oldest First");
    setAmtType("All");
    setAmtFrom("");
    setAmtTo("");
    setFilteredTx(transactions);
    setCurrentPage(1);
    setPageInput("1");
  };

  const totalPages = Math.ceil(filteredTx.length / PAGE_SIZE);
  const pagedTx    = filteredTx.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Pre-load logo as dataURL for PDF
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = logoDark;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d").drawImage(img, 0, 0);
      logoRef.current = canvas.toDataURL("image/png");
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setShowStatement(false);
      }
    };
    if (showStatement) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showStatement]);

  const goToPage = (pg) => {
    const p = Math.max(1, Math.min(totalPages, pg));
    setCurrentPage(p);
    setPageInput(String(p));
  };

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
                {row("Number:", accountInfo.number)}
                {row("Name:", accountInfo.name)}
                {row("AddressLine1:", accountInfo.addr1)}
                {row("AddressLine3:", "")}
                {row("State:", accountInfo.state)}
                {row("Zip:", accountInfo.zip)}
                {row("Mobile:", accountInfo.mobile)}
                {row("Type:", accountInfo.type)}
                {row("Currency:", accountInfo.currency)}
                {row("MICR Code:", accountInfo.micr)}
                {row("CKYC Number:", accountInfo.ckyc)}
              </div>
              <div style={{ flex: 1, padding: "8px 0" }}>
                {row("Nickname:", accountInfo.name, "180px")}
                {row("Branch:", accountInfo.branch, "180px")}
                <div style={{ display: "flex", padding: "5px 14px", fontSize: "13px", alignItems: "flex-start" }}>
                  <div style={{ width: "180px", textAlign: "right", color: "#555", flexShrink: 0, paddingRight: "6px" }}>AddressLine2:</div>
                  <div style={{ color: "#222", fontWeight: "700" }}>{accountInfo.addr2}</div>
                </div>
                {row("City:", accountInfo.city, "180px")}
                {row("Country:", accountInfo.country, "180px")}
                {row("Phone:", "8482979731", "180px")}
                {row("Email:", accountInfo.email, "180px")}
                {row("Category:", "SBGEN", "180px")}
                {row("Open Date:", accountInfo.openDate, "180px")}
                {row("IFSC Code:", accountInfo.ifsc, "180px")}
              </div>
            </div>

            {/* Balance Details */}
            <div style={{ padding: "5px 10px", fontSize: "13px", color: "#0645ad", borderBottom: "1px solid #ddd" }}>Balance Details</div>
            <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
              <div style={{ flex: 1, borderRight: "1px dashed #ccc", padding: "8px 0" }}>
                {row("Status As On Date:", accountInfo.asOnDate, "190px")}
                <div style={{ display: "flex", padding: "5px 14px", fontSize: "13px" }}>
                  <div style={{ width: "190px", textAlign: "right", color: "#555", flexShrink: 0, paddingRight: "6px" }}>Available Balance:</div>
                  <div style={{ color: "#0645ad", fontWeight: "700" }}>{accountInfo.availableBalance}</div>
                </div>
                {row("Primary Account:", "Y", "190px")}
              </div>
              <div style={{ flex: 1, padding: "8px 0" }}>
                {row("Status:", accountInfo.status, "230px")}
                <div style={{ display: "flex", padding: "5px 14px", fontSize: "13px" }}>
                  <div style={{ width: "230px", textAlign: "right", color: "#555", flexShrink: 0, paddingRight: "6px" }}>Effective Available Balance:</div>
                  <div style={{ color: "#0645ad", fontWeight: "700" }}>{accountInfo.effectiveBalance}</div>
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
                  <div style={{ position: "absolute", bottom: "100%", left: 0, width: "420px", overflow: "hidden", zIndex: 99 }} onClick={(e) => e.stopPropagation()}>
                    <div style={{
                      width: "420px", maxHeight: "430px",
                      background: "#e8e8e8", border: "2px solid #4a90d9", borderBottom: "none",
                      overflowY: "auto", padding: "10px 12px", fontSize: "13px", boxSizing: "border-box",
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
                            <input type="radio" name="dateType" checked={dateType === "custom"} onChange={() => setDateType("custom")} style={{ accentColor: "#0645ad" }} />
                            <span style={{ color: "#0645ad", fontSize: "13px" }}>Date From (dd/MM/yyyy)</span>
                          </div>
                          <input type="date" value={dateFrom} onChange={(e) => { setDateType("custom"); setDateFrom(e.target.value); }} style={{ border: "1px solid #bbb", fontSize: "12px", padding: "3px 5px", background: "#fff", width: "140px" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#333", marginBottom: "4px" }}>Date To (dd/MM/yyyy)</div>
                          <input type="date" value={dateTo} onChange={(e) => { setDateType("custom"); setDateTo(e.target.value); }} style={{ border: "1px solid #bbb", fontSize: "12px", padding: "3px 5px", background: "#fff", width: "140px" }} />
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "16px", marginBottom: "10px" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                            <input type="radio" name="dateType" checked={dateType === "preset"} onChange={() => setDateType("preset")} style={{ accentColor: "#0645ad" }} />
                            <span style={{ fontSize: "13px", color: "#333" }}>Transactions for</span>
                          </div>
                          <select value={presetDays} onChange={(e) => { setDateType("preset"); setPresetDays(e.target.value); }} style={{ border: "1px solid #bbb", fontSize: "13px", padding: "3px 5px", background: "#fff", width: "110px" }}>
                            <option>Select</option><option>7 Days</option><option>Last 1 Month</option><option>Last 2 Months</option><option>Today</option>
                          </select>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#333", marginBottom: "4px" }}>Sorting Order</div>
                          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} style={{ border: "1px solid #bbb", fontSize: "13px", padding: "3px 5px", background: "#fff", width: "130px" }}>
                            <option>Oldest First</option><option>Newest/Latest First</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <div style={{ fontSize: "13px", color: "#0645ad", marginBottom: "4px" }}>Amount Type</div>
                        <select value={amtType} onChange={(e) => setAmtType(e.target.value)} style={{ border: "1px solid #bbb", fontSize: "13px", padding: "3px 5px", background: "#fff", width: "80px" }}>
                          <option>All</option><option>Credit</option><option>Debit</option>
                        </select>
                      </div>
                      <div style={{ display: "flex", gap: "16px", marginBottom: "10px" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#333", marginBottom: "4px" }}>Amount From</div>
                          <input value={amtFrom} onChange={(e) => setAmtFrom(e.target.value)} style={{ border: "1px solid #bbb", fontSize: "13px", padding: "4px 6px", width: "100%", background: "#fff", boxSizing: "border-box" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#333", marginBottom: "4px" }}>Amount To</div>
                          <input value={amtTo} onChange={(e) => setAmtTo(e.target.value)} style={{ border: "1px solid #bbb", fontSize: "13px", padding: "4px 6px", width: "100%", background: "#fff", boxSizing: "border-box" }} />
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
                        <button onClick={handleClear} style={{ border: "1px solid #bbb", background: "#f0f0f0", padding: "5px 16px", fontSize: "13px", cursor: "pointer", color: "#333" }}>Clear</button>
                        <button onClick={handleSearch} style={{ background: "#7a9e3b", border: "none", color: "#fff", padding: "5px 18px", fontSize: "13px", cursor: "pointer", fontWeight: "600" }}>Search</button>
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
                {pagedTx.map((t) => (
                  <tr key={t.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#333", verticalAlign: "top", whiteSpace: "nowrap" }}>{t.id}</td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#333", verticalAlign: "top", whiteSpace: "nowrap" }}>{t.date}<br />{t.time}</td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#0645ad", verticalAlign: "top", cursor: "pointer" }}>{t.remarks}</td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#333", verticalAlign: "top" }}></td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", color: "#333", verticalAlign: "top" }}>{t.utr}</td>
                    <td style={{ padding: "10px", borderRight: "1px dashed #ccc", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                      {t.withdrawal
                        ? <span style={{ color: "#333" }}>{t.withdrawal}( Dr)</span>
                        : <span style={{ color: "#5a9e00" }}>{t.deposit}( Cr)</span>
                      }
                    </td>
                    <td style={{ padding: "10px", color: "#5a9e00", verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>{t.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderTop: "1px solid #ddd", fontSize: "13px", color: "#444" }}>
              <span>Viewing {(currentPage - 1) * PAGE_SIZE + 1} to {Math.min(currentPage * PAGE_SIZE, filteredTx.length)} of {filteredTx.length}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span>Page</span>
                <input
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") goToPage(Number(pageInput)); }}
                  style={{ width: "32px", border: "1px solid #bbb", textAlign: "center", fontSize: "13px", padding: "2px 4px" }}
                />
                <button onClick={() => goToPage(Number(pageInput))} style={{ border: "1px solid #bbb", background: "#f5f5f5", padding: "3px 8px", cursor: "pointer", fontSize: "13px" }}>&#8594;</button>
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} style={{ border: "1px solid #bbb", background: "#f5f5f5", padding: "3px 8px", cursor: "pointer", fontSize: "13px" }}>&#9668;</button>
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} style={{ border: "1px solid #bbb", background: "#f5f5f5", padding: "3px 8px", cursor: "pointer", fontSize: "13px" }}>&#9658;</button>
              </div>
            </div>

            {/* Download */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderTop: "1px solid #ddd" }}>
              <span style={{ fontSize: "13px", color: "#333" }}>Download As</span>
              <select
                value={downloadFormat}
                onChange={(e) => setDownloadFormat(e.target.value)}
                style={{ border: "1px solid #bbb", fontSize: "13px", padding: "2px 4px", background: "#fff" }}
              >
                <option>Select</option>
                <option>PDF</option>
                <option>Excel</option>
              </select>
              <button
                onClick={() => {
                  if (downloadFormat === "PDF") {
                    const fmt = (s) => { const [y,m,d] = s.split("-"); return `${d}/${m}/${y}`; };
                    downloadPDF(logoRef.current, filteredTx, fmt(dateFrom), fmt(dateTo));
                  }
                }}
                style={{ background: "#7a9e3b", border: "none", color: "#fff", width: "28px", height: "24px", fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >&#8594;</button>
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
