import { useState } from "react";
import logo from "../asset/getdp.png";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const [tabOpen, settabOpen] = useState(false);
  return (
    <div className="navbar shadow-md fixed top-0 left-0 bg-white w-full h-16">
      <div className="md:w-5/6 mx-auto p-4  md:pt-4 flex justify-between">
        <div className="logo md:pt-2">
          <img className="h-6" src={logo} alt="logo" />
        </div>
        <div className="md:hidden link-route">
          <FaBars
            className="text-blue-500 cursor-pointer"
            onClick={() => settabOpen(!tabOpen)}
          />
        </div>
        <div className="hidden md:flex gap-2 font-bold">
          <button>Create DP</button>
          <button>My DP</button>
        </div>
        <div className="hidden md:block">
          <button
            className="p-2  bg-green-600 text-white font-bold"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
      {tabOpen && (
        <div className="md:w-5/6 mx-auto px-4 pb-2">
          <div className="flex flex-col gap-2">
            <p>Create DP Banner</p>
            <p>My DP Banners</p>
            <button
              className="inline-block w-24 p-1 bg-green-600 text-white font-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
