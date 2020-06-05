console.log("Привет фром main.js");

// ---------------------- Modals

function handleModal(modalName, openBtnName, closeBtnName) {
  return 0;
}

const modalVisibleClassName = "modal-window--visible";

let modalWindow = document.querySelector(".modal-basket");
let openBtn = document.querySelector(".btn-buy");
let closeBtn = document.querySelector(".modal-basket__close");

if (modalWindow !== null && openBtn !== null && closeBtn != null) {
  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modalWindow.classList.add(modalVisibleClassName);
  });

  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modalWindow.classList.remove(modalVisibleClassName);
  });

  modalWindow.addEventListener("click", function (e) {
    e.preventDefault();
    modalWindow.classList.remove(modalVisibleClassName);
  });

  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27 && modalWindow.classList.contains(modalVisibleClassName)) {
      e.preventDefault();
      modalWindow.classList.remove(modalVisibleClassName);
    }
  })



}
