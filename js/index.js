document.addEventListener("htmx:afterSwap", async (event) => {
  if (event.target.id === "testimonials") {
    const module = await import("./testimonials-slider.js");
    module.initTestimonialsSlider(); // Викликати функцію ініціалізації
  }
});