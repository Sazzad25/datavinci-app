import React from "react";
import Scorecard from "./Scorecard";
import Board from "./board";
import Navbar from "./Navbar";
import Graph from "./Graph";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Board></Board>
      <Scorecard></Scorecard>
      <Graph></Graph>
    </div>
  );
};

export default Home;
