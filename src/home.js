function loadHome() {
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  const container = document.createElement("div")
  container.classList.add("info")
  headline.textContent = "Welcome to My Restaurant";
  content.appendChild(headline);
  content.appendChild(container)
}

export default loadHome;
