const order = document.querySelector(".order");
const successNotification = document.querySelector(".successNotification");
const notificationsContainer = document.querySelector(
  ".notificationsContainer"
);
const inputAdress = document.querySelector(".adress");
const inputPrise = document.querySelector(".prise");
const inputRecipient = document.querySelector(".recipient");

const cards = document.querySelector(".cards");

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
  createCard();
  createNotification(
    "successNotification",
    "Заказ создан",
    "Ожидайте дальнейшей информации"
  );
  inputAdress.value = "";
  inputPrise.value = "";
  inputRecipient.value = "";
});

function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.append(card);

  const adress = document.createElement("p");
  adress.textContent = `Adress: ${inputAdress.value}`;

  const preis = document.createElement("p");
  preis.textContent = `Preis: ${inputPrise.value}`;

  const recipient = document.createElement("p");
  recipient.textContent = `Recipient: ${inputRecipient.value}`;

  const status = document.createElement("p");

  card.append(adress, preis, recipient, status);

  const btns = document.createElement("div");
  btns.classList.add("btns");
  card.append(btns);

  const paidOrderBtn = document.createElement("button");
  paidOrderBtn.classList.add("paidOrder");
  paidOrderBtn.textContent = "Оплатить";

  const sentOrderBtn = document.createElement("button");
  sentOrderBtn.classList.add("sentOrder");
  sentOrderBtn.textContent = "Отправить";

  const receivedOrderBtn = document.createElement("button");
  receivedOrderBtn.classList.add("receivedOrder");
  receivedOrderBtn.textContent = "Получить";

  showNotification(paidOrderBtn, sentOrderBtn, receivedOrderBtn, status);
  btns.append(paidOrderBtn, sentOrderBtn, receivedOrderBtn);
}

function showNotification(btn1, btn2, btn3, statusElement) {
  statusElement.textContent = "Заказ создан";
  btn1.addEventListener("click", () => {
    createNotification(
      "paidNotification",
      "Заказ оплачен",
      "Ожидайте отправки"
    );
    statusElement.textContent = "Заказ оплачен";
  });

  btn2.addEventListener("click", () => {
    createNotification(
      "sentNotification",
      "Заказ отправлен",
      "Ожидайте курьера"
    );
    statusElement.textContent = "Заказ отправлен";
  });

  btn3.addEventListener("click", () => {
    createNotification(
      "receivedNotification",
      "Заказ получен",
      "Ждем вас снова"
    );
    statusElement.textContent = "Заказ получен";
  });
}

//валидация - адрес - с большой буквы,латиница, минимальная цена максимальная цена только числа, получатель без спец символов и чисел
