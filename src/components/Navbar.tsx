import React from "react";

const Navbar = () => {
  return (
    <nav className="  bg-black-2 flex  p-5   border-b border-black-4">
      <div className=" text-white flex gap-x-2 justify-center items-center">
        <p className=" text-sm">Admin | </p>
        <p className=" bg-black-4 p-1 rounded-lg text-sm">AKA</p>
      </div>
    </nav>
  );
};

export default Navbar;
