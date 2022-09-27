document.addEventListener("DOMContentLoaded", function () {
  let setActiveStyleSheet = function (title) {
    let css = `link[rel="alternate stylesheet"]`;
    let stylesheets = document.querySelectorAll(css);
    stylesheets.forEach((sheet) => (sheet.disabled = true));
    let selector = `link[title="${title}"]`;
    let activeSheet = document.querySelector(selector);
    activeSheet.disabled = false;
    console.log(activeSheet);
  };

  setActiveStyleSheet("light");

  //adding variables for dark and light mode by select data-mode

  let lightBtnElm = document.querySelector("[data-mode=light]");
  let darkBtnElm = document.querySelector("[data-mode=dark]");

  lightBtnElm.addEventListener("click", function () {
    setActiveStyleSheet("light");
  });

  darkBtnElm.addEventListener("click", function () {
    setActiveStyleSheet("dark");
  });
});
