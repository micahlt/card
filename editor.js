// Define variables
//__________________________________________________________________________________________

let watermarkOptionEl = document.getElementById('watermarkOption'), watermarkOption = false, roundOptionEl = document.getElementById('roundOption'), roundOption = false;

// Event listeners
//__________________________________________________________________________________________

watermarkOptionEl.addEventListener("click", function() {
  flipBox(watermarkOptionEl);
  watermarkOption = !watermarkOption;
});

roundOptionEl.addEventListener("click", function() {
  flipBox(roundOptionEl);
  roundOption = !roundOption;
});

// Custom functions
//__________________________________________________________________________________________

function flipBox(el) {
  if (! el.classList.contains("flipped")) {
    el.classList.add("flipping");
    setTimeout(function(){ el.classList.remove("flipping"); el.classList.add("flipped");}, 760);
  } else {
    el.classList.remove("flipped");
    el.classList.add("unflipping");
    setTimeout(function(){ el.classList.remove("unflipping"); }, 760);
  }
}

let root = document.documentElement;
root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
  console.log(root.style.property('--mouse-x'));
});
