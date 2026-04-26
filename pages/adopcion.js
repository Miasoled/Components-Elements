class AdopcionPage extends HTMLElement {
  connectedCallback() {
    const gatos = [
      {
        src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
        nombre: "Luna",
        info: "Hembra · 8 meses · Mestiza",
        desc: "Gatita curiosa y llena de energía. Le encanta trepar y acurrucarse.",
        disponible: "true",
      },
      {
        src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400",
        nombre: "Miso",
        info: "Macho · 2 años · Atigrado",
        desc: "Perfecto para un hogar tranquilo donde pueda observar y descansar.",
        disponible: "true",
      },
      {
        src: "https://i.pinimg.com/736x/49/6c/9d/496c9d566862735ef8b75caeb8042703.jpg",
        nombre: "Canela",
        info: "Hembra · 4 meses · Naranja",
        desc: "Una bola de energía con mucho amor para dar.",
        disponible: "false",
      },
      {
        src: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400",
        nombre: "Nube",
        info: "Macho · 1 año · Blanco",
        desc: "El compañero ideal para alguien que busca calma.",
        disponible: "true",
      },
      {
        src: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400",
        nombre: "Oreo",
        info: "Macho · 6 meses · Blanco y negro",
        desc: "Se lleva genial con perros y adora explorar cada rincón.",
        disponible: "true",
      },
      {
        src: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400",
        nombre: "Mochi",
        info: "Hembra · 3 años · Gris",
        desc: "Gatita madura y cariñosa. Perfecta para familias con niños.",
        disponible: "false",
      },
    ];

    this.innerHTML = `
      <style>
        adopcion-page { display: block; max-width: 960px; margin: 0 auto; padding: 32px 20px; font-family: system-ui, sans-serif; }
        h2 { text-align: center; color: #042C53; font-size: 28px; margin: 0 0 6px; }
        .sub { text-align: center; color: #378ADD; font-size: 14px; margin: 0 0 28px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
      </style>

      <h2>Adopta un gatito ฅ</h2>
      <p class="sub">Cada gatito merece un hogar lleno de amor. ¿Podrías ser su familia?</p>

      <div class="grid">
        ${gatos
          .map(
            (g) => `
          <cat-card
            src="${g.src}"
            nombre="${g.nombre}"
            info="${g.info}"
            desc="${g.desc}"
            disponible="${g.disponible}"
          ></cat-card>
        `,
          )
          .join("")}
      </div>
    `;
  }
}
customElements.define("adopcion-page", AdopcionPage);
