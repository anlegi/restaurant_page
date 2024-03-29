function loadMenu() {
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  const container = document.createElement("div");
  headline.textContent = "Menu";
  container.classList.add("info");
  content.appendChild(headline);
  content.appendChild(container);
}

export default loadMenu;
