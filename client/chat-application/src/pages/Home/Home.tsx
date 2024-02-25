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
        <div className="absolute outer-box p-10">
          <div className="sm:m-20">
            <h1 className="text-5xl text-white font-bold sm:mx-10 mt-20">
              Let's Chat
            </h1>
            <h6 className="text-white text-xl mt-2 sm:mx-10 font-semibold">
              Let's Connect
            </h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
