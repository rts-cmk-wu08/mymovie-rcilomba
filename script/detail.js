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
            <i class="fa-solid fa-arrow-left"></i>
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

    
    <i class="fa-sharp fa-solid fa-star">${data.vote_average}</i>


    <div class="movieInfo__container">
        <div class="movieInfo__containerbox">
            <p class="grey">Length</p>
            <p>${data.length}</p>
    </div>

     <div class="movieInfo__containerbox">
            <p class="grey">Language</p>
            <p></p>
    </div>

     <div class="movieInfo__containerbox">
            <p class="grey">Rating</p>
            <p></p>
    </div>

    </div>
    
    `
    mainElm.append(movieTitle);

    // skapa en fetch metod för att få fram api för description och cast

    fetch(`${baseURL}/movie/${id}/credits?api_key=${apikey}`)
    .then(response => response.json())
    .then (data =>{

        console.log(data)

        let descriptionSection = document.createElement("section");
    descriptionSection.classList.add("description");
    descriptionSection.innerHTML=`
    <h2>Description</h2>
         <p>${data.description}</p>
    `
    mainElm.append(descriptionSection);

    let cast = document.createElement("div");
    cast.innerHTML=`
    <div class="castHeader__container">
        <div class="castHeader__containerBox">
        <h2>Cast</h2>
    </div>
    <div class="castHeader__containerBox">
        <button>See more</button>    
    </div>

    </div>

  
   
<!-- cast  -->

        
    <div class="cast__container">
        <div class="cast__containerBox">
            <img src="https://image.tmdb.org/t/p/w500${data.id}" alt="${data.title} poster">
            <p>${data.people}</p>
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

 


    

    

    
    




