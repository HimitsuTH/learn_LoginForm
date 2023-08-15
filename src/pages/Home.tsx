import React from "react";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

// type Props = {}

const Home = () => {
  return (
    <div>
      <div className="flex h-screen">
        <Menu />
        <main className=" flex flex-col w-full">
          <Navbar />
          <div className="p-5  h-full"><p>Hello World</p></div>
        </main>
      </div>
    </div>
  );
};

export default Home;
