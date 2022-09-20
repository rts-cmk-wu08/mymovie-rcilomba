document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");

    console.log(id)

    let wrapperElm = document.querySelector(".wrapper");


        //createing elements, main etc and append them on the detail site
    let headerElm = document.createElement("header");
    headerElm.classList.add("header");
    wrapperElm.append(headerElm);

    let mainElm = document.createElement("main");
    wrapperElm.append(mainElm);

    let footerElm = document.createElement("footer");
    wrapperElm.append(footerElm);


    // testar
    fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data => {

    
    let descriptionSection = document.createElement("section");
    descriptionSection.classList.add("description");
    descriptionSection.innerHTML=`

        <p class="">${data.title}</p>
    `
    wrapperElm.append(descriptionSection);

    })

    //testar ovan

   

 }) 

    

    

    
    




