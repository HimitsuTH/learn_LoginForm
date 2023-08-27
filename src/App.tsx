import React from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
      <div className="flex h-screen">
        <Menu />
        <main className=" flex flex-col w-full">
          <Navbar />
          <Outlet/>
        </main>
      </div>
    </>
  );
}

export default App;
