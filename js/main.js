let buson = document.querySelector("#buson");
let buson_carta_cerrada = document.querySelector("#buson_carta_cerrada");

buson.addEventListener("click", function(){
  buson_carta_cerrada.classList.toggle("hide");
  buson.classList.toggle("hide");
});
