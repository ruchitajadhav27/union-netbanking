export default function Footer() {
  return (
    <div style={{ borderTop: "1.5px solid #1a7bc4", marginTop: "20px", padding: " 0", textAlign: "center", background: "#fff" }}>
      <p style={{ fontSize: "12px", color: "#5b5a5a", marginBottom: "5px" , marginTop: "10px"}}>
        "Site best viewed at 1024x768 resolution in I.E. 10 or above, Google Chrome 40 or above, Firefox 37 or above, Safari 8 or above."
      </p>
      <p style={{ fontSize: "13px", marginBottom: "6px" }}>
        <a href="#" style={{ color: "#1a7bc4", textDecoration: "none" }}>Terms &amp; Conditions</a>
        {" | "}
        <a href="#" style={{ color: "#1a7bc4", textDecoration: "none" }}>Disclaimer</a>
        {" | "}
        <a href="#" style={{ color: "#1a7bc4", textDecoration: "none" }}>Privacy Policy</a>
      </p>
      <p style={{ fontSize: "12px", color: "#444", marginBottom: "10px"  }}>
        Copyright © Union Bank of India. All rights reserved.
      </p>
    </div>
  );
}
