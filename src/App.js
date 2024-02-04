/** @format */

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Routes,
  Link,
} from "react-router-dom";
import Landing from "./components/Landing";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetail";
import { useEffect, useState } from "react";
import Rented from "./components/Rented";

function App() {
  let data = [
    {
      id: 0,
      isRented: false,
      title: "Tarzan",
      year: 1999,
      img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
      descrShort:
        "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
    },
    {
      id: 1,
      isRented: false,
      title: "The Lion King",
      img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
      year: 1994,
      descrShort:
        "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
    },
    {
      id: 2,
      isRented: false,
      title: "Beauty and the Beast",
      year: 1991,
      img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
      descrShort:
        "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
    },
    {
      id: 3,
      isRented: false,
      title: "The Sword in the Stone",
      year: 1963,
      img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
      descrShort:
        "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
    },
    {
      id: 4,
      isRented: false,
      title: "Beauty and the Beast",
      year: 2016,
      img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
      descrShort:
        "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
    },
  ];
  let userData = [
    { name: "Adir", color: "gray" },
    { name: "Reem", color: "red" },
    { name: "Shelly", color: "blue" },
  ];

  const [movies, setMovies] = useState(data);
  const [budget, setBudget] = useState(10);
  const [rentedMovies, setRentedMovies] = useState([]);
  const [notRentedMovies, setNotRentedMovies] = useState(movies);
  const [isResults, setIsResults] = useState(false);
  const [results, setResults] = useState([]);
  const [rentedTemplate, setRentedTemplate] = useState(false);
  const [input, setInput] = useState("");
  const [template, setTemplate] = useState("landing");
  const [movieDetails, setMovieDetails] = useState("");

  const userBtn = () => {
    setTemplate("catalog");
    if (rentedMovies.length > 0) setRentedTemplate(true);
  };
  const handleMovieDetails = (movieName) => {
    let details = data.find((m) => m.title === movieName);
    setMovieDetails(details);
  };

  const handleRemoveBtn = (removedMovie) => {
    if (isUpdateBudget(3)) {
      updateMovies(false, removedMovie);
    }
  };

  const handleAddBtn = (movieRented) => {
	
    if (isUpdateBudget(-3)) {
      updateMovies(true, movieRented);
      setRentedTemplate(true);
	  alert("movie added!")
    }
  };

  const updateMovies = (action, movie) => {
    let updatedMovies = [...movies];
    let theMovie = updatedMovies.find((m) => m.title == movie.title);
    theMovie.isRented = action;
    setMovies(updatedMovies);

    let newNotRentedMovies = movies.filter((m) => m.isRented === false);
    setNotRentedMovies(newNotRentedMovies);
    let newRentedMovies = movies.filter((m) => m.isRented === true);
    setRentedMovies(newRentedMovies);
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
          <Route path={"/"} element={<Landing users={userData} userBtn={userBtn} />}
          />
          <Route path={"/catalog"} element={<Catalog
		  		handleAddBtn={handleAddBtn}
                handleRemoveBtn={handleRemoveBtn}
                rentedMovies={rentedMovies}
                movies={notRentedMovies}
                handleMovieDetails={handleMovieDetails}
              />
            }
          />
          <Route path={"/details"} element={<MovieDetail setRentedTemplate={setRentedTemplate} handleAddBtn={handleAddBtn} movieDetails={movieDetails} />}
          />
        </Routes>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
