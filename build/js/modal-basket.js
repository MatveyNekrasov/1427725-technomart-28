"use strict";

var modalBg = document.querySelector(".modal-bg");
var basketModalVisibleClassName = "modal-container--visible";
var basketModalWindow = document.querySelector(".modal-basket-js");
var basketOpenBtns = document.querySelectorAll(".btn-buy");
var basketCloseBtns = document.querySelectorAll(".modal-basket__close-js, .modal-basket__checkout, .modal-basket__continue");

if (basketModalWindow != null && basketOpenBtns != null && basketCloseBtns != null) {
  for (let openBtn of basketOpenBtns) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalBg.classList.add("modal-bg--visible");
      basketModalWindow.classList.add(basketModalVisibleClassName);
    });
  }

  for (let closeBtn of basketCloseBtns) {
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalBg.classList.remove("modal-bg--visible");
      basketModalWindow.classList.remove(basketModalVisibleClassName);
    });
  }

  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27 && basketModalWindow.classList.contains(basketModalVisibleClassName)) {
      e.preventDefault();
      modalBg.classList.remove("modal-bg--visible");
      basketModalWindow.classList.remove(basketModalVisibleClassName);
    }
  });
}
