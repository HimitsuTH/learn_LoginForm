import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="  z-20 h-full  pt-16 flex lg:flex flex-shrink-0 flex-col basis-1/6  border-r-2 border-black-4">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 flex flex-col pl-3">
          <ul className="p-3 w-[200px] text-white flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "d-menu-list cursor-pointer p-2 rounded-md mt-2 bg-white text-black-3"
                  : "d-menu-list cursor-pointer p-2 rounded-md mt-2 hover:bg-white hover:text-black-3"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/1"
              className="d-menu-list cursor-pointer p-2 rounded-md mt-2 hover:bg-white hover:text-black-3"
            >
              User
            </NavLink>
            <NavLink
              to="/2"
              className="d-menu-list cursor-pointer p-2 rounded-md mt-2 hover:bg-white hover:text-black-3"
            >
              Help
            </NavLink>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
