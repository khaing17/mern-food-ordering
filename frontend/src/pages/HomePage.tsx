import { heroAssets } from "@/config/assets";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 pb-10">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 z-10">
        <h1 className="text-3xl font-bold text-orange-500 tracking-tight">
          Tuck into a take away today
        </h1>
        <span className="text-xl text-gray-900">
          Food is just a click away!
        </span>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 place-items-center">
        <div>
          <img src={heroAssets.landing} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <p className="text-2xl font-semibold text-gray-900 tracking-tighter">
            Order take away even faster!
          </p>
          <p>
            Download MERNEAT app for faster ordering and personalized
            recommendation.
          </p>
          <img src={heroAssets.appDownload} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
