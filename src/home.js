function loadHome() {
  const content = document.getElementById('content');
  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to My Restaurant';
  content.appendChild(headline);
}

export default loadHome;
