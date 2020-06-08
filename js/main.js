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

// ---------------------- Services

let servicesBtns = document.querySelectorAll(".btn-services");
let servicesItems = document.querySelectorAll(".services__item");

for (let i = 0; i < servicesBtns.length; i++) {  
  servicesBtns[i].addEventListener("click", function (e) {
    e.preventDefault();

    // make corresponding button active
    for (let j = 0; j < servicesBtns.length; j++) {
      servicesBtns[j].classList.remove("btn-services--active");
      if (i === j) {
        servicesBtns[j].classList.add("btn-services--active");
      }
    }

    // show corresponding list item
    for (let j = 0; j < servicesItems.length; j++) {
      servicesItems[j].classList.remove("services__item--visible");
      if (i === j) {
        servicesItems[j].classList.add("services__item--visible");
      }
    }
  })
}
