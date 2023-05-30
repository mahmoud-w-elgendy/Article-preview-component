let button = document.querySelector("button");
let shareOpts = document.querySelector(".share-options");
let clickCount = 0;
setTimeout(function() {
  button.onclick = function() {
    clickCount += 1;
    if(clickCount % 2 == 0) {
      shareOpts.classList.remove("share-animation-appear");
      shareOpts.classList.add("share-animation-disappear");
    } else {
      shareOpts.classList.remove("share-animation-disappear")
      shareOpts.classList.add("share-animation-appear");
    }
  }
}, 2000);