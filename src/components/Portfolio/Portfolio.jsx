import React from "react";
import "./Portfolio.css";
import photosnap from "../../assets/iamges/projects/jeshoots-com-LtNvQHdKkmw-unsplash.jpg";
import pig_game from "../../assets/iamges/projects/piggame.jpg";
import mulititodo from "../../assets/iamges/projects/mulititodo.jpg";
import camylla from "../../assets/iamges/projects/camylla-battani.jpg";

const projects = [
  {
    title: "Portfolio",
    description: `PhotoSnap is a platform for photographers and visual 
                  shorytellers. We make it easy to share photos, tell stories 
                  and connect with others.`,
    image: photosnap,
    link: "https://image.baidu.com/",
  },
  {
    title: "Pig Game",
    description: `Battle it out with another player to se who can roll the
                  dice of luck.`,
    image: pig_game,
    link: "https://image.baidu.com/",
  },
  {
    title: "Muliti-theme-Todo",
    description: `Plan you whole day activities using this multi-theme todo app.`,
    image: mulititodo,
    link: "https://image.baidu.com/",
  },
  {
    title: "Casibus",
    description: `Discover and share critical information whith other health professionals in.`,
    image: camylla,
    link: "https://image.baidu.com/",
  },

];

export default function Portfolio() {
  return (
    <div className="portfolio-content">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 ">
            <h4 className="text-uppercase text-center">Portfolio</h4>
            <br />
            {projects.map((item, index) => (
              <div className="row portfolio-item" key={index}>
                <div className="col">
                  <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col">
                  <h3>{item.title}</h3>
                  <p>
                    {item.description}
                  </p>
                  <p>
                    <a href={item.link} className="btn btn-warning rounded-pill"
                      target="_blank">
                      Visit site
                    </a>
                  </p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
