import React from "react";

function Contact() {

  return (
    <div className="container-fluid mt-4 main">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-lg-1"></div>
        <div className="col-12 col-lg-8 hasOutline bg-primary">
          <h1>Contact Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-lg-1"></div>
        <div className="col-12 col-lg-8 hasOutline bg-light">
          <form className="pt-1 pb-2">
            <div className="form-group">
              <label for="name">Name</label>
              <input type="name" className="form-control" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Message</label>
              <textarea type="message" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
