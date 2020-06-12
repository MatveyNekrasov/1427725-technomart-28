"use strict";

var modalBg = document.querySelector(".modal-bg");
var writeusSection = document.querySelector(".modal-writeus-js");
var writeusForm = writeusSection.querySelector(".modal-writeus-form-js");
var writeusNameInput = writeusSection.querySelector(".modal-writeus-name-js");
var writeusEmailInput = writeusSection.querySelector(".modal-writeus-email-js");
var writeusTextInput = writeusSection.querySelector(".modal-writeus-text-js");
var writeusOpenBtn = document.querySelector(".contacts__btn-writeus");
var writeusCloseBtn = writeusSection.querySelector(".modal-writeus-close-js");

var isStorageSupport = true;
try {
  localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

writeusOpenBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modalBg.classList.add("modal-bg--visible");
  writeusSection.classList.add("modal-container--visible");

  if (isStorageSupport) {
    writeusNameInput.value = localStorage.getItem("login");
    writeusEmailInput.value = localStorage.getItem("email");
  }
  writeusNameInput.focus();
  if (writeusNameInput.value) {
    writeusEmailInput.focus();
    if (writeusEmailInput.value) {
      writeusTextInput.focus();
    }
  }
});

writeusForm.addEventListener("submit", function (e) {
  if (!writeusNameInput.value || !writeusEmailInput.value) {
    e.preventDefault();
    writeusSection.classList.remove("modal-container--shake");
    writeusForm.offsetWidth; // access the property to trigger a reflow
    writeusSection.classList.add("modal-container--shake");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", writeusNameInput.value);
      localStorage.setItem("email", writeusEmailInput.value);
    }
  }
});

// press window close
writeusCloseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  writeusSection.classList.remove("modal-container--visible");
  writeusSection.classList.remove("modal-container--shake");
  modalBg.classList.remove("modal-bg--visible");
});

// press esc
window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27 && writeusSection.classList.contains("modal-container--visible")) {
    e.preventDefault();
    writeusSection.classList.remove("modal-container--visible");
    writeusSection.classList.remove("modal-container--shake");
    modalBg.classList.remove("modal-bg--visible");
  }
});
