import React from "react";
import GDG from "../../assets/GDG.png";
import DevFestCrowd from "../../assets/DevFestCrowd.jpg";
import DevFest from "../../assets/DevFest.svg";
import devfestImg from "../../assets/devfestImg.png";
import Calender from "../../assets/Calender.svg";
import Map from "../../assets/Map.svg";

export default function Home() {
  return (
    <div
      id="home"
      className="pt-12 text-white h-[100vh] flex flex-col items-center justify-center relative bg-[rgba(0,0,0,0.6)]"
    >
      <div
        style={{
          background: `url(${DevFestCrowd})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`h-[100vh] absolute w-full top-0 left-0 -z-10 blur-[1px]`}
      ></div>
      <div className="text-center">
        <div className="flex w-[100%] items-center justify-center p-6">
          <div className="w-[25%] lg:w-[5%]">
            <img src={GDG} alt="Google Developer Groups Patna" />
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl whitespace-nowrap">
              Google Developer Groups
            </h1>
            <p className="text-[18px] lg:text-2xl text-start">Patna</p>
          </div>
        </div>
        <p className="text-center text-xl lg:text-2xl">Presents</p>
        <div className="flex items-center justify-center">
          <img
            // src={DevFest}
            src={devfestImg}
            alt="DevFest Patna 2023"
            className="w-[50%] lg:w-[600px] inline-block"
          />
          <span className="font-googleBold text-2xl lg:text-8xl ml-2 whitespace-nowrap">
            | Patna
          </span>
        </div>
        <div className="lg:text-4xl">
          <h2>Bihar's most awaited developer conference</h2>
          <div className="flex items-center justify-center text-[14px] lg:text-2xl">
            <img src={Calender} alt="date" className="w-[30px] lg:w-[50px]" />
            <p> XX Dec 2024</p>
            {/* <p>TBA</p> */}
            <span className="w-[20px] aspect-square bg-white m-2 mx-4 rounded-xl"></span>
            <p>9 AM onwards</p>
            {/* <p>TBA</p> */}
          </div>

          <a
            href=""
            target="_blank"
            className="flex justify-center items-center text-[14px] lg:text-2xl text-white"
          >
            <img src={Map} alt="location" className="w-[30px] lg:w-[50px]" />
            <p>TBA</p>
          </a>

          <a className="text-white " href="https://gdgpatna.com/gallery">
            <button className="bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.5)] mr-3 hover:text-black transition-all ease-in-out duration-500 px-4 py-2 text-lg hover:translate-y-1 rounded-lg">
              Buy Tickets
            </button>
          </a>

          {/* <button className="bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.5)] hover:text-black transition-all ease-in-out duration-500 px-4 py-2 text-lg hover:translate-y-1">
            CFP Closed
          </button> */}
        </div>
      </div>
    </div>
  );
}
