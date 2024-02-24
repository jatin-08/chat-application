import React from "react";
import Headers from "../../components/Headers/Headers";
import bgImage from "../../assets/bg-image.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Headers />
      <section className="relative">
        <div className="bg-image">
          <img src={bgImage} alt="image" />
        </div>
        <div className="absolute outer-box top-1/4 left-52">
          <h1 className="text-5xl text-white font-bold">Let's Chat</h1>
          <h6 className="text-white text-xl mt-3 font-semibold">Let's Connect</h6>
        </div>
      </section>
    </>
  );
};

export default Home;
