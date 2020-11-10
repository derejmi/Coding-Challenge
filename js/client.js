const modeCheck = document.getElementById("searchRight");
modeCheck.addEventListener("mouseover", imFeelingLucky);

let checkbox = true;

function imFeelingLucky() {
  if (checkbox) {
    searchRight.innertext = "Im Feeling lucky";
    checkbox = false;
  } else {
    searchRight.innertext = "Im Feeling Fine";
    checkbox = true;
  }
}
