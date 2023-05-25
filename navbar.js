class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ``;
  }
}

customElements.define("navbar-full", Navbar);
