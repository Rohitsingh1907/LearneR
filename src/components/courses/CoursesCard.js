import React from "react";
import "./CoursesCard.css";
const CoursesCard = (props) => {
  return (
    <div className="bg-black text-white px-4 mx-4 cards my-4 py-4 course-card">
      <h1 className="font-bold text-[20px] py-4 ">{props.title}</h1>
      <p className="pb-4">{props.content}</p>
      <div className="gap-2 flex justify-between mt-4">
        <button className="bg-white text-black rounded-xl px-4 py-2">
          Explore More
        </button>
        <button className="bg-yellow-200 text-black rounded-xl px-4 py-2">
          <a href="https://buy.stripe.com/test_5kA02ug2y462e7C8ww">Buy Now</a>
        </button>
      </div>
    </div>
  );
};

export default CoursesCard;
