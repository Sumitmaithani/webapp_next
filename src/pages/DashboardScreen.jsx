import React from "react";

import SideBar from "@/component/SideBar";
import NavBar from "@/component/NavBar";
import Cards from "@/component/Cards";
import BarChart from "@/component/BarChart";
import DoughnutChart from "@/component/DoughnutChart";
import Addprofile from "@/component/Addprofile";

const DashboardScreen = () => {
  return (
    <div className="flex w-full h-[100vh] justify-between ">
      <SideBar />
      <div className="  lg:ml-[19%] w-screen p-4 ">
        <NavBar />
        <Cards />
        <BarChart />
        <div className="flex flex-col md:flex-row my-5">
          <DoughnutChart />
          <div className="min-w-[50%] ">
            <Addprofile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
