let popularHeader = function () {
  let element = document.createElement("section");
  element.classList.add("popular");

  element.innerHTML = `
  <div class="popular-seeMore">
    <h2>Popular</h2>
    <a href="#">See more</a>
</div>
  `;

  return element;
};

export default popularHeader;
