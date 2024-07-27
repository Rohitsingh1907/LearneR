import React from "react";
const WhyUsCard = ({ props }) => {
  return (
    <div className=" bg-gray-200 mb-5 text-[25px]  rounded-xl p-4 mx-5">
      <img src={props.url} alt="exam" className="w-[100px] rounded-xl pb-4" />
      <p className="text-[25px] font-bold">{props.title}</p>
      <p className="text-[25px]">{props.content}</p>
    </div>
  );
};

export default WhyUsCard;
