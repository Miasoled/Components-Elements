class MiFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #042C53;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 40px 32px 24px;
          font-family: 'DM Sans', sans-serif;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 20px; 
          display: flex;
          align-items: center; 
          justify-content: space-between;
        }
        .footer-bottom p, .footer-bottom span {
          font-size: 12px; 
          color: rgba(255,255,255,0.35); 
        }
      </style>

      <footer>
        <div class="footer-bottom">
          <p>© 2026 Blog Gatuno · Todos los derechos reservados</p>
          <span>Hecho con <span class="heart">♥</span> para los amantes de los gatos</span>
        </div>
      </footer>
    `;
  }
}
customElements.define("mi-footer", MiFooter);
