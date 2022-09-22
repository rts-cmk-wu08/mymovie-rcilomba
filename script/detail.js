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

       
        
    
    let descriptionSection = document.createElement("section");
    descriptionSection.classList.add("description");
    descriptionSection.innerHTML=`
        <p class="">${data.title}</p>
    `
    mainElm.append(descriptionSection);

    let movieHeader =document.createElement("div");
    movieHeader.classList.add("movieHeader");
    movieHeader.innerHTML=`
    <h1 class="">${data.title}</h1>
    `

    headerElm.append(movieHeader);


    })

 }) 


    

    

    
    




