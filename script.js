const APP_ID = "50ee689a";
const APP_KEY = "809453fdfa7a23d744a095740df6539b";

const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
let search = document.querySelector(".input");

const getData = async (e) => {
  if (e.key == "Enter") {
    console.log("Working");
    const res = await axios.get(req);
    console.log(res);
  }
};

search.addEventListener("keypress",getData);
