import React from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

//pages
import Home from "./pages/Home";

function App() {
  return (
    <div className=" ">
      <div className="flex h-screen">
        <Menu />
        <main className=" flex flex-col w-full">
          <Navbar />
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
