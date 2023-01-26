const box = document.querySelector(".box");
let isShow = true;

setInterval(function () {
  isShow = !isShow;
  box.style.display = isShow ? "block" : "none";
}, 500);

const button = document.createElement("button");
document.body.appendChild(button);
