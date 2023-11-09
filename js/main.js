const dropdown = document.querySelector('#dropdown')
const overlay = document.querySelector('.overlay')


const menu = document.querySelector('#nav-icon1')
  menu.addEventListener('click', e => {
  menu.classList.toggle("open")
  changeState(menu)
    
  if (overlay.style.display === 'block') {
    overlay.style.display = 'none'
  } else {
    overlay.style.display = 'block'
  }
})


dropdown.addEventListener('click', e => {
  changeState(dropdown)
})
dropdown.addEventListener('focus', e => {
  changeState(dropdown)
})


function changeState(target) {
if (target.getAttribute('aria-label') === 'closed') {
  
  target.setAttribute('aria-label', 'opend')
} else {
  target.setAttribute('aria-label', 'closed')
}
}

progressbar()

function progressbar() {
  const progress = document.querySelector('progress')
  /* User: yckart - 
  https://stackoverflow.com/questions/17688595/finding-the-maximum-scroll-position-of-a-page */
  const maxScrollHeight = 
    document.documentElement.scrollHeight - document.documentElement.clientHeight
  
  progress.max = maxScrollHeight 

  window.onscroll = (e) => {   
    progress.value = e.target.documentElement.scrollTop
  }


}












