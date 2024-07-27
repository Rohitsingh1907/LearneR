import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-black text-white flex flex-row justify-between py-5 px-5 xl:px-20 xl:py-10">
      <h1 className="text-[20px] items-center xl:text-[35px]">LearneR</h1>
      <div className="hidden lg:block xl:block xl:text-[20px]">
        <ul className="flex flex-row gap-3 xl:gap-5 cursor-pointer">
          <li className="">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>About Us</li>
          <li className="">
            <NavLink to="/courses">Courses</NavLink>
          </li>
        </ul>
      </div>
      <div className="xl:text-[20px] cursor-pointer">
        <button className="px-2 xl:px-5">
          <NavLink to="/login">LogIn</NavLink>
        </button>
        <button className="bg-white rounded-xl text-black px-2 py-2 xl:px-5">
          <NavLink to="/register">Sign Up</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Header;
