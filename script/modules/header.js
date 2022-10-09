let header = function () {
  let element = document.createElement("header");
  element.classList.add("header");

  element.innerHTML = `
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
</div>    `;

  return element;
};
