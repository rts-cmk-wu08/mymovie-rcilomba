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
    <!-- link på video?  -->
    `
    headerElm.append(movieHeader);



    let movieTitle = document.createElement("div");
    movieTitle.classList.add("movieTitle");
    movieTitle.innerHTML=`
    <div class="movieTitleStart">
<h1>${data.title}</h1>
    <i class="fa-sharp fa-solid fa-star"></i>
    </div>

    


    <div class="movieInfo__container">
        <div class="movieInfo__containerbox">
            <p class="grey">Length</p>
    </div>

     <div class="movieInfo__containerbox">
            <p class="grey">Language</p>
    </div>

     <div class="movieInfo__containerbox">
            <p class="grey">Rating</p>
    </div>

    </div>
    
    `
    mainElm.append(movieTitle);

    let descriptionSection = document.createElement("section");
    descriptionSection.classList.add("description");
    descriptionSection.innerHTML=`
    <h2>Description</h2>
        
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
    <p>${data.description}</p>
    `

    footerElm.append(cast);


    })

 }) 


    

    

    
    




