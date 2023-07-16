import React from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import CreatedDP from "./CreatedDP";
import Footer from "../../components/Footer";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      {/* DASHBOARD OVERLAY */}
      <div className="homepage-overlay text-white mt-14">
        <div className="w-5/6 text-center mx-auto">
          <p className=" text-2xl md:text-4xl lg:text-5xl font-bold pt-16 mb-4 md:pt-24 ">
            Get people connected to your brand
          </p>
          <p className="md:text-lg font-bold mb-8">
            By enabling them create and share personalized DP based on your
            brand, event or campaign banners
          </p>
          <div className="font-bold flex flex-col md:flex-row md:justify-center mt-4 gap-2 md:gap-8 pb-16">
            <button
              className="py-2 bg-orange-600 md:p-4"
              onClick={() => navigate("/login")}
            >
              Create a DP
            </button>
          </div>
        </div>
      </div>

      {/* CREATED DP */}
      <CreatedDP />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Dashboard;
