document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");

    console.log(id)

    //createing elements, main etc and append them on the detail site
    let wrapperElm = document.querySelector("wrapper");

})