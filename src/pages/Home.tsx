import React from "react";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

// type Props = {}

const Home = () => {
  return (
    <div>
      <div className=" flex h-screen relative">
        <Menu />
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
