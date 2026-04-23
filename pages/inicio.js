class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<h2> Personalizar esta page </h2>";
  }
}
customElements.define("home-page", HomePage);
