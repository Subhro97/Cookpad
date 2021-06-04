let cont = document.querySelector(".cont");

let recipeNames = localStorage.getItem("recipeNames");
let recipeImg = localStorage.getItem("recipeImg");
let recipeUrl = localStorage.getItem("recipeUrl");
let recipeIngre = localStorage.getItem("recipeIngre");

let names = recipeNames.split(",");
let img = recipeImg.split(",");
let url = recipeUrl.split(",");
let ingredients = JSON.parse(recipeIngre);
console.log(ingredients);

console.log(names.length);
console.log(img.length);
console.log(url.length);

for (let i = 0; i <= 5; i++) {
  let dcount = document.createElement("div");
  dcount.classList.add("d-container");
  dcount.style.backgroundImage = `url(${img[i]})`;
  dcount.style.backgroundPosition = "center";
  dcount.style.backgroundSize = "cover";

  let acount = document.createElement("a");
  acount.href = url[i];

  let pcount = document.createElement("h3");
  pcount.classList.add(`p-${i + 1}`);
  pcount.innerText = names[i];
  dcount.innerHTML = `<i class="fas fa-caret-right c-${i + 1}"></i>`;
  
  dcount.appendChild(pcount);
  cont.appendChild(dcount);

  let small = document.createElement("div");
  small.classList.add("ingredients");

  for (let j = 0; j < ingredients[i].length; j++) {
    let nsmall=document.createElement("div");
    nsmall.classList.add("inner-container");
    let npt = document.createElement("p");
    let npw = document.createElement("p");
    npt.innerText = ingredients[i][j].text;
    npw.innerText = ingredients[i][j].weight + " grams";
    nsmall.appendChild(npt);
    nsmall.appendChild(npw);
    small.appendChild(nsmall);
  }
  
  dcount.appendChild(small);
  dcount.appendChild(acount);
}

let containers = document.querySelectorAll(".d-container");

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("mouseover", (e) => {
    let div = e.currentTarget;
    div.style.border = "3.2px solid rgb(40, 167, 69)";
    div.querySelector(".ingredients").style.opacity="1";
  });

  containers[i].addEventListener("mouseout", (e) => {
    let div = e.currentTarget;
    div.style.border = " 0.5px solid grey";
    div.querySelector(".ingredients").style.opacity="0";
  });

  containers[i].addEventListener("click", (e) => {
    let div = e.currentTarget;
    div.querySelector("a").click();
  });
}
