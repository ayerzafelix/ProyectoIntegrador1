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



let urlGeneroAccionPeliculas = "https://api.themoviedb.org/3/discover/movie?api_key=b3c4e9f716ea1c455601574fe492773b&with_genres=28"
fetch(urlGeneroAccionPeliculas)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let generoAccionPeliculasSection = document.getElementById("generoAccionPeliculas")
      let generoAccionPeliculasContent = ""

      for (let i = 0; i < data.results.length && i < 5; i++){
        
        generoAccionPeliculasContent += 
        `<li class="peliculas">
            <a href="detallepeliculas.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }

      generoAccionPeliculasSection.innerHTML = generoAccionPeliculasContent

      })
      .catch(function(error){
          console.log(error);
      })



let urlGeneroHorrorPeliculas = "https://api.themoviedb.org/3/discover/movie?api_key=b3c4e9f716ea1c455601574fe492773b&with_genres=27"
fetch(urlGeneroHorrorPeliculas)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let generoHorrorPeliculasSection = document.getElementById("generoHorrorPeliculas")
      let generoHorrorPeliculasContent = ""

      for (let i = 0; i < data.results.length && i < 5; i++){
        
        generoHorrorPeliculasContent += 
        `<li class="peliculas">
            <a href="detallepeliculas.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }

      generoHorrorPeliculasSection.innerHTML = generoHorrorPeliculasContent

      })
      .catch(function(error){
          console.log(error);
      })



let urlGeneroAnimadoPeliculas = "https://api.themoviedb.org/3/discover/movie?api_key=b3c4e9f716ea1c455601574fe492773b&with_genres=16"
fetch(urlGeneroAnimadoPeliculas)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let generoAnimadoPeliculasSection = document.getElementById("generoAnimadoPeliculas")
      let generoAnimadoPeliculasContent = ""

      for (let i = 0; i < data.results.length && i < 5; i++){
        
        generoAnimadoPeliculasContent += 
        `<li class="peliculas">
            <a href="detallepeliculas.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }

      generoAnimadoPeliculasSection.innerHTML = generoAnimadoPeliculasContent

      })
      .catch(function(error){
          console.log(error);
      })




let urlGeneroDramaTv = "https://api.themoviedb.org/3/discover/tv?api_key=b3c4e9f716ea1c455601574fe492773b&with_genres=18"
fetch(urlGeneroDramaTv)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let generoDramaTvSection = document.getElementById("generoDramaTv")
      let generoDramaTvContent = ""

      for (let i = 0; i < data.results.length && i < 5; i++){
        
        generoDramaTvContent += 
        `<li class="peliculas">
            <a href="detalleseries.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }

      generoDramaTvSection.innerHTML = generoDramaTvContent

      })
      .catch(function(error){
          console.log(error);
      })



let urlGeneroComediaTv = "https://api.themoviedb.org/3/discover/tv?api_key=b3c4e9f716ea1c455601574fe492773b&with_genres=35"
fetch(urlGeneroComediaTv)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
    console.log(data);
      
    let imgUrlBase= "https://image.tmdb.org/t/p/w300"
    let generoComediaTvSection = document.getElementById("generoComediaTv")
    let generoComediaTvContent = ""
      
    for (let i = 0; i < data.results.length && i < 5; i++){
              
    generoComediaTvContent += 
    `<li class="peliculas">
        <a href="detalleseries.html?id=${data.results[i].id}" </a>
        <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
    </li>`
    }
      
    generoComediaTvSection.innerHTML = generoComediaTvContent
      
    })
    .catch(function(error){
        console.log(error);
    })



let urlGeneroDocumentalTv = "https://api.themoviedb.org/3/discover/tv?api_key=b3c4e9f716ea1c455601574fe492773b&with_genres=99"
fetch(urlGeneroDocumentalTv)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
    console.log(data);
      
    let imgUrlBase= "https://image.tmdb.org/t/p/w300"
    let generoDocumentalTvSection = document.getElementById("generoDocumentalTv")
    let generoDocumentalTvContent = ""
      
    for (let i = 0; i < data.results.length && i < 5; i++){
              
        generoDocumentalTvContent += 
    `<li class="peliculas">
        <a href="detalleseries.html?id=${data.results[i].id}" </a>
        <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
    </li>`
    }
      
    generoDocumentalTvSection.innerHTML = generoDocumentalTvContent
      
    })
    .catch(function(error){
        console.log(error);
    })


