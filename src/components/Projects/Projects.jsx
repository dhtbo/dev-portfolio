import React from "react";
import "./Projects.css";
import photosnap from "../../assets/iamges/projects/jeshoots-com-LtNvQHdKkmw-unsplash.jpg";
import piggame from "../../assets/iamges/projects/piggame.jpg";
import mulititodo from "../../assets/iamges/projects/mulititodo.jpg";
import camylla from "../../assets/iamges/projects/camylla-battani.jpg";

export default function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="projects-content">
              <h4 className="text-uppercase text-center">Projects</h4>
              <br />

              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card">
                    <img src={photosnap} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">PhotoSnap</h5>
                      <p className="card-text">
                        PhotoSnap is a platform for photographers and visual
                        shorytellers. We make it easy to share photos, tell
                        stories and connect with others.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={piggame} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Pig Game</h5>
                      <p className="card-text">
                        Battle it out with another player to se who can roll th
                        dice of luck.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={mulititodo} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Muliti-theme-Todo</h5>
                      <p className="card-text">
                        Plan you whole day activities using this multi-theme
                        todo app.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img
                      src={camylla}
                      height="200px"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">camylla-battani</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus accusantium molestias suscipit magnam aspernatur
                        tempore autem aliquid reprehenderit, doloribus aperiam
                        temporibus odit perferendis velit veritatis enim
                        similique minima asperiores quo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
