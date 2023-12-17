let url= 'https://themealdb.com/api/json/v1/1/lookup.php?i='

const querySearch = document.location.search
//console.log(querySearch)
const params= new URLSearchParams(querySearch)
const id = params.get("id")
//console.log(id)

let urlCompleta=url+id;
console.log(urlCompleta);

const getEvents= () => {
    fetch(urlCompleta)
        .then(response=>response.json())
        .then(data=>tabla(data))
        .catch(error=>console.log(error))
}

function tabla(data){
    const details= data.meals.map(meal =>{
      let aux= {}
      aux.image = meal.strMealThumb;
      aux.name= meal.strMeal;
      aux.ing1= meal.strIngredient1;
      aux.ing2= meal.strIngredient2;
      aux.ing3= meal.strIngredient3;
      aux.ing4= meal.strIngredient4;
      aux.ing5= meal.strIngredient5;
      aux.ing6= meal.strIngredient6;
      aux.ing7= meal.strIngredient7;
      aux.ing8= meal.strIngredient8;
      aux.ing9= meal.strIngredient9;
      aux.ing10= meal.strIngredient10;
      aux.ing11= meal.strIngredient11;
      aux.ing12= meal.strIngredient12;
      aux.ing13= meal.strIngredient13;
      aux.ing14= meal.strIngredient14;
      aux.ing15= meal.strIngredient15;
      aux.instruction = meal.strInstructions;
      aux.source= meal.strSource;
      aux.video= meal.strYoutube;
      return aux
    })
    console.log(details);
    
    const detailsContainer = document.getElementById('details-article')

    detailsContainer.innerHTML= `<div class="container mb-0" id="details-container">
    <div class="row row-cols-1 row-cols-md-2 m-2">
      <div class="d-flex flex-column m-0 p-0" id="details-img-links">
        <h5 class="d-flex align-items-center justify-content-center mt-2">Ingredientes</h5>
        <div class= "details-ingredientes">
          
          <ol class="d-flex flex-column align-items-start">
            <li class="ingrediente ms-2">${details[0].ing1}</li>
            <li class="ingrediente ms-2">${details[0].ing2}</li>
            <li class="ingrediente ms-2">${details[0].ing3}</li>
            <li class="ingrediente ms-2">${details[0].ing4}</li>
            <li class="ingrediente ms-2">${details[0].ing5}</li>
            <li class="ingrediente ms-2">${details[0].ing6}</li>
            <li class="ingrediente ms-2">${details[0].ing7}</li>
            <li class="ingrediente ms-2">${details[0].ing8}</li>
            <li class="ingrediente ms-2">${details[0].ing9}</li>
            <li class="ingrediente ms-2">${details[0].ing10}</li>
            <li class="ingrediente ms-2">${details[0].ing11}</li>
            <li class="ingrediente ms-2">${details[0].ing12}</li>
            <li class="ingrediente ms-2">${details[0].ing13}</li>
            <li class="ingrediente ms-2">${details[0].ing14}</li>
            <li class="ingrediente ms-2">${details[0].ing15}</li>
          </ol>
          <img src="${details[0].image}" class="d-flex align-items-center justify-content-center" style="border-radius: 8px;" alt="">
        </div>
        <div class="d-flex align-items-center justify-content-evenly mb-2">
          <a href="${details[0].source}"><img src="" alt="">FUENTE</a>
          <a href="${details[0].video}"><img src="" alt="">LINK A YOUTUBE</a>
        </div>
      </div>
      <div class="col" style="border-color: #FF4000; border-style: solid; border-radius: 10px; border-width: 2px;">
        <h4 class="mt-2 ms-2" id="nombre">${details[0].name}</h4>
        <p id="text";>${details[0].instruction}</p>
        
      </div>
    </div>
    </div>`
}
getEvents();