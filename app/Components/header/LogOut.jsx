import React from "react";

const LogOut = () => {
  return (
    <a
      href="/api/auth/logout"
      className="text-[20px] mr-[30px] hover:text-white hover:bg-gradient-to-r from-blue-500 to-green-500 active:bg-gradient-to-r from-blue-500 to-green-500 p-[10px] rounded-[10px]"
    >
      Logout
    </a>
  );
};

export default LogOut;
