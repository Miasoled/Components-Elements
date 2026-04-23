class MiFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        footer { 
            background:#222; 
            color:white; 
            text-align:center; 
            padding:15px; 
            margin-top:20px; 
        }
      </style>
      <footer><p>© 2026 - Mi Sitio Web</p></footer>
    `;
  }
}
customElements.define("mi-footer", MiFooter);
