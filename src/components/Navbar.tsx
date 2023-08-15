import React from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

const Navbar = () => {
  const navigate:NavigateFunction = useNavigate()
  return (
    <nav className=" flex  p-3  border-b-2 border-black-4 basis-1 ">
      <div className="flex justify-between w-full">
        <div className=" text-white flex flex-row gap-x-2 justify-center items-center">
          <p className=" text-sm">Admin | </p>
          <p className=" bg-black-4 p-1 rounded-lg text-sm">AKA</p>
        </div>
        <button className=" text-white hover:bg-black-4 p-1 rounded-lg" onClick={()=> navigate("/login")}>logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
