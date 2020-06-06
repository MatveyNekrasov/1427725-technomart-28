// ---------------------- Modals

function modalHandler(modalName, openBtnsName, closeBtnName) {
  const modalVisibleClassName = "modal-container--visible";
  let modalWindow = document.querySelector(modalName);
  let openBtns = document.querySelectorAll(openBtnsName);
  let closeBtn = document.querySelector(closeBtnName);

  if (modalWindow !== null && openBtns !== null && closeBtn != null) {
    for (let openBtn of openBtns) {
      openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modalWindow.classList.add(modalVisibleClassName);
      })
    }

    closeBtn.addEventListener("click", function (e) {
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
}

modalHandler(
  ".modal-basket-js",
  ".btn-buy",
  ".modal-basket__close-js");

modalHandler(
  ".modal-map-js",
  ".contacts__map-link",
  ".modal-map__close-js");

modalHandler(
  ".modal-writeus-js",
  ".contacts__btn-writeus",
  ".modal-writeus__close-js");
