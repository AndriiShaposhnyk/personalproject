export function initTestimonialsSlider() {
  const testimonialsSlider = document.querySelector(".testimonials__slider");
  if (!testimonialsSlider) return;

  const cards = testimonialsSlider.querySelectorAll(".testimonials__card");
  const leftArrow = testimonialsSlider.querySelector(".testimonials__arrow--left");
  const rightArrow = testimonialsSlider.querySelector(".testimonials__arrow--right");

  let currentIndex = Array.from(cards).findIndex(card =>
    card.classList.contains("testimonials__card--active")
  );

  const showCard = (index) => {
    cards.forEach(card => card.classList.remove("testimonials__card--active"));
    cards[index].classList.add("testimonials__card--active");
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  };

  rightArrow.addEventListener("click", showNext);
  leftArrow.addEventListener("click", showPrev);
}