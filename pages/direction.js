class MiDirection extends HTMLElement {
  constructor() {
    super();
    // indicando una funcion
    this.attachShadow({ mode: "open" });
  }
  //   agregar los elementos al dom
  connectedCallback() {
    //   sirve para insertar datos al dom
    this.shadowRoot.innerHTML = `
        <h2>Dirección</h2>
    `;
  }
}

customElements.define("mi-direction", MiDirection);
