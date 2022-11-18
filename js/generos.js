let urlGenerosPeliculas = "https://api.themoviedb.org/3/genre/movie/list?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US"
fetch(urlGenerosPeliculas)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let generoPeliculasSection = document.getElementById("generoPeliculas")
      let generoPeliculasContent = `<h2 class="titulos">GÉNEROS DE PELICULAS</h2>`

      for (let i = 0; i < 5; i++){
        
        generoPeliculasContent += 
        `<h3 class="imagenes generos"><a class= "generos" href="./detalleGeneros.html?id=${data.genres[i].id}">- ${data.genres[i].name}</a></h3>`
      }

      generoPeliculasSection.innerHTML = generoPeliculasContent

      })
      .catch(function(error){
          console.log(error);
      })

      let urlGenerosSeries = "https://api.themoviedb.org/3/genre/tv/list?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US"
fetch(urlGenerosSeries)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let generoSeriesSection = document.getElementById("generoSeries")
      let generoSeriesContent = `<h2 class="titulos">GÉNEROS DE SERIES</h2>`

      for (let i = 0; i < 5; i++){
        
        generoSeriesContent += 
        `<h3 class="imagenes generos"><a class= "generos" href="./detalleGeneros.html?id=${data.genres[i].id}">- ${data.genres[i].name}</a></h3>`
      }

      generoSeriesSection.innerHTML = generoSeriesContent

      })
      .catch(function(error){
          console.log(error);
      })


