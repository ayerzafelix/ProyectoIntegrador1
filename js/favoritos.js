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


let seccion = document.querySelector(".seleccionPeliculas");
let sectionSeries = document.querySelector(".seleccionSeries");

let qsObject = new URLSearchParams(location.search)
let movie_id = qsObject.get("id")
console.log(movie_id)
let urlPeliculas = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US`;

if (favoritosPeliculas == null || favoritosPeliculas.length == null){
  sectionPeliculas.innerHTML = "No agregaste peliculas a la seccion de favoritos"
} else {
  for (let i=0; i < favoritosPeliculas.length; i = i+1){

  
    //recuperar y mostrar en pantalla los datos de cada pelicula favorita

      fetch(urlPeliculas)
      .then(function(res){
          return res.json()
    })
      .then(function(data){
        //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
        console.log(data);
        let arrayDePeliculas = data.results;

        //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
        let seccion = document.querySelector('.seleccionPeliculas');
        let allPeliculas = "";

        //2 Qué: recorro la información de la api y la organizo para mostarla en el html
        for(let i=0; i<arrayDePeliculas.length; i++){
            //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
            allPeliculas += `<article>
                                <img src=${arrayDePeliculas[i].image} alt='${arrayDePeliculas[i].name}' />
                                <p> <a href="detalle.html?id=${arrayDePeliculas[i].id}"> Name: ${arrayDePeliculas[i].name} </p>
                                <p>Status: ${arrayDePeliculas[i].status} </p>
                            </article>`
        }
        //Con toda la estructura html completa ahora la paso al DOM
        seccion.innerHTML = allPeliculas;

    })
    .catch( function(e){
        console.log(e)
    })
     }
    
}


let qsSerie = new URLSearchParams(location.search)
let serie_id = qsSerie.get("id")
console.log(serie_id)
let urlSeries = `https://api.themoviedb.org/3/tv/${serie_id}?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US`;

if (favoritosSeries == null || favoritosSeries.length == null){
  sectionSeries.innerHTML = "No agregaste series a la seccion de favoritos"
} else {
  for (let i=0; i < favoritosSeries.length; i = i+1);
   //recuperar y mostrar en pantalla los datos de cada serie favorita
}


      fetch(urlSeries)
      .then(function(res){
          return res.json()
    })
      .then(function(data){
        //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
        console.log(data);
        let arrayDeSeries = data.results;

        //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
        let seccionSeries = document.querySelector('.seleccionSeries');
        let allSeries = "";

        //2 Qué: recorro la información de la api y la organizo para mostarla en el html
        for(let i=0; i<arrayDeSeries.length; i++){
            //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
            allSeries += `<article>
                                <img src=${arrayDeSeries[i].image} alt='${arrayDeSeries[i].name}' />
                                <p> <a href="detalle.html?id=${arrayDeSeries[i].id}"> Name: ${arrayDeSeries[i].name} </p>
                                <p>Status: ${arrayDeSeries[i].status} </p>
                            </article>`
        }
        //Con toda la estructura html completa ahora la paso al DOM
        seccion.innerHTML = allSeries;

    })
    .catch( function(e){
        console.log(e)
    })
     

