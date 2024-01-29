import React from "react";
import { Header } from "../../layout/header";
import { Footer } from "../../layout/footer";
import "./javascript.css";

export const Javascript = () => {
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
                href="https://guileless-wisp-234a23.netlify.app/"
              >
                Searching and single page in Javascript
              </a>
            </li>
            <li className="text-center mt-5">
              <a
                className="text-blue-600 text-xl "
                href="https://cosmic-gingersnap-811621.netlify.app/"
              >
                Cart page in Javascript
              </a>
            </li>
            <li className="text-center mt-5">
              <a
                className="text-blue-600 text-xl "
                href="https://bucolic-sawine-dd5a4f.netlify.app"
              >
                Phone programms in Javascript
              </a>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};
