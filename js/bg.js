const root = document.querySelector(".root");
const IMG_NUMBER = 3;

function showBg(imgNumber) {
  const bg = new Image();
  bg.src = `images/${imgNumber + 1}.jpg`;
  bg.classList.add("bgImage");
  root.prepend(bg);
}

function genRandom() {
  const ran = Math.floor(Math.random() * IMG_NUMBER);
  return ran;
}

function init() {
  const ran = genRandom();
  showBg(ran);
}

init();
