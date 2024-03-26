let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userInp = document.getElementById("user-inp").value;

fetch(url + "big mac")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let myMeal = data.meals[0];
    let count = 1;
    let ingredients = [];
    for (let i in myMeal) {
      let ingredient = "";
      let measure = "";
      if (i.startsWith("strIngridient") && myMeal[i]) {
        ingredient = myMeal[i];
        measure = myMeal[`strMeasure` + count];
        count += 1;
        ingredients.push(`${measure} ${ingredient}`);
      }
    }

    result.innerHTML = `
    <img src=${myMeal.strMealThumb}>
    <div class="details">
        <h2>${myMeal.strMeal}</h2>
        <h4>${myMeal.strArea}</h4>
    </div>
    <div id="igredient-con"></div>
    <div id="recipe">
       <button id="hide-recipe">X</button>
       <pre id="instructions">${myMeal.strInstructions}</pre>
    </div>
    `;
  });
