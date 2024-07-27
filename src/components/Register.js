import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "./firebase";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "user", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }

      console.log("user is registered successfully");
      toast.success("User Registered successfully !!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="xl:flex xl:justify-center xl:items-center  xl:bg-gray-100 xl:text-black xl:border-gray-300 xl:mx-60 xl:my-32">
      <form onSubmit={handleRegister}>
        <h1 className="flex justify-center text-[25px] py-5 font-bold ">
          Sign Up
        </h1>

        <div className="px-10">
          <div>
            <div className="lab-content">
              <label className="lab">First Name</label>
              <br />
              <input
                type="text"
                className="form-control int"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>

            <div className="lab-content">
              <label className="lab">Last Name</label>
              <br />
              <input
                type="text"
                className="form-control int"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            <div className="lab-content">
              <label className="lab">Email Id</label>
              <br />
              <input
                type="email"
                className="form-control int"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="lab-content">
              <label className="lab">Password</label>
              <br />
              <input
                type="password"
                className="form-control int"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <button className="bg-blue-400 text-white px-10 py-2 rounded-xl mx-12 btn-signup">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
