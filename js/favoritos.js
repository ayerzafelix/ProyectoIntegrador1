// Buscador
let formulario = document.querySelector('form')

formulario.addEventListener("submit", function(event){
  event.preventDefault()

  if(input.value == ""){
      alert("Este campo es obligatorio")
    } else if(input.value.length < 3){
      alert("Este campo tiene que tener al menos 3 caracteres")
    } else {
      window.location = './resultados.html?search=' + input.value
    }
})

//






let recuperoStorageSeries = localStorage.getItem("seriesFavs");
let favoritosSeries = JSON.parse(recuperoStorageSeries);
console.log(favoritosSeries);

let recuperoStoragePeliculas = localStorage.getItem("peliculasFavs");
let favoritosPeliculas = JSON.parse(recuperoStoragePeliculas);
console.log(favoritosPeliculas);


let sectionPeliculas = document.querySelector(".seleccionPeliculas");
let sectionSeries = document.querySelector(".seleccionSeries");

if (favoritosPeliculas == null || favoritosPeliculas.length == null){
  sectionPeliculas.innerHTML = "No agregaste peliculas a la seccion de favoritos"
} else {
  for (let i=0; i < favoritosPeliculas.length; i = i+1);
  //recuperar y mostrar en pantalla los datos de cada pelicula favorita
}

if (favoritosSeries == null || favoritosSeries.length == null){
  sectionSeries.innerHTML = "No agregaste series a la seccion de favoritos"
} else {
  for (let i=0; i < favoritosSeries.length; i = i+1);
   //recuperar y mostrar en pantalla los datos de cada serie favorita
}




let urlPeliculas = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US`
let urlSeries = `https://api.themoviedb.org/3/tv/${serie_id}?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US`