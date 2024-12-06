document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
  });
  const toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
