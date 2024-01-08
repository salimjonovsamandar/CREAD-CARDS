import { creator, validate, clear, getInfo } from "./function.js";

const cardName = document.getElementById("cardName");
const desc = document.getElementById("desc");
const img = document.getElementById("img");
const btn = document.getElementById("btn");
const cread_card = document.querySelector(".cread_card");

btn &&
  btn.addEventListener("click", function () {
    if (validate()) {
      let info = {
        name: cardName.value,
        desc: desc.value,
        img: img.value,
        id: Date.now(),
      };
      clear();
      let card = creator(info);
      cread_card.innerHTML += card;

      let storageInfo = getInfo();
      storageInfo.push(info);
      localStorage.setItem("info", JSON.stringify(storageInfo));
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  let storageInfo = getInfo();
  storageInfo.forEach((element) => {
    let card = creator(element);
    cread_card.innerHTML += card;
  });
});
