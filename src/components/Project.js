import React from "react";

function Project(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <h3>{props.name}</h3>
      <img src={props.img} alt={props.name} className="pt-2 mx-auto d-block w-100" />
        <p><a href={props.repo}>Repository</a>
        </p>
        <a href={props.site}>Site</a>
    </div>
  )
}

export default Project;
