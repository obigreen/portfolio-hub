(() => {
  "use strict";

  function initIngredientsSlider() {
    if (!document.querySelector(".swiper-block") || !window.Swiper) return;

    new window.Swiper(".swiper-block", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 650,
      effect: "slide",
      allowTouchMove: true,
      simulateTouch: true,
      threshold: 6,
      updateOnWindowResize: true,
      pagination: {
        el: ".swiper-pagination-horizontal",
        type: "bullets",
        clickable: true,
      },
    });
  }

  function initReviewModal() {
    const reviews = document.querySelectorAll(".review-preview");
    const popup = document.querySelector(".popup");
    const popupImage = document.querySelector(".popup-image");
    const popupText = document.querySelector(".popup-text");
    const closeButton = document.querySelector(".popup-close");
    let opener = null;

    if (!reviews.length || !popup || !popupImage || !popupText || !closeButton) {
      return;
    }

    const closePopup = () => {
      popup.classList.remove("active");
      popup.setAttribute("aria-hidden", "true");
      opener?.focus();
    };

    reviews.forEach((review) => {
      review.addEventListener("click", () => {
        opener = review;
        popupImage.src = review.dataset.imageLarge;
        popupImage.alt = `Résultat de ${review.querySelector(".title").textContent.trim()}`;
        popupText.textContent = review.dataset.text;
        popup.classList.add("active");
        popup.setAttribute("aria-hidden", "false");
        closeButton.focus();
      });
    });

    closeButton.addEventListener("click", closePopup);
    closeButton.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        closePopup();
      }
    });

    popup.addEventListener("click", (event) => {
      if (event.target === popup) closePopup();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && popup.classList.contains("active")) {
        closePopup();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initIngredientsSlider();
    initReviewModal();
  });
})();
