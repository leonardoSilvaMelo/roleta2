let container = document.querySelector(".container-spin");
let btn = document.getElementById("spin-btn");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  container.style.transition = "3s";
  number += Math.ceil(Math.random() * 1000);
};
