class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <a href="index.html" class="navbar-brand d-block d-lg-none">
          <h1 class="text-primary fw-bold m-0">Shanchay</h1>
      </a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0">
              <a href="./index.html#home" class="nav-item nav-link active">Home</a>
              <a href="./index.html#about" class="nav-item nav-link">About</a>
              <a href="./index.html#skill" class="nav-item nav-link">Skills</a>
          </div>
          <a href="./index.html" class="navbar-brand  py-3 px-4 mx-3 d-none d-lg-block">
             
                  <img class="logo_img" src="img/Shanchay Logo.png" alt="">
             
          </a>
          <div class="navbar-nav me-auto py-0">
              <a href="./index.html#project" class="nav-item nav-link">Projects</a>
              <a href="./index.html#activity" class="nav-item nav-link">Activities</a>
              <a href="./index.html#contact" class="nav-item nav-link">Contact</a>
          </div>
      </div>
  </nav>`;
  }
}

customElements.define("navbar-full", Navbar);
