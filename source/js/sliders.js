"use strict";

// ---------------------- Promo slider

let promoSliders = document.querySelectorAll(".promo-slider");
let promoKnobs = document.querySelectorAll(".promo-sliders__input");

// change slider by changing the radio item

for (let i = 0; i < promoKnobs.length; i++) {
  promoKnobs[i].addEventListener("change", function (e) {
    e.preventDefault();
    // show corresponding list item
    for (let j = 0; j < promoSliders.length; j++) {
      promoSliders[j].classList.remove("promo-slider--visible");
      if (j === i) {
        promoSliders[j].classList.add("promo-slider--visible");
      }
    }
  });
}

// change slider by clicking next/prev button

function slideButtonsHandler(buttonSelector, typePrevNext) {
  if (typePrevNext !== "prev" && typePrevNext !== "next")
    return;

  const promoBtn = document.querySelector(buttonSelector);
  if (promoBtn == null)
    return;

  promoBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let currentSlideNum = 0;

    for (let i = 0; i < promoKnobs.length; i++) {
      if (promoKnobs[i].checked) {
        currentSlideNum = i;
        break;
      }
    }

    if (typePrevNext === "prev" && currentSlideNum > 0) {
      currentSlideNum--;
      promoKnobs[currentSlideNum].checked = true;
    } else if (typePrevNext === "next" && currentSlideNum < promoKnobs.length - 1) {
      currentSlideNum++;
      promoKnobs[currentSlideNum].checked = true;
    }

    // show corresponding list item
    for (let j = 0; j < promoSliders.length; j++) {
      promoSliders[j].classList.remove("promo-slider--visible");
      if (j === currentSlideNum) {
        promoSliders[j].classList.add("promo-slider--visible");
      }
    }

  });
}

slideButtonsHandler(".promo-sliders__btn-prev", "prev");
slideButtonsHandler(".promo-sliders__btn-next", "next");

// ---------------------- Services slider

let servicesBtns = document.querySelectorAll(".btn-services");
let servicesItems = document.querySelectorAll(".services__item");

for (let i = 0; i < servicesBtns.length; i++) {
  servicesBtns[i].addEventListener("click", function (e) {
    e.preventDefault();

    // make corresponding button active
    for (let j = 0; j < servicesBtns.length; j++) {
      servicesBtns[j].classList.remove("btn-services--active");
      if (j === i) {
        servicesBtns[j].classList.add("btn-services--active");
      }
    }

    // show corresponding list item
    for (let j = 0; j < servicesItems.length; j++) {
      servicesItems[j].classList.remove("services__item--visible");
      if (j === i) {
        servicesItems[j].classList.add("services__item--visible");
      }
    }
  });
}
