const box = document.querySelector(".box");
let isShow = true;

setInterval(function () {
  isShow = !isShow;
  box.style.display = isShow ? "block" : "none";
}, 1000);
