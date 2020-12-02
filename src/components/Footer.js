import React from "react";

function Footer() {
  return (
    <footer className="bg-info">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-12 col-md-2">
                    <span>Email: tmessall17@gmail.com</span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-2">
                    <span>Github: <a href="https://github.com/">https://github.com/</a>
                    </span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-2">
                    <span>LinkedIn: <a href="https://www.linkedin.com/in/travis-messall-41703/">https://www.linkedin.com/in/travis-messall-41703/</a>
                    </span>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
