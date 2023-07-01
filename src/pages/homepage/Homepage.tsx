import logo from "../../asset/getdp.png";
import banner from "../../asset/banner.jpg";
const Homepage = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <div className="navbar flex justify-between mx-4 py-2 h-12">
        <div className="logo">
          <img className="h-6" src={logo} alt="logo" />
        </div>
        <div className="link-route">
          <p>Discover</p>
        </div>
      </div>

      {/* HOMEPAGE OVERLAY */}
      <div className="homepage-overlay text-white ">
        <div className="w-5/6 text-center mx-auto">
          <p className=" text-2xl font-bold pt-8 mb-4 ">
            Get people connected to your brand
          </p>
          <p>
            By enabling them create and share personalized DP based on your
            brand, event or campaign banners
          </p>
          <div className="flex flex-col md:flex-row mt-4 gap-2 pb-8">
            <button className="bg-blue-500 py-2">View Demo</button>
            <button className=" py-2 bg-yellow-800 ">Get Started</button>
          </div>
        </div>
      </div>
      {/* PUBLISHING DP BANNER */}
      <div className="bg-gray-100">
        <div className="w-5/6 mx-auto pt-8">
          <p className="text-2xl font-bold text-center">
            Publishing your first DP Banner
          </p>
        </div>
      </div>
      {/* END OF HOMEPAGE */}
    </div>
  );
};

export default Homepage;
