/** @format */

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetail";
import { useEffect, useState } from "react";
import config from "./config";

function App() {
  const [movies, setMovies] = useState(config.data);
  const [budget, setBudget] = useState(10);
  const [notRentedMovies, setNotRentedMovies] = useState(movies);
  const [isResults, setIsResults] = useState(false);
  const [results, setResults] = useState([]);
  const [userRentedMovies, setUserRentedMovies] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");
  const [template, setTemplate] = useState("landing");
  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => localStorage.clear(), []);

  const handleMovieDetails = (movieName) => {
    let details = config.data.find((m) => m.title === movieName);
    setMovieDetails(details);
  };

  const handleUser = (userName) => {
    setTemplate("catalog");
    setUser(userName);
    if (!localStorage.getItem(userName)) {
      localStorage.setItem(userName + "budget", 10);
      setBudget(10);
      localStorage.setItem(userName, JSON.stringify([]));
      setUserRentedMovies([]);
    } else {
      let userBudget = JSON.parse(localStorage.getItem(userName + "budget"));
      let moviesFromDb = JSON.parse(localStorage.getItem(userName));
      setUserRentedMovies(moviesFromDb);
      setBudget(userBudget);
    }
  };

  const handleRemoveBtn = (removedMovie) => {
    if (isUpdateBudget(3)) {
      let userMovies = JSON.parse(localStorage.getItem(user));
      let index = userMovies.findIndex((m) => m.title === removedMovie.title);
      userMovies.splice(index, 1);
      localStorage.setItem(user, JSON.stringify(userMovies));
      setUserRentedMovies(userMovies);
      updateMovies(false, removedMovie);
    }
  };

  const handleAddBtn = (movieRented) => {
    let moviesFromDb = JSON.parse(localStorage.getItem(user));
    if (isUpdateBudget(-3)) {
      updateMovies(true, movieRented);
      moviesFromDb.push({ ...movieRented });
      localStorage.setItem(user, JSON.stringify(moviesFromDb));
      setUserRentedMovies(moviesFromDb);
      alert("movie added!");
    }
  };

  const updateMovies = (action, movie) => {
    let updatedMovies = [...movies];
    let theMovie = updatedMovies.find((m) => m.title == movie.title);
    theMovie.isRented = action;
    setMovies(updatedMovies);

    let newNotRentedMovies = movies.filter((m) => m.isRented === false);
    setNotRentedMovies(newNotRentedMovies);
  };

  const filterLetters = (word) => {
    let w = word.toLowerCase();
    return w;
  };

  const isUpdateBudget = (action) => {
    if (budget + action <= 0) {
      alert("you dont have enoght money!");
      return false;
    } else {
      setBudget((pre) => pre + action);
      console.log("the budget is", budget);
      localStorage.setItem(user + "budget", JSON.stringify(budget + action));
      return true;
    }
  };

  const search = (movieTitle) => {
    movieTitle === "" ? setIsResults(false) : setIsResults(true);
    let allResults = [];
    movies.forEach((movie) => {
      let filltedTitle = filterLetters(movie.title);
      if (filltedTitle.includes(filterLetters(movieTitle))) {
        allResults.push({ ...movie });
        setResults(allResults);
      }
    });
  };

  return (
    <div className="App">
      <NavBar
        handleAddBtn={handleAddBtn}
        template={template}
        setIsResults={setIsResults}
        budget={budget}
        isResults={isResults}
        input={input}
        results={results}
        search={search}
        setInput={setInput}
        setTemplate={setTemplate}
      ></NavBar>
      {!isResults ? (
        <Routes>
          <Route
            path={"/"}
            element={
              <Landing users={config.userData} handleUser={handleUser} />
            }
          />
          <Route
            path={"/catalog"}
            element={
              <Catalog
                handleAddBtn={handleAddBtn}
                handleRemoveBtn={handleRemoveBtn}
                rentedMovies={userRentedMovies}
                movies={notRentedMovies}
                handleMovieDetails={handleMovieDetails}
              />
            }
          />
          <Route
            path={"/details"}
            element={
              <MovieDetail
                handleAddBtn={handleAddBtn}
                movieDetails={movieDetails}
              />
            }
          />
        </Routes>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
