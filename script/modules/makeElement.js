export let makeElement = function (elmName, className) {
  let element = document.createElement(elmName); // tar fatt i document.createElement som finns i index.js (elmName) er parametern som finns i functionen makeElement ovan. (elmName) = namn på element fx div
  element.classList.add(className); //(className) namn på klassen
  return element; // returnerar elementet
};
