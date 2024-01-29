import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="containere">
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h3>Html Css</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                There are projects Which have been made with {""}
                <span className="span">Html and Css</span>
              </p>
              <Link to="/Html_css">
                <a href="#">See projects</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h3>Javascript</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                There are projects Which have been made with {""}
                <span className="span">Javascript</span>
              </p>
              <Link to="/javascript">
                <a href="#">See projects</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h3>React.js</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                There are projects Which have been made with{" "}
                <span className="span">React.js</span>
              </p>
              <Link to="/react">
                <a href="#">See projects</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
