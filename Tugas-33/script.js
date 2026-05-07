let tombol = document.getElementById('hidden')
let menu_navbar =  document.getElementById('navbar')


tombol.addEventListener ('click' , () =>{
  menu_navbar.classList.toggle('hide-bar')
})