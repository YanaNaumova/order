const order = document.querySelector(".order");
const btns = document.querySelector(".btns");

order.addEventListener("click", (event) => {
  event.preventDefault();
  btns.classList.remove("hiddenBtns");
  btns.classList.add("showBtns");
});
