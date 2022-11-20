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




let qsObject = new URLSearchParams(location.search)
let query = qsObject.get("search")

      let buscador = `https://api.themoviedb.org/3/search/movie?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&query=${query}&page=1&include_adult=false`
      fetch(buscador)
          .then(function(response){
            return response.json();
          })
          .then(function(data){
            console.log('search');
            console.log(data);
          })





let busquedaPeliculas = `https://api.themoviedb.org/3/search/movie?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&query=${query}&page=1&include_adult=false`
let busquedaSeries = `https://api.themoviedb.org/3/search/tv?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&query=${query}&page=1&include_adult=false`

fetch(busquedaPeliculas)
  .then(function(response){
    return response.json();
  })
  .then(function(peliculas){
    console.log(peliculas);
    fetch(busquedaPeliculas)
      .then(function(response){
        return response.json();
      })
      .then(function(series){
        console.log(series);

        let imgUrlBase= "https://image.tmdb.org/t/p/w300"
        let resultadosSection = document.getElementById("resultados")
        let resultadosContent = `<h2 class="titulosResultados">Resultados de busqueda: "${query}"</h2>`

        for (let i = 0; i < 5; i++){
          
          resultadosContent += 
          `<li class="peliculas">
              <a class="nombres" href="detallepeliculas.html?id=${series.results[i].id}" </a>
              <img src="${imgUrlBase + series.results[i].poster_path}" class="peliculas"/>
              <h4>${series.results[i].title}</h4>
              <h5>${series.results[i].release_date}</h5>    
          </li>`
        }

        resultadosSection.innerHTML = resultadosContent
      })
      .catch(function(error){
        console.log(error);
      })

    })
    .catch(function(error){
        console.log(error);
    })
