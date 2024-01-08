function validate() {
  if (!cardName.value) {
    cardName.focus();
    cardName.style.borderColor = "red";
    return false;
  } else {
    cardName.style.borderColor = "green";
  }

  if (!cardName.value.trim()) {
    cardName.value = "";
    alert("Probellardan iborat bo'lishi mumkin emas!!");
    cardName.focus();
    cardName.style.borderColor = "red";
    return false;
  } else {
    cardName.style.borderColor = "green";
  }
  if (cardName.value.length <= 4) {
    alert("Ishoralar soni 4 tadan kam bo'lishi mumkin emas!!!");
    cardName.value = "";
    cardName.focus();
    cardName.style.borderColor = "red";
    return false;
  } else {
    cardName.style.borderColor = "green";
  }

  // dasc
  if (!desc.value) {
    desc.focus();
    desc.style.borderColor = "red";
    return false;
  } else {
    desc.style.borderColor = "Green";
  }
  if (!desc.value.trim()) {
    desc.value = "";
    alert("Probellardan iborat bo'lishi mumkin emas!!");
    desc.focus();
    desc.style.borderColor = "red";
    return false;
  } else {
    desc.style.borderColor = "green";
  }
  if (desc.value.length <= 4 || desc.value.length >= 100) {
    alert(
      "Ishoralar soni 4 tadan kam bo'lishi  yoki 50 tadan ko'p mumkin emas!!!"
    );
    desc.value = "";
    desc.focus();
    desc.style.borderColor = "red";
    return false;
  } else {
    desc.style.borderColor = "green";
  }

  if (!img.value) {
    img.focus();
    img.style.borderColor = "red";
    return false;
  } else {
    img.style.borderColor = "Green";
  }
  if (!img.value.trim()) {
    img.value = "";
    alert("Probellardan iborat bo'lishi mumkin emas!!");
    img.focus();
    img.style.borderColor = "red";
    return false;
  } else {
    img.style.borderColor = "green";
  }
  if (img.value.length <= 4) {
    alert("Ishoralar soni 4 tadan kam bo'lishi mumkin emas!!!");
    img.value = "";
    img.focus();
    img.style.borderColor = "red";
    return false;
  } else {
    img.style.borderColor = "green";
  }

  if (img.value.slice(0, 8) !== "https://" && img.value.length <= 15) {
    alert("Siz notog'ri link yubordingiz iltimos qaytadan urinib ko'ring...");
    img.value = "";
    img.focus();
    return false;
  }
  return true;
}
function clear() {
  cardName.value = "";
  desc.value = "";
  img.value = "";
}
function getInfo() {
  let usersInfo = [];
  if (localStorage.getItem("info")) {
    usersInfo = JSON.parse(localStorage.getItem("info"));
  }
  return usersInfo;
}
function creator(element) {
  return `
    <div data-id="id__${element.id}"  class="grid__item">
        <div class="card">
          <img
            class="card__img"
            src="${element.img}"
             alt="Snowy Mountains" width="350" height="233"
          />
          <div class="card__content">
            <h1 id="cardName" class="card__header">${element.name}</h1>
            <p class="card__text">
            ${element.desc}
            </p>
            <button id="Delete" class="card__btn">Delete</button>
          </div>
        </div>
      </div>
  `;
}

export { creator, validate, clear, getInfo };
