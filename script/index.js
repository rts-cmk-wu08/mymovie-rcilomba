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

    // content in the variables above

    //content in header section
    headerElm.innerHTML=`
    <h1>MyMovies</h1>
    <button>switch</button>
    `

    // now showing logic here
    let popularElm = document.createElement("section");
    popularElm.classList.add("popular");
    mainElm.append(popularElm);

    let popularHeader = document.createElement("header")
     popularHeader.innerHTML=`
     
    <h2>Popular</h2>
    <a href="#">Show more</a>
    
   
    `
    popularElm.append(popularHeader);


    //polular movies showing here
    let popularMovies = document.createElement("div");
    popularElm.append(popularMovies)

    fetch(`${baseURL}/movie/popular?api_key=${apikey}`)
    .then(response => response.json())
    .then(data => {

        console.log(data.results[0])
        
        
        data.results.forEach(movie => {
            let article = document.createElement("article")
            article.classList.add("movie-article")
            article.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
            <div>
                <h3>${movie.title}</h3>
                <p>${movie.vote_average}/10 IMDB</p>
                <P class="genres"></p>
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
