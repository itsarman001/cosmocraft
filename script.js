/* Header */
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="logo-container">
          <span class="logo-text">CosmoCraft</span>
        </div>
        <img src="img/ham-open.svg" class="ham" alt="Hamburger Menu" />
        
        <nav>
          <a href="#">Exploration</a>
          <a href="#">Mission Control</a>
          <a href="#">Launch Pricing</a>
          <a href="#">About the Cosmos</a>
          <a class="btn" href="#">Join the Crew</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("t-header", THeader);

/* hamburger */
const ham = document.querySelector(".ham");
const nav = document.querySelector("nav");
ham.addEventListener("click", toggle);
nav.addEventListener("click", toggle);
function toggle() {
  ham.src = ham.src.includes("img/ham-close.svg")
    ? "img/ham-open.svg"
    : "img/ham-close.svg";
  nav.classList.toggle("show");
}

/* Section */
class TSection extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");
    const imgSrc = this.getAttribute("imgSrc");
    const imgAltText = this.getAttribute("imgAltText");
    const reverseLayout = this.getAttribute("reverseLayout");
    const linkLabel = this.getAttribute("linkLabel");
    const linkPath = this.getAttribute("linkPath");

    this.innerHTML = `
    <section class="flex margin6 ${reverseLayout ? "reverse" : ""}">
        <div>
          <h2>${heading}</h2>
          <p>${details}</p>
          <a class="btn" href="${linkPath}">${linkLabel}</a>
        </div>
        <img src="${imgSrc}" alt="${imgAltText}"/>
      </section>
    `;
  }
}
customElements.define("t-section", TSection);

// main section
class TMainSection extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");

    this.innerHTML = `
      <div class="main-section">
        <h2>${heading}</h2>
        <p>${details}</p>
      </div>
    `;
  }
}
customElements.define("t-main-section", TMainSection);

// CTA
class TCTA extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");
    const linkLabel = this.getAttribute("linkLabel");
    const linkPath = this.getAttribute("linkPath");

    this.innerHTML = `
      <section class="center padding6">
        <h2>${heading}</h2>
        <p>${details}</p>
        <a href="${linkPath}" class="btn">${linkLabel}</a>
      </section>
    `;
  }
}
customElements.define("t-cta", TCTA);

// footer
class TFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer">
          <div class="footer-left">
            <div class="logo-container">
              <span class="logo-text">CosmoCraft</span>
            </div>
            <p>
              Charting the cosmos, decoding the unknown. <br />
              Space is big — we're making it make sense.
            </p>
          </div>
          
          <div class="footer-right">
            <div class="social-media-icons">
              <img src="img/icons8-github.svg" class="social-media" alt="GitHub" />
              <img src="img/icons8-linkedin.svg" class="social-media" alt="LinkedIn" />
              <img src="img/icons8-x.svg" class="social-media" alt="X / Twitter" />
              <img src="img/icons8-youtube.svg" class="social-media" alt="YouTube" />
            </div>
            <p>
              42 Galaxy Way, Sector 7G, Earth Orbit <br />
              +000-SPACE-420 <br />
              contact@deepspace.agency
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("t-footer", TFooter);
