import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import NoticeBoard from "../components/NoticeBoard";
import QuickLinks, { SecurityPanel } from "../components/QuickLinks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>

      <Header />
      <Navbar />

      {/* SLIDER + LOGIN PANEL — combined, same spacing as header */}
      <HeroSlider />

      {/* NOTICE BARS — same spacing as header */}
      <div className="max-w-[1200px] mx-auto px-4">
        <NoticeBoard />
      </div>

      {/* 3 COLUMNS */}
      <div className="max-w-[1200px] mx-auto px-4" style={{ paddingTop: "16px" }}>
        <div className="flex items-start" style={{ gap: "20px" }}>

          <div className="shrink-0">
            <QuickLinks />
          </div>

          <div className="flex-1" style={{ padding: "0 12px", display: "flex", flexDirection: "column", gap: "0px" }}>
            {/* THE LATEST card */}
            <div style={{ border: "1px dashed #0057a8", padding: "16px 18px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "12px", margin: "0 0 12px" }}>
                <span style={{ color: "#cc2229", fontWeight: "900", fontSize: "17px" }}>THE</span>{" "}
                <span style={{ color: "#888", fontWeight: "normal", fontSize: "15px", letterSpacing: "1px" }}>LATEST</span>
              </h3>
              <p style={{ fontSize: "13px", color: "#cc2229", textAlign: "justify", lineHeight: "1.7", marginBottom: "12px" }}>
                Customers are requested to note that old cheque books are being phased out with new ones having
                additional security features w.e.f. 01.07.2021. Please contact your branch manager for replacement
                of old cheque book with new cheque book well before the said date. If you have already issued cheque
                from old cheque book, please get it replaced with new cheque immedietly. On receipt of confirmation
                from you, Bank will delete the old cheque book records from Core Banking Solution (CBS) system.
              </p>
              <p style={{ fontSize: "13px", color: "#cc2229", textAlign: "justify", lineHeight: "1.7", marginBottom: "12px" }}>
                You have registered for mandatory additional layer of security, by choosing 3 challenge questions
                and answering them. In case of providing incorrect answers to the such challenge questions your
                Internet Banking shall be blocked. In such case, please call our Customer Service at 1800-2222-44
                &amp; 1800-208-2244 and choose option no. 2 for further process.
              </p>
              <p style={{ fontSize: "13px", color: "#cc2229", marginBottom: "12px" }}>
                PSB Alliance Doorstep Banking Services available
              </p>
              <p style={{ fontSize: "13px", color: "#cc2229", textAlign: "justify", lineHeight: "1.7", margin: 0 }}>
                Bank has introduced 3 Factor Authentication (FA) to enhance the security features of your accounts,
                one time registration for the same is mandatory.{" "}
                <a href="#" style={{ color: "#cc2229", fontWeight: "bold" }}>
                  Challenge Question Enrollment by user[PDF file].
                </a>
              </p>
            </div>

            {/* BEWARE card */}
            <div style={{ border: "1px dashed #0057a8", padding: "16px 18px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "12px", margin: "0 0 12px" }}>
                <span style={{ color: "#cc2229", fontWeight: "900", fontSize: "17px" }}>BEWARE</span>{" "}
                <span style={{ color: "#888", fontWeight: "normal", fontSize: "15px", letterSpacing: "1px" }}>OF FRAUD CALLS</span>
              </h3>
              <p style={{ fontSize: "13px", color: "#444", textAlign: "justify", lineHeight: "1.7", margin: 0 }}>
                It has been observed that many fake and fraudulent contact numbers are circulated on web posting as
                'Banks Customer Care Number'. One such number found in web search is 06206419089. Customers are
                hereby cautioned to conduct their own investigations and analysis and should check the accuracy,
                reliability of the contact numbers before any contact number received by the customer other than
                through our official channels such as Bank's Website/authentic literature/Advertisements etc. Bank
                accepts no responsibility towards any loss incurred by the customer incidental to usage of any
                unauthentic contact number/channel.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <SecurityPanel />
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}
