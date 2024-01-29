import React from "react";
import { Header } from "../../layout/header";
import { Footer } from "../../layout/footer";
import "../Javascript/javascript.css";

export const Html_css = () => {
  return (
    <div>
      <Header />
      <div className="containere ">
        <h1 className="text-center uppercase mt-10">Projects</h1>
        <div className="wrapp">
          <ol className="mt-20 mb-20 ">
            <li className="text-center">
              <a
                className="text-blue-600 text-xl"
                href="https://coruscating-banoffee-99227b.netlify.app"
              >
                PAN api project in HTML and CSS
              </a>
            </li>
            <li className="text-center mt-5">
              <a
                className="text-blue-600 text-xl "
                href="https://inspiring-raindrop-c8b7bf.netlify.app//"
              >
                Watch shop in HTML and CSS
              </a>
            </li>
            <li className="text-center mt-5">
              <a
                className="text-blue-600 text-xl "
                href="https://65b74faa1cb913f666e8ea15--fantastic-biscuit-1b9ecd.netlify.app/"
              >
                Cafe in HTML and CSS
              </a>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};
