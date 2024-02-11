import React from "react";
import "./style.css";
import { Banner, Latest, More, Popular } from "../../components";

const Home = () => {
  return (
    <div>
      <Banner title="How to find your writing voice" text="Read Now" />
      <Latest />
      <Popular />
      <More />
    </div>
  );
};

export default Home;
