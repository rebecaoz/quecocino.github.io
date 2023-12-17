
let url= 'https://themealdb.com/api/json/v1/1/filter.php?i='

const boton= document.getElementById('boton');

boton.addEventListener('click',buscar);

function buscar(){
    const DATO= document.getElementById('search').value;
    let urlCompleta= url+DATO;
    console.log(urlCompleta);

const getEvents= () => {
    fetch(urlCompleta)
        .then(response=>response.json())
        .then(data=>tabla(data))
        .catch(error=>console.log(error))
}

function tabla(data){
    const elementsContainer =  document.querySelector('.contenedor');

    recorrer(data.meals, elementsContainer)
    
    function recorrer(mealslist, container){
      let cards=""
      mealslist.forEach(element=>cards+= `<div class="col"><div class="card h-100"><img src= ${element.strMealThumb} class="card-img-top"><div class="card-body"><h5 class="card-title">${element.strMeal}</h5><div class="card-footer"><a class="btn seemore" role="button" href="./details.html?id=${element.idMeal}">Ver más</a></div></div></div></div>`)
    container.innerHTML= cards
    }
}
getEvents();
}
