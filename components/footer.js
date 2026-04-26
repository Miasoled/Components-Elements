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
        footer { 
            background: linear-gradient(135deg, #185FA5, #136cbb); 
            color:white; 
            text-align:center; 
            padding:15px; 
            margin-top:20px;
            box-shadow: 0 -4px 15px rgba(0,0,0,0.15);
            font-family: system-ui, sans-serif;
        }

        p{
          margin:0;
          font-size:14px;
          opacity:0.95;
        }
      </style>

      <footer>
        <div class="footer-bottom">
          <p>© 2026 Blog Gatuno · Todos los derechos reservados</p>
          <span>Hecho con <span class="heart">♥</span> para los amantes de los gatos</span>
        </div>
        <p>© 2026 - Mi Sitio Web</p>
      </footer>
    `;
  }
}
customElements.define("mi-footer", MiFooter);
