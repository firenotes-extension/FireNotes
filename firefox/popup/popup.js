document.addEventListener("DOMContentLoaded", function () {
  const openWindowButton = document.getElementById("openWindowButton");
  const curtain = document.getElementById("curtain");

  curtain.classList.add("fade-out");

  openWindowButton.textContent = browser.i18n.getMessage("externWindow");

  openWindowButton.addEventListener("click", function () {
    window.open("editor/index.html", "FireNotes", "width=800,height=600");
  });
});