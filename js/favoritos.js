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


let imgUrlBase = `https://image.tmdb.org/t/p/original`



let recuperoStorageSeries = localStorage.getItem("seriesFavs");
let favoritosSeries = JSON.parse(recuperoStorageSeries);
console.log(favoritosSeries);
let sectionSeries = document.getElementById("seleccionSeries");
let seriesTitle = document.getElementById('series')

let recuperoStoragePeliculas = localStorage.getItem("peliculasFavs");
let favoritosPeliculas = JSON.parse(recuperoStoragePeliculas);
console.log(favoritosPeliculas);
let sectionPeliculas = document.getElementById("seleccionPeliculas")
let peliculasTitle = document.getElementById('pelis')

if (favoritosPeliculas == null || favoritosPeliculas.length == 0){
  peliculasTitle.innerHTML = "No agregaste peliculas a la seccion de favoritos"
} else {
  let allPeliculas = "";

  for (let i=0; i < favoritosPeliculas.length; i = i+1){
    let movie_id = favoritosPeliculas[i]
    console.log(movie_id)
    let urlPeliculas = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US`;

    //recuperar y mostrar en pantalla los datos de cada pelicula favorita

    fetch(urlPeliculas)
    .then(function(res){
      return res.json()
    })
    .then(function(data){
      //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
      console.log(data);

      //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
      allPeliculas = `<li class="peliculas">
                          <a class="nombres" href="detallepeliculas.html?id=${data.id}" </a>
                          <img src="${imgUrlBase + data.poster_path}" class="peliculas"/>
                          <h4>${data.title}</h4>
                          <h5>${data.release_date}</h5>    
                        </li>`
      sectionPeliculas.innerHTML += allPeliculas;
      //Con toda la estructura html completa ahora la paso al DOM
    })
    .catch( function(e){
        console.log(e)
    })
  }
  
    
}

if (favoritosSeries === null || favoritosSeries.length == 0){
  seriesTitle.innerHTML = "No agregaste series a la seccion de favoritos"
} else {
  let allSeries = "";

  for (let i=0; i < favoritosSeries.length; i = i+1){
    let serie_id = favoritosSeries[i]
    console.log(serie_id)
    let urlSeries = `https://api.themoviedb.org/3/tv/${serie_id}?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US`;

    //recuperar y mostrar en pantalla los datos de cada pelicula favorita

    fetch(urlSeries)
    .then(function(res){
      return res.json()
    })
    .then(function(data){
      //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
      console.log(data);

      //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
      allSeries = `<li class="peliculas">
                      <a class="nombres" href="detalleseries.html?id=${data.id}" </a>
                        <img src="${imgUrlBase + data.poster_path}" class="peliculas"/>
                        <h4>${data.name}</h4>
                        <h5>${data.first_air_date}</h5>    
                    </li>`
      sectionSeries.innerHTML += allSeries;
      //Con toda la estructura html completa ahora la paso al DOM
    })
    .catch( function(e){
        console.log(e)
    })
  }  
}
     

// Dark mode

let botonDark = document.querySelector('.botonDark');

let body = document.querySelector('body')

let inicio = document.querySelector('h2')

botonDark.addEventListener('click', function(){
    if(botonDark.innerText == 'Aclarar fondo'){
    botonDark.innerText = 'Oscurecer fondo'
    body.style.background = '#666566';    
    } 
    
    else{

    body.style.background = '#000';
    this.innerText = 'Aclarar fondo'
    }
  })