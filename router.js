//funcion de flecha
const router = () => {
  const app = document.getElementById("app");
  const path = window.location.hash;

  switch (path) {
    case "#/gallery":
      app.innerHTML = `<galeria-imagenes></galeria-imagenes>`;
      break;
    case "#/direction":
      app.innerHTML = `<mi-direction></mi-direction>`;
      break;
    default:
      app.innerHTML = `<mi-home></mi-home>`;
      break;
  }
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
