import React from "react";
import "./Hero.css";
import pic from "../../assets/iamges/image2.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={pic}
                  alt="TUTU"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="col">
                <h3 className="text-uppercase">
                  Hello, I'm Tutu,<br/> a fullstack developer.
                </h3>
                <br />
                <p>
                  I specialize in custom application development. if you're a
                  business looking to have an online presence or looking to
                  hire, contact me.
                </p>
                <p>
                  <a href="#contact" className="btn btn-warning btn-lg rounded-pill">Connect me</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
