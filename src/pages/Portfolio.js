import React from "react";
import Project from "../components/Project"
import Projects from "../projects.json"
import projectOne from "../assets/projectOne.png"
import congo from "../assets/congo.png"

function Portfolio() {
  console.log(projectOne)
  console.log(congo)
  return (
    <div className="container-fluid mt-4 main">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-lg-1"></div>
            <div className="col-12 col-lg-8 hasOutline bg-primary">
                <h1>Portfolio</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-lg-1"></div>
            <div className="col-12 col-lg-8 hasOutline bg-light">
                <div className="container-fluid portfolio">
                    <div className="row">
                        {Projects.map(project => {
                          console.log(project.img)
                          return (
                            <Project img={project.img} name={project.name} repo={project.repo} site={project.site}/>
                          )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
