// version number = 0.0.1

const toggleItem = document.querySelectorAll(".toggle");

const toggleFn = (item, interval) => {
  console.log(interval);
  let isShow = true;

  setInterval(function () {
    isShow = !isShow;
    item.style.display = isShow ? "block" : "none";
  }, interval);
};

toggleItem.forEach((item) => {
  const dataInterval = parseInt(item.getAttribute("data-interval"));
  if (dataInterval && dataInterval > 0) {
    toggleFn(item, dataInterval);
  }
});
