class MiHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }

        header {
          background: linear-gradient(135deg, #185FA5, #1E88E5);
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        h1 {
          color: white;
          font-size: 20px;
          letter-spacing: 0.8px;
          font-weight: 700;
        }

        nav {
          display: flex;
          gap: 8px;
        }

        nav a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.25s ease;
          position: relative;
        }

        nav a::after {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 4px;
          height: 2px;
          background: white;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
          border-radius: 2px;
        }

        nav a:hover::after {
          transform: scaleX(1);
        }
      </style>

      <header>
        <h1>Mi Blog</h1>
        <nav>
          <a href="#/">Inicio</a>
          <a href="#/galeria">Galería</a>
          <a href="#/blog">Blog</a>
          <a href="#/contacto">Contacto</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("mi-header", MiHeader);
