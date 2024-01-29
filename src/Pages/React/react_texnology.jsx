import React from "react";
import { Header } from "../../layout/header";
import { Footer } from "../../layout/footer";
import "../Javascript/javascript.css";

export const React_texnology = () => {
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
                href="https://courageous-sherbet-1b85bf.netlify.app"
              >
                Quiz in React.js
              </a>
            </li>
            <li className="text-center mt-5">
              <a
                className="text-blue-600 text-xl "
                href="https://mellow-khapse-15df78.netlify.app"
              >
                Cloth shop in React.js
              </a>
            </li>
            <li className="text-center mt-5">
              <a
                className="text-blue-600 text-xl "
                href="https://gorgeous-sunshine-76a0ef.netlify.app"
              >
                Todo in React.js
              </a>
            </li>
          </ol>
        </div>
        <h1 className="text-center mb-10 text-white">In these project I have used a <span className="text-xl">Taiwindcss, Redux, Redux-toolkit, Vite</span> </h1>
      </div>
      <Footer />
    </div>
  );
};
