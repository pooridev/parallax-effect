function randombg() {
  var bigSize = [
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
  document.getElementsByClassName("header")[0].style.backgroundImage = bigSize[ Math.floor(Math.random() * 11)];
  document.getElementById("divContainer").style.backgroundImage = bigSize[ Math.floor(Math.random() * 11)];
  document.getElementById("buttonContainer").style.backgroundImage = bigSize[ Math.floor(Math.random() * 11)];
  document.getElementById("lastPart").style.backgroundImage = bigSize[ Math.floor(Math.random() * 11)];
}
