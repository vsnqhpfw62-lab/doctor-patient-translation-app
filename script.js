document.addEventListener("DOMContentLoaded", () => {
  console.log("Doctor–Patient Translation App loaded");

  const demoLink = document.querySelector("a");
  if (demoLink) {
    demoLink.addEventListener("click", () => {
      console.log("Opening live demo");
    });
  }
});
