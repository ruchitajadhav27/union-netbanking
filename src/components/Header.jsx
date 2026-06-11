import logo from "../assets/images/logo.png";
import toll from "../assets/images/toll-free.png";

function Header() {
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-5 px-4">

        <img
          src={logo}
          className="h-16 object-contain"
        />

        <div className="text-right">
          <h2 className="text-3xl mb-2">
            All-India Toll Free Number
          </h2>

          <img
            src={toll}
            className="h-12 ml-auto"
          />
        </div>

      </div>
    </div>
  );
}

export default Header;