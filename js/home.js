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



let urlPopularMovie = "https://api.themoviedb.org/3/movie/popular?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&page=1"
fetch(urlPopularMovie)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let popularMoviesSection = document.getElementById("popularMovies")
      let popularMoviesContent = ""

      for (let i = 0; i < 5; i++){
        
      popularMoviesContent += 
        `<li class="peliculas">
            <a href="detallepeliculas.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }

      popularMoviesSection.innerHTML = popularMoviesContent

      })
      .catch(function(error){
          console.log(error);
      })
    


let urlPopularSeries = "https://api.themoviedb.org/3/tv/popular?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&page=1"
fetch(urlPopularSeries)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let popularSeriesSection = document.getElementById("popularSeries")
      let popularSeriesContent = ""

      for (let i = 0; i < 5; i++){
        
      popularSeriesContent += 
        `<li class="peliculas">
            <a href="detalleseries.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }

      popularSeriesSection.innerHTML = popularSeriesContent

      })
      .catch(function(error){
          console.log(error);
      })



let urlMasVistosPeliculas = "https://api.themoviedb.org/3/movie/upcoming?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&page=1"
fetch(urlMasVistosPeliculas)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let masVistosPeliculasSection = document.getElementById("masVistosPeliculas")
      let masVistosPeliculasContent = ""

      for (let i = 0; i < 5; i++){
        
      masVistosPeliculasContent += 
        `<li class="peliculas">
            <a href="detallepeliculas.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }

      masVistosPeliculasSection.innerHTML = masVistosPeliculasContent

      })
      .catch(function(error){
          console.log(error);
      })
    
  
    
let urlMasVistosSeries = "https://api.themoviedb.org/3/tv/airing_today?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&page=1"
fetch(urlMasVistosSeries)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      
      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let masVistosSeriesSection = document.getElementById("masVistosSeries")
      let masVistosSeriesContent = ""
      
      for (let i = 0; i < 5; i++){
              
      masVistosSeriesContent += 
        `<li class="peliculas">
            <a href="detalleseries.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }
      
      masVistosSeriesSection.innerHTML = masVistosSeriesContent
      
      })
      .catch(function(error){
          console.log(error);
      })



let urlPeliculasMasValoradas = "https://api.themoviedb.org/3/movie/top_rated?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&page=1"
fetch(urlPeliculasMasValoradas)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      
      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let peliculasMasValoradasSection = document.getElementById("peliculasMasValoradas")
      let peliculasMasValoradasContent = ""
      
      for (let i = 0; i < 5; i++){
              
      peliculasMasValoradasContent += 
        `<li class="peliculas">
            <a href="detallepeliculas.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }
      
      peliculasMasValoradasSection.innerHTML = peliculasMasValoradasContent
      
      })
      .catch(function(error){
          console.log(error);
      })



let urlSeriesMasValoradas = "https://api.themoviedb.org/3/tv/top_rated?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&page=1"
fetch(urlSeriesMasValoradas)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      
      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let seriesMasValoradasSection = document.getElementById("seriesMasValoradas")
      let seriesMasValoradasContent = ""
      
      for (let i = 0; i < 5; i++){
              
      seriesMasValoradasContent += 
        `<li class="peliculas">
            <a href="detalleseries.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }
      
      seriesMasValoradasSection.innerHTML = seriesMasValoradasContent
      
      })
      .catch(function(error){
          console.log(error);
      })


      