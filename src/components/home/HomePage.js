import React from "react";
import { assets } from "../../assets/assets";
import Footer from "../Footer";
import Header from "../Header";
import Designed from "./Designed";

const HomePage = ({ url, title, content }) => {
  return (
    <div>
      <Header />
      <div className="bg-black xl:flex xl:flex-row xl:px-20 xl:pb-10 ">
        <div className="front py-10 px-5">
          <h1 className="text-[30px] font-bold mb-2 text-white xl:text-[100px] xl:mb-7">
            LearneR
          </h1>
          <p className="text-[18px] mb-2 text-gray-100 xl:text-[31px] xl:mb-4">
            Join us in the contest of your development
          </p>
          <p className="text-gray-300 text-[15px] xl:text-[22px] xl:mb-8 ">
            We provide Live/Recorded lectures ,<br /> Online tutoring ,courses,
            real life projects , etc
          </p>
          <button className="bg-white px-10 py-5 text-[20px] rounded-xl">
            Explore More
          </button>
        </div>

        <div>
          <img src={assets.Landing} alt="imageii" className="xl:rounded-xl" />
        </div>
      </div>

      <h1 className="text-[30px] font-bold justify-center px-8 py-10 xl:px-32 xl:text-[45px] bg-gray-50">
        Why Us ??
      </h1>
      <div className="whyUs mb-10 xl:grid xl:grid-cols-2 xl:px-32 xl:gap-16 bg-gray-50">
        <div className=" bg-white mb-5 text-[25px]  rounded-xl p-4 mx-5">
          <img
            src={assets.exam}
            alt="exam"
            className="w-[100px] rounded-xl pb-4"
          />
          <p className="text-[25px] font-bold">70+</p>
          <p className="text-[23px]">Exams and Courses</p>
          <button className="bg-black cursor-pointer mt-5 text-white px-3 py-1 rounded-xl flex flex-row text-[15px] xl:text-[20px] ">
            Buy Now
          </button>
        </div>

        <div className=" bg-white mb-5 text-[25px]  rounded-xl p-4 mx-5">
          <img
            src={assets.exam}
            alt="exam"
            className="w-[100px] rounded-xl pb-4"
          />
          <p className="text-[25px] font-bold">160+</p>
          <p className="text-[23px]">E-Notes and PDF</p>
          <button className="bg-black cursor-pointer mt-5 text-white px-3 py-1 rounded-xl flex flex-row text-[15px] xl:text-[20px] ">
            Buy Now
          </button>
        </div>

        <div className=" bg-white mb-5 text-[25px]  rounded-xl p-4 mx-5">
          <img
            src={assets.exam}
            alt="exam"
            className="w-[100px] rounded-xl pb-4"
          />
          <p className="text-[25px] font-bold">1300+</p>
          <p className="text-[23px]">Test Series</p>
          <button className="bg-black cursor-pointer mt-5 text-white px-3 py-1 rounded-xl flex flex-row text-[15px] xl:text-[20px] ">
            Buy Now
          </button>
        </div>

        <div className=" bg-white mb-5 text-[25px]  rounded-xl p-4 mx-5">
          <img
            src={assets.exam}
            alt="exam"
            className="w-[100px] rounded-xl pb-4"
          />
          <p className="text-[25px] font-bold">115+</p>
          <p className="text-[23px]">Recorded Classes</p>
          <button className="bg-black cursor-pointer mt-5 text-white px-3 py-1 rounded-xl flex flex-row text-[15px] xl:text-[20px] ">
            Buy Now
          </button>
        </div>
      </div>
      <hr />
      <img src={assets.Image2} alt="image2" className="w-full h-1/2" />
      <h1 className="text-[30px] font-bold justify-center px-8 py-10 xl:px-32 xl:text-[45px]">
        Designed for all
      </h1>

      <div className="Designed-for-All xl:grid xl:grid-cols-2 xl:px-32 xl:gap-16">
        <Designed />
        <Designed />
        <Designed />
        <Designed />
        <Designed />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
