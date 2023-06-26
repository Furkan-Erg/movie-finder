import React, { Component, useState } from "react";
import MovieService from "../services/movie.service";
import { MovieModel, MovieResponse } from "../models/movieResponse";
export default class movies extends Component {
  movieService = new MovieService();
  movies: MovieModel[] = [];
  movieResponse: MovieResponse;
  componentDidMount() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().then((response) => {
      this.movieResponse = response.data;
      this.movies = this.movieResponse.results;
      console.log(this.movies);
    });
  }
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">Title will be statefull</h1>
        <button className="btn btn-primary ">Click to see :D</button>
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
            {this.movies.map((movie) => (
              <div className="col">
                <div
                  className="card m-2 "
                  style={{ cursor: "pointer", width: "18rem", height: "18rem" }}
                >
                  <img src="" className="card-img-top" alt="images of movies" />
                  <div className="card-body">
                    <h5 className="card-title">Title {movie.title}</h5>
                    <p className="card-text line-clamp">Overwiev</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>pagination will be here</div>
        </div>
      </div>
    );
  }
}
