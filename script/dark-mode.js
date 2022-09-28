document.addEventListener("DOMContentLoaded", function () {
  let setActiveStyleSheet = function (title) {
    let css = `link[rel="alternate stylesheet"]`;
    let stylesheets = document.querySelectorAll(css);
    stylesheets.forEach((sheet) => (sheet.disabled = true));
    let selector = `link[title="${title}"]`;
    let activeSheet = document.querySelector(selector);
    activeSheet.disabled = false;
    console.log(activeSheet);
    //   memorizing the selected theme
    localStorage.setItem("theme", title);
  };

  let savedSheet = localStorage.getItem("theme");
  console.log(savedSheet);
  setActiveStyleSheet("light");

  //adding variables for dark and light mode by select data-mode

  let lightBtnElm = document.querySelector("[data-mode=light]");
  let darkBtnElm = document.querySelector(".switch input");

  //function to change to light when clicking
  lightBtnElm.addEventListener("click", function () {
    setActiveStyleSheet("light");
  });

  darkBtnElm.addEventListener("click", function (e) {
    console.log(e.target.checked);
    if (e.target.checked) {
      setActiveStyleSheet("dark");
    } else {
      setActiveStyleSheet("light");
    }
  });

  console.log(darkBtnElm);
});
