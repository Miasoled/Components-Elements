class BlogPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<h2> Personalizar esta page blogs </h2>";
  }
}
customElements.define("blog-page", BlogPage);
