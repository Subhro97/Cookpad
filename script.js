const APP_ID = "50ee689a";
const APP_KEY = "809453fdfa7a23d744a095740df6539b";

let req;
let search = document.querySelector(".input");
let recipes;
let recipeNames;
let recipeImg;
let recipeUrl;
let recipeIngre;

const getData = async (e) => {
  if (e.key == "Enter" && search.value != "") {
    req = `https://api.edamam.com/search?q=${search.value}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const res = await axios.get(req);
    recipes = res.data.hits;

    if (recipes !== []) {
      recipeNames = recipes.map((recipe) => {
        return recipe.recipe.label;
      });
      recipeImg = recipes.map((recipe) => {
        return recipe.recipe.image;
      });
      recipeUrl = recipes.map((recipe) => {
        return recipe.recipe.url;
      });
      recipeIngre = recipes.map((recipe) => {
        return recipe.recipe.ingredients;
      });
    }

    localStorage.setItem("name", search.value);
    localStorage.setItem("recipeNames", recipeNames);
    localStorage.setItem("recipeImg", recipeImg);
    localStorage.setItem("recipeUrl", recipeUrl);
    localStorage.setItem("recipeIngre", JSON.stringify(recipeIngre));

    let link = document.createElement("a");
    link.href = "recipes.html";
    link.click();
  }
};

search.addEventListener("keypress", getData);

let about = document.querySelector(".n-about");
about.addEventListener("click", () => {
  document.querySelector(".about-container").scrollIntoView();
});

let contact = document.querySelector(".n-contact");
contact.addEventListener("click", () => {
  document.querySelector(".footer").scrollIntoView();
});

let recipe = document.querySelector(".n-recipe");
recipe.addEventListener("click", () => {
  document.querySelector(".video-container").scrollIntoView();
});

let brand = document.querySelector(".n-partners");
brand.addEventListener("click", () => {
  document.querySelector(".brands").scrollIntoView();
});
