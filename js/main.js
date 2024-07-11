const order = document.querySelector(".order");
const btns = document.querySelector(".btns");
const successNotification = document.querySelector(".successNotification");
const notificationsContainer = document.querySelector(
  ".notificationsContainer"
);
const paidOrder = document.querySelector(".paidOrder");
const sentOrder = document.querySelector(".sentOrder");
const receivedOrder = document.querySelector(".receivedOrder");

function showBtn() {
  btns.classList.remove("hiddenBtns");
  btns.classList.add("showBtns");
}

function createNotification(classNameEl, h2Text, pText) {
  const elementNotification = document.createElement("div");
  elementNotification.classList.add(classNameEl);
  notificationsContainer.prepend(elementNotification);

  const checkOk = document.createElement("div");
  checkOk.classList.add("ok");
  elementNotification.append(checkOk);

  const img = document.createElement("img");
  img.setAttribute("src", "assets/check.png");
  checkOk.append(img);

  const notificationContainer = document.createElement("div");
  notificationContainer.classList.add("notificationContainer");
  elementNotification.append(notificationContainer);

  const notification = document.createElement("div");
  notification.classList.add("notification");
  notificationContainer.append(notification);

  const h2 = document.createElement("h2");
  h2.textContent = h2Text;
  const p = document.createElement("p");
  p.textContent = pText;
  notification.append(h2, p);

  const closedCreateOrder = document.createElement("div");
  closedCreateOrder.classList.add("closedCreateOrder");
  notificationContainer.append(closedCreateOrder);

  const span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "close";
  closedCreateOrder.append(span);
  closedNotification(elementNotification, closedCreateOrder, classNameEl);
}

function closedNotification(
  notificationElement,
  closedElement,
  removeClassName
) {
  closedElement.addEventListener("click", () => {
    notificationElement.classList.remove(removeClassName);
    notificationElement.classList.add("hiddenCreateOrder");
    setTimeout(() => {
      notificationElement.style.display = "none";
    }, 800);
  });
}

order.addEventListener("submit", (event) => {
  event.preventDefault();
  showBtn();
  createNotification(
    "successNotification",
    "Заказ создан",
    "Ожидайте дальнейшей информации"
  );
});

paidOrder.addEventListener("click", () => {
  createNotification("paidNotification", "Заказ оплачен", "Ожидайте отправки");
});

sentOrder.addEventListener("click", () => {
  createNotification("sentNotification", "Заказ отправлен", "Ожидайте курьера");
});

receivedOrder.addEventListener("click", () => {
  createNotification("receivedNotification", "Заказ получен", "Ждем вас снова");
});
//валидация - адрес - с большой буквы,латиница, минимальная цена максимальная цена только числа, получатель без спец символов и чисел
//создание карточки заказа, каждый заказ имеет свой статус,
//авторизация
//регистрация
//пагинация
//посмотреть мои заказы
//localstorsge
