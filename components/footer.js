class MiFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
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
        <p>© 2026 - Mi Sitio Web</p>
      </footer>
    `;
  }
}
customElements.define("mi-footer", MiFooter);
