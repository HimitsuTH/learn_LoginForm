import React from "react";



const Menu = () => {
  return (
    <aside className="  z-20 h-full  pt-16 flex lg:flex flex-shrink-0 flex-col basis-1/6 bg-black-3">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 flex flex-col pl-3">
          <ul className="p-3 w-[200px] text-white">
            <li className="d-menu-list cursor-pointer p-2 rounded-md mt-2 hover:bg-white hover:text-black-3">Dashboard</li>
            <li className="d-menu-list cursor-pointer p-2 rounded-md mt-2 hover:bg-white hover:text-black-3">User</li>
            <li className="d-menu-list cursor-pointer p-2 rounded-md mt-2 hover:bg-white hover:text-black-3">Help</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
