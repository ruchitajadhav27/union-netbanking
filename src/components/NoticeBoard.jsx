import npsGif from "../assets/images/NPS.gif";

export default function NoticeBoard() {
  const gif = <img src={npsGif} alt="NPS" style={{ height: "12px", verticalAlign: "middle", display: "inline" }} />;

  return (
    <div className="max-w-[1450px] mx-auto mt-4">

      <div className="bg-[#ed1c24] h-[34px] overflow-hidden flex items-center">
        <div className="marquee-text text-white text-[14px] font-medium whitespace-nowrap flex items-center gap-2">
          {gif}
          DIGITAL ARREST SCAM ! Calls claiming digital arrest via police/CBI/other Gov agencies are fake no arrests happen on video calls. Hang up immediately. Be alert and vigilant.
          {gif}
        </div>
      </div>

      <div className="bg-[#0a78bd] h-[34px] overflow-hidden flex items-center mt-3">
        <div className="marquee-text text-white text-[14px] font-medium whitespace-nowrap flex items-center gap-2">
          {gif}
          FAKE INVESTMENT SCHEME ! Promised guaranteed high returns via unknown apps or crypto? Sounds too good but may be fake. Your Money gone. Stay alert.
          {gif}
        </div>
      </div>

    </div>
  );
}