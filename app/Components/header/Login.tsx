import React from "react";

const Login: React.FC = () => {
  return (
    <a
      href="/api/auth/login"
      className="text-[20px] mr-[30px] hover:text-white hover:bg-gradient-to-r from-blue-500 to-green-500 active:bg-gradient-to-r from-blue-500 to-green-500 p-[10px] rounded-[10px]"
    >
      Login
    </a>
  );
};

export default Login;
