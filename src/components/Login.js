import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
      console.log("user LogedIn successsfully");
      toast.success("user LoggedIn Successfully", { position: "top-center" });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="xl:flex xl:justify-center xl:items-center  xl:bg-gray-100 xl:text-black xl:border-gray-300 xl:mx-60 xl:my-32">
      <form onSubmit={handleSubmit} className=" h-full pb-10">
        <h3 className="flex justify-center text-[25px] py-10 font-bold">
          LogIn
        </h3>

        <div className="px-10 mb-10">
          <div className="mb-5">
            <label className="w-full pb-2">Email Address</label> <br />
            <input
              type="email"
              className="form-control mt-2 rounded-xl px-10 py-2"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <br />
            <input
              type="password"
              className="form-control mt-2 rounded-xl px-10 py-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-blue-400 text-white px-20 py-2 rounded-xl mx-12">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
