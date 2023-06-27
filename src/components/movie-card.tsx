import React from "react";
import { MovieModel } from "../models/movieResponse";

export default function MovieCard(props: any) {
  const movie = props.movie as MovieModel;
  return (
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
  );
}
