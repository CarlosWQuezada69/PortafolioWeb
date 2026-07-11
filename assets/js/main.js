/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
}
if(navClose){
    navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'))
}

const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(n => n.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('show-menu')
}))

/*=============== THEME ===============*/
const themeBtn = document.getElementById('nav-theme')
if (themeBtn) {
  const updateTheme = (isLight) => {
    themeBtn.querySelector('i').className = isLight ? 'ri-sun-line' : 'ri-moon-line'
    themeBtn.querySelector('.nav__theme-label').textContent = isLight ? 'Light' : 'Theme'
  }
  themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme')
    localStorage.setItem('light-theme', isLight)
    updateTheme(isLight)
  })
  if (localStorage.getItem('light-theme') === 'true') {
    document.body.classList.add('light-theme')
    updateTheme(true)
  }
}

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const el = document.getElementById("scroll-up")
    window.scrollY >= 350 ? el.classList.add("show-scroll") : el.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
  let currentId = null
  const y = window.scrollY + window.innerHeight * 0.4

  sections.forEach((current, i) => {
    const top = current.offsetTop,
          bottom = top + current.offsetHeight,
          isLast = i === sections.length - 1,
          atBottom = y >= document.documentElement.scrollHeight - 10

    if ((y >= top && y < bottom) || (atBottom && isLast)) {
      currentId = current.getAttribute('id')
    }
  })

  document.querySelectorAll('.nav__menu a[href^="#"]').forEach(a => {
    a.classList.toggle('active-link', currentId && a.getAttribute('href').includes(currentId))
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== REVEAL ANIMATIONS ===============*/
let lastScrollY = window.scrollY

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const scrollDir = window.scrollY > lastScrollY ? 'down' : 'up'
    if (entry.isIntersecting) {
      entry.target.classList.remove('reveal-up', 'reveal-down')
      entry.target.classList.add(scrollDir === 'up' ? 'reveal-up' : 'reveal-down')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          entry.target.classList.add('reveal-visible')
        })
      })
    } else {
      entry.target.classList.remove('reveal-visible', 'reveal-up', 'reveal-down')
    }
  })
  lastScrollY = window.scrollY
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

/*=============== SERVICE WORKER ===============*/
'serviceWorker' in navigator && navigator.serviceWorker.register('sw.js').catch(() => {})
