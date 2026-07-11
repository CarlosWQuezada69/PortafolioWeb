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
      <li class="nav__item"><button class="nav__theme" id="nav-theme" aria-label="Toggle theme"><i class="ri-moon-line"></i><span class="nav__theme-label">Theme</span></button></li>
    </ul>
    <div class="nav__close" id="nav-close"><i class="ri-close-line"></i></div>
  </div>
  <button class="nav__toggle" id="nav-toggle"><i class="ri-menu-line"></i></button>
`

/*=============== HOME ===============*/
const home = document.getElementById('home')
home.innerHTML = `
  <div class="home__container container grid">
    <div class="home__content">
      <div class="home__data">
        <h3 class="home__subtitle reveal">${data.home.subtitle}</h3>
        <h1 class="home__title reveal">${data.home.title}</h1>
        <h3 class="home__education reveal">${data.home.education}</h3>
        <p class="home__description reveal">${data.home.description}</p>
      </div>
    </div>
    <div class="home__image reveal">
      <img src="${data.home.image}" alt="Carlos Quezada — Fullstack Developer" class="home__img" loading="eager" fetchpriority="high">
    </div>
  </div>
`

/*=============== ABOUT ===============*/
const about = document.getElementById('about')
about.innerHTML = `
  <div class="about__container container">
    <div class="about__data">
      <h3 class="section__subtitle reveal">${data.about.subtitle}</h3>
      <h2 class="section__title reveal">${data.about.title}</h2>
      <p class="about__description reveal">${data.about.description}</p>
      <div class="about__skills reveal">
        ${data.about.skills.map(s => `<span class="about__skill reveal">${s}</span>`).join('')}
      </div>
    </div>
  </div>
`

/*=============== TIMELINE (PROJECTS) ===============*/
const projects = document.getElementById('projects')
projects.innerHTML = `
  <h3 class="section__subtitle reveal">My <span>Journey</span></h3>
  <h2 class="section__title reveal">Projects Timeline</h2>
  <div class="timeline container">
    ${data.projects.map((p, i) => `
      <article class="timeline__item reveal">
        <div class="timeline__dot"></div>
        <div class="timeline__content${i % 2 === 0 ? '' : ' timeline__content--right'}">
          <span class="timeline__year reveal">${p.year}</span>
          <h3 class="timeline__title reveal">${p.title}</h3>
          <p class="timeline__description reveal">${p.description}</p>
          <div class="timeline__tags reveal">
            ${p.tags.map(t => `<span class="timeline__tag reveal">${t}</span>`).join('')}
          </div>
          <a href="${p.url}" class="timeline__link reveal" target="_blank" rel="noopener noreferrer">View project <i class="ri-external-link-line"></i></a>
        </div>
      </article>
    `).join('')}
  </div>
`

/*=============== CONTACT ===============*/
const contact = document.getElementById('contact')
contact.innerHTML = `
  <h3 class="section__subtitle reveal">${data.contact.subtitle}</h3>
  <h2 class="section__title reveal">${data.contact.title}</h2>
  <div class="contact__container container reveal">
    <div class="contact__social reveal">
      ${data.contact.social.map(s => `
        <a href="${s.url}" target="_blank" class="contact__social-link reveal" aria-label="${s.label}" title="${s.label}" rel="noopener noreferrer">
          <i class="${s.icon}"></i>
        </a>
      `).join('')}
    </div>
  </div>
`

/*=============== FOOTER ===============*/
const footer = document.getElementById('footer')
footer.innerHTML = `
  <div class="footer__container container">
    <span class="footer__copy">${data.footer.copy}</span>
  </div>
`
