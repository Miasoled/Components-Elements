class MiHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700&family=DM+Sans:wght@400;500&display=swap');

        :host { display: block; }

        header {
          background: #042C53;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-family: 'DM Sans', sans-serif;
        }

        .logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none;
        }
        .logo-icon {
          width: 34px; height: 34px; background: #185FA5;
          border-radius: 10px; display: flex; align-items: center;
          justify-content: center; font-size: 17px;
        }
        .logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 18px; color: #E6F1FB; font-weight: 700;
        }
        .logo-text em { color: #85B7EB; font-style: italic; }

        nav { display: flex; align-items: center; gap: 2px; }

        nav a {
          color: rgba(255,255,255,0.65);
          text-decoration: none; font-size: 14px;
          font-weight: 400; padding: 7px 13px;
          border-radius: 8px; transition: color 0.2s, background 0.2s;
        }
        nav a:hover { color: #E6F1FB; background: rgba(255,255,255,0.07); }

        .nav-adopt {
          background: #185FA5; color: #E6F1FB !important;
          font-size: 13px; font-weight: 500;
          padding: 7px 16px; border-radius: 20px;
          margin-left: 6px; transition: background 0.2s;
        }
        .nav-adopt:hover { background: #0C447C !important; }
      </style>

      <header>
        <a class="logo" href="#/">
          <div class="logo-icon">🐾</div>
          <span class="logo-text">Blog <em>Gatuno</em></span>
        </a>
        <nav>
          <a href="#/">Inicio</a>
          <a href="#/galeria">Galería</a>
          <a href="#/blog">Blog</a>
          <a href="#/contacto">Contacto</a>
          <a href="#/adopcion" class="nav-adopt">Adopción</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("mi-header", MiHeader);
