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
function GoogleSearch() {
  fetch("http://localhost:2000/search")
    .then((r) => r.json())
    .then((data) => WebsiteList(data));
}
function WebsiteList(websites) {
  for (let i = 0; i <= websites.length; i++) {
    function NewDiv() {
      let id = websites[i].id;
      const btn = document.createElement(
        "div class='WebsiteLinks' id=" + websites[i].id
      );
      document.main.appendChild(btn);
      NewPTag();
      NewH3Tag();
      NewP2Tag();
    }
    function NewPTag() {
      const btn2 = document.createElement("p");
      btn2.innerHTML = websites[i].url;
      const div = document.querySelector("#" + websites[i].id); //grab div with specific id using queryselector
      document.div.appendChild(btn2);
    }
    function NewH3Tag() {
      const btn3 = document.createElement("h3");
      btn3.innerHTML =
        "<a href=" + websites[i].url + ">" + websites[i].websiteName + "</a>";
      const div = document.querySelector("#" + websites[i].id);
      document.div.appendChild(btn3);
    }
    function NewP2Tag() {
      const btn4 = document.createElement("p");
      btn4.innerHTML = websites[i].description;
      const div = document.querySelector("#" + websites[i].id);
      document.div.appendChild(btn4);
    }
  }
}
