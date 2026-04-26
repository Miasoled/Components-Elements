function router() {
  const app = document.getElementById("app");
  const path = window.location.hash;
  switch (path) {
    case "#/galeria":
      app.innerHTML = "<galeria-imagenes></galeria-imagenes>";
      break;
    case "#/contacto":
      app.innerHTML = "<contacto-page></contacto-page>";
      break;
    case "#/blog":
      app.innerHTML = "<blog-page></blog-page>";
      break;
    case "#/adopcion":
      app.innerHTML = "<adopcion-page></adopcion-page>";
      break;
    default:
      app.innerHTML = "<home-page></home-page>";
  }
}
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
  