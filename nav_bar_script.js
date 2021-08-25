const nav = document.querySelector('nav')
const main_content= document.querySelector('#main_content')

document.querySelector('#burger').addEventListener('click',(e) => 
{
  e.currentTarget.classList.toggle("active")
  nav.classList.toggle('show')
  main_content.classList.toggle('shrink_content')
})