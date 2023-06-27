import React from "react";

export default function Navbar() {
  return (
    // navbar with dropdown menu for films
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            width="100"
            height="50"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/movies"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Movies
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/movies/popular">
                    Popular
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/movies/top-rated">
                    Top Rated
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/movies/upcoming">
                    Upcoming
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/movies/now-playing">
                    Now Playing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                My List
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
