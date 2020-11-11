/*Im feeling lucky DOM Logic  */

const modeCheck = document.getElementById("searchRight");
modeCheck.addEventListener("mouseover", imFeelingHover);

let checkbox = true;

function imFeelingHover() {
  if (checkbox) {
    modeCheck.innerText = "Im Feeling lucky";
    checkbox = false;
  } else {
    modeCheck.innerText = "Im Feeling Fine";
    checkbox = true;
  }
}

/* Im feeling lucky */

modeCheck.addEventListener("click", imFeelingLucky);

function imFeelingLucky() {
  fetch("http://localhost:2000/lucky")
    .then((r) => r.json())
    .then((data) => luckyLink(data))
    .catch(() => {
      console.warn;
    });
}

function luckyLink(data) {
  const link = data.url;
  window.open(link);
}
/*GOOGLE SEARCH LOGIC */

const GoogleCheck = document.getElementById("searchLeft");
GoogleCheck.addEventListener("click", GoogleSearch);

function GoogleSearch() {
  fetch("http://localhost:2000/search")
    .then((r) => r.json())
    .then((data) => WebsiteList(data));
}

function WebsiteList(websites) {
  function NewDiv() {
    for (let i = 0; i <= websites.length; i++) {
      let Arrayid = websites[i].id;
      console.log(Arrayid);
      const btn = document.createElement("div");
      document.getElementById("mainId").appendChild(btn);
      document
        .getElementsByTagName("div")
        .setAttribute("id", Arrayid)
        .setAttribute("class", "WebsiteStyles");
      NewPTag();
      NewH3Tag();
      NewP2Tag();
    }
  }
  function NewPTag() {
    for (let i = 0; i <= websites.length; i++) {
      const btn2 = document.createElement("p");
      btn2.innerHTML = websites[i].url;
      const div = document.querySelector("#" + websites[i].id); //grab div with specific id using queryselector
      document.div.appendChild(btn2);
    }
  }
  function NewH3Tag() {
    for (let i = 0; i <= websites.length; i++) {
      const btn3 = document.createElement("h3");
      btn3.innerHTML =
        "<a href=" + websites[i].url + ">" + websites[i].websiteName + "</a>";
      const div = document.querySelector("#" + websites[i].id);
      document.div.appendChild(btn3);
    }
  }
  function NewP2Tag() {
    for (let i = 0; i <= websites.length; i++) {
      const btn4 = document.createElement("p");
      btn4.innerHTML = websites[i].description;
      const div = document.querySelector("#" + websites[i].id);
      document.div.appendChild(btn4);
    }
  }
  NewDiv();
}
