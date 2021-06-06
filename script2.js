let title = document.querySelector(".title");
let cont = document.querySelector(".cont");
let footer = document.querySelector(".footer");

footer.style.top = 268.875 + "px";

let tname = localStorage.getItem("name");
tname = tname.charAt(0).toUpperCase() + tname.slice(1);

title.innerText = tname + " " + "Recipes";
let recipeNames = localStorage.getItem("recipeNames");
let recipeImg = localStorage.getItem("recipeImg");
let recipeUrl = localStorage.getItem("recipeUrl");
let recipeIngre = localStorage.getItem("recipeIngre");

let names = recipeNames.split(",");
names = names.map((name) => {
  let blob = name.split(" ");
  let str = "";
  for (let i = 0; i < 3; i++) {
    if (blob[i] != undefined) {
      str = str + " " + blob[i];
    }
  }
  return str;
});

let img = recipeImg.split(",");
let url = recipeUrl.split(",");
let ingredients = JSON.parse(recipeIngre);

let dcount;
for (let i = 0; i <= 5; i++) {
  dcount = document.createElement("div");
  dcount.classList.add(`d-container-${i + 1}`);
  dcount.classList.add("d-man");
  
  dcount.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%),url(${img[i]})`;
  dcount.style.backgroundPosition = "center";
  dcount.style.backgroundSize = "cover";

  let acount = document.createElement("a");
  acount.href = url[i];

  let pcount = document.createElement("h3");
  pcount.classList.add(`p-${i + 1}`);
  pcount.innerText = names[i];

  dcount.innerHTML = `<div class="button" style="background-color: rgb(40, 167, 69); color: white;">Ingredients</div>`;

  dcount.appendChild(pcount);
  cont.appendChild(dcount);

  dcount.appendChild(acount);
}

let small;
let flag = false;
let main;

let ingreBtn = document.querySelectorAll(".button");
for (let i = 0; i < ingreBtn.length; i++) {
  
  ingreBtn[i].addEventListener("click", (e) => {
    if (flag == false) {
      main = document.querySelector(`.d-container-${i + 1}`);
      let arr = main.classList[0].split('-')[2];
      console.log(arr);
      small = document.createElement("div");
      small.classList.add("ingredients");

      for (let j = 0; j < ingredients[i].length; j++) {
        let nsmall = document.createElement("div");
        nsmall.classList.add("inner-container");
        let npt = document.createElement("p");
        npt.classList.add("t-names");
        let npw = document.createElement("p");
        npw.classList.add("w-names");
        npt.innerText = ingredients[i][j].text;
        let number = Number(ingredients[i][j].weight);
        npw.innerText = number.toFixed(2) + " grams";
        nsmall.appendChild(npt);
        nsmall.appendChild(npw);
        small.appendChild(nsmall);
      }
      main.appendChild(small);
      let rect = small.getBoundingClientRect();
      main.style.borderBottomLeftRadius = "0rem";
      main.style.borderBottomRightRadius = "0rem";
      main.style.border = "0.5px solid grey";

      if(arr<4){
      cont.style.gap = rect.height + "px" + " " + "5rem";
      footer.style.top = rect.height + 268.875 + "px";
      }else{
        footer.style.top = rect.height + 268.875 + "px";
      }

      flag = true;
    } else {
      e.currentTarget.parentElement.querySelector(".ingredients").remove();
      cont.style.gap = "5rem";
      main.style.borderBottomLeftRadius = "1.2rem";
      main.style.borderBottomRightRadius = "1.2rem";
      footer.style.top = 268.875 + "px";

      flag = false;
    }
  });
}

let containers = document.querySelectorAll(".d-man");

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("mouseover", (e) => {
    let div = e.currentTarget;
    div.style.transform = "scale(1.05)";
  });

  containers[i].addEventListener("mouseout", (e) => {
    let div = e.currentTarget;
    div.style.transform = "scale(1)";
  });

  containers[i].addEventListener("dblclick", (e) => {
    let div = e.currentTarget;
    div.querySelector("a").click();
  });
}
