const order = document.querySelector(".order");
const successNotification = document.querySelector(".successNotification");
const notificationsContainer = document.querySelector(
  ".notificationsContainer"
);
const inputAdress = document.querySelector(".adress");
const inputPrise = document.querySelector(".prise");
const inputRecipient = document.querySelector(".recipient");

const labelAdress = document.querySelector(".labelAdress");
const labelPreis = document.querySelector(".labelPreis");
const labelRecipient = document.querySelector(".labelRecipient");

const errorAdress = document.createElement("p");
const errorPreise = document.createElement("p");
const errorRecipient = document.createElement("p");

const message = document.createElement("p");

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
  order.append(message);
  if (
    inputAdress.value !== "" &&
    inputPrise.value !== "" &&
    inputRecipient.value !== "" &&
    errorAdress.textContent === "" &&
    errorPreise.textContent === "" &&
    errorRecipient.textContent === ""
  ) {
    createCard();
    createNotification(
      "successNotification",
      "Заказ создан",
      "Ожидайте дальнейшей информации"
    );
    inputAdress.value = "";
    inputPrise.value = "";
    inputRecipient.value = "";
    message.style.color = "green";
    message.textContent = "Ваш заказ успешно отправлен";
  } else {
    message.style.color = "red";
    message.textContent = "Пожалуйста заполните правильно все поля";
  }
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

function validationAdress() {
  labelAdress.append(errorAdress);
  if (inputAdress.value === "") {
    errorAdress.textContent = "";
    errorAdress.remove();
  }
  if (inputAdress.value.length <= 10) {
    errorAdress.textContent = "Поле адресс не может быть меньше 10 символов";
  } else if (inputAdress.value[0] !== inputAdress.value[0].toUpperCase()) {
    errorAdress.textContent = "Первая буква адреса должна быть заглавная";
  } else {
    errorAdress.textContent = "";
    errorAdress.remove();
  }
}

inputAdress.addEventListener("input", () => {
  validationAdress();
});

function validationPrise() {
  labelPreis.append(errorPreise);
  if (inputPrise.value === "") {
    errorPreise.textContent = "";
    errorPreise.remove();
  }

  if (isNaN(Number(inputPrise.value))) {
    errorPreise.textContent = "Цена должна быть числом";
  } else if (!isNaN(Number(inputPrise.value)) && inputPrise.value < 2) {
    errorPreise.textContent = "Цена должна быть больше 2";
  } else {
    errorPreise.textContent = "";
    errorPreise.remove();
  }
}

inputPrise.addEventListener("input", () => {
  validationPrise();
});

function validationRecipient() {
  if (inputRecipient.value === "") {
    errorRecipient.textContent = "";
    errorRecipient.remove();
  }

  labelRecipient.append(errorRecipient);
  const regex = /\d/;
  if (inputRecipient.value.length <= 2) {
    errorRecipient.textContent = "Имя не может быть короче 2-х символов";
  } else if (regex.test(inputRecipient.value)) {
    errorRecipient.textContent = "Имя получателя не должно содержать цифры";
  } else {
    errorRecipient.textContent = "";
    errorRecipient.remove();
  }
}

inputRecipient.addEventListener("input", () => {
  validationRecipient();
});
