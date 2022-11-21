let recuperoStorageSeries = localStorage.getItem("favoritosSeries");
let favoritosSeries = JSON.parse(recuperoStorageSeries);
console.log(favoritosSeries);

let recuperoStoragePeliculas = localStorage.getItem("favoritosPeliculas");
let favoritosPeliculas = JSON.parse(recuperoStoragePeliculas);
console.log(favoritosPeliculas);

let sectionPeliculas = document.querySelector(".seleccionPeliculas");
let sectionSeries = document.querySelector(".seleccionSeries");

if (favoritosPeliculas == null || favoritosPeliculas.length == null){
  sectionPeliculas.innerHTML = "NO agregaste peliculas a la seccion de favoritos"
} else {
  for (let i=0; i < favoritosPeliculas.length; i = i+1);
}

if (favoritosSeries == null || favoritosSeries.length == null){
  sectionPeliculas.innerHTML = "NO agregaste peliculas a la seccion de favoritos"
} else {
  for (let i=0; i < favoritosSeries.length; i = i+1);
}



let url = "https://rickandmortyapi.com/api/character/" + favoritosPeliculas[id]

