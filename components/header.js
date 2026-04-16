class MiHeader extends HTMLElement {
  constructor() {
    super();
    // indicando una funcion
    this.attachShadow({ mode: "open" });
  }
  //   agregar los elementos al dom
  connectedCallback() {
    //   sirve para insertar datos al dom
    this.shadowRoot.innerHTML = `
    <style>
        header {
            background: #000;
            color: white;
            padding: 15px;
            text-align: center;
        }
        
        h1{
            margin-top: 0%
        }

        a {
            color: white;
            margin: 0 10px; 
            text-decoration: none;
            font-weight: bold;
        }

        nav a:hover {
            text-decoration: underlin;
        }
    </style>
     <header>
        <h1>Aplicación de Galería</h1>
        <nav>
            <a href="#">Inicio</a>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Dirección</a>
        </nav>
     </header>
    `;
  }
}

customElements.define("mi-header", MiHeader);
