let btn_add = document.getElementById("btn-add");
let btn_remove = document.getElementById("btn-remove");
let btn_toogle = document.getElementById("btn-toogle");
let target = document.getElementById("target");

btn_add .addEventListener("click", () => {
  target.textContent = "tombol diklik";
  target.classList.add("success");
});
btn_remove .addEventListener('click',() => {
    target.textContent = 'tombol di remove'
    target.classList.remove('success')
})

btn_toogle .addEventListener('click' , () =>{
    target.textContent = 'tombol toogle di klick'
    target.classList.toggle('success')
})

// !!
// let btn_add = document.getElementById("btn-add");
// let btn_remove = document.getElementById("btn-remove");
// let btn_toogle = document.getElementById("btn_toogle");
// let target = document.getElementById("target");
// let btn_contoh = document.getElementsByClassName("misl");

// btn_add.addEventListener("click", () => {
//   target.textContent = "btn add di klick";
//   target.classList.add("sucess");
// });

// btn_remove.addEventListener("click", () => {
//   target.textContent = " btn add di remove";
//   target.classList.remove = "sucess";
// });

// btn_toogle.addEventListener("click", () => {
//   target.textContent = "btn toogle";
//   target.classList.toggle("sucess");
// });
