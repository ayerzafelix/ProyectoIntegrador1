
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
let genero_id = qsObject.get("id")

let urlGenerosPeliculas = "https://api.themoviedb.org/3/genre/movie/list?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US"
fetch(urlGenerosPeliculas)
    .then(function(response){
      return response.json();
    })
    .then(function(generos){
      console.log(generos);

let urlGeneroPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=b3c4e9f716ea1c455601574fe492773b&with_genres=${genero_id}`
fetch(urlGeneroPeliculas)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let detalleGenerosSection = document.getElementById("detalleGeneros")
      let detalleGenerosContent = ""

      for (let i = 0; i < 5; i++) {
        if (genero_id == generos.genres[i].id){
          detalleGenerosContent +=
          `<h2 class="titulosDetalleGeneros">Género: ${generos.genres[i].name}</h2>`
        }
        
      }

      for (let i = 0; i < 5; i++){
        
        detalleGenerosContent += 
          `<li class="peliculas">
            <a class="nombres" href="detallePeliculas.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
            <h4>${data.results[i].title}</h4>
            <h5>${data.results[i].release_date}</h5>
          </li>`
        }
  
        detalleGenerosSection.innerHTML = detalleGenerosContent

      })
      .catch(function(error){
          console.log(error);
      })

    })

    
    let urlGenerosSeries = "https://api.themoviedb.org/3/genre/tv/list?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US"
    fetch(urlGenerosSeries)
        .then(function(response){
          return response.json();
        })
        .then(function(generos){
          console.log(generos);
    
    let urlGeneroPeliculas = `https://api.themoviedb.org/3/discover/tv?api_key=b3c4e9f716ea1c455601574fe492773b&with_genres=${genero_id}`
    fetch(urlGeneroPeliculas)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          console.log(data);
    
          let imgUrlBase= "https://image.tmdb.org/t/p/w300"
          let detalleGenerosSection = document.getElementById("detalleGeneros")
          let detalleGenerosContent = ""
    
          for (let i = 0; i < 5; i++) {
            if (genero_id == generos.genres[i].id){
              detalleGenerosContent +=
              `<h2 class="titulosDetalleGeneros">Género: ${generos.genres[i].name}</h2>`
            }
            
          }
    
          for (let i = 0; i < 5; i++){
            
            detalleGenerosContent += 
              `<li class="peliculas">
                <a class="nombres" href="detalleSeries.html?id=${data.results[i].id}" </a>
                <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
                <h4>${data.results[i].name}</h4>
                <h5>${data.results[i].first_air_date}</h5>
              </li>`
            }
      
            detalleGenerosSection.innerHTML = detalleGenerosContent
    
          })
          .catch(function(error){
              console.log(error);
          })
    
        })


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