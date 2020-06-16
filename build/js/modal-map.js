"use strict";

var modalBg = document.querySelector(".modal-bg");
var mapModalVisibleClassName = "modal-container--visible";
var mapModalWindow = document.querySelector(".modal-map-js");
var mapOpenBtns = document.querySelectorAll(".contacts__map-link");
var mapCloseBtns = document.querySelectorAll(".modal-map__close-js");

if (mapModalWindow != null && mapOpenBtns != null && mapCloseBtns != null) {
  for (let openBtn of mapOpenBtns) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalBg.classList.add("modal-bg--visible");
      mapModalWindow.classList.add(mapModalVisibleClassName);
    });
  }

  for (let closeBtn of mapCloseBtns) {
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalBg.classList.remove("modal-bg--visible");
      mapModalWindow.classList.remove(mapModalVisibleClassName);
    });
  }

  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27 && mapModalWindow.classList.contains(mapModalVisibleClassName)) {
      e.preventDefault();
      modalBg.classList.remove("modal-bg--visible");
      mapModalWindow.classList.remove(mapModalVisibleClassName);
    }
  });
}
