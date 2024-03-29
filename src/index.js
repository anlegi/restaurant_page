import loadHome from "./home"
import loadMenu from "./menu"
import loadContact from "./contact"
import "./style.css"

document.addEventListener("DOMContentLoaded", () => {
  loadHome();
})

document.getElementById("homeBtn").addEventListener("click", () => {
  clearContent();
  loadHome();
})


function clearContent() {
  document.getElementById('content').innerHTML = '';
}


document.getElementById("menuBtn").addEventListener("click", () => {
  clearContent();
  loadMenu();
})


document.getElementById("contactBtn").addEventListener("click", () => {
  clearContent();
  loadContact();
})


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      buttons.forEach(button => button.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
