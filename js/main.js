// ---------------------- Modals

function modalHandler(modalName, openBtnsName, closeBtnsName) {
  const modalVisibleClassName = "modal-container--visible";
  let modalWindow = document.querySelector(modalName);
  let openBtns = document.querySelectorAll(openBtnsName);
  let closeBtns = document.querySelectorAll(closeBtnsName);

  if (modalWindow !== null && openBtns !== null && closeBtns != null) {
    for (let openBtn of openBtns) {
      openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modalWindow.classList.add(modalVisibleClassName);
      })
    }

    for (let closeBtn of closeBtns) {
      closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modalWindow.classList.remove(modalVisibleClassName);
      })
    }

    window.addEventListener("keydown", function (e) {
      if (e.keyCode === 27 && modalWindow.classList.contains(modalVisibleClassName)) {
        e.preventDefault();
        modalWindow.classList.remove(modalVisibleClassName);
      }
    })
  }
}

// basket
modalHandler(
  ".modal-basket-js",
  ".btn-buy",
  ".modal-basket__close-js, .modal-basket__checkout, .modal-basket__continue");

// map
modalHandler(
  ".modal-map-js",
  ".contacts__map-link",
  ".modal-map__close-js");

// write us
modalHandler(
  ".modal-writeus-js",
  ".contacts__btn-writeus",
  ".modal-writeus__close-js");
