document.addEventListener("DOMContentLoaded", () =>{
    console.log(genres)
    let baseURL = "https://api.themoviedb.org/3";
    let apikey = "d6efc3cfd36ae94f20eb77ed991667a4";

    let wrapperElm = document.querySelector(".wrapper");
    

    //creating elements, main etc and append them on the site
    let headerElm = document.createElement("header");
    headerElm.classList.add("header");
    wrapperElm.append(headerElm);

    let mainElm = document.createElement("main");
    wrapperElm.append(mainElm);

    let footerElm = document.createElement("footer");
    wrapperElm.append(footerElm);

    let myMoviesElm = document.createElement("div");
    myMoviesElm.classList.add("myMovies")
    mainElm.append(myMoviesElm);

    /*let overHead = document.createElement("div");
    overHead.classList.add("overHead");
    headerElm.append(overHead);*/

    // content in the variables above

   


    //content in header section
    headerElm.innerHTML=`
    <div class="overHead">
        <div class="">
        <p>9.41</p>
</div>
<div class="overHead__icon">
<i class="fa-solid fa-signal"></i>
<i class="fa-solid fa-wifi"></i>
<i class="fa-solid fa-battery-full"></i>

</div>

</div>

<div class="moviesHeader">
        
<h1>MyMovies</h1>
    <button>switch</button>
</div>
    
    `

   


    // now showing logic here
    let nowShowingElm = document.createElement("section");
    nowShowingElm.classList.add("nowShowing");
    mainElm.append(nowShowingElm);

    


    //fetch metod för att få fram API för now showing???
    fetch(`${baseURL}/movie/now_playing?api_key=${apikey}`)
    .then(response => response.json())
    .then(data => {

    //what should I write here???
    // forEach to create element and  add data like row 34-36

    data.results.forEach(movie => {

let nowShowing = document.createElement("div");
    nowShowing.classList.add("nowShowing__container");
        nowShowing.innerHTML=`
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
        <P class="">movie title</p>
        `

        myMoviesElm.append(nowShowing)
        
    })
    
    }) 





    mainElm.append(nowShowingElm);

    //popular showing
    let popularElm = document.createElement("section");
    popularElm.classList.add("popular");
    mainElm.append(popularElm);

    let popularHeader = document.createElement("header")
     popularHeader.innerHTML=`
     <div class="popular-seeMore">
    <h2>Popular</h2>
    <a href="#">See more</a>
</div>
   
    `
    popularElm.append(popularHeader);


    //polular movies showing here
    let popularMovies = document.createElement("div");
    popularMovies.classList.add("pouplarmovies__container")
    popularElm.append(popularMovies)

    fetch(`${baseURL}/movie/popular?api_key=${apikey}`)
    .then(response => response.json())
    .then(data => {

        console.log(data.results[0])
        
        
        data.results.forEach(movie => {
            let article = document.createElement("article")
            article.classList.add("movie-article")
            article.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">

            <div class="">
                <h3>${movie.title}</h3>
                <p><i class="fa-sharp fa-solid fa-star"></i>${movie.vote_average}/10 IMDB</p>
                <P class="genres"></p>
                <P class="runtimes"></p>
        </div>

            
            `

            popularMovies.append(article)

            let genreElm = article.querySelector(".genres");
            movie.genre_ids.forEach(id => {
               
                let currentGenre = genres.find(genre => genre.id == id)
                console.log(currentGenre)
                let genreSpan = document.createElement("span")
                genreSpan.classList.add("genre__pill")
                genreSpan.innerText = currentGenre.name
                genreElm.append(genreSpan)
            })



        })
    })
})
