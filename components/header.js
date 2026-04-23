class MiHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        header {
            background: #185FA5; 
            padding: 0 24px; 
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            height: 56px;
        }

        h1 {
            color:white;
        }

        nav a {
            color: white;
            margin: 0 12px;
            text-decoration: none;
            font-weight: 500;
            opacity: 0.9;
            transition: 0.2s;
        }

        nav a:hover {
            opacity: 1;
            border-bottom: 2px solid rgba(255, 255, 255, 0.7);
        }
      </style>
      <header>
        <h1>Mi Blog</h1>
        <nav>
          <a href='#/'>Inicio</a>
          <a href='#/galeria'>Galería</a>
          <a href='#/contacto'>Contacto</a>
          <a href='#/contacto'>Blog</a>
        </nav>
      </header>
    `;
  }
}
customElements.define("mi-header", MiHeader);
