import globalsign from "../assets/images/globalsing.png";
import compliance from "../assets/images/Compliance.png";
import successImg from "../assets/images/success.png";
import wrongImg from "../assets/images/wrong.png";

const links = [
  { text: "RBI Limited Liability Policy", bold: true },
  { text: "Apply for UECLGS 5.0", bold: false },
  { text: "Agri Advisory Services", bold: false },
  { text: "Value Chain Finance", bold: false },
  { text: "Apply for LC/BG/Forex remittance", bold: false },
  { text: "Apply for POS", bold: false },
  { text: "Avail Pre-Approved Credit Card", bold: true },
  { text: "Union Bank FastTag Recharge", bold: true },
  { text: "Apply for General Insurance", bold: true },
  { text: "Branch/ATM Locator", bold: false },
  { text: "DigiLocker", bold: false },
  { text: "DigiSaathi-Helpline 24*7", bold: false, isNew: true },
  { text: "Door Step Banking", bold: false },
  { text: "Generate CIBIL Score", bold: false },
  { text: "Government Schemes", bold: false },
  { text: "Grievances Online", bold: false },
  { text: "Procedure to Lodging the Grievance", bold: false },
  { text: "Instant Personal Loan", bold: false },
  { text: "Kisan Vikas Patra", bold: false },
  { text: "NPS", bold: false },
  { text: "Online Account Opening", bold: false },
  { text: "Online Loan Application", bold: false },
  { text: "Online Nomination", bold: false },
  { text: "Open Trading account", bold: false },
  { text: "Online Tax Payments", bold: false },
  { text: "Tokenisation Product Features", bold: false },
  { text: "Union e-Tax Payments", bold: false },
  { text: "Utility Bill Payments", bold: false },
  { text: "View Settlement Calendar E-instruction", bold: false },
  { text: "Accessibility", bold: false },
];

export default function QuickLinks() {
  return (
    <div style={{ background: "#1a7bc4", width: "270px", flexShrink: 0, alignSelf: "flex-start" }}>
      <div style={{ padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
        <span style={{ color: "#fff", fontSize: "16px" }}>
          Quick <strong>Links!</strong>
        </span>
      </div>
      <ul style={{ listStyle: "none", padding: "4px 0", margin: 0 }}>
        {links.map((link, i) => (
          <li key={i}>
            <a
              href="#"
              style={{ display: "flex", alignItems: "flex-start", gap: "6px", padding: "4px 14px", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
            >
              <span style={{ color: "#fff", fontSize: "11px", marginTop: "3px", flexShrink: 0 }}>⇒</span>
              <span style={{ fontSize: "13px", color: "#fff", fontWeight: link.bold ? "bold" : "normal", lineHeight: "1.4" }}>
                {link.text}
                {link.isNew && (
                  <span style={{ marginLeft: "4px", color: "#00dd00", fontWeight: "bold", fontSize: "11px" }}>NEW</span>
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Security Badges */}
      <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
        <img src={globalsign} alt="GMO GlobalSign Secure" style={{ width: "155px", display: "block" }} />
        <img src={compliance} alt="PCI DSS Compliant" style={{ width: "130px", display: "block", marginLeft: "auto", marginRight: "auto", alignSelf: "center" }} />
      </div>
    </div>
  );
}

export function SecurityPanel() {
  const successItems = [
    "Access your bank website only by typing the URL in address bar of browser.",
    "Change your Internet Banking password at regular intervals.",
    "Immediately change your passwords if you have accidentally revealed your credentials.",
    "Use Virtual keyboard feature while logging into your internet banking account.",
    "Always logout when you exit Net Banking. Do not directly close the browser.",
    "Phishing is a fraudulent attempt, usually made through emails/calls/SMS to capture your confidential data like NetBanking Id/Password, mobile no, email Id /Password, Card no /PIN/CVV no etc. Please report immediately on antiphishing[Dot]ciso[At]the[rate]unionbankofindia[Dot]bank if you receive any such email/SMS or Phone call.",
    "Be sure the URL you are accessing has 'https://'. The 's' indicates secured and the site uses encryption.",
    "Always ensure latest version of Operating System with updated security patches.",
    "Regularly update Browser and Antivirus with latest available definitions.",
    "Always check the last log-in date and time in the post login page.",
    "Ensure firewall is on and Antivirus is scanning the system regularly.",
    "Avoid accessing Internet Banking from Cyber Cafes or shared PCs.",
    "Check your account statements periodically to ensure that all the entries are correctly captured. In case of any discrepancy, inform the bank immediately.",
  ];

  const wrongItems = [
    "Never respond to e-mails/embedded links/calls asking you to update or verify UserIDs/Passwords/Card no/CVV etc. Union Bank or any of its representative will never send you e-mails/SMS or calls you over phone to get your confidential details of your account/PIN/OTP Password or personal details.",
    "Never enter login or other sensitive information in any pop up window.",
    "Do not be victim of SIM SWAPS, immediately investigate when you notice that you are not receiving call and message or getting SIM Registration fail. Keep your phone switched on and check alerts from Union Bank of India.",
    "Never respond to any SIM Swap Request even from mobile operators.",
  ];

  const sections = [
    { img: successImg, items: successItems, color: "#2a9d2a", mark: "✔" },
    { img: wrongImg,   items: wrongItems,   color: "#cc2229", mark: "✖" },
  ];

  return (
    <div style={{ width: "360px", flexShrink: 0, alignSelf: "flex-start", display: "flex", flexDirection: "column", gap: "0px" }}>
      <div style={{ border: "1px dashed #0057a8", padding: "14px 20px", height: "300px", overflow: "hidden" }}>
        <h3 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px", lineHeight: 1.4 }}>
          <span style={{ color: "#cc2229" }}>SAFE &amp; SECURE</span>{" "}
          <span style={{ color: "#0057a8", fontWeight: "normal", fontSize: "13px" }}>[INTERNET BANKING USAGE GUIDELINES]</span>
        </h3>
        <div style={{ overflow: "hidden", height: "230px" }}>
          <div className="scroll-up">
            {[...sections, ...sections].map((section, si) => (
              <div key={si} style={{ marginBottom: "80px" }}>
                <div style={{ textAlign: "center", marginBottom: "6px" }}>
                  <img src={section.img} alt="" style={{ height: "45px", display: "inline-block" }} />
                </div>
                {section.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: "8px" }}>
                    <span style={{ color: section.color, fontSize: "13px", flexShrink: 0, marginTop: "1px", fontWeight: "bold" }}>{section.mark}</span>
                    <span style={{ fontSize: "12px", color: "#444", textAlign: "justify", lineHeight: "1.5" }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ border: "1px dashed #0057a8", padding: "14px" }}>
        <h3 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>
          <span style={{ color: "#cc2229" }}>SAFEGUARD</span>{" "}
          <span style={{ color: "#0057a8", fontWeight: "normal", fontSize: "13px" }}>[BEWARE OF PHISHING]</span>
        </h3>
        <p style={{ fontSize: "13px", color: "#444", textAlign: "justify", lineHeight: "1.7", margin: 0 }}>
          Avoid fraudulent communications asking for your UserId, Password, Card No, Account No. etc.
          Fraudulent emails contain links of look-alike websites to capture your financial data.
          Bank will never send such communications to you asking for your personal/confidential data.
          Always visit Bank's site instead of clicking on the links provided in emails/third party websites.
          Do not respond to pop-up windows asking for your financial or confidential information.
        </p>
      </div>
    </div>
  );
}
