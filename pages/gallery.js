class GaleriaImagenes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const elementos = [
      {
        src: "https://cdn.pixabay.com/photo/2015/06/09/09/36/sweet-803125_1280.jpg",
        titulo: "Mascota",
        descripcion: "Gatito Tierno",
      },
      {
        src: "https://cdn.pixabay.com/photo/2015/06/09/09/36/sweet-803125_1280.jpg",
        titulo: "Mascota",
        descripcion: "Gatito Tierno",
      },
      {
        src: "https://cdn.pixabay.com/photo/2015/06/09/09/36/sweet-803125_1280.jpg",
        titulo: "Mascota",
        descripcion: "Gatito Tierno",
      },
      {
        src: "https://cdn.pixabay.com/photo/2015/06/09/09/36/sweet-803125_1280.jpg",
        titulo: "Mascota",
        descripcion: "Gatito Tierno",
      },
      {
        src: "https://cdn.pixabay.com/photo/2015/06/09/09/36/sweet-803125_1280.jpg",
        titulo: "Mascota",
        descripcion: "Gatito Tierno",
      },
    ];

    this.shadowRoot.innerHTML = `

            <style>
                :host {
                    display: block;
                    padding: 20px
                }
                .galeria {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
                    gap: 25px;
                }
            </style>
            <div class="galeria">
                ${elementos
                  .map(
                    (elemento) => `
                        <mi-card 
                            src="${elemento.src}"
                            titulo="${elemento.titulo}"
                            descripcion="${elemento.descripcion}"
                        ></mi-card>
                    `,
                  )
                  .join("")}
            <div>
        `;
  }
}

customElements.define("galeria-imagenes", GaleriaImagenes);
