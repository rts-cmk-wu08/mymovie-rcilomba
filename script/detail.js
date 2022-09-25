document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");

    let baseURL ="https://api.themoviedb.org/3";
    let apikey ="d6efc3cfd36ae94f20eb77ed991667a4";

    console.log(id)
    // console.log("test" + id);

    let wrapperElm = document.querySelector(".wrapper");


        //createing elements, main etc and append them on the detail site
    let headerElm = document.createElement("header");
    // headerElm.classList.add("movieHeader");
    
    wrapperElm.append(headerElm);

    let mainElm = document.createElement("main");
    wrapperElm.append(mainElm);

    let footerElm = document.createElement("footer");
    wrapperElm.append(footerElm);

    //skapa en fetch till video?
    //https://developers.themoviedb.org/3/movies/get-movie-videos

    

    // testar
    fetch(`${baseURL}/movie/${id}?api_key=${apikey}`)
    .then(response => response.json())
    .then(data => {

        // console.log(data)

       
        // test forEach
        // data.results.forEach(movie => {

    let movieHeader =document.createElement("div");
    movieHeader.classList.add("movieHeader");
    movieHeader.innerHTML=`
    <div class="movieHeader__container">
         <div class="movieHeader__containerBox">
            <a href="index.html"><i class="fa-solid fa-arrow-left"></i></a>
    </div>

     <div class="movieHeader__containerBox">
        <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
    </div>
    </div>
    <!-- ersätt img med video trailer istället  -->
    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title} poster">
    `
    headerElm.append(movieHeader);

        // fetch for length, language and rating
 
        
    let movieTitle = document.createElement("div");
    movieTitle.classList.add("movieTitle");
    movieTitle.innerHTML=`
    <div class="movieTitleStart">
        <div class="movieTitleStartBox">
        <h1>${data.title}</h1>
    </div>
    <div class="movieTitleStartBox">
<i class="fa-regular fa-bookmark"></i>
    </div>

    </div>

    
    <p><i class="fa-sharp fa-solid fa-star"></i>${data.vote_average}10 IMDB</p>
    <P class="genres"></p>


    <div class="movieInfo__container">
        <div class="movieInfo__containerbox">
            <p class="grey">Length</p>
            <p>${data.runtime} min</p>
    </div>

     <div class="movieInfo__containerbox">
            <p class="grey">Language</p>
            <p>${data.original_language}</p>
    </div>

     <div class="movieInfo__containerbox">
            <p class="grey">Rating</p>
            <p>${data.vote_count}</p>
    </div>

    </div>
    
    `
    
    mainElm.append(movieTitle);

    let descriptionSection = document.createElement("section");
    descriptionSection.classList.add("description");
    descriptionSection.innerHTML=`
    <h2>Description</h2>
         <p>${data.overview}</p>
    `
    mainElm.append(descriptionSection);



    

    // skapa en fetch metod för att få fram api för cast

    fetch(`${baseURL}/movie/${id}/credits?api_key=${apikey}`)
    .then(response => response.json())
    .then (data => {

        console.log("2" + data)
    

    let cast = document.createElement("div");
    cast.innerHTML=`
    <div class="castHeader__container">
        <div class="castHeader__containerBox">
        <h2>Cast</h2>
    </div>
    <div class="castHeader__containerBox">
        <a href="">See more</a>    
    </div>

    </div>

  
   
<!-- cast  -->

        
    <div class="cast__container">
        <div class="cast__containerBox">
            <img src="https://image.tmdb.org/t/p/w500${data.id}" alt="${data.title} poster">
            <p>${data.original_name}</p>
    </div>

    <div class="cast__containerBox">
<img src="" alt="${data.title} poster">
<p></p> 
    </div>

    <div class="cast__containerBox">
<img src="" alt="${data.title} poster">
<p></p>
    </div>

    <div class="cast__containerBox">
<img src="" alt="${data.title} poster">
<p></p>
    </div>
    

    </div>
    `

    footerElm.append(cast);


    })
    
    

    
        })

    })

 


    

    

    
    




