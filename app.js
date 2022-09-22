const btn = document.querySelectorAll(".btn__play");
let char = "X";
let turno = 0;

btn.forEach((element) => {
  element.addEventListener("click", (e, i) => {
    comprobarGanador(e, i);
    marcarCasilla(e);
    addColor(e);
});
});

function marcarCasilla(e) {
  const target = e.target;
  if (target.innerHTML === "") {
    target.innerHTML += char;

    char = char === "X" ? "O" : "X";
  }
}

function addColor(e) {
  turno++;
  const btn = e.target;

  btn.style.backgroundColor = turno % 2 ? "green" : "red";
}

function comprobarGanador(e, i) {
  console.log(e.target);
}
