const date = (document.getElementById(
  'date'
).innerHTML = new Date().getFullYear())

const navBtn = document.getElementById('nav-btn')
const navBar = document.getElementById('nav-bar')
const navClose = document.getElementById('nav-close')

navBtn.addEventListener('click', () => {
  navBar.classList.add('showNav')
})

navClose.addEventListener('click', () => {
  navBar.classList.remove('showNav')
})
