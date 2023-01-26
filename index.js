// version number = 0.0.2

const toggleItem = document.querySelectorAll(".toggle");

const toggleFn = (item, interval, text) => {
  console.log(interval);
  let isShow = true;

  setInterval(function () {
    isShow = !isShow;
    item.style.display = isShow ? "block" : "none";
    item.innerHTML = text;
  }, interval);
};

toggleItem.forEach((item) => {
  const dataInterval = parseInt(item.getAttribute("data-interval"));
  const dataText = item.getAttribute("data-text");
  if (dataInterval && dataInterval > 0) {
    toggleFn(item, dataInterval, dataText);
  }
});
