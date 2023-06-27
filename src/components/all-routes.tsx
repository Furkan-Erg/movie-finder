import React, { Component } from "react";
import Movies from "./movies";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MovieDetails from "./movie-details";
export default class AllRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/movies/:category" element={<Movies />}></Route>
          <Route
            path="/movie-details/:category"
            element={<MovieDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
