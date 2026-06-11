import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import LoginPanel from "../components/LoginPanel";

function Home() {
  return (
    <>
      <Header />

      <Navbar />

      <div className="max-w-[1400px] mx-auto flex">

        <div className="w-[75%]">
          <HeroSlider />
        </div>

        <div className="w-[25%]">
          <LoginPanel />
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto mt-4">

        <div className="bg-red-600 text-white p-3">
          DIGITAL ARREST SCAM !
        </div>

        <div className="bg-blue-600 text-white p-3 mt-2">
          FAKE INVESTMENT SCHEME !
        </div>

      </div>

    </>
  );
}

export default Home;