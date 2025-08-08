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

document.addEventListener('click', function (e) {
  // Navigation click handlers
  if (e.target.matches('.nav-item')) {
    const pageId = e.target.dataset.page
    showPage(pageId)
  }

  // Mobile menu toggle
  if (
    e.target.matches('#mobileToggle') ||
    e.target.parentElement.matches('#mobileToggle')
  ) {
    const navLinks = document.getElementById('navLinks')
    navLinks.classList.toggle('active')
  }
})
