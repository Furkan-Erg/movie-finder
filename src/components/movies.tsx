import React, { Component, useState } from "react";
import MovieService from "../services/movie.service";
import { MovieModel, MovieResponse } from "../models/movieResponse";
import MovieCard from "./movie-card";
import { Link } from "react-router-dom";
export default class movies extends Component {
  state = {
    movies: [] as MovieModel[],
    movieResponse: {} as MovieResponse,
    movieOption: "",
    title: "",
  };
  movieService = new MovieService();
  componentDidMount() {
    this.setMovieOption();
    this.getMovies();
  }

  setMovieOption() {
    let category = window.location.pathname.split("/")[2];
    if (category) {
      this.state.movieOption = category;
    }
  }

  getMovies() {
    const { movieOption } = this.state;
    switch (movieOption) {
      case "popular":
        this.getPopularMovies();
        this.setState({ title: "Popular Movies" });
        break;
      case "top-rated":
        this.getTopRatedMovies();
        this.setState({ title: "Top Rated Movies" });
        break;
      case "upcoming":
        this.getUpcomingMovies();
        this.setState({ title: "Upcoming Movies" });
        break;
      case "now-playing":
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
              <div key={movie.id} className="col">
                <Link to={"/movie-details/" + movie.id}>
                  <MovieCard movie={movie} />
                </Link>
              </div>
            ))}
          </div>
          <div>pagination will be here</div>
        </div>
      </div>
    );
  }
}
