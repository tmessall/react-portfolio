import React from "react";

function Home() {

  return (
    <div className="container-fluid mt-4 main">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-lg-1"></div>
            <div className="col-12 col-lg-8 hasOutline bg-primary">
                <h1>About Me</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-lg-1"></div>
            <div className="col-12 col-lg-8 hasOutline bg-light">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-2">
                            <img src="../assets/favicon.jpg" alt="Travis Messall" className="pt-2 pb-2 img-fluid"/>
                        </div>
                        <div className="col-12 col-md-10">
                            <span>I was born and raised in Highlands Ranch, Colorado. I graduated in 2020 from Mountain Vista High School, and enrolled in the DU Coding Bootcamp to become a software developer. </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
