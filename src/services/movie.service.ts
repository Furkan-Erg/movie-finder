import axios, { AxiosResponse } from "axios";
import { MovieResponse } from "../models/movieResponse";

export default class movieService {
  apiKey: string =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGI1NTFmZWI5NjY3MWY4YjU5NDI2YWFlNGE1YmE5NSIsInN1YiI6IjYzZDIzNTM0OWY1MWFmMDBkYzI1ZjNmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pN5FakQlhRsQqUilleUN1F2aneXkoiNH-YwZUn_N2kc";
  baseUrl: string = "https://api.themoviedb.org/3/";

  api = axios.create({
    baseURL: this.baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.apiKey,
    },
  });
  async getPopularMovies(): Promise<AxiosResponse<MovieResponse>> {
    let url: string = "movie/popular";
    return await this.api.get<MovieResponse>(url);
  }
  getNowPlayingMovies(): Promise<AxiosResponse<MovieResponse>> {
    let url: string = "movie/now_playing";
    return this.api.get<MovieResponse>(url);
  }
  getTopRatedMovies(): Promise<AxiosResponse<MovieResponse>> {
    let url: string = "movie/top_rated";
    return this.api.get<MovieResponse>(url);
  }
  getUpComingMovies(): Promise<AxiosResponse<MovieResponse>> {
    let url: string = "movie/upcoming";
    return this.api.get<MovieResponse>(url);
  }
  getMovieDetails(movieId: string): Promise<AxiosResponse<MovieResponse>> {
    let url: string = "movie/" + movieId;
    return this.api.get<MovieResponse>(url);
  }

  getMovieCredits(movieId: string): Promise<AxiosResponse<MovieResponse>> {
    let url: string = "movie/" + movieId + "/credits";
    return this.api.get<MovieResponse>(url);
  }
}
