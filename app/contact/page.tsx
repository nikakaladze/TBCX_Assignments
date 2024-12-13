import React from "react";

export const Contact: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[rgb(1,82,148)] bg-no-repeat">
        <div className="w-[420px] bg-transparent text-white rounded-lg p-8">
          <h2 className="text-center text-3xl">Login Form</h2>

          <div className="input-box w-full h-[50px] bg-inherit my-7">
            <input
              type="text"
              placeholder="UserName"
              className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full text-white px-5 py-2.5 pr-12 placeholder-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full text-white px-5 py-2.5 pr-12 placeholder-white my-5"
            />
          </div>

          <button className="btn w-full h-[45px] bg-white border-none outline-none rounded-full cursor-pointer text-black mt-20">
            Submit
          </button>

          <div className="register-link text-center text-sm mt-5">
            Don't have an account?{" "}
            <a href="#" className="text-white underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
