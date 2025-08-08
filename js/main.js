// -------- Navigation functionality --------
function showPage (pageId) {
  const pages = document.querySelectorAll('.page')
  pages.forEach(page => page.classList.remove('active'))
  const targetPage = document.getElementById(pageId)
  if (targetPage) {
    targetPage.classList.add('active')
  }
  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach(item => item.classList.remove('active'))
  const activeNavItem = document.querySelector(
    `.nav-item[data-page="${pageId}"]`
  )
  if (activeNavItem) {
    activeNavItem.classList.add('active')
  }
  document.getElementById('navLinks').classList.remove('active')
  window.scrollTo(0, 0)
}

document.addEventListener('DOMContentLoaded', function () {
  // navigation click handlers
  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      const pageId = this.dataset.page
      showPage(pageId)
    })
  })

  // mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle')
  const navLinks = document.getElementById('navLinks')
  mobileToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active')
  })

  createParticles() // subtle background particles
  setupMouseParallax() // parallax on mousemove
  setupHyperspaceScroll() // hyperspace on scroll
})

// -------- Subtle particles animation --------
function createParticles () {
  const particlesContainer = document.getElementById('particles')
  if (!particlesContainer) return
  const particleCount = 30
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    const size = Math.random() * 3 + 1
    particle.style.width = size + 'px'
    particle.style.height = size + 'px'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.animationDelay = Math.random() * 30 + 's'
    particle.style.animationDuration = Math.random() * 15 + 15 + 's'
    particlesContainer.appendChild(particle)
  }
}

// -------- Mouse Parallax Effect --------
function setupMouseParallax () {
  const parallaxElements = document.querySelectorAll('.parallax-element')
  if (parallaxElements.length === 0) return
  document.addEventListener('mousemove', function (e) {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const mouseX = (e.clientX - centerX) / centerX // -1 to 1
    const mouseY = (e.clientY - centerY) / centerY
    parallaxElements.forEach(el => {
      const depth = parseFloat(el.dataset.parallaxDepth) || 1
      const moveX = mouseX * (depth * 50)
      const moveY = mouseY * (depth * 50)
      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
    })
  })
}

// -------- Hyperspace Scroll Effect (random white lines) --------
const hyperspaceBg = document.getElementById('hyperspace-bg')
let lastScrollY = window.scrollY

function createHyperspaceLine () {
  const line = document.createElement('div')
  line.className = 'hyperspace-star'
  const width = Math.random() * 2 + 1 // 1px–3px
  const height = Math.random() * 100 + 50 // 50px–150px
  line.style.width = `${width}px`
  line.style.height = `${height}px`
  const leftPos = Math.random() * 100 // 0%–100%
  line.style.left = `${leftPos}%`
  line.style.bottom = '0'
  const duration = Math.random() * 0.5 + 0.3 // 0.3s–0.8s
  line.style.animation = `shootUp ${duration}s linear`
  hyperspaceBg.appendChild(line)
  line.addEventListener('animationend', () => {
    line.remove()
  })
}

function setupHyperspaceScroll () {
  if (!hyperspaceBg) return
  window.addEventListener(
    'scroll',
    () => {
      const scrollSpeed = Math.abs(window.scrollY - lastScrollY)
      lastScrollY = window.scrollY
      // Generate up to ~15 lines based on speed
      const lineCount = Math.min(Math.floor(scrollSpeed / 10), 15)
      for (let i = 0; i < lineCount; i++) {
        createHyperspaceLine()
      }
    },
    { passive: true }
  )
}

// -------- Dynamic Content Helpers --------
function addProject (title, description, imageIcon, links, learned) {
  const projectsGrid = document.getElementById('projectsGrid')
  if (!projectsGrid) return
  const projectCard = document.createElement('div')
  projectCard.className = 'project-card parallax-element'
  projectCard.dataset.parallaxDepth = (Math.random() * 0.015 + 0.01).toFixed(3)

  projectCard.innerHTML = `
    <div class="project-image">
      <i class="${imageIcon}"></i>
    </div>
    <div class="project-content">
      <h3 class="project-title">${title}</h3>
      <p class="project-description">${description}</p>
      <div class="project-links">
        ${links
          .map(
            link =>
              `<a href="${link.url}" class="project-link" target="_blank"><i class="${link.icon}"></i> ${link.text}</a>`
          )
          .join('')}
      </div>
      <div class="learned-section">
        <div class="learned-title">What I Learned:</div>
        <div class="learned-text">${learned}</div>
      </div>
    </div>
  `
  projectsGrid.appendChild(projectCard)
}

function addBlogPost (title, excerpt, date, readTime, tags, link) {
  const blogGrid = document.getElementById('blogGrid')
  if (!blogGrid) return
  const blogCard = document.createElement('article')
  blogCard.className = 'blog-card parallax-element'
  blogCard.dataset.parallaxDepth = (Math.random() * 0.01 + 0.01).toFixed(3)

  blogCard.innerHTML = `
    <div class="blog-meta">
      <span><i class="fas fa-calendar"></i> ${date}</span>
      <span><i class="fas fa-clock"></i> ${readTime}</span>
      <span><i class="fas fa-tag"></i> ${tags}</span>
    </div>
    <h3 class="blog-title">${title}</h3>
    <p class="blog-excerpt">${excerpt}</p>
    <a href="${link}" class="read-more">Read More →</a>
  `
  blogGrid.appendChild(blogCard)
}
