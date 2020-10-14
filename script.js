let villes = {
    "Gap": [44.566667, 6.083333],
    "Nice": [43.696036, 7.265592],
    "Paris": [48.856614, 2.352221]
}
let nice = document.querySelector('.nice')
let paris = document.querySelector('.paris')
let gap = document.querySelector('.gap')
document.querySelector('.gap').addEventListener('click', () => {
    gap.value = villes.Gap;
    nice.value = "";
    paris.value = ""
})

document.querySelector('.nice').addEventListener('click', () => {
        gap.value = "";
        nice.value = villes.Nice;
        paris.value = ""
    })
    /* marker.addTo(carte) */

document.querySelector('.paris').addEventListener('click', () => {
        gap.value = "";
        nice.value = "";
        paris.value = villes.Paris

    })
    /* marker.addTo(carte) */
let carte = L.map('maCarte', { center: [46.3630104, 2.9846608], zoom: 5 }); /* On aurait aussi pu écrirelet carte = L.map('maCarte').setView([46.3630104, 2.9846608],5);*/
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(carte);