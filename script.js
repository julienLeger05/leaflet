let villes = {
  Gap: [44.566667, 6.083333],
  Nice: [43.696036, 7.265592],
  Paris: [48.856614, 2.352221],
};
let c = document.querySelector(".c");
// Quand une nouvelle <option> est selectionnée
console.log(c.options[c.selectedIndex].value);
let coo = c.options[c.selectedIndex].value;
/* marker.addTo(carte) */
var carte = L.map("maCarte").setView(
  JSON.parse(coo),
  10
); /* On aurait aussi pu écrirelet carte = L.map('maCarte').setView([46.3630104, 2.9846608],5);*/
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(carte);
/* Ò */
c.addEventListener("change", function () {
  let coo = c.options[c.selectedIndex].value;
  console.log(coo);

  var marker = L.marker(JSON.parse(coo)).addTo(carte);

  carte.setView(JSON.parse(coo), 10);
});
