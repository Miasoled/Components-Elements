class MiHome extends HTMLElement {
  constructor() {
    super();
    // indicando una funcion
    this.attachShadow({ mode: "open" });
  }
  //   agregar los elementos al dom
  connectedCallback() {
    //   sirve para insertar datos al dom
    this.shadowRoot.innerHTML = `
        <h2>Bienvenido a Home</h2>
   
    `;
  }
}

customElements.define("mi-home", MiHome);
