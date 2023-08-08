import React from "react";



const Menu = () => {
  return (
    <aside className="  z-20 h-full  pt-16 flex lg:flex flex-shrink-0 flex-col w-64  basis-1/4">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 flex flex-col pl-3">
          <ul className="p-3">
            <li className="d-menu-list">Dashboard</li>
            <li className="d-menu-list">User</li>
            <li className="d-menu-list">Help</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
