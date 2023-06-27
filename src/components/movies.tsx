import React, { Component, useState } from "react";
import MovieService from "../services/movie.service";
import { MovieModel, MovieResponse } from "../models/movieResponse";
import MovieCard from "./movie-card";
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
                <MovieCard key={movie.id} movie={movie} />
              </div>
            ))}
          </div>
          <div>pagination will be here</div>
        </div>
      </div>
    );
  }
}
