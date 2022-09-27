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

  setActiveStyleSheet("dark");
});
