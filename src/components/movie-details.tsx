import React, { Component } from "react";
import MovieService from "../services/movie.service";
import { MovieDetail } from "../models/movieDetailResponse";
export default class MovieDetails extends Component {
  movieService = new MovieService();
  state = {
    movieDetails: {} as MovieDetail,
  };
  componentDidMount() {
    this.getMovieDetails();
  }
  getMovieDetails() {
    const movieId = window.location.pathname.split("/")[2];
    this.movieService.getMovieDetails(movieId).then((response) => {
      this.setState({ movieDetails: response.data });
      console.log(response.data);
    });
  }
  render() {
    const { movieDetails } = this.state;
    return (
      <div className="d-flex justify-content-center align-align-items-center">
        <div className="container">
          <div className="row ">
            <div className="col-md-5 ">
              <img
                src={
                  "https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path
                }
                alt="movie poster"
              />
            </div>
            <div className="col-md-7 ">
              <h1>{movieDetails.title}</h1>
              <p>{movieDetails.overview}</p>

              <div className="row">
                <div className="col-md-3">
                  <p>Movie Rating:</p>
                </div>
                <div className="col-md-9">
                  <p>{movieDetails.vote_average}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
