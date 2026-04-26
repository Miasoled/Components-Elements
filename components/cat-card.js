class CatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const src = this.getAttribute("src") || "";
    const nombre = this.getAttribute("nombre") || "Sin nombre";
    const info = this.getAttribute("info") || "";
    const desc = this.getAttribute("desc") || "";
    const disponible = this.getAttribute("disponible") !== "false";

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .card:hover { transform: translateY(-8px) scale(1.02); }
        .card img { width: 100%; height: 180px; object-fit: cover; }
        .badge {
          margin: 12px 15px 0;
          display: inline-block;
          font-size: 10px; font-weight: 500;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 3px 10px; border-radius: 10px;
        }
        .disponible { background: #EAF3DE; color: #3B6D11; }
        .reservado  { background: #FAEEDA; color: #854F0B; }
        .contenido { padding: 10px 15px 15px; }
        h3 { margin: 0 0 4px; font-size: 18px; color: #222; }
        .info { margin: 0 0 6px; font-size: 12px; color: #999; }
        p { margin: 0 0 12px; font-size: 14px; color: #666; }
        button {
          width: 100%; background: #185FA5; color: white;
          border: none; padding: 9px; border-radius: 8px;
          font-size: 13px; font-weight: 500; cursor: pointer;
        }
        button.reservado { background: #f0f0f0; color: #999; cursor: default; }
      </style>
      <div class="card">
        <img src="${src}" alt="${nombre}" />
        <span class="badge ${disponible ? "disponible" : "reservado"}">
          ${disponible ? "Disponible" : "Reservado"}
        </span>
        <div class="contenido">
          <h3>${nombre}</h3>
          <p class="info">${info}</p>
          <p>${desc}</p>
          <button
            class="${disponible ? "" : "reservado"}"
            ${disponible ? `onclick="location.hash='/contacto'"` : "disabled"}
          >${disponible ? "Quiero adoptarlo" : "Ya reservado"}</button>
        </div>
      </div>
    `;
  }
}
customElements.define("cat-card", CatCard);
