/**
 * @description pass an array and get a random item.
 * @param {Array} array
 * @return {any}
*/
const getRandomArrayElement = function(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function randomBg() {
  // We use the const keyword cuz the variable value wouldn't change in the future.
  const bigSize = [
    "url('../images/pic\ \(2275\).jpg')",
    "url('../images/pic\ \(2276\).jpg')",
    "url('../images/pic\ \(2278\).jpg')",
    "url('../images/pic\ \(2280\).jpg')",
    "url('../images/pic\ \(2291\).jpg')",
    "url('../images/pic\ \(2292\).jpg')",
    "url('../images/pic\ \(2293\).jpg')",
    "url('../images/pic\ \(2294\).jpg')",
    "url('../images/pic\ \(2295\).jpg')",
    "url('../images/pic\ \(2296\).jpg')",
    "url('../images/pic\ \(2297\).jpg')"
  ];
  document.getElementsByClassName("header")[0].style.backgroundImage = getRandomArrayElement(bigSize);
  document.getElementById("divContainer").style.backgroundImage = getRandomArrayElement(bigSize);
  document.getElementById("buttonContainer").style.backgroundImage = getRandomArrayElement(bigSize);
  document.getElementById("lastPart").style.backgroundImage = getRandomArrayElement(bigSize);
}
