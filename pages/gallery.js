class GaleriaImagenes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const elementos = [
      {
        src: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
        titulo: "Mascota",
        descripcion: "Gatito Tierno",
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
        titulo: "Mascota",
        descripcion: "Gatito Tierno",
      },
      {
        src: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
        titulo: "Mascota",
        descripcion: "Gatito Tierno",
      },
      {
        src: "https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_1280.jpg",
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
