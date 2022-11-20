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

let favoritos = []

let recuperStorage = localStorage.getItem("peliculasFavs")

if(recuperStorage !== null){
    favoritos = JSON.parse(recuperStorage)
}

let boton = document.querySelector("button");

if(favoritos.includes(id)){
    boton.innerText = "Quitar de favoritos"
}

boton.addEventListener("click", function(){

    if(favoritos.includes(id)){
        let indiceDeLaPelicula = favoritos.indexOf(id);
        favoritos.splice(indiceDeLaPelicula, 1)
        boton.innerText = "Agregar a favoritos";
    } else {
        favoritos.push(id)
        boton.innerText = "Quitar de favoritos";
    }




    let favsToString = JSON.stringify(favoritos)
    localStorage.setItem("peliculasfavs", favsToString)

})