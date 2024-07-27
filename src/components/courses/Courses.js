import React from "react";
import { assets } from "../../assets/assets";
import Footer from "../Footer";
import Header from "../Header";
import CoursesCard from "./CoursesCard";

const Courses = () => {
  return (
    <div>
      <Header />
      <img src={assets.CursolA} alt="imgagA" className="w-full mb-10" />
      <h1 className="text-[30px] xl:text-[50px] xl:px-20 xl:items-center xl:mb-10">
        {" "}
        Our Courses
      </h1>
      <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 xl:px-10">
        <CoursesCard
          title="Web Development"
          content="This course helps you in learning Web Development from scratch . By the End if this course you will be able to make an Web Development Projects."
        />
        <CoursesCard
          title="Android Development"
          content="This course helps you in learning Android Development from scratch . By the End if this course you will be able to make an Android Projects."
        />
        <CoursesCard
          title="Artificial Intelligence"
          content="This course helps you in learning Artificial Intelligence from scratch . By the End if this course you will be able to make an Artificial Intelligence."
        />
        <CoursesCard
          title="Machine Learning"
          content="This course helps you in learning Machine Learning from scratch . By the End if this course you will be able to make an Machine Learning."
        />
        <CoursesCard
          title="Python & Django"
          content="This course helps you in learning Python & Django from scratch . By the End if this course you will be able to make an Python & Django project."
        />
        <CoursesCard
          title="Java FullStack Development"
          content="This course helps you in learning Java FullStack Development from scratch . By the End if this course you will be able to make an Java FullStack Development project."
        />
        <CoursesCard
          title="Backend Development"
          content="This course helps you in learning Backend Development from scratch . By the End if this course you will be able to make an project using it."
        />
        <CoursesCard
          title="Object Oriented Programming"
          content="This course helps you in learning Object Oriented Programming from scratch . By the End if this course you will be able to answer questions related to OOPS."
        />
        <CoursesCard
          title="Database Management"
          content="This course helps you in learning DBMS from scratch . By the End if this course you will be able to answer questions related to OOPS."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
