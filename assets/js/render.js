const data = JSON.parse(document.getElementById('content-data').textContent)

/*=============== NAV ===============*/
const nav = document.getElementById('nav')
nav.innerHTML = `
  <a href="#" class="nav__logo">${data.nav.logo}</a>
  <div class="nav__menu" id="nav-menu">
    <ul class="nav__list">
      ${data.nav.links.map((l, i) => `
        <li class="nav__item"><a href="${l.href}" class="nav__link${i === 0 ? ' active-link' : ''}">${l.label}</a></li>
      `).join('')}
    </ul>
    <div class="nav__close" id="nav-close"><i class="ri-close-line"></i></div>
  </div>
  <div class="nav__toggle" id="nav-toggle"><i class="ri-menu-line"></i></div>
`

/*=============== HOME ===============*/
const home = document.getElementById('home')
home.innerHTML = `
  <div class="home__container container grid">
    <div class="home__content">
      <div class="home__data">
        <h3 class="home__subtitle">${data.home.subtitle}</h3>
        <h1 class="home__title">${data.home.title}</h1>
        <h3 class="home__education">${data.home.education}</h3>
        <p class="home__description">${data.home.description}</p>
        <a href="#contact" class="button">${data.home.button}</a>
      </div>
      <div class="home__social">
        ${data.home.social.map(s => `
          <a href="${s.url}" target="_blank" class="home__social-link" aria-label="${s.label}">
            <i class="${s.icon}"></i>
          </a>
        `).join('')}
      </div>
    </div>
    <div class="home__image">
      <svg class="home__blob" viewBox="0 0 550 591" xmlns="http://www.w3.org/2000/svg">
        <mask id="maskBlob" mask-type="alpha">
          <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>
        </mask>
        <g mask="url(#maskBlob)">
          <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>
          <rect x="37" width="476" height="630" fill="url(#pattern0)"/>
        </g>
        <rect x="37" width="476" height="300" fill="url(#pattern1)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"/>
          </pattern>
          <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"/>
          </pattern>
          <image class="home__img" id="imageBlob" width="640" height="925" href="${data.home.image}"/>
        </defs>
      </svg>
    </div>
  </div>
`

/*=============== ABOUT ===============*/
const about = document.getElementById('about')
about.innerHTML = `
  <div class="about__container container grid">
    <div class="about__data">
      <h3 class="section__subtitle">${data.about.subtitle}</h3>
      <h2 class="section__title">${data.about.title}</h2>
      <p class="about__description">${data.about.description}</p>
      <a href="#contact" class="button">${data.about.button}</a>
    </div>
    <div class="about__image">
      <svg class="about__blob" viewBox="0 0 550 592" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="maskBorder" mask-type="alpha">
          <path d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157 171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157 448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609 270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843 439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z" fill="black"/>
        </mask>
        <g mask="url(#maskBorder)">
          <rect x="37" width="476" height="630" fill="url(#pattern2)"/>
          <path d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157 192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285 580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641 40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843 175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z" stroke="black" stroke-width="10"/>
        </g>
        <rect x="37" width="476" height="300" fill="url(#pattern3)"/>
        <defs>
          <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#imageBorder" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"/>
          </pattern>
          <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#imageBorder" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"/>
          </pattern>
          <image class="about__img" id="imageBorder" width="640" height="940" href="${data.home.image}"/>
        </defs>
      </svg>
    </div>
  </div>
`

/*=============== SKILLS ===============*/
const skills = document.getElementById('skills')
skills.innerHTML = `
  <div class="skills__container container grid">
    <div class="skills__data">
      <h3 class="section__subtitle">${data.skills.subtitle}</h3>
      <h2 class="section__title">${data.skills.title}</h2>
      <p class="skills__description">${data.skills.description}</p>
      <a href="#projects" class="button">See Projects</a>
    </div>
    <div class="skills__content">
      ${data.skills.groups.map((group, i) => `
        <ol class="skills__group" ${i > 0 ? `start="${data.skills.groups[0].length + 1}"` : ''}>
          ${group.map(s => `<li class="skills__item">${s}</li>`).join('')}
        </ol>
      `).join('')}
    </div>
  </div>
`

/*=============== SERVICES ===============*/
const services = document.getElementById('services')
services.innerHTML = `
  <h3 class="section__subtitle">My <span>Services</span></h3>
  <h2 class="section__title">What I Do</h2>
  <div class="services__container container grid">
    ${data.services.map(s => `
      <article class="services__card">
        <i class="${s.icon} services__icon"></i>
        <h2 class="services__title">${s.title}</h2>
        <p class="services__description">${s.description}</p>
      </article>
    `).join('')}
  </div>
`

/*=============== PROJECTS ===============*/
const projects = document.getElementById('projects')
projects.innerHTML = `
  <h3 class="section__subtitle">My <span>Jobs</span></h3>
  <h2 class="section__title">Recent Projects</h2>
  <div class="projects__container container grid">
    ${data.projects.map(p => `
      <article class="projects__card">
        <img src="${p.img}" alt="${p.title}" class="projects__img" loading="lazy">
        <div class="projects__modal">
          <span class="projects__subtitle">${p.subtitle}</span>
          <h2 class="projects__title">${p.title}</h2>
          <a href="${p.url}" class="projects__button">
            View demo <i class="ri-external-link-line"></i>
          </a>
        </div>
      </article>
    `).join('')}
  </div>
`

/*=============== CONTACT ===============*/
const contact = document.getElementById('contact')
contact.innerHTML = `
  <h3 class="section__subtitle">${data.contact.subtitle}</h3>
  <h2 class="section__title">${data.contact.title}</h2>
  <div class="contact__container container grid">
    <form action="" class="contact__form" id="contact-form">
      <div class="contact__group">
        <input type="text" name="user_name" required placeholder="Enter your name" class="contact__input">
        <input type="text" name="user_email" required placeholder="Enter your email" class="contact__input">
      </div>
      <textarea name="user_project" required placeholder="Enter your message" class="contact__input"></textarea>
      <p class="contact__message" id="contact-message"></p>
      <button type="submit" class="button contact__button">Send Message</button>
    </form>
  </div>
`

/*=============== FOOTER ===============*/
const footer = document.getElementById('footer')
footer.innerHTML = `
  <div class="footer__container container grid">
    <div>
      <h1 class="footer__title">${data.footer.title}</h1>
      <h2 class="footer__educacion">${data.footer.education}</h2>
    </div>
    <div class="footer__social">
      ${data.footer.social.map(s => `
        <a href="${s.url}" target="_blank" class="footer__social-link" aria-label="${s.label}">
          <i class="${s.icon}"></i>
        </a>
      `).join('')}
    </div>
    <span class="footer__copy">${data.footer.copy}</span>
  </div>
`
