const arr = [
  "💐",
  "💐",
  "🌹",
  "🌹",
  "🌻",
  "🌻",
  "🏵️",
  "🏵️",
  "🌺",
  "🌺",
  "🌴",
  "🌴",
  "🌈",
  "🌈",
  "🍓",
  "🍓",
];
let randomImg = arr.sort(() => (Math.random() > 0.5 ? 2 : -1));
//----------------------------------------------------Loopinam per paveikslelius----------------------------
for (let i = 0; i < arr.length; i++) {
  let box = document.createElement(`div`);
  box.className = `item`;
  box.innerText = randomImg[i];
  //--------------------------------------------------Match ir Remove------------------------------
  box.onclick = function () {
    this.classList.add(`openBox`);
    console.log(box);
    setTimeout(function () {
      if (document.querySelectorAll(`.openBox`).length > 1) {
        if (
          document.querySelectorAll(`.openBox`)[0].innerText ===
          document.querySelectorAll(`.openBox`)[1].innerText
        ) {
          //   console.log(document.querySelectorAll(`.openBox`));
          document.querySelectorAll(`.openBox`)[0].classList.add(`match`);
          document.querySelectorAll(`.openBox`)[1].classList.add(`match`);
          document
            .querySelectorAll(`.openBox`)
            .forEach((item) => item.classList.remove(`openBox`));

          if (document.querySelectorAll(`.match`).length == arr.length) {
            alert(`win`);
          }
        } else {
          document.querySelectorAll(`.openBox`)[1].classList.remove(`openBox`);
          document.querySelectorAll(`.openBox`)[0].classList.remove(`openBox`);
        }
      }
    }, 500);
  };

  document.querySelector(`.boardGame`).appendChild(box);
}
function myButton() {
  location.reload();
}
