let formulario = document.querySelector('form')
let busqueda = document.querySelector("input")

formulario.addEventListener("submit", function(event){
  event.preventDefault()

  if(busqueda.value == ""){
      alert("Este campo es obligatorio")
    } else if(busqueda.value.length <= 3){
        alert("Este campo tiene que tener al menos 3 caracteres")
    } else {
      let buscador = `https://api.themoviedb.org/3/search/company?api_key=b3c4e9f716ea1c455601574fe492773b&query=${busqueda.value}&page=1`
      fetch(buscador)
          .then(function(response){
            return response.json();
          })
          .then(function(data){
            console.log('search');
            console.log(data);
          })
    }
})




let resultadosDeBusqueda = `https://api.themoviedb.org/3/search/company?api_key=b3c4e9f716ea1c455601574fe492773b&query=${busqueda.value}&page=1`
fetch(resultadosDeBusqueda)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let imgUrlBase= "https://image.tmdb.org/t/p/w300"
      let resultadosSection = document.getElementById("resultados")
      let resultadosContent = ""

      for (let i = 0; i < 5; i++){
        
        resultadosContent += 
        `<h2 class="ultimo">Resultados de busqueda: "${busqueda.value}"</h2>
        <li class="peliculas">
            <a href="detallepeliculas.html?id=${data.results[i].id}" </a>
            <img src="${imgUrlBase + data.results[i].poster_path}" class="peliculas"/>
        </li>`
      }

      resultadosSection.innerHTML = resultadosContent
 
      })
      .catch(function(error){
          console.log(error);
      })