import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/Rupeshkumar4/Article-Sumarizer-OpenAI/upload/master",
              "_blank"
            )
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
      Streamline your reading with Summize, an open-source article summarizer that distills lengthy articles into brief and easily digestible summaries. 
      This innovative tool helps you grasp the key points of a text without sifting through extensive content.
          <h1>Made By Rupesh Kumar ❤️</h1>
      </h2>
    </header>
  );
};

export default Hero;
