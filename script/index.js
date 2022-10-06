import { genres } from "./genres.js";
import { makeElement } from "./modules/makeElement.js";

console.log(genres);
let baseURL = "https://api.themoviedb.org/3";
let apikey = "d6efc3cfd36ae94f20eb77ed991667a4";

let wrapperElm = document.querySelector(".wrapper");

//creating elements, main etc and append them on the site
let headerElm = makeElement("header", "header");

wrapperElm.append(headerElm);

let mainElm = document.createElement("main");
wrapperElm.append(mainElm);

let footerElm = document.createElement("footer");
wrapperElm.append(footerElm);

let myMoviesElm = makeElement("div", "myMovies");
mainElm.append(myMoviesElm);

// content in the variables above

//content in header section
headerElm.innerHTML = `
<div class="moviesHeader">
<h1>MyMovies</h1>
    <!-- <button>switch</button> -->

    <label class="switch">
  <input type="checkbox">
  <span class="slider round" data-mode="light" ></span>
</label>
</div>

<div class="nowShowing-seeMore">
    <h2>Now Showing</h2>
    <a href="#">See more</a>
</div>
    
    `;

// now showing logic here
let nowShowingElm = document.createElement("section");
nowShowingElm.classList.add("nowShowing");

mainElm.append(nowShowingElm);

//fetch metod för att få fram API för now showing
fetch(`${baseURL}/movie/now_playing?api_key=${apikey}`)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((movie) => {
      let nowShowing = document.createElement("div");
      // adding link
      // nowShowing.setAttribute("href", `detail.html?id=${movie.title}`)

      nowShowing.classList.add("nowShowing__container");
      nowShowing.innerHTML = `
         
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
        <a href="details.html?id=${movie.id}">${movie.title}</a>
        <p><i class="fa-sharp fa-solid fa-star"></i>${movie.vote_average}/10 IMDB</p>
        `;

      myMoviesElm.append(nowShowing);
    });
  });

mainElm.append(nowShowingElm);

//popular showing
let popularElm = document.createElement("section");
popularElm.classList.add("popular");
mainElm.append(popularElm);

let popularHeader = document.createElement("header");
popularHeader.innerHTML = `
     <div class="popular-seeMore">
    <h2>Popular</h2>
    <a href="#">See more</a>
</div>
   
    `;
popularElm.append(popularHeader);

//polular movies showing here
let popularMovies = document.createElement("div");

popularMovies.classList.add("pouplarmovies__container");
popularElm.append(popularMovies);

fetch(`${baseURL}/movie/popular?api_key=${apikey}`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.results[0]);

    data.results.forEach((movie) => {
      let article = document.createElement("article");
      // adding link
      article.setAttribute("href", `detail.html?id=${movie.id}`);

      article.classList.add("movie-article");
      article.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">

            <div class="movie-article__content">
                <a href="details.html?id=${movie.id}">${movie.title}</a>
                <p class="movie-title grey"><i class="fa-sharp fa-solid fa-star"></i>${movie.vote_average}/10 IMDB</p>
                <P class="genres"></p>
                <P class="runtimes"></p>
        </div>

            
            `;

      popularMovies.append(article);

      let genreElm = article.querySelector(".genres");
      movie.genre_ids.forEach((id) => {
        let currentGenre = genres.find((genre) => genre.id == id);
        // console.log(currentGenre);
        let genreSpan = document.createElement("span");
        genreSpan.classList.add("genre__pill");
        genreSpan.innerText = currentGenre.name;
        genreElm.append(genreSpan);
      });

      // footer
      footerElm.classList.add("footer-icon");
      footerElm.innerHTML = `
            
            <i class="fa-solid fa-film"></i>
            <i class="fa-solid fa-ticket"></i>
            <i class="fa-regular fa-bookmark"></i>
            `;
    });
  });
