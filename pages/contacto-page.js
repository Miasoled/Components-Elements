class ContactoPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <style>
  contacto-page { display: block; max-width: 780px; margin: 48px auto; }
  h2 { color: #185FA5; font-weight: 500; margin-bottom: 16px; }
  .container { display: flex; gap: 24px; border: 1px dashed #185FA5; border-radius: 8px; padding: 24px; align-items: center; }
  .img-side { flex: 1; border: 1px dashed #185FA5; background: #E6F1FB; border-radius: 6px; min-height: 220px; display: flex; align-items: center; justify-content: center; color: #378ADD; font-size: 13px; }
  .form-side { flex: 1; display: flex; flex-direction: column; }
  input, textarea { padding: 10px 12px; margin-bottom: 12px; border: 1px solid #B5D4F4; border-radius: 6px; font-size: 14px; box-sizing: border-box; outline: none; transition: border 0.2s; }
  input:focus, textarea:focus { border-color: #185FA5; }
  textarea { height: 100px; resize: vertical; }
  button { background: #185FA5; color: #E6F1FB; border: none; padding: 10px 24px; border-radius: 6px; font-size: 14px; cursor: pointer; transition: background 0.2s; align-self: flex-start; }
  button:hover { background: #0C447C; }
  .img-web { width:70%; height:70%; object-fit:cover; border-radius:6px;}
  p { color: #378ADD; font-size: 14px; margin-bottom: 12px; }
</style>

<h2>Contacto</h2>
<div class="container">
  <div class="img-side">
    <img class="img-web" src="./img/contacto-web.jpg" alt="Contacto" />
  </div>
  <div class="form-side">
    <p>Nos pondremos en contacto contigo pronto.</p>
    <input type="text" placeholder="Nombre" />
    <input type="email" placeholder="Correo electrónico" />
    <textarea placeholder="Mensaje"></textarea>
    <button>Enviar</button>
  </div>
</div>
    `;
  }
}
customElements.define("contacto-page", ContactoPage);
