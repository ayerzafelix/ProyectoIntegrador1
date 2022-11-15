let formulario = document.querySelector('form')
let busqueda = document.querySelector("input")

formulario.addEventListener("submit", function(event){
  event.preventDefault()

  if(busqueda.value == ""){
      alert("Este campo es obligatorio")
    } else if(busqueda.value.length <= 3){
        alert("Este campo tiene que tener al menos 3 caracteres")
    }
})



let qsObject = new URLSearchParams(location.search)
let movie_id = qsObject.get("id")

let url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US`
fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      console.log(data.title)


      let providers_url = `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=b3c4e9f716ea1c455601574fe492773b`
      fetch(providers_url)
        .then(function(response){
          return response.json();
        })
        .then(function(providers_data){
          console.log(providers_data);
          let detallePeliculaSection = document.getElementById("detallePelicula")
          let detallePeliculaContent = ""
          let imgUrlBase = `https://image.tmdb.org/t/p/original`

          detallePeliculaContent += 
              `<h2 class="tituloPeliculaDetalle">${data.title}</h2>
              <img class="imagenPeliculaDetalle" src="https://image.tmdb.org/t/p/original${data.poster_path}"/>
              <h4 class="overviewPeliculaDetalle"> ${data.overview}</h4>
              <h4 class="calificacionPeliculaDetalle">Fecha de estreno: ${data.release_date}</h4>
              <h4 class="calificacionPeliculaDetalle"> Calificación: ${data.vote_average}</h4>
              <h4 class="calificacionPeliculaDetalle">Género${data.genre_ids}</h4>`
              
          if (providers_data.results.US) {
            detallePeliculaContent += 
            `<h4 class="plataformasPeliculaDetalle">Plataformas en donde se puede ver: </h4>
              <li class="imagen">
                <a class="peliculas" href="detallepeliculas.html?id=${data.id}" </a>`
            for (let i = 0; i < providers_data.results.US.buy.length; i++) {
              const element = providers_data.results.US.buy[i];
              detallePeliculaContent += `<img src="${imgUrlBase + element.logo_path}"/>`
                
            }
          }
          detallePeliculaContent += `</li>`


          detallePeliculaSection.innerHTML = detallePeliculaContent
        })
      

    })
    .catch(function(error){
        console.log(error);
    })
