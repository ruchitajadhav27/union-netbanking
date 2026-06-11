import slider1 from "../assets/images/slider1.jpg";

function HeroSlider() {
  return (
    <div>
      <img
        src={slider1}
        className="w-full h-[500px] object-cover"
      />
    </div>
  );
}

export default HeroSlider;