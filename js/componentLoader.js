document.addEventListener('DOMContentLoaded', () => {
  const components = [
    { id: 'nav-placeholder', file: 'components/nav.html' },
    { id: 'home-placeholder', file: 'components/home.html' },
    { id: 'about-placeholder', file: 'components/about.html' },
    { id: 'projects-placeholder', file: 'components/projects.html' },
    { id: 'experience-placeholder', file: 'components/experience.html' },
    { id: 'blog-placeholder', file: 'components/blog.html' },
    { id: 'contact-placeholder', file: 'components/contact.html' }
  ]

  const fetchPromises = components.map(component => {
    return fetch(component.file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(component.id).innerHTML = data
      })
      .catch(error => console.error(`Error loading ${component.file}:`, error))
  })

  Promise.all(fetchPromises).then(() => {
    createParticles() // subtle background particles
    setupMouseParallax() // parallax on mousemove
    setupHyperspaceScroll() // hyperspace on scroll
  })
})
