import React, { Component } from "react";

export default class movies extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">Title will be statefull</h1>
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <div className="row">
            <div className="col">
              <div
                className="card m-2 "
                style={{ cursor: "pointer", width: "18rem", height: "18rem" }}
              >
                <img src="" className="card-img-top" alt="images of movies" />
                <div className="card-body">
                  <h5 className="card-title">Title</h5>
                  <p className="card-text line-clamp">Overwiev</p>
                </div>
              </div>
            </div>
          </div>
          <div>pagination will be here</div>
        </div>
      </div>
    );
  }
}
