const start = document.querySelector(".start"),
  btn = document.querySelector(".btn"),
  input = document.querySelector(".input"),
  num = document.querySelector(".number"),
  msg = document.querySelector(".message"),
  bingo = Math.round(Math.random() * 100),
  num_area = document.querySelector(".num-area");
let count = 1;

num.textContent = bingo;

start.addEventListener("click", function () {
  let round = +input.value;

  console.log(count);
  if (round === bingo) {
    msg.style.color = "#119644";
    num_area.style.backgroundColor = "#fafd4d";
    // num_area.textContent = "";
    num.style.display = "block";

    msg.textContent = "You found the number by " + count + " times!!!";
  } else if (round > bingo) {
    msg.textContent = "Too high";
    count += 1;
  } else if (round < bingo) {
    msg.textContent = "Too low";
    count += 1;
  }
});
