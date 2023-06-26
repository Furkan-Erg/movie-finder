import React, { Component, useState } from "react";
import MovieService from "../services/movie.service";
import { MovieModel, MovieResponse } from "../models/movieResponse";
export default class movies extends Component {
  state = {
    movies: [] as MovieModel[],
    movieResponse: {} as MovieResponse,
    movieOption: "upcoming",
    title: "",
  };
  movieService = new MovieService();
  componentDidMount() {
    this.getMovies();
  }
  clickToSee() {
    console.log("clicked");
  }

  getMovies() {
    switch (this.state.movieOption) {
      case "popular":
        this.getPopularMovies();
        this.setState({ title: "Popular Movies" });
        break;
      case "topRated":
        this.getTopRatedMovies();
        this.setState({ title: "Top Rated Movies" });
        break;
      case "upcoming":
        this.getUpcomingMovies();
        this.setState({ title: "Upcoming Movies" });
        break;
      case "nowPlaying":
        this.getNowPlayingMovies();
        this.setState({ title: "Now Playing Movies" });
        break;
      default:
        this.getPopularMovies();
        this.setState({ title: "Popular Movies" });
        break;
    }
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().then((response) => {
      this.state.movieResponse = response.data;
      this.setState({ movies: this.state.movieResponse.results });
    });
  }

  getTopRatedMovies() {
    this.movieService.getTopRatedMovies().then((response) => {
      this.state.movieResponse = response.data;
      this.setState({ movies: this.state.movieResponse.results });
    });
  }

  getUpcomingMovies() {
    this.movieService.getUpComingMovies().then((response) => {
      this.state.movieResponse = response.data;
      this.setState({ movies: this.state.movieResponse.results });
    });
  }

  getNowPlayingMovies() {
    this.movieService.getNowPlayingMovies().then((response) => {
      this.state.movieResponse = response.data;
      this.setState({ movies: this.state.movieResponse.results });
    });
  }

  render() {
    const { movies, title } = this.state;
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">{title}</h1>
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <div className="row">
            {movies.map((movie) => (
              <div className="col">
                <div
                  className="card m-2 overflow-hidden"
                  style={{ cursor: "pointer", width: "18rem", height: "36rem" }}
                >
                  <img
                    className="card-img-top img-fluid h-70"
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={"image of " + movie.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text ">{movie.overview}</p>
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
