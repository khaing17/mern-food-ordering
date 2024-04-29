import { heroAssets } from "@/config/assets";

const Hero = () => {
  return (
    <div className="">
      <img
        className="w-full max-h-[600px] object-cover"
        src={heroAssets.hero}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;
