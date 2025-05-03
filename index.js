document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // evita que cambie de página
    const contenido = e.target.getAttribute("data-content");
    document.getElementById("contenido").textContent = contenido;
  });
});

const links = document.querySelectorAll("nav a");
const contenido = document.getElementById("contenido");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const data = link.getAttribute("data-content");
    contenido.innerHTML = data; // ← usa innerHTML en lugar de textContent
  });
});
