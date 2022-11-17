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
let serie_id = qsObject.get("id")

let url = `https://api.themoviedb.org/3/tv/${serie_id}?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US`
fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      console.log(data.title)


      let providers_url = `https://api.themoviedb.org/3/tv/${serie_id}/watch/providers?api_key=b3c4e9f716ea1c455601574fe492773b`
      fetch(providers_url)
        .then(function(response){
          return response.json();
        })
        .then(function(providers_data){
          console.log(providers_data);
          let detalleSerieSection = document.getElementById("detalleSerie")
          let detalleSerieContent = ""
          let imgUrlBase = `https://image.tmdb.org/t/p/original`

          detalleSerieContent += 
              `<h2 class="tituloPeliculaDetalle">${data.name}</h2>
              <img class="imagenPeliculaDetalle" src="https://image.tmdb.org/t/p/original${data.poster_path}"/>
              <h4 class="overviewPeliculaDetalle"> ${data.overview}</h4>
              <h4 class="calificacionPeliculaDetalle"><u>Fecha de estreno:</u> ${data.first_air_date}</h4>
              <h4 class="calificacionPeliculaDetalle"><u>Calificación:</u> ${data.vote_average}</h4>
              <h4 class="calificacionPeliculaDetalle"><u>Género:</u>`
              
            for (let i = 0; i < data.genres.length; i++) {
              const element = data.genres[i]
              ;
              detalleSerieContent +=` ${element.name}.`
              
            }

            detalleSerieContent += `</h4>`


              
          if (providers_data.results.US && providers_data.results.US.flatrate) {
            detalleSerieContent += 
            `<h2 class="plataformasPeliculaDetalle">Plataformas en donde se puede ver: </h2>
              <li class="imagen">
                <a class="plataforma" href="detalleSeries.html?id=${data.id}" </a>`
            for (let i = 0; i < providers_data.results.US.flatrate.length; i++) {
              const element = providers_data.results.US.flatrate[i];
              detalleSerieContent += `<img class="plataforma" src="${imgUrlBase + element.logo_path}"/>`
                
            }
            
          }
          else if (providers_data.results.FR && providers_data.results.FR.flatrate) {
            detalleSerieContent += 
            `<h2 class="plataformasPeliculaDetalle">Plataformas en donde se puede ver: </h2>
              <li class="imagen">
                <a class="plataforma" href="detalleSeries.html?id=${data.id}" </a>`
            for (let i = 0; i < providers_data.results.FR.flatrate.length; i++) {
              const element = providers_data.results.FR.flatrate[i];
              detalleSerieContent += `<img class="plataforma" src="${imgUrlBase + element.logo_path}"/>`
                
            }
            
          }

          else if (providers_data.results.BR && providers_data.results.BR.flatrate) {
            detalleSerieContent += 
            `<h2 class="plataformasPeliculaDetalle">Plataformas en donde se puede ver: </h2>
              <li class="imagen">
                <a class="plataforma" href="detalleSeries.html?id=${data.id}" </a>`
            for (let i = 0; i < providers_data.results.BR.flatrate.length; i++) {
              const element = providers_data.results.BR.flatrate[i];
              detalleSerieContent += `<img class="plataforma" src="${imgUrlBase + element.logo_path}"/>`
                
            }
            
          }

          detalleSerieContent += `</li>`


          detalleSerieSection.innerHTML = detalleSerieContent
        })
      

    })
    .catch(function(error){
        console.log(error);
    })
