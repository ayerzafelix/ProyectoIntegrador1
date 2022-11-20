
let formulario = document.querySelector('form')

formulario.addEventListener("submit", function(event){
  event.preventDefault()

  if(input.value == ""){
      alert("Este campo es obligatorio")
    } else if(input.value.length <= 3){
      alert("Este campo tiene que tener al menos 3 caracteres")
    } else {
      window.location = './resultados.html?search=' + input.value
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


      let providers_url = `https://api.themoviedb.org/3/tv/${serie_id}/videos?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US`
      fetch(providers_url)
        .then(function(response){
          return response.json();
        })
        .then(function(providers_data){
          console.log(providers_data);


          let detalleSerieSection = document.getElementById("detalleSerie")
          let detalleSerieContent = ""
          let imgUrlBase = `https://image.tmdb.org/t/p/original`
          let trailerUrl = 'https://www.youtube.com/embed/'

          detalleSerieContent += 
              `<h2 class="tituloPeliculaDetalle">${data.name}</h2>
              <img class="imagenPeliculaDetalle" src="https://image.tmdb.org/t/p/original${data.poster_path}"/>
              <h4 class="overviewPeliculaDetalle"> ${data.overview}</h4>
              <h4 class="calificacionPeliculaDetalle"><u>Fecha de estreno:</u> ${data.first_air_date}</h4>
              <h4 class="calificacionPeliculaDetalle"><u>Calificación:</u> ${data.vote_average}</h4>
              <h4 class="calificacionPeliculaDetalle"><u>Género:</u>`
              
            for (let i = 0; i < data.genres.length; i++) {
              const element = data.genres[i];
              detalleSerieContent +=`<a class= "generosDetalle" href="./detalleGeneros.html?id=${data.genres[i].id}"> ${element.name}.</a>`
              
            }

            if(providers_data.results.length > 0){
              detalleSerieContent += `</h4>
              <h2 class="plataformasPeliculaDetalle">Trailer de ${data.name}</h2>
              <section class="trailer">
              <iframe width="560" height="315" src="${trailerUrl + providers_data.results[0].key}" title="trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="toystory"></iframe>
              </section>`
            }
      


          if (providers_data.results.AR && providers_data.results.AR.flatrate) {
            detalleSerieContent += 
            `<h2 class="plataformasPeliculaDetalle">Plataformas en donde se puede ver: </h2>
              <li class="imagen">
                <a class="plataforma" href="detalleSeries.html?id=${data.id}" </a>`
            for (let i = 0; i < providers_data.results.AR.flatrate.length; i++) {
              const element = providers_data.results.AR.flatrate[i];
              detalleSerieContent += `<img class="plataforma" src="${imgUrlBase + element.logo_path}"/>`
                  
            }
              
          }    

          else if (providers_data.results.US && providers_data.results.US.flatrate) {
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



let urlReview = `https://api.themoviedb.org/3/tv/${serie_id}/reviews?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&page=1`
    fetch(urlReview)
      .then(function(response){
        return response.json();
      })
      .then(function(review_data){
        console.log(review_data);
        if(review_data.results.length > 0){


          let reviewSerieSection = document.getElementById("reviewSerie")
          let reviewSerieContent = `<h2 class="ultimo">Review:</h2>`

          reviewSerieContent += 
              `<h4 class="review"><u>${review_data.results[0].author}:</u> ${review_data.results[0].content}}</h4>
              `
            
              reviewSerieSection.innerHTML = reviewSerieContent   
        }
      })